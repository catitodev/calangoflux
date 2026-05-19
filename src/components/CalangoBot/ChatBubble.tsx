import { motion } from 'framer-motion';

interface ChatBubbleProps {
  onClick: () => void;
}

export function ChatBubble({ onClick }: ChatBubbleProps) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-accent-primary shadow-glow-md cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          '0 0 10px rgba(0, 255, 135, 0.3)',
          '0 0 30px rgba(0, 255, 135, 0.6)',
          '0 0 10px rgba(0, 255, 135, 0.3)',
        ],
      }}
      transition={{
        boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
      }}
      aria-label="Abrir CalangoBot"
    >
      <span className="text-2xl" role="img" aria-hidden="true">
        🦎
      </span>
    </motion.button>
  );
}
