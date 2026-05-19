import { X } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-bg-elevated bg-bg-surface">
      <div className="flex items-center gap-2">
        <span className="text-lg" role="img" aria-hidden="true">
          🦎
        </span>
        <div>
          <h3 className="text-sm font-semibold text-text-primary font-display">
            CalangoBot
          </h3>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-xs text-text-secondary">Online</span>
          </div>
        </div>
      </div>
      <button
        onClick={onClose}
        className="flex h-7 w-7 items-center justify-center rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors"
        aria-label="Fechar chat"
      >
        <X size={16} />
      </button>
    </div>
  );
}
