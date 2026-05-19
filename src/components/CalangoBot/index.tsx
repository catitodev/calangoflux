import { useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChatBubble } from './ChatBubble';
import { ChatPanel } from './ChatPanel';
import { useChatEngine } from '../../hooks/useChatEngine';

const WELCOME_MESSAGE =
  'Olá! 🦎 Sou o CalangoBot, assistente da CalangoFlux. Posso ajudar com informações sobre nossos serviços, preços ou tirar dúvidas. Como posso te ajudar?';

const SESSION_WELCOMED_KEY = 'calangobot_welcomed';

export default function CalangoBot() {
  const {
    messages,
    isOpen,
    isStreaming,
    error,
    sendMessage,
    toggleOpen,
  } = useChatEngine();

  const hasShownWelcome = useRef(false);
  const welcomeAdded = useRef(false);

  // Track if welcome was already shown this session
  useEffect(() => {
    const welcomed = sessionStorage.getItem(SESSION_WELCOMED_KEY);
    if (welcomed) {
      hasShownWelcome.current = true;
    }
  }, []);

  // Build display messages (welcome + actual messages)
  const displayMessages = (() => {
    // If there are already messages, show them as-is (welcome was already shown)
    if (messages.length > 0) {
      return messages;
    }
    // If panel is open and no messages yet, show welcome
    if (isOpen && !welcomeAdded.current) {
      return [{ role: 'assistant' as const, content: WELCOME_MESSAGE }];
    }
    return [];
  })();

  // Mark welcome as shown when panel opens for first time
  useEffect(() => {
    if (isOpen && !hasShownWelcome.current) {
      hasShownWelcome.current = true;
      welcomeAdded.current = true;
      sessionStorage.setItem(SESSION_WELCOMED_KEY, 'true');
    }
  }, [isOpen]);

  // Show quick actions only after welcome message and before user sends first message
  const showQuickActions = isOpen && messages.length === 0;

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <ChatPanel
            key="panel"
            messages={displayMessages}
            isStreaming={isStreaming}
            error={error}
            onClose={toggleOpen}
            onSend={sendMessage}
            showQuickActions={showQuickActions}
          />
        ) : (
          <ChatBubble key="bubble" onClick={toggleOpen} />
        )}
      </AnimatePresence>
    </>
  );
}
