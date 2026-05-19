import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useGlobalMouseTracker } from '../hooks/useMouseTracker';

const HeroSaaS = () => {
  const prefersReducedMotion = useReducedMotion();
  const mouse = useGlobalMouseTracker();

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Cursor-reactive offsets for floating elements
  const cursorOffsetX = (mouse.x / (typeof window !== 'undefined' ? window.innerWidth : 1) - 0.5) * 30;
  const cursorOffsetY = (mouse.y / (typeof window !== 'undefined' ? window.innerHeight : 1) - 0.5) * 30;

  // Stagger animation for headline words
  const headlineWords = ['Inteligência', 'Digital'];
  const subHeadlineWords = ['para um Futuro', 'Regenerativo'];

  const wordReveal = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: 0.4 + i * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-primary)]">
      {/* Background glow orbs — cursor-reactive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-[var(--accent-primary)] opacity-[0.08] blur-[120px]"
          style={{
            willChange: 'transform',
            transform: prefersReducedMotion
              ? 'translate(0, 0)'
              : `translate(${cursorOffsetX * 0.4}px, ${cursorOffsetY * 0.4}px)`,
          }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-[var(--accent-secondary)] opacity-[0.06] blur-[100px]"
          style={{
            willChange: 'transform',
            transform: prefersReducedMotion
              ? 'translate(0, 0)'
              : `translate(${-cursorOffsetX * 0.3}px, ${-cursorOffsetY * 0.3}px)`,
          }}
        />
        <motion.div
          className="absolute top-[50%] left-[40%] w-[300px] h-[300px] rounded-full bg-[var(--accent-primary)] opacity-[0.05] blur-[80px]"
          style={{
            willChange: 'transform',
            transform: prefersReducedMotion
              ? 'translate(0, 0)'
              : `translate(${cursorOffsetX * 0.2}px, ${cursorOffsetY * 0.6}px)`,
          }}
        />
      </div>

      {/* Floating particles — cursor-reactive interactive elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Particle 1 — cursor-reactive */}
        <motion.div
          className="absolute top-[25%] right-[20%] w-3 h-3 rounded-full bg-[var(--accent-primary)]"
          animate={
            prefersReducedMotion
              ? {}
              : { y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }
          }
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            willChange: 'transform',
            transform: prefersReducedMotion
              ? 'none'
              : `translate(${cursorOffsetX * 0.8}px, ${cursorOffsetY * 0.8}px)`,
            boxShadow: '0 0 12px rgba(0, 255, 135, 0.6)',
          }}
        />
        {/* Particle 2 — cursor-reactive */}
        <motion.div
          className="absolute top-[60%] left-[15%] w-2 h-2 rounded-full bg-[var(--accent-secondary)]"
          animate={
            prefersReducedMotion
              ? {}
              : { y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }
          }
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{
            willChange: 'transform',
            transform: prefersReducedMotion
              ? 'none'
              : `translate(${-cursorOffsetX * 1.2}px, ${-cursorOffsetY * 0.6}px)`,
            boxShadow: '0 0 10px rgba(96, 239, 255, 0.5)',
          }}
        />
        {/* Particle 3 */}
        <motion.div
          className="absolute top-[40%] right-[35%] w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"
          animate={
            prefersReducedMotion
              ? {}
              : { y: [0, -8, 0], x: [0, 5, 0] }
          }
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            willChange: 'transform',
            opacity: 0.5,
            transform: prefersReducedMotion
              ? 'none'
              : `translate(${cursorOffsetX * 0.5}px, ${cursorOffsetY * 1.0}px)`,
          }}
        />
        {/* Particle 4 */}
        <motion.div
          className="absolute bottom-[30%] right-[12%] w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)]"
          animate={
            prefersReducedMotion
              ? {}
              : { scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }
          }
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{
            willChange: 'transform',
            transform: prefersReducedMotion
              ? 'none'
              : `translate(${cursorOffsetX * 0.6}px, ${cursorOffsetY * 0.4}px)`,
            boxShadow: '0 0 8px rgba(0, 255, 135, 0.4)',
          }}
        />
      </div>

      {/* Main content — Asymmetric grid layout */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-center min-h-[80vh]">
          {/* Left column — Headline and CTA */}
          <div className="lg:pl-4 xl:pl-8">
            {/* Badge */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mr-2 animate-pulse" />
                Early Access 2026
              </span>
            </motion.div>

            {/* Headline — 5rem+ desktop, 2 font weights, gradient text */}
            <h1 className="mb-6 leading-[1.05]">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  initial={prefersReducedMotion ? 'visible' : 'hidden'}
                  animate="visible"
                  variants={wordReveal}
                  className="inline-block mr-4 text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] font-display font-bold text-[var(--text-primary)]"
                  style={{ willChange: 'transform, opacity' }}
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden sm:block" />
              {subHeadlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  custom={i + headlineWords.length}
                  initial={prefersReducedMotion ? 'visible' : 'hidden'}
                  animate="visible"
                  variants={wordReveal}
                  className="inline-block mr-4 text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] font-display font-light bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent"
                  style={{ willChange: 'transform, opacity' }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] max-w-2xl mb-10 leading-relaxed font-body"
            >
              Soluções digitais inteligentes impulsionadas por IA e automação avançada.{' '}
              <strong className="text-[var(--accent-primary)] font-medium">
                Tecnologia acessível, impacto real.
              </strong>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-[var(--bg-primary)] px-8 py-4 text-lg font-semibold shadow-glow-sm hover:shadow-glow-md transition-shadow duration-300"
              >
                <a href="https://aideaflux.xyz" target="_blank" rel="noopener noreferrer">
                  🚀 Testar 100+ LLMs Grátis
                </a>
              </Button>

              <Button
                onClick={scrollToServices}
                variant="outline"
                size="lg"
                className="border-2 border-[var(--accent-primary)]/50 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 hover:border-[var(--accent-primary)] px-8 py-4 text-lg transition-all duration-300"
              >
                Explorar Serviços
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-14 flex flex-wrap gap-8 md:gap-12"
            >
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold text-[var(--accent-primary)]">5+</p>
                <p className="text-sm text-[var(--text-muted)] mt-1">Serviços Especializados</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold text-[var(--text-primary)]">100+</p>
                <p className="text-sm text-[var(--text-muted)] mt-1">LLMs Disponíveis</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold text-[var(--accent-secondary)]">24/7</p>
                <p className="text-sm text-[var(--text-muted)] mt-1">Automação Ativa</p>
              </div>
            </motion.div>
          </div>

          {/* Right column — Floating visual element (overlaps left by -24px) */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex items-center justify-center relative -ml-6"
          >
            {/* Overlapping decorative card — 24px+ overlap via negative margin */}
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/10 blur-xl" />

              {/* Main card */}
              <div
                className="relative bg-[var(--bg-surface)]/80 backdrop-blur-xl border border-[var(--bg-elevated)] rounded-3xl p-8 w-[320px]"
                style={{
                  willChange: 'transform',
                  transform: prefersReducedMotion
                    ? 'none'
                    : `perspective(800px) rotateY(${cursorOffsetX * -0.15}deg) rotateX(${cursorOffsetY * 0.1}deg)`,
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary)]/20 flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">CalangoFlux</p>
                    <p className="text-xs text-[var(--text-muted)]">Fluxo Vivo, Impacto Real</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
                    <span className="text-sm text-[var(--text-secondary)]">Agentes AI</span>
                    <span className="ml-auto text-xs text-[var(--accent-primary)] font-mono">ativo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]" />
                    <span className="text-sm text-[var(--text-secondary)]">Automações</span>
                    <span className="ml-auto text-xs text-[var(--accent-secondary)] font-mono">ativo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
                    <span className="text-sm text-[var(--text-secondary)]">Web Design</span>
                    <span className="ml-auto text-xs text-[var(--accent-primary)] font-mono">ativo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]" />
                    <span className="text-sm text-[var(--text-secondary)]">Web3 & ReFi</span>
                    <span className="ml-auto text-xs text-[var(--text-muted)] font-mono">beta</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--bg-elevated)]">
                  <p className="text-xs text-[var(--text-muted)]">Modelo de subsídio</p>
                  <p className="text-sm text-[var(--text-primary)] font-medium mt-1">
                    10 clientes pagantes = 1 projeto social gratuito
                  </p>
                </div>
              </div>

              {/* Overlapping badge — positioned with negative margin for 24px+ overlap */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[var(--accent-primary)] text-[var(--bg-primary)] px-3 py-1.5 rounded-full text-xs font-bold shadow-glow-sm"
                animate={prefersReducedMotion ? {} : { y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                Open Source
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.button
          onClick={scrollToServices}
          className="flex flex-col items-center text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          aria-label="Scroll para serviços"
        >
          <span className="text-xs font-mono tracking-wider uppercase mb-2">Explorar</span>
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSaaS;
