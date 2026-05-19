import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { subscriberService } from '../lib/supabase';

type FormStatus = 'idle' | 'submitting' | 'success' | 'duplicate' | 'error';

function isValidEmail(email: string): boolean {
  if (email.length > 255) return false;
  const atIndex = email.indexOf('@');
  if (atIndex < 1) return false;
  const domain = email.slice(atIndex + 1);
  if (!domain.includes('.')) return false;
  if (domain.endsWith('.')) return false;
  return true;
}

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setEmailError('');

    // Validate email format
    if (!isValidEmail(email.trim())) {
      setEmailError('Informe um e-mail válido (ex: nome@dominio.com).');
      return;
    }

    setStatus('submitting');

    try {
      await subscriberService.subscribe(email.trim());
      setStatus('success');
      setEmail('');
    } catch (error: unknown) {
      // Check for duplicate key violation (Supabase returns code 23505)
      const supabaseError = error as { code?: string; message?: string };
      if (supabaseError?.code === '23505' || supabaseError?.message?.includes('duplicate')) {
        setStatus('duplicate');
      } else {
        setStatus('error');
        setErrorMsg('Não foi possível completar a inscrição. Tente novamente mais tarde.');
      }
    }
  }, [email]);

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            E-mail para newsletter
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <input
              type="email"
              id="newsletter-email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError('');
                if (status !== 'idle' && status !== 'submitting') setStatus('idle');
              }}
              placeholder="seu@email.com"
              className="w-full pl-10 pr-4 py-2.5 bg-[var(--bg-primary)] border border-[var(--bg-elevated)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition text-[var(--text-primary)] text-sm"
              disabled={status === 'submitting'}
            />
          </div>
        </div>
        <motion.button
          type="submit"
          disabled={status === 'submitting'}
          className="px-5 py-2.5 bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-[var(--bg-primary)] font-semibold rounded-lg transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {status === 'submitting' ? 'Inscrevendo...' : 'Inscrever-se'}
        </motion.button>
      </form>

      {/* Inline error for invalid email */}
      {emailError && (
        <p className="mt-2 text-sm text-red-400">{emailError}</p>
      )}

      {/* Success message */}
      {status === 'success' && (
        <p className="mt-2 text-sm text-green-400">
          Inscrição realizada com sucesso! Bem-vindo à comunidade CalangoFlux.
        </p>
      )}

      {/* Duplicate message */}
      {status === 'duplicate' && (
        <p className="mt-2 text-sm text-yellow-400">
          Este e-mail já está inscrito na nossa newsletter.
        </p>
      )}

      {/* Generic error */}
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-400">{errorMsg}</p>
      )}
    </div>
  );
}
