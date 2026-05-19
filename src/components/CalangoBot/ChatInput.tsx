import { useState, type FormEvent, type KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled: boolean;
}

const MAX_CHARS = 500;

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault();

    const trimmed = value.trim();

    if (!trimmed) {
      setValidationError('Digite uma mensagem para enviar.');
      return;
    }

    if (trimmed.length > MAX_CHARS) {
      setValidationError(`Máximo de ${MAX_CHARS} caracteres.`);
      return;
    }

    setValidationError(null);
    onSend(trimmed);
    setValue('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const charCount = value.length;
  const isOverLimit = charCount > MAX_CHARS;

  return (
    <div className="border-t border-bg-elevated px-3 py-2">
      {validationError && (
        <p className="mb-1 text-xs text-red-400">{validationError}</p>
      )}
      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        <div className="relative flex-1">
          <textarea
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (validationError) setValidationError(null);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua mensagem..."
            disabled={disabled}
            rows={1}
            className="w-full resize-none rounded-lg border border-bg-elevated bg-bg-elevated/50 px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-primary/50 focus:outline-none focus:ring-1 focus:ring-accent-primary/30 disabled:opacity-50"
            aria-label="Mensagem para CalangoBot"
          />
          <span
            className={`absolute bottom-1 right-2 text-[10px] ${
              isOverLimit ? 'text-red-400' : 'text-text-muted'
            }`}
          >
            {charCount}/{MAX_CHARS}
          </span>
        </div>
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-primary text-bg-primary transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Enviar mensagem"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
