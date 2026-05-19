import { useState, useCallback, useRef, useEffect } from 'react';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatState {
  messages: ChatMessage[];
  isOpen: boolean;
  isStreaming: boolean;
  sessionId: string;
  leadCaptured: boolean;
  error: string | null;
}

const LEAD_KEYWORDS = [
  'agentes',
  'automação',
  'agentics',
  'webdesign',
  'web3',
  'preço',
  'plano',
];

const MAX_MESSAGES = 50;
const STREAM_TIMEOUT_MS = 10_000;
const SESSION_STORAGE_KEY = 'calangobot_session';

function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

function getStoredSession(): { messages: ChatMessage[]; sessionId: string; leadCaptured: boolean } | null {
  try {
    const stored = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Ignore parse errors
  }
  return null;
}

function saveSession(messages: ChatMessage[], sessionId: string, leadCaptured: boolean): void {
  try {
    sessionStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify({ messages, sessionId, leadCaptured })
    );
  } catch {
    // Ignore storage errors
  }
}

function detectLead(text: string): string | null {
  const lower = text.toLowerCase();
  for (const keyword of LEAD_KEYWORDS) {
    if (lower.includes(keyword)) {
      return keyword;
    }
  }
  return null;
}

export function useChatEngine() {
  const stored = useRef(getStoredSession());

  const [state, setState] = useState<ChatState>(() => ({
    messages: stored.current?.messages ?? [],
    isOpen: false,
    isStreaming: false,
    sessionId: stored.current?.sessionId ?? generateSessionId(),
    leadCaptured: stored.current?.leadCaptured ?? false,
    error: null,
  }));

  const abortControllerRef = useRef<AbortController | null>(null);

  // Persist session on message changes
  useEffect(() => {
    saveSession(state.messages, state.sessionId, state.leadCaptured);
  }, [state.messages, state.sessionId, state.leadCaptured]);

  const toggleOpen = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: !prev.isOpen, error: null }));
  }, []);

  const sendMessage = useCallback(
    async (content: string, isQuickAction = false) => {
      // Validate input
      if (!content.trim() || content.length > 500) {
        return;
      }

      const userMessage: ChatMessage = { role: 'user', content: content.trim() };

      setState((prev) => {
        const updatedMessages = [...prev.messages, userMessage].slice(-MAX_MESSAGES);
        return {
          ...prev,
          messages: updatedMessages,
          isStreaming: true,
          error: null,
        };
      });

      // Detect lead from user message or quick action
      const detectedKeyword = detectLead(content);
      if (detectedKeyword || isQuickAction) {
        setState((prev) => ({ ...prev, leadCaptured: true }));
      }

      // Prepare messages for API (only user and assistant messages)
      const apiMessages = [...state.messages, userMessage]
        .slice(-MAX_MESSAGES)
        .map((m) => ({ role: m.role, content: m.content }));

      // Abort any previous request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      const controller = new AbortController();
      abortControllerRef.current = controller;

      // Set up timeout
      const timeoutId = setTimeout(() => {
        controller.abort();
      }, STREAM_TIMEOUT_MS);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: apiMessages, stream: true }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error('No response body');
        }

        const decoder = new TextDecoder();
        let assistantContent = '';
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || !trimmed.startsWith('data: ')) continue;

            const data = trimmed.slice(6);
            if (data === '[DONE]') continue;

            try {
              const parsed = JSON.parse(data);
              if (parsed.delta) {
                assistantContent += parsed.delta;

                // Update message incrementally
                setState((prev) => {
                  const msgs = [...prev.messages];
                  const lastMsg = msgs[msgs.length - 1];
                  if (lastMsg && lastMsg.role === 'assistant') {
                    msgs[msgs.length - 1] = { ...lastMsg, content: assistantContent };
                  } else {
                    msgs.push({ role: 'assistant', content: assistantContent });
                  }
                  return { ...prev, messages: msgs.slice(-MAX_MESSAGES) };
                });
              }
            } catch {
              // Skip malformed chunks
            }
          }
        }

        // Process remaining buffer
        if (buffer.trim()) {
          const trimmed = buffer.trim();
          if (trimmed.startsWith('data: ')) {
            const data = trimmed.slice(6);
            if (data !== '[DONE]') {
              try {
                const parsed = JSON.parse(data);
                if (parsed.delta) {
                  assistantContent += parsed.delta;
                  setState((prev) => {
                    const msgs = [...prev.messages];
                    const lastMsg = msgs[msgs.length - 1];
                    if (lastMsg && lastMsg.role === 'assistant') {
                      msgs[msgs.length - 1] = { ...lastMsg, content: assistantContent };
                    } else {
                      msgs.push({ role: 'assistant', content: assistantContent });
                    }
                    return { ...prev, messages: msgs.slice(-MAX_MESSAGES) };
                  });
                }
              } catch {
                // Skip
              }
            }
          }
        }

        // If no content was received, add empty assistant message
        if (!assistantContent) {
          setState((prev) => ({
            ...prev,
            messages: [...prev.messages, { role: 'assistant', content: 'Desculpe, não consegui gerar uma resposta. Tente novamente.' }].slice(-MAX_MESSAGES),
          }));
        }

        setState((prev) => ({ ...prev, isStreaming: false }));
      } catch (err: unknown) {
        clearTimeout(timeoutId);

        const isAbort = err instanceof Error && err.name === 'AbortError';
        const errorMessage = isAbort
          ? 'timeout'
          : 'Não foi possível conectar ao assistente.';

        setState((prev) => ({
          ...prev,
          isStreaming: false,
          error: errorMessage,
        }));
      }
    },
    [state.messages]
  );

  return {
    messages: state.messages,
    isOpen: state.isOpen,
    isStreaming: state.isStreaming,
    sessionId: state.sessionId,
    leadCaptured: state.leadCaptured,
    error: state.error,
    sendMessage,
    toggleOpen,
  };
}
