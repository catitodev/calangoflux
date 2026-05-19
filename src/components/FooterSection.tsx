import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Instagram,
  MessageCircle,
  ExternalLink,
  Facebook,
  Hash,
  AtSign
} from 'lucide-react';
import calangoicone from '../assets/imagens/calangoicone.png';
import NewsletterForm from './NewsletterForm';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/catitodev", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Hash, href: "#", label: "Reddit" },
    { icon: AtSign, href: "#", label: "Mastodon" },
    { icon: MessageCircle, href: "https://poe.com/calangoflux", label: "Poe AI Agents" }
  ];

  const footerLinks: {
    [key: string]: Array<{ name: string; href: string; external?: boolean }>
  } = {
    "Plataforma": [
      { name: "AideaFlux - 100+ LLMs Gratuitos", href: "https://aideaflux.xyz", external: true },
      { name: "CalangoHub - Portfólio de Aplicações", href: "https://v0-calango-flux-hub-app-s6-hsf66agxt-catitodevs-projects.vercel.app/", external: true },
      { name: "Agentes Poe", href: "https://poe.com/calangoflux", external: true },
    ],
    "Serviços": [
      { name: "Branding & Rebranding", href: "#contato" },
      { name: "Desenvolvimento Web", href: "#contato" },
      { name: "Automação Agentic", href: "#features" },
      { name: "Integrações Sociais", href: "#contato" }
    ],
    "Empresa": [
      { name: "Sobre Nós", href: "#sobre" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Transparência", href: "#sobre" },
      { name: "Contato", href: "#contato" }
    ]
  };

  return (
    <footer className="bg-[var(--bg-primary)] text-[var(--text-primary)] border-t border-[var(--bg-elevated)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              <img className="w-10 h-10" src={calangoicone} alt="CalangoFlux" />
              <span className="ml-3 text-xl font-bold">
                Calango<span className="text-[var(--accent-primary)]">Flux</span>
              </span>
            </div>
            
            <p className="text-[var(--text-secondary)] mb-6 text-sm leading-relaxed">
              Propósito CalangoFlux: Fluxo Vivo, Impacto Real: Conectando Pessoas, Dados e Regeneração.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-[var(--text-muted)]">
                <Mail className="w-4 h-4 mr-2 text-[var(--accent-primary)]" />
                <span>calangoflux@proton.me</span>
              </div>
              <div className="flex items-center text-sm text-[var(--text-muted)]">
                <MapPin className="w-4 h-4 mr-2 text-[var(--accent-primary)]" />
                <span>Brasil • Remoto</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors text-sm flex items-center group"
                    >
                      {link.name}
                      {link.external && (
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-[var(--bg-elevated)] pt-8 mt-12"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors p-2 rounded-full hover:bg-[var(--bg-elevated)]/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            
            <div className="text-center sm:text-right">
              <p className="text-[var(--text-muted)] text-sm">
                © {currentYear} CalangoFlux. Todos os direitos reservados.
              </p>
              <p className="text-[var(--text-muted)] text-xs mt-1">
                Desenvolvido com 💚 no Brasil
              </p>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-[var(--bg-elevated)] flex flex-col items-center text-center"
        >
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Receba novidades da CalangoFlux
          </h3>
          <p className="text-[var(--text-muted)] text-sm mb-4">
            Inscreva-se na nossa newsletter para atualizações sobre IA, Web3 e tecnologias regenerativas.
          </p>
          <NewsletterForm />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-8 pt-8 border-t border-[var(--bg-elevated)]"
        >
          <p className="text-[var(--text-secondary)] mb-4 text-sm">
            Pronto para transformar sua presença digital?
          </p>
          <motion.a
            href="https://aideaflux.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-[var(--bg-primary)] font-semibold rounded-lg transition-all duration-300 shadow-glow-sm hover:shadow-glow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Acesse 100+ LLMs Gratuitos
            <ExternalLink className="w-4 h-4 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
