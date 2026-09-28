#!/usr/bin/env python3
"""
LOGOSSOPHIA — Inicializador e Populador do Banco de Dados SQLite
Cria o schema relacional e popula contas de exemplo com perfis, disciplinas e configurações vinculadas.
"""

import sqlite3
import os
import uuid
from datetime import datetime, timedelta

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SCHEMA_PATH = os.path.join(BASE_DIR, "schema.sql")
DB_PATH = os.path.join(BASE_DIR, "logossophia.db")


def init_database():
    print(f"[*] Inicializando banco de dados Logossophia em: {DB_PATH}")

    # Remove o banco anterior se desejar recriar limpo
    if os.path.exists(DB_PATH):
        os.remove(DB_PATH)

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Habilita suporte a chaves estrangeiras
    cursor.execute("PRAGMA foreign_keys = ON;")

    # Executa o schema DDL
    with open(SCHEMA_PATH, "r", encoding="utf-8") as f:
        schema_sql = f.read()
    cursor.executescript(schema_sql)
    print("[+] Schema relacional criado com sucesso!")

    # =========================================================================
    # SEED: Inserção de Contas de Estudantes e Configurações Vinculadas
    # =========================================================================

    users_data = [
        {
            "id": "usr-erudito-01",
            "name": "Lucas Almeida (Erudito)",
            "email": "lucas@logossophia.org",
            "avatar": "🏛️",
            "profile": {
                "active_cycle": "superior",
                "active_discipline": "law",
                "institution": "Faculdade de Direito do Largo de São Francisco (USP)",
                "course_or_grade": "Bacharelado em Direito (6º Semestre)",
                "study_goal": "Aprovação OAB de 1ª Fase e Carreira da Magistratura",
                "pomo_focus_min": 30,
                "pomo_short_break_min": 5,
                "pomo_long_break_min": 15,
                "ai_mode": "socratic_rigorous",
                "theme": "medieval_monochrome",
                "sound_enabled": 1,
            },
            "disciplines": [
                ("law", "Direito & Jurisprudência", "superior", 1, "2026.1"),
                ("philosophy", "Filosofia & Dialética Clássica", "superior", 1, "2026.1"),
                ("history", "História & Fontes Documentais", "superior", 0, "2026.1"),
                ("theology", "Teologia & Escrituras", "superior", 1, "Livre"),
            ],
            "flashcards": [
                (
                    "law",
                    "Qual a distinção dogmática entre regra e princípio segundo Robert Alexy?",
                    "Regras são mandamentos de definição (aplicam-se por tudo-ou-nada via subsunção); princípios são mandamentos de otimização (aplicam-se por ponderação proporcional).",
                    "cristalizado",
                    5,
                    2.6,
                    3,
                ),
                (
                    "philosophy",
                    "Qual a aporia central exposta por Glauco na fábula do Anel de Giges?",
                    "Se a justiça é um bem almejado intrinsecamente pela alma ou apenas uma convenção imposta pelo medo do castigo social.",
                    "em_raciocinio",
                    1,
                    2.5,
                    1,
                ),
            ],
            "sessions": [
                ("law", "superior", 1800, "pomodoro"),
                ("law", "superior", 1800, "pomodoro"),
                ("philosophy", "superior", 1500, "dialogo_agora"),
            ],
        },
        {
            "id": "usr-vestibulanda-02",
            "name": "Beatriz Silveira (Vestibulanda)",
            "email": "beatriz@logossophia.org",
            "avatar": "✍️",
            "profile": {
                "active_cycle": "bncc",
                "active_discipline": "bncc_redacao",
                "institution": "Colégio Santo Agostinho",
                "course_or_grade": "3º Ano do Ensino Médio",
                "study_goal": "Nota 1000 na Redação do ENEM e Vaga em Medicina Federal",
                "pomo_focus_min": 25,
                "pomo_short_break_min": 5,
                "pomo_long_break_min": 20,
                "ai_mode": "socratic_gentle",
                "theme": "medieval_monochrome",
                "sound_enabled": 1,
            },
            "disciplines": [
                ("bncc_redacao", "Redação ENEM (Teses & Proposta)", "bncc", 1, "3º Bimestre"),
                ("bncc_biologia", "Biologia & Ecologia", "bncc", 1, "3º Bimestre"),
                ("bncc_matematica", "Matemática & Geometria", "bncc", 1, "3º Bimestre"),
                ("bncc_fisica", "Física (Mecânica & Newton)", "bncc", 1, "3º Bimestre"),
                ("bncc_quimica", "Química & Cinética", "bncc", 0, "3º Bimestre"),
                ("bncc_historia", "História Geral & do Brasil", "bncc", 0, "3º Bimestre"),
            ],
            "flashcards": [
                (
                    "bncc_redacao",
                    "Quais são os 5 elementos indispensáveis da proposta de intervenção social da Competência 5 do ENEM?",
                    "GOMIF: 1. Agente (quem faz), 2. Ação (o que faz), 3. Meio/Modo (como faz), 4. Efeito (para que faz) e 5. Detalhamento de um dos quatro elementos anteriores.",
                    "cristalizado",
                    7,
                    2.8,
                    4,
                ),
                (
                    "bncc_biologia",
                    "Por que a frase 'as bactérias criaram resistência para sobreviver ao antibiótico' está biologicamente equivocada?",
                    "Porque assume Lamarckismo (adaptação voluntária). Na evolução darwiniana, mutações aleatórias preexistiam; o antibiótico apenas atuou como agente seletivo externo.",
                    "cristalizado",
                    4,
                    2.5,
                    2,
                ),
            ],
            "sessions": [
                ("bncc_redacao", "bncc", 1500, "pomodoro"),
                ("bncc_biologia", "bncc", 1500, "pomodoro"),
                ("bncc_matematica", "bncc", 1500, "pomodoro"),
            ],
        },
        {
            "id": "usr-medico-03",
            "name": "Dr. André Valério (Acadêmico de Medicina)",
            "email": "andre@logossophia.org",
            "avatar": "🩺",
            "profile": {
                "active_cycle": "superior",
                "active_discipline": "med",
                "institution": "Faculdade de Medicina da UFRJ",
                "course_or_grade": "Medicina (Internato Clínico)",
                "study_goal": "Residência Médica em Cirurgia e Terapia Intensiva",
                "pomo_focus_min": 45,
                "pomo_short_break_min": 10,
                "pomo_long_break_min": 20,
                "ai_mode": "socratic_rigorous",
                "theme": "medieval_monochrome",
                "sound_enabled": 1,
            },
            "disciplines": [
                ("med", "Medicina & Fisiologia Humana", "superior", 1, "Internato"),
                ("cs", "Computação & Bioinformática", "superior", 0, "Eletiva"),
                ("exact", "Cálculo & Biofísica", "superior", 0, "Básico"),
            ],
            "flashcards": [
                (
                    "med",
                    "Como o hormônio antidiurético (ADH/vasopressina) altera a permeabilidade do túbulo coletor medular?",
                    "Via receptor basolateral V2 acoplado à proteína Gs, ativação da PKA e migração exocítica de vesículas com Aquaporina-2 (AQP2) para a membrana apical.",
                    "cristalizado",
                    10,
                    2.9,
                    5,
                )
            ],
            "sessions": [
                ("med", "superior", 2700, "pomodoro"),
                ("med", "superior", 2700, "pomodoro"),
            ],
        },
    ]

    for u in users_data:
        # 1. Usuário
        cursor.execute(
            """
            INSERT INTO users (id, name, email, avatar_url)
            VALUES (?, ?, ?, ?)
        """,
            (u["id"], u["name"], u["email"], u["avatar"]),
        )

        # 2. Perfil e Configurações
        p = u["profile"]
        cursor.execute(
            """
            INSERT INTO user_profiles (
                user_id, active_cycle, active_discipline, institution, course_or_grade,
                study_goal, pomo_focus_min, pomo_short_break_min, pomo_long_break_min,
                ai_mode, theme, sound_enabled
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
            (
                u["id"],
                p["active_cycle"],
                p["active_discipline"],
                p["institution"],
                p["course_or_grade"],
                p["study_goal"],
                p["pomo_focus_min"],
                p["pomo_short_break_min"],
                p["pomo_long_break_min"],
                p["ai_mode"],
                p["theme"],
                p["sound_enabled"],
            ),
        )

        # 3. Disciplinas Matriculadas
        for disc_key, disp_name, cycle, is_fav, term in u["disciplines"]:
            disc_id = f"enr-{uuid.uuid4().hex[:8]}"
            cursor.execute(
                """
                INSERT INTO user_enrolled_disciplines (
                    id, user_id, discipline_key, display_name, cycle, is_favorite, semester_or_term
                ) VALUES (?, ?, ?, ?, ?, ?, ?)
            """,
                (disc_id, u["id"], disc_key, disp_name, cycle, is_fav, term),
            )

        # 4. Flashcards
        for disc_key, front, back, status, interval, ease, reps in u["flashcards"]:
            card_id = f"crd-{uuid.uuid4().hex[:8]}"
            next_rev = (datetime.now() + timedelta(days=interval)).isoformat()
            cursor.execute(
                """
                INSERT INTO flashcards (
                    id, user_id, discipline_key, front, back, status,
                    interval_days, ease_factor, repetitions, next_review_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
                (
                    card_id,
                    u["id"],
                    disc_key,
                    front,
                    back,
                    status,
                    interval,
                    ease,
                    reps,
                    next_rev,
                ),
            )

        # 5. Sessões de Estudo
        for disc_key, cycle, dur, stype in u["sessions"]:
            sess_id = f"ses-{uuid.uuid4().hex[:8]}"
            cursor.execute(
                """
                INSERT INTO study_sessions (
                    id, user_id, discipline_key, cycle, duration_seconds, session_type
                ) VALUES (?, ?, ?, ?, ?, ?)
            """,
                (sess_id, u["id"], disc_key, cycle, dur, stype),
            )

    conn.commit()
    print("[+] Usuários e dados semeados com sucesso!")

    # Verificação rápida
    cursor.execute("SELECT COUNT(*) FROM users;")
    user_count = cursor.fetchone()[0]
    cursor.execute("SELECT COUNT(*) FROM user_profiles;")
    profile_count = cursor.fetchone()[0]
    cursor.execute("SELECT COUNT(*) FROM user_enrolled_disciplines;")
    disc_count = cursor.fetchone()[0]
    cursor.execute("SELECT COUNT(*) FROM flashcards;")
    card_count = cursor.fetchone()[0]
    cursor.execute("SELECT COUNT(*) FROM study_sessions;")
    sess_count = cursor.fetchone()[0]

    print(f"[*] Estatísticas do Banco Logossophia:")
    print(f"    - Usuários cadastrados: {user_count}")
    print(f"    - Perfis com configurações: {profile_count}")
    print(f"    - Disciplinas matriculadas: {disc_count}")
    print(f"    - Tabulae (Flashcards): {card_count}")
    print(f"    - Sessões de Vigília registradas: {sess_count}")

    conn.close()
    return DB_PATH


if __name__ == "__main__":
    init_database()
