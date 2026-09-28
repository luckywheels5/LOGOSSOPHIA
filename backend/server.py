#!/usr/bin/env python3
"""
LOGOSSOPHIA — Backend REST API Server (Python Standard Library)
Provê endpoints para autenticação/perfil, sincronização de disciplinas,
configurações de estudo, flashcards e sessões de Pomodoro.
Zero dependências externas — usa sqlite3, json e http.server.
"""

import http.server
import json
import os
import sqlite3
import sys
import urllib.parse
import uuid
from datetime import datetime

PORT = 8000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(os.path.dirname(BASE_DIR), "database", "logossophia.db")


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON;")
    return conn


class LogossophiaHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Habilita CORS para requisições do frontend web local
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header(
            "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"
        )
        self.send_header(
            "Access-Control-Allow-Headers", "Content-Type, Authorization"
        )
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def _send_json(self, status_code, data):
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode("utf-8"))

    def _read_json_body(self):
        content_length = int(self.headers.get("Content-Length", 0))
        if content_length == 0:
            return {}
        body = self.rfile.read(content_length)
        return json.loads(body.decode("utf-8"))

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        query = urllib.parse.parse_qs(parsed.query)

        # 1. Lista de Usuários Disponíveis
        if path == "/api/users":
            conn = get_db()
            cursor = conn.cursor()
            cursor.execute(
                """
                SELECT u.id, u.name, u.email, u.avatar_url, p.active_cycle, p.active_discipline, p.course_or_grade, p.institution
                FROM users u
                LEFT JOIN user_profiles p ON u.id = p.user_id
            """
            )
            users = [dict(row) for row in cursor.fetchall()]
            conn.close()
            return self._send_json(200, {"users": users})

        # 2. Dados Completos do Usuário e Perfil
        elif path == "/api/user":
            user_id = query.get("id", ["usr-erudito-01"])[0]
            conn = get_db()
            cursor = conn.cursor()

            cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
            user_row = cursor.fetchone()
            if not user_row:
                conn.close()
                return self._send_json(
                    404, {"error": "Usuário não encontrado."}
                )

            cursor.execute(
                "SELECT * FROM user_profiles WHERE user_id = ?", (user_id,)
            )
            profile_row = cursor.fetchone()

            cursor.execute(
                "SELECT * FROM user_enrolled_disciplines WHERE user_id = ? ORDER BY is_favorite DESC, display_name ASC",
                (user_id,),
            )
            disciplines = [dict(row) for row in cursor.fetchall()]

            cursor.execute(
                "SELECT * FROM flashcards WHERE user_id = ? ORDER BY created_at DESC",
                (user_id,),
            )
            flashcards = [dict(row) for row in cursor.fetchall()]

            cursor.execute(
                "SELECT COUNT(*) as total_sessions, COALESCE(SUM(duration_seconds), 0) as total_seconds FROM study_sessions WHERE user_id = ?",
                (user_id,),
            )
            stats = dict(cursor.fetchone())

            conn.close()
            return self._send_json(
                200,
                {
                    "user": dict(user_row),
                    "profile": dict(profile_row) if profile_row else {},
                    "disciplines": disciplines,
                    "flashcards": flashcards,
                    "stats": stats,
                },
            )

        # 3. Flashcards do Usuário (Filtráveis por Disciplina)
        elif path == "/api/flashcards":
            user_id = query.get("user_id", ["usr-erudito-01"])[0]
            disc_key = query.get("discipline", [None])[0]

            conn = get_db()
            cursor = conn.cursor()
            if disc_key:
                cursor.execute(
                    "SELECT * FROM flashcards WHERE user_id = ? AND discipline_key = ? ORDER BY next_review_at ASC",
                    (user_id, disc_key),
                )
            else:
                cursor.execute(
                    "SELECT * FROM flashcards WHERE user_id = ? ORDER BY next_review_at ASC",
                    (user_id,),
                )
            cards = [dict(row) for row in cursor.fetchall()]
            conn.close()
            return self._send_json(200, {"flashcards": cards})

        # 4. Métricas & Estatísticas de Vigília
        elif path == "/api/metrics":
            user_id = query.get("user_id", ["usr-erudito-01"])[0]
            conn = get_db()
            cursor = conn.cursor()

            cursor.execute(
                """
                SELECT discipline_key, COUNT(*) as sessions_count, SUM(duration_seconds) as total_seconds
                FROM study_sessions
                WHERE user_id = ?
                GROUP BY discipline_key
            """,
                (user_id,),
            )
            by_disc = [dict(row) for row in cursor.fetchall()]

            cursor.execute(
                """
                SELECT COUNT(DISTINCT DATE(completed_at)) as streak_days,
                       COALESCE(SUM(duration_seconds) / 3600.0, 0) as total_hours
                FROM study_sessions
                WHERE user_id = ?
            """,
                (user_id,),
            )
            overview = dict(cursor.fetchone())

            conn.close()
            return self._send_json(
                200, {"overview": overview, "by_discipline": by_disc}
            )

        # Fallback: Servir arquivos estáticos do diretório pai se for raiz ou arquivo
        else:
            return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        body = self._read_json_body()

        # 1. Atualizar Perfil / Configurações do Usuário
        if path == "/api/user/profile":
            user_id = body.get("user_id", "usr-erudito-01")
            active_cycle = body.get("active_cycle")
            active_discipline = body.get("active_discipline")
            institution = body.get("institution")
            course_or_grade = body.get("course_or_grade")
            study_goal = body.get("study_goal")
            pomo_focus_min = body.get("pomo_focus_min", 25)
            ai_mode = body.get("ai_mode", "socratic_rigorous")
            ai_api_key = body.get("ai_api_key")

            conn = get_db()
            cursor = conn.cursor()

            cursor.execute(
                """
                UPDATE user_profiles
                SET active_cycle = COALESCE(?, active_cycle),
                    active_discipline = COALESCE(?, active_discipline),
                    institution = COALESCE(?, institution),
                    course_or_grade = COALESCE(?, course_or_grade),
                    study_goal = COALESCE(?, study_goal),
                    pomo_focus_min = COALESCE(?, pomo_focus_min),
                    ai_mode = COALESCE(?, ai_mode),
                    ai_api_key = COALESCE(?, ai_api_key),
                    updated_at = CURRENT_TIMESTAMP
                WHERE user_id = ?
            """,
                (
                    active_cycle,
                    active_discipline,
                    institution,
                    course_or_grade,
                    study_goal,
                    pomo_focus_min,
                    ai_mode,
                    ai_api_key,
                    user_id,
                ),
            )

            conn.commit()
            conn.close()
            return self._send_json(
                200,
                {
                    "success": True,
                    "message": "Perfil e preferências atualizados!",
                },
            )

        # 2. Matricular / Vincular Nova Disciplina à Conta
        elif path == "/api/user/disciplines":
            user_id = body.get("user_id", "usr-erudito-01")
            discipline_key = body.get("discipline_key")
            display_name = body.get("display_name", discipline_key)
            cycle = body.get("cycle", "superior")
            is_favorite = 1 if body.get("is_favorite", True) else 0

            if not discipline_key:
                return self._send_json(
                    400, {"error": "discipline_key é obrigatório."}
                )

            disc_id = f"enr-{uuid.uuid4().hex[:8]}"
            conn = get_db()
            cursor = conn.cursor()

            cursor.execute(
                """
                INSERT INTO user_enrolled_disciplines (id, user_id, discipline_key, display_name, cycle, is_favorite)
                VALUES (?, ?, ?, ?, ?, ?)
                ON CONFLICT(user_id, discipline_key) DO UPDATE SET
                    display_name = excluded.display_name,
                    cycle = excluded.cycle,
                    is_favorite = excluded.is_favorite
            """,
                (
                    disc_id,
                    user_id,
                    discipline_key,
                    display_name,
                    cycle,
                    is_favorite,
                ),
            )

            conn.commit()
            conn.close()
            return self._send_json(
                201,
                {
                    "success": True,
                    "message": f"Disciplina {display_name} vinculada à conta!",
                },
            )

        # 3. Criar ou Atualizar Flashcard
        elif path == "/api/flashcards":
            user_id = body.get("user_id", "usr-erudito-01")
            disc_key = body.get("discipline_key", "law")
            front = body.get("front", "").strip()
            back = body.get("back", "").strip()
            card_id = body.get("id") or f"crd-{uuid.uuid4().hex[:8]}"

            if not front or not back:
                return self._send_json(
                    400, {"error": "Frente e verso do card são obrigatórios."}
                )

            conn = get_db()
            cursor = conn.cursor()
            cursor.execute(
                """
                INSERT INTO flashcards (id, user_id, discipline_key, front, back, status)
                VALUES (?, ?, ?, ?, ?, 'em_raciocinio')
                ON CONFLICT(id) DO UPDATE SET
                    front = excluded.front,
                    back = excluded.back
            """,
                (card_id, user_id, disc_key, front, back),
            )

            conn.commit()
            conn.close()
            return self._send_json(
                201,
                {
                    "success": True,
                    "id": card_id,
                    "message": "Tabula cristalizada com sucesso!",
                },
            )

        # 4. Registrar Sessão de Vigília / Pomodoro
        elif path == "/api/sessions":
            user_id = body.get("user_id", "usr-erudito-01")
            disc_key = body.get("discipline_key", "law")
            cycle = body.get("cycle", "superior")
            duration = int(body.get("duration_seconds", 1500))
            sess_type = body.get("session_type", "pomodoro")
            sess_id = f"ses-{uuid.uuid4().hex[:8]}"

            conn = get_db()
            cursor = conn.cursor()
            cursor.execute(
                """
                INSERT INTO study_sessions (id, user_id, discipline_key, cycle, duration_seconds, session_type)
                VALUES (?, ?, ?, ?, ?, ?)
            """,
                (sess_id, user_id, disc_key, cycle, duration, sess_type),
            )

            conn.commit()
            conn.close()
            return self._send_json(
                201,
                {
                    "success": True,
                    "id": sess_id,
                    "message": "Sessão de vigília arquivada!",
                },
            )

        else:
            return self._send_json(404, {"error": "Endpoint não encontrado."})


def run_server():
    os.chdir(os.path.dirname(BASE_DIR))  # Raiz do projeto
    server = http.server.HTTPServer(("0.0.0.0", PORT), LogossophiaHandler)
    print(f"[*] LOGOSSOPHIA Server rodando em http://localhost:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n[!] Encerrando servidor.")
        server.server_close()


if __name__ == "__main__":
    run_server()
