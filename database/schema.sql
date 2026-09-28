-- ==============================================================================
-- LOGOSSOPHIA — Schema Relacional do Banco de Dados
-- Compatível com SQLite 3 e PostgreSQL / Supabase
-- ==============================================================================

PRAGMA foreign_keys = ON;

-- 1. Tabela de Contas de Usuário
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,                       -- UUID v4
    name TEXT NOT NULL,                        -- Nome ou Pseudônimo do Estudante
    email TEXT UNIQUE NOT NULL,                -- E-mail para identificação
    password_hash TEXT,                        -- Hash criptográfico da senha (argon2/bcrypt)
    avatar_url TEXT,                           -- Avatar ou ícone clássico
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Perfil e Configurações de Estudo do Usuário
CREATE TABLE IF NOT EXISTS user_profiles (
    user_id TEXT PRIMARY KEY,
    active_cycle TEXT NOT NULL DEFAULT 'superior' CHECK (active_cycle IN ('superior', 'bncc', 'livre')),
    active_discipline TEXT NOT NULL DEFAULT 'law',
    institution TEXT,                          -- Ex: "USP", "Colégio Militar", "UFRJ"
    course_or_grade TEXT,                      -- Ex: "Direito (5º Semestre)", "3º Ano do Ensino Médio", "Medicina"
    study_goal TEXT,                           -- Ex: "Aprovação OAB", "ENEM Nota 1000", "Residência Médica", "Magistratura"
    pomo_focus_min INTEGER NOT NULL DEFAULT 25,
    pomo_short_break_min INTEGER NOT NULL DEFAULT 5,
    pomo_long_break_min INTEGER NOT NULL DEFAULT 15,
    ai_mode TEXT NOT NULL DEFAULT 'socratic_rigorous' CHECK (ai_mode IN ('socratic_rigorous', 'socratic_gentle', 'hybrid', 'offline')),
    ai_api_key TEXT,                           -- Chave opcional de API (OpenAI/Gemini/Anthropic)
    theme TEXT NOT NULL DEFAULT 'medieval_monochrome',
    sound_enabled INTEGER NOT NULL DEFAULT 1,  -- 1 para sino monástico ativado, 0 desativado
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- 3. Disciplinas Matriculadas / Favoritadas pelo Usuário
CREATE TABLE IF NOT EXISTS user_enrolled_disciplines (
    id TEXT PRIMARY KEY,                       -- UUID
    user_id TEXT NOT NULL,
    discipline_key TEXT NOT NULL,              -- Ex: 'law', 'med', 'bncc_redacao'
    display_name TEXT NOT NULL,                -- Ex: 'Direito Constitucional', 'Redação ENEM'
    cycle TEXT NOT NULL CHECK (cycle IN ('superior', 'bncc')),
    is_favorite INTEGER NOT NULL DEFAULT 1,    -- 1 se fixado na barra lateral
    semester_or_term TEXT,                     -- Ex: '2026.1', '3º Bimestre'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    UNIQUE(user_id, discipline_key)
);

-- 4. Repositório de Documentos e Materiais de Estudo (Scriptorium)
CREATE TABLE IF NOT EXISTS study_documents (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    discipline_key TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,                     -- Texto integral extraído ou digitado
    file_name TEXT,                            -- Nome original do arquivo (se upload)
    file_type TEXT DEFAULT 'pasted',           -- 'pdf', 'txt', 'docx', 'pasted'
    word_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- 5. Tabulae de Flashcards & Retenção Espaçada
CREATE TABLE IF NOT EXISTS flashcards (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    discipline_key TEXT NOT NULL,
    front TEXT NOT NULL,                       -- Pergunta ou dilema ético/conceitual
    back TEXT NOT NULL,                        -- Dedução socrática pessoal do estudante
    status TEXT NOT NULL DEFAULT 'em_raciocinio' CHECK (status IN ('em_raciocinio', 'cristalizado', 'em_revisao')),
    interval_days INTEGER NOT NULL DEFAULT 1,  -- Intervalo do algoritmo SM-2
    ease_factor REAL NOT NULL DEFAULT 2.5,     -- Fator de facilidade SM-2
    repetitions INTEGER NOT NULL DEFAULT 0,    -- Quantidade de revisões bem-sucedidas
    next_review_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- 6. Sessões de Estudo & Vigília (Pomodoro Tracker)
CREATE TABLE IF NOT EXISTS study_sessions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    discipline_key TEXT NOT NULL,
    cycle TEXT NOT NULL,
    duration_seconds INTEGER NOT NULL,         -- Ex: 1500 (25 minutos)
    session_type TEXT NOT NULL DEFAULT 'pomodoro' CHECK (session_type IN ('pomodoro', 'leitura', 'dialogo_agora', 'revisao_tabulae')),
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- 7. Histórico de Diálogo Maiêutico no Atrium Dialético (Ágora)
CREATE TABLE IF NOT EXISTS chat_history (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    discipline_key TEXT NOT NULL,
    document_id TEXT,
    role TEXT NOT NULL CHECK (role IN ('user', 'agora')),
    content TEXT NOT NULL,
    maieutic_type TEXT,                        -- 'elenchos', 'maieutics', 'refusal_summary', etc.
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (document_id) REFERENCES study_documents (id) ON DELETE SET NULL
);

-- Índices para máxima performance em consultas
CREATE INDEX IF NOT EXISTS idx_user_profiles_active ON user_profiles (user_id, active_discipline);
CREATE INDEX IF NOT EXISTS idx_user_enrolled_disc ON user_enrolled_disciplines (user_id, cycle, is_favorite);
CREATE INDEX IF NOT EXISTS idx_flashcards_user_disc ON flashcards (user_id, discipline_key, next_review_at);
CREATE INDEX IF NOT EXISTS idx_study_sessions_user ON study_sessions (user_id, completed_at);
CREATE INDEX IF NOT EXISTS idx_chat_history_user_disc ON chat_history (user_id, discipline_key, created_at);
