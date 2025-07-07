-- 🗄️ Schema CalangoFlux - Supabase
-- Execute este SQL no Supabase Dashboard > SQL Editor

-- 1. Tabela de Leads
CREATE TABLE leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    interesse TEXT,
    origem VARCHAR(100),
    conversa TEXT,
    status VARCHAR(50) DEFAULT 'novo',
    prioridade VARCHAR(20) DEFAULT 'normal',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tabela de Contatos
CREATE TABLE contact_forms (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    servico VARCHAR(100),
    mensagem TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'pendente',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Tabela de Assinantes Newsletter
CREATE TABLE subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    nome VARCHAR(255),
    data_inscricao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ativo BOOLEAN DEFAULT TRUE,
    origem VARCHAR(100),
    interesses TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Tabela de Conversas do Chatbot
CREATE TABLE chat_conversations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL,
    user_name VARCHAR(255),
    user_email VARCHAR(255),
    messages JSONB NOT NULL,
    intent VARCHAR(100),
    lead_captured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Tabela de Analytics
CREATE TABLE analytics_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    event_type VARCHAR(100) NOT NULL,
    event_data JSONB,
    user_agent TEXT,
    ip_address INET,
    referrer TEXT,
    page_url TEXT,
    session_id VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Índices para Performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_leads_status ON leads(status);

CREATE INDEX idx_contact_forms_email ON contact_forms(email);
CREATE INDEX idx_contact_forms_created_at ON contact_forms(created_at);
CREATE INDEX idx_contact_forms_status ON contact_forms(status);

CREATE INDEX idx_subscribers_email ON subscribers(email);
CREATE INDEX idx_subscribers_ativo ON subscribers(ativo);

CREATE INDEX idx_chat_conversations_session_id ON chat_conversations(session_id);
CREATE INDEX idx_chat_conversations_created_at ON chat_conversations(created_at);

CREATE INDEX idx_analytics_events_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_events_created_at ON analytics_events(created_at);

-- 7. Triggers para updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_forms_updated_at BEFORE UPDATE ON contact_forms
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_chat_conversations_updated_at BEFORE UPDATE ON chat_conversations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 8. Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- 9. Políticas de Acesso (permitir inserção pública)
-- Leads - permitir inserção pública
CREATE POLICY "Permitir inserção pública de leads" ON leads
    FOR INSERT WITH CHECK (true);

-- Contact Forms - permitir inserção pública
CREATE POLICY "Permitir inserção pública de contatos" ON contact_forms
    FOR INSERT WITH CHECK (true);

-- Subscribers - permitir inserção pública
CREATE POLICY "Permitir inserção pública de assinantes" ON subscribers
    FOR INSERT WITH CHECK (true);

-- Chat Conversations - permitir inserção pública
CREATE POLICY "Permitir inserção pública de conversas" ON chat_conversations
    FOR INSERT WITH CHECK (true);

-- Analytics - permitir inserção pública
CREATE POLICY "Permitir inserção pública de eventos" ON analytics_events
    FOR INSERT WITH CHECK (true);

-- 10. Views para Relatórios
-- View de leads por mês
CREATE VIEW leads_monthly AS
SELECT 
    DATE_TRUNC('month', created_at) as mes,
    COUNT(*) as total_leads,
    COUNT(CASE WHEN status = 'convertido' THEN 1 END) as convertidos,
    COUNT(CASE WHEN status = 'novo' THEN 1 END) as novos
FROM leads
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY mes DESC;

-- View de contatos por serviço
CREATE VIEW contacts_by_service AS
SELECT 
    servico,
    COUNT(*) as total,
    COUNT(CASE WHEN status = 'respondido' THEN 1 END) as respondidos
FROM contact_forms
GROUP BY servico
ORDER BY total DESC;

-- View de crescimento de assinantes
CREATE VIEW subscribers_growth AS
SELECT 
    DATE_TRUNC('week', data_inscricao) as semana,
    COUNT(*) as novos_assinantes,
    SUM(COUNT(*)) OVER (ORDER BY DATE_TRUNC('week', data_inscricao)) as total_acumulado
FROM subscribers
WHERE ativo = true
GROUP BY DATE_TRUNC('week', data_inscricao)
ORDER BY semana DESC;

-- 11. Funções Utilitárias
-- Função para buscar leads similares
CREATE OR REPLACE FUNCTION buscar_leads_similares(email_busca VARCHAR)
RETURNS TABLE(
    id UUID,
    nome VARCHAR,
    email VARCHAR,
    interesse TEXT,
    created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
    RETURN QUERY
    SELECT l.id, l.nome, l.email, l.interesse, l.created_at
    FROM leads l
    WHERE l.email ILIKE '%' || email_busca || '%'
    ORDER BY l.created_at DESC
    LIMIT 10;
END;
$$ LANGUAGE plpgsql;

-- Função para estatísticas do dashboard
CREATE OR REPLACE FUNCTION dashboard_stats()
RETURNS JSON AS $$
DECLARE
    stats JSON;
BEGIN
    SELECT json_build_object(
        'total_leads', (SELECT COUNT(*) FROM leads),
        'leads_mes', (SELECT COUNT(*) FROM leads WHERE created_at >= date_trunc('month', current_date)),
        'total_contatos', (SELECT COUNT(*) FROM contact_forms),
        'contatos_pendentes', (SELECT COUNT(*) FROM contact_forms WHERE status = 'pendente'),
        'total_assinantes', (SELECT COUNT(*) FROM subscribers WHERE ativo = true),
        'conversas_chat', (SELECT COUNT(*) FROM chat_conversations),
        'leads_convertidos', (SELECT COUNT(*) FROM leads WHERE status = 'convertido')
    ) INTO stats;
    
    RETURN stats;
END;
$$ LANGUAGE plpgsql;

-- 12. Inserir dados de exemplo (opcional)
-- INSERT INTO leads (nome, email, interesse, origem) VALUES
-- ('João Silva', 'joao@exemplo.com', 'Agentes de IA', 'Site'),
-- ('Maria Santos', 'maria@exemplo.com', 'Automações', 'Chatbot');

-- INSERT INTO subscribers (email, nome, origem) VALUES
-- ('newsletter@exemplo.com', 'Assinante Teste', 'Site');

-- 13. Comentários nas tabelas
COMMENT ON TABLE leads IS 'Tabela de leads capturados no site';
COMMENT ON TABLE contact_forms IS 'Formulários de contato enviados';
COMMENT ON TABLE subscribers IS 'Assinantes da newsletter';
COMMENT ON TABLE chat_conversations IS 'Conversas do chatbot';
COMMENT ON TABLE analytics_events IS 'Eventos de analytics e tracking';

-- ✅ Schema completo criado!
-- Execute este SQL no Supabase Dashboard para configurar todas as tabelas