import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import {
  Bot,
  Zap,
  Sparkles,
  Palette,
  Globe,
  ArrowRight,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    id: 'agentes-ai',
    title: 'Agentes AI',
    subtitle: 'Inteligência que conversa',
    description:
      'Bots sob medida para Telegram, Discord, WhatsApp e web. Respondem, vendem e aprendem — 24/7.',
    icon: Bot,
    link: '/agentes-ai',
    accent: 'var(--accent-primary)',
  },
  {
    id: 'automacoes',
    title: 'Automações',
    subtitle: 'Fluxos que trabalham por você',
    description:
      'Workflows inteligentes conectando sistemas. n8n, Notion, APIs — tudo integrado e monitorado.',
    icon: Zap,
    link: '/automacoes',
    accent: 'var(--accent-secondary)',
  },
  {
    id: 'agentics',
    title: 'Agentics',
    subtitle: 'Decisões autônomas',
    description:
      'Sistemas agentic que tomam decisões, se adaptam e evoluem em tempo real.',
    icon: Sparkles,
    link: '/agentics',
    accent: 'var(--accent-primary)',
  },
  {
    id: 'webdesign',
    title: 'Web Design',
    subtitle: 'Presença digital que converte',
    description:
      'Sites modernos, responsivos e otimizados. Performance e estética em equilíbrio.',
    icon: Palette,
    link: '/webdesign',
    accent: 'var(--accent-secondary)',
  },
  {
    id: 'letramento-web3',
    title: 'Letramento Web3',
    subtitle: 'Educação descentralizada',
    description:
      'Blockchain, smart contracts, ReFi — educação gratuita para comunidades.',
    icon: Globe,
    link: '/letramento-web3',
    accent: 'var(--accent-primary)',
  },
];

export default function ServicesSection() {
  const prefersReducedMotion = useReducedMotion();

  // Scroll-driven reveal for the section header
  const headerAnim = useScrollAnimation({
    type: 'reveal',
    offset: ['start 85%', 'start 50%'],
  });

  return (
    <section
      id="services"
      className="relative bg-[var(--bg-primary)]"
      style={{ paddingTop: 'var(--section-gap-lg)', paddingBottom: 'var(--section-gap-xl)' }}
    >
      {/* Section header — off-center (8%+ offset from center) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerAnim.ref as React.RefObject<HTMLDivElement>}
          style={
            prefersReducedMotion
              ? {}
              : { opacity: headerAnim.opacity, y: headerAnim.y }
          }
          className="mb-20 lg:ml-[8%]"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-[var(--accent-primary)] mb-3">
            Nossos Serviços
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] max-w-2xl leading-tight">
            Soluções que{' '}
            <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              transformam
            </span>{' '}
            negócios
          </h2>
        </motion.div>

        {/* Editorial grid — unequal columns, varying heights, overlapping elements */}
        {/* Row 1: 2fr / 1fr layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mb-6">
          <ServiceCard service={services[0]} size="large" index={0} />
          <ServiceCard service={services[1]} size="small" index={1} />
        </div>

        {/* Row 2: 1fr / 3fr / 2fr layout — with overlapping element */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_2fr] gap-6 mb-6 relative">
          {/* Off-center decorative element — overlaps by 32px */}
          <motion.div
            className="absolute -top-8 left-[12%] w-24 h-24 rounded-full bg-[var(--accent-primary)]/5 border border-[var(--accent-primary)]/10 z-0 hidden lg:block"
            animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Spacer / pull quote on desktop */}
          <div className="hidden md:flex items-center justify-center">
            <p className="text-lg font-display font-light text-[var(--text-muted)] italic leading-relaxed text-center transform -rotate-2">
              "Simplicidade<br />inteligente<br />em movimento"
            </p>
          </div>

          <ServiceCard service={services[2]} size="medium" index={2} />
          <ServiceCard service={services[3]} size="medium" index={3} />
        </div>

        {/* Row 3: 3fr / 2fr layout — different height from row 1 (30%+ variation) */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 relative">
          {/* Overlapping element — negative margin creates 24px+ overlap */}
          <motion.div
            className="absolute -top-6 right-[20%] w-16 h-16 rounded-xl bg-[var(--accent-secondary)]/8 border border-[var(--accent-secondary)]/15 z-0 hidden lg:block rotate-12"
            animate={prefersReducedMotion ? {} : { rotate: [12, 18, 12] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          <ServiceCard service={services[4]} size="wide" index={4} />

          {/* CTA card — off-center positioning (8%+ offset) */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/5 border border-[var(--accent-primary)]/20 rounded-2xl p-8 flex flex-col justify-center lg:ml-[10%]"
          >
            <p className="text-2xl md:text-3xl font-display font-bold text-[var(--text-primary)] mb-4">
              Pronto para começar?
            </p>
            <p className="text-[var(--text-secondary)] mb-6">
              Nossos especialistas criam a solução perfeita para suas necessidades.
            </p>
            <Button
              asChild
              className="w-fit bg-[var(--accent-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-primary)]/90 shadow-glow-sm hover:shadow-glow-md transition-shadow"
            >
              <a href="https://wa.me/5522988324416" target="_blank" rel="noopener noreferrer">
                💬 Falar com Especialista
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: (typeof services)[number];
  size: 'large' | 'medium' | 'small' | 'wide';
  index: number;
}

function ServiceCard({ service, size, index }: ServiceCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = service.icon;

  // Height varies by size — creating 30%+ variation between adjacent sections
  const heightClass =
    size === 'large'
      ? 'min-h-[320px]'
      : size === 'wide'
        ? 'min-h-[240px]'
        : size === 'medium'
          ? 'min-h-[280px]'
          : 'min-h-[320px]';

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative z-10"
    >
      <Link
        to={service.link}
        className={`group block ${heightClass} bg-[var(--bg-surface)]/60 backdrop-blur-sm border border-[var(--bg-elevated)] rounded-2xl p-8 hover:border-[var(--accent-primary)]/30 transition-all duration-300 hover:shadow-glow-sm`}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: `color-mix(in srgb, ${service.accent} 15%, transparent)` }}
            >
              <Icon className="w-6 h-6" style={{ color: service.accent }} />
            </div>

            <p className="text-xs font-mono tracking-wider uppercase mb-2" style={{ color: service.accent }}>
              {service.subtitle}
            </p>

            <h3 className="text-xl md:text-2xl font-display font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors duration-300">
              {service.title}
            </h3>

            <p className="text-[var(--text-secondary)] leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="flex items-center text-sm text-[var(--accent-primary)] mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-medium">Saiba mais</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
