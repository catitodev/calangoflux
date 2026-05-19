import { ArrowLeft, Bot, MessageSquare, Zap, Shield, Sparkles, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AgentesAI = () => {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Agentes AI Personalizados | CalangoFlux';
  }, []);

  // Parallax for the hero background
  const heroParallax = useScrollAnimation({
    type: 'parallax',
    offset: ['start start', 'end start'],
    outputRange: [0, -60],
  });

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Hero — responsive: 2.5rem mobile, 3.5rem tablet, 5rem+ desktop */}
      <section className="relative bg-[var(--bg-primary)] overflow-hidden">
        {/* Full-bleed background gradient */}
        <motion.div
          ref={heroParallax.ref as React.RefObject<HTMLDivElement>}
          style={prefersReducedMotion ? {} : { y: heroParallax.y }}
          className="absolute inset-0 bg-gradient-to-br from-[var(--bg-surface)] via-[var(--bg-primary)] to-[var(--bg-primary)]"
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[var(--accent-primary)] opacity-[0.06] blur-[100px]" />
          <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-[var(--accent-secondary)] opacity-[0.04] blur-[80px]" />
        </div>

        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <Link
            to="/"
            className="inline-flex items-center text-[var(--text-muted)] hover:text-[var(--accent-primary)] mb-10 transition text-sm"
          >
            <ArrowLeft size={14} className="mr-2" />
            Voltar
          </Link>

          {/* Asymmetric 2-column layout for hero */}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-end">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-[var(--accent-primary)] mb-4">
                Serviço Principal
              </p>
              {/* Responsive headline: 2.5rem mobile, 3.5rem tablet, 5rem+ desktop */}
              <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] font-display font-bold text-[var(--text-primary)] leading-[1.05] mb-6">
                Agentes AI{' '}
                <span className="font-light bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                  Personalizados
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed">
                Criamos bots sob medida para Telegram, Discord, WhatsApp, sites e apps.
                Eles respondem automaticamente, ajudam com vendas, suporte, educação ou
                qualquer fluxo específico do seu negócio.
              </p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              <a
                href="https://wa.me/5522988324416"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[var(--accent-primary)] text-[var(--bg-primary)] rounded-xl font-semibold text-lg shadow-glow-sm hover:shadow-glow-md transition-shadow"
              >
                Solicitar orçamento
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom border accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/30 to-transparent" />
      </section>

      {/* Full-bleed image section (100vw) */}
      <section className="relative w-screen -ml-[calc((100vw-100%)/2)] overflow-hidden">
        <div className="w-full h-[200px] md:h-[300px] lg:h-[400px] bg-gradient-to-br from-[var(--bg-surface)] via-[var(--bg-elevated)] to-[var(--bg-surface)] flex items-center justify-center">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Bot className="w-16 h-16 md:w-24 md:h-24 text-[var(--accent-primary)] mx-auto mb-4 opacity-60" />
            <p className="text-sm md:text-base text-[var(--text-muted)] font-mono tracking-wider">
              INTELIGÊNCIA ARTIFICIAL • AUTOMAÇÃO • PERSONALIZAÇÃO
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content section — 2-column unequal layout (3fr / 2fr) */}
      <section
        className="bg-[var(--bg-primary)]"
        style={{ paddingTop: 'var(--section-gap-lg)', paddingBottom: 'var(--section-gap-md)' }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-[var(--text-primary)] mb-6">
                Automatize atendimentos com inteligência
              </h2>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed text-lg">
                Nossos agentes de IA são projetados para interagir naturalmente com seus
                clientes e usuários, oferecendo respostas rápidas e precisas 24 horas por
                dia, 7 dias por semana.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Cada bot é personalizado de acordo com a identidade da sua marca, com uma
                personalidade única e uma base de conhecimento específica para seu negócio.
              </p>
            </motion.div>

            {/* Pull quote — 1.5x body font size */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:mt-8"
            >
              <div className="border-l-4 border-[var(--accent-primary)] pl-6 py-4">
                {/* Pull quote: 1.5x body (body is ~1rem, so 1.5rem = text-2xl) */}
                <blockquote className="text-2xl md:text-[1.75rem] font-display font-light text-[var(--text-primary)] leading-snug italic">
                  "Tecnologia acessível e aplicável, gerando impacto positivo."
                </blockquote>
                <p className="text-sm text-[var(--text-muted)] mt-4 font-mono">
                  — Manifesto CalangoFlux
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features grid — non-uniform spacing (different from section above by 32px+) */}
      <section
        className="bg-[var(--bg-surface)]"
        style={{ paddingTop: 'var(--section-gap-sm)', paddingBottom: 'var(--section-gap-lg)' }}
      >
        <div className="container">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[var(--text-primary)] mb-2">
              Você define
            </h2>
            <div className="w-12 h-1 bg-[var(--accent-primary)] rounded-full" />
          </motion.div>

          {/* Unequal grid: 2fr / 1fr / 1fr */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6">
            <FeatureCard
              icon={Shield}
              title="A personalidade"
              description="Tom de voz, estilo de comunicação e valores da marca integrados ao agente."
              index={0}
            />
            <FeatureCard
              icon={MessageSquare}
              title="O conteúdo"
              description="Base de conhecimento, FAQs, produtos e serviços."
              index={1}
            />
            <FeatureCard
              icon={Zap}
              title="Os limites"
              description="O que o bot pode e não pode fazer ou dizer."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Benefits — editorial layout with overlapping elements */}
      <section
        className="bg-[var(--bg-primary)] relative"
        style={{ paddingTop: 'var(--section-gap-xl)', paddingBottom: 'var(--section-gap-md)' }}
      >
        {/* Overlapping decorative element — repositions on mobile to avoid occlusion */}
        <motion.div
          className="absolute top-8 right-[15%] w-20 h-20 rounded-2xl bg-[var(--accent-primary)]/5 border border-[var(--accent-primary)]/10 rotate-12 hidden sm:block"
          animate={prefersReducedMotion ? {} : { rotate: [12, 18, 12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-[var(--text-primary)] mb-4">
              Principais benefícios
            </h2>
          </motion.div>

          {/* 2-column unequal grid for benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: 'Atendimento 24/7', desc: 'Respostas imediatas a qualquer momento, mesmo fora do horário comercial.' },
              { icon: Zap, title: 'Redução de custos', desc: 'Automatize tarefas repetitivas e libere sua equipe para atividades estratégicas.' },
              { icon: Shield, title: 'Experiência consistente', desc: 'Padrão de qualidade e tom de voz uniforme em todas as interações.' },
              { icon: Globe, title: 'Escalabilidade', desc: 'Atenda centenas de usuários simultaneamente sem perder qualidade.' },
              { icon: Bot, title: 'Dados e insights', desc: 'Colete informações valiosas sobre dúvidas e necessidades dos clientes.' },
              { icon: MessageSquare, title: 'Integração completa', desc: 'Conecte com CRM, e-commerce e bases de conhecimento existentes.' },
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[var(--bg-surface)]/60 border border-[var(--bg-elevated)] rounded-xl p-6 hover:border-[var(--accent-primary)]/20 transition-colors duration-300"
              >
                <benefit.icon className="w-6 h-6 text-[var(--accent-primary)] mb-4" />
                <h3 className="text-lg font-display font-semibold text-[var(--text-primary)] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section — different spacing from above (32px+ difference) */}
      <section
        className="bg-[var(--bg-primary)]"
        style={{ paddingTop: 'var(--section-gap-sm)', paddingBottom: 'var(--section-gap-lg)' }}
      >
        <div className="container">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--bg-surface)] border border-[var(--bg-elevated)] rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[var(--text-primary)] mb-4">
              Pronto para automatizar seu atendimento?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              Consulta gratuita. Vamos entender suas necessidades e criar um agente personalizado.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/5522988324416"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Solicitar orçamento
              </a>
              <Link to="/contact" className="btn btn-outline">
                Fale conosco
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[var(--bg-primary)] border border-[var(--bg-elevated)] rounded-xl p-6"
    >
      <div className="w-10 h-10 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center mb-4">
        <Icon size={20} className="text-[var(--accent-primary)]" />
      </div>
      <h3 className="text-lg font-display font-semibold text-[var(--text-primary)] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default AgentesAI;
