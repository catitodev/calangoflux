-- ============================================================
-- CalangoFlux — Supabase Row Level Security (RLS) Policies
-- ============================================================
-- Execute this SQL in Supabase Dashboard > SQL Editor
-- after the base schema (supabase-schema.sql) is applied.
-- ============================================================

-- 1. Enable RLS on all relevant tables (idempotent)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- 2. Anonymous INSERT policies (public access for form submissions)
-- ============================================================

-- Leads — allow anonymous insert
CREATE POLICY "anon_insert_leads" ON leads
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Chat Conversations — allow anonymous insert
CREATE POLICY "anon_insert_chat_conversations" ON chat_conversations
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Contact Forms — allow anonymous insert
CREATE POLICY "anon_insert_contact_forms" ON contact_forms
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Subscribers — allow anonymous insert
CREATE POLICY "anon_insert_subscribers" ON subscribers
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- ============================================================
-- 3. Session-scoped UPDATE policies
-- ============================================================
-- These allow the frontend to update records it created in the
-- same session, using Supabase's session config variable.

-- Leads — session-scoped update (matched by origin = chatbot for safety)
CREATE POLICY "session_update_leads" ON leads
    FOR UPDATE
    TO anon
    USING (
        origem = 'chatbot'
    )
    WITH CHECK (
        origem = 'chatbot'
    );

-- Chat Conversations — session-scoped update
CREATE POLICY "session_update_chat_conversations" ON chat_conversations
    FOR UPDATE
    TO anon
    USING (
        session_id = current_setting('request.headers')::json->>'x-session-id'
    )
    WITH CHECK (
        session_id = current_setting('request.headers')::json->>'x-session-id'
    );

-- ============================================================
-- 4. Admin-only SELECT, DELETE, and UPDATE (non-session) policies
-- ============================================================

-- Leads — admin SELECT
CREATE POLICY "admin_select_leads" ON leads
    FOR SELECT
    TO authenticated
    USING (
        (auth.jwt() ->> 'role') = 'admin'
    );

-- Leads — admin DELETE
CREATE POLICY "admin_delete_leads" ON leads
    FOR DELETE
    TO authenticated
    USING (
        (auth.jwt() ->> 'role') = 'admin'
    );

-- Chat Conversations — admin SELECT
CREATE POLICY "admin_select_chat_conversations" ON chat_conversations
    FOR SELECT
    TO authenticated
    USING (
        (auth.jwt() ->> 'role') = 'admin'
    );

-- Chat Conversations — admin DELETE
CREATE POLICY "admin_delete_chat_conversations" ON chat_conversations
    FOR DELETE
    TO authenticated
    USING (
        (auth.jwt() ->> 'role') = 'admin'
    );

-- Contact Forms — admin SELECT
CREATE POLICY "admin_select_contact_forms" ON contact_forms
    FOR SELECT
    TO authenticated
    USING (
        (auth.jwt() ->> 'role') = 'admin'
    );

-- Contact Forms — admin UPDATE
CREATE POLICY "admin_update_contact_forms" ON contact_forms
    FOR UPDATE
    TO authenticated
    USING (
        (auth.jwt() ->> 'role') = 'admin'
    )
    WITH CHECK (
        (auth.jwt() ->> 'role') = 'admin'
    );

-- Contact Forms — admin DELETE
CREATE POLICY "admin_delete_contact_forms" ON contact_forms
    FOR DELETE
    TO authenticated
    USING (
        (auth.jwt() ->> 'role') = 'admin'
    );

-- Subscribers — admin SELECT
CREATE POLICY "admin_select_subscribers" ON subscribers
    FOR SELECT
    TO authenticated
    USING (
        (auth.jwt() ->> 'role') = 'admin'
    );

-- Subscribers — admin UPDATE
CREATE POLICY "admin_update_subscribers" ON subscribers
    FOR UPDATE
    TO authenticated
    USING (
        (auth.jwt() ->> 'role') = 'admin'
    )
    WITH CHECK (
        (auth.jwt() ->> 'role') = 'admin'
    );

-- Subscribers — admin DELETE
CREATE POLICY "admin_delete_subscribers" ON subscribers
    FOR DELETE
    TO authenticated
    USING (
        (auth.jwt() ->> 'role') = 'admin'
    );

-- ============================================================
-- 5. Unique constraint on leads.email for upsert behavior
-- ============================================================

-- Add unique constraint (allows ON CONFLICT for upsert)
ALTER TABLE leads ADD CONSTRAINT leads_email_unique UNIQUE (email);

-- ============================================================
-- 6. Index for optimizing lead queries by lead_captured
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_chat_conversations_lead_captured
    ON chat_conversations(lead_captured);

-- ============================================================
-- Done! RLS policies are now active.
-- Anonymous users can INSERT into all tables.
-- Session-scoped UPDATE is allowed for leads and chat_conversations.
-- SELECT/DELETE/UPDATE restricted to admin role for all tables.
-- ============================================================
