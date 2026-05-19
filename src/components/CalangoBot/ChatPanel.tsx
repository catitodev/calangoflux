import { motion } from 'framer-motion';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { QuickActions } from './QuickActions';
import { ChatInput } from './ChatInput';
import type { ChatMessage } from '../../hooks/useChatEngine';

interface ChatPanelProps {
  messages: ChatMessage[];
  isStreaming: boolean;
  error: string | null;
  onClose: () => void;
  onSend: (message: string, isQuickAction?: boolean) => void;
  showQuickActions: boolean;
}

export function ChatPanel({
  messages,
  isStreaming,
  error,
  onClose,
  onSend,
  showQuickActions,
}: ChatPanelProps) {
  const handleQuickAction = (action: string) => {
    onSend(action, true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="fixed bottom-5 right-5 z-[9999] flex w-[min(400px,calc(100vw-2.5rem))] max-h-[500px] flex-col overflow-hidden rounded-2xl border border-bg-elevated bg-bg-surface/95 backdrop-blur-xl shadow-medium"
    >
      <ChatHeader onClose={onClose} />

      <MessageList messages={messages} isStreaming={isStreaming} />

      {showQuickActions && !isStreaming && (
        <div className="px-4 pb-2">
          <QuickActions onAction={handleQuickAction} />
        </div>
      )}

      {error && (
        <div className="px-4 pb-2">
          <ErrorFallback error={error} />
        </div>
      )}

      <ChatInput onSend={(msg) => onSend(msg, false)} disabled={isStreaming} />
    </motion.div>
  );
}

function ErrorFallback({ error }: { error: string }) {
  const isTimeout = error === 'timeout';

  return (
    <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-3 text-xs text-text-secondary">
      {isTimeout ? (
        <>
          <p className="mb-2 text-red-400">
            O assistente demorou para responder. Tente novamente ou entre em contato:
          </p>
          <div className="flex gap-2">
            <a
              href="https://wa.me/5522988324416?text=Ol%C3%A1!%20Vim%20do%20site%20da%20CalangoFlux%20%F0%9F%A6%8E"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-green-600 px-2 py-1 text-white hover:bg-green-700 transition-colors"
            >
              📱 WhatsApp
            </a>
            <a
              href="https://t.me/+5522988324416"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 transition-colors"
            >
              ✈️ Telegram
            </a>
          </div>
        </>
      ) : (
        <>
          <p className="mb-2 text-red-400">{error}</p>
          <div className="flex gap-2">
            <a
              href="https://wa.me/5522988324416?text=Ol%C3%A1!%20Vim%20do%20site%20da%20CalangoFlux%20%F0%9F%A6%8E"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-green-600 px-2 py-1 text-white hover:bg-green-700 transition-colors"
            >
              📱 WhatsApp
            </a>
            <a
              href="https://t.me/+5522988324416"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 transition-colors"
            >
              ✈️ Telegram
            </a>
          </div>
        </>
      )}
    </div>
  );
}
