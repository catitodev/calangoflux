import { useCallback, useRef } from 'react';
import { supabase, type LeadInsert, type ChatConversationInsert, type ChatMessageRecord } from '../lib/supabase';

interface LeadPersistenceOptions {
  sessionId: string;
}

/**
 * Hook for persisting CalangoBot lead data and conversations to Supabase.
 * 
 * - On lead classification: inserts into `leads` table
 * - On name/email provided: updates the lead record
 * - On chat close: saves conversation to `chat_conversations`
 * - On failure: logs error, retries once after 3s, continues operating
 * - Handles duplicate email via upsert
 */
export function useLeadPersistence({ sessionId }: LeadPersistenceOptions) {
  const leadIdRef = useRef<string | null>(null);

  /**
   * Retry wrapper: attempts operation, on failure retries once after 3s.
   * Returns null on final failure (never crashes the UI).
   */
  const withRetry = useCallback(async <T>(
    operation: () => Promise<T>,
    context: string
  ): Promise<T | null> => {
    try {
      return await operation();
    } catch (error) {
      console.error(`[Supabase] ${context} failed:`, error);
      // Retry once after 3 seconds
      await new Promise(resolve => setTimeout(resolve, 3000));
      try {
        return await operation();
      } catch (retryError) {
        console.error(`[Supabase] ${context} retry failed:`, retryError);
        return null;
      }
    }
  }, []);

  /**
   * Called when CalangoBot classifies a visitor as a lead.
   * Inserts into `leads` table with interesse, created_at, origem, conversa.
   */
  const persistLead = useCallback(async (
    interesse: string,
    conversaSummary: string
  ): Promise<void> => {
    const conversa = conversaSummary.slice(0, 2000);

    const leadData: LeadInsert = {
      nome: '',
      email: '',
      interesse,
      origem: 'chatbot',
      conversa,
    };

    const result = await withRetry(async () => {
      const { data, error } = await supabase
        .from('leads')
        .insert([leadData])
        .select();

      if (error) throw error;
      return data?.[0];
    }, 'leads INSERT');

    if (result?.id) {
      leadIdRef.current = result.id;
    }
  }, [withRetry]);

  /**
   * Called when a visitor provides their name or email during conversation.
   * Updates the lead record. Handles duplicate email via upsert.
   */
  const updateLeadInfo = useCallback(async (
    info: { nome?: string; email?: string }
  ): Promise<void> => {
    if (!info.nome && !info.email) return;

    // If we have an email, try upsert to handle duplicates
    if (info.email) {
      await withRetry(async () => {
        const { error } = await supabase
          .from('leads')
          .upsert(
            {
              ...(leadIdRef.current ? { id: leadIdRef.current } : {}),
              nome: info.nome || '',
              email: info.email,
              origem: 'chatbot',
            },
            { onConflict: 'email' }
          );

        if (error) throw error;
      }, 'leads UPSERT');
    } else if (leadIdRef.current) {
      // Update by ID if we only have a name
      await withRetry(async () => {
        const { error } = await supabase
          .from('leads')
          .update({ nome: info.nome })
          .eq('id', leadIdRef.current!);

        if (error) throw error;
      }, 'leads UPDATE');
    }
  }, [withRetry]);

  /**
   * Called when the chat widget closes or user navigates away.
   * Saves the full conversation to `chat_conversations`.
   */
  const saveConversation = useCallback(async (
    messages: ChatMessageRecord[],
    leadCaptured: boolean,
    userName?: string,
    userEmail?: string
  ): Promise<void> => {
    const conversationData: ChatConversationInsert = {
      session_id: sessionId,
      user_name: userName,
      user_email: userEmail,
      messages,
      lead_captured: leadCaptured,
    };

    await withRetry(async () => {
      const { error } = await supabase
        .from('chat_conversations')
        .insert([conversationData]);

      if (error) throw error;
    }, 'chat_conversations INSERT');
  }, [sessionId, withRetry]);

  return {
    persistLead,
    updateLeadInfo,
    saveConversation,
    leadId: leadIdRef,
  };
}
