import { motion } from 'framer-motion';

/**
 * PageLoader — Branded loading state with CalangoFlux logo and neon green progress indicator.
 * Displayed during route transitions that take longer than 300ms.
 */
export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--bg-primary)]">
      <motion.img
        src="/src/assets/imagens/calango-logo-transp.png"
        alt="CalangoFlux"
        className="w-16 h-16 mb-6"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="w-48 h-1 bg-[var(--bg-elevated)] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[var(--accent-primary)] rounded-full"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ width: '40%' }}
        />
      </div>
      <p className="mt-4 text-sm text-[var(--text-muted)] font-body">
        Carregando...
      </p>
    </div>
  );
}
