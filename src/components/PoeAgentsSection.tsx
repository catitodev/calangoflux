import { motion } from 'framer-motion';
import { ExternalLink, Users, MessageSquare } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const PoeAgentsSection = () => {
  return (
    <section className="section bg-[var(--bg-primary)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-[var(--bg-elevated)] text-[var(--text-secondary)]">
            <Users className="w-3 h-3 mr-1" />
            Agentes Especializados
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            11 Agentes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              Personalizados
            </span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
            Acesse nossos agentes especializados na plataforma Poe. Cada um é especialista 
            em uma área específica para atender suas necessidades com precisão.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:opacity-90 text-[var(--bg-primary)] px-8 py-3 text-lg mb-12"
            >
              <a 
                href="https://poe.com/calangoflux" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Experiencie Aqui!
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Texto CTA substituindo os 11 cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-4 leading-relaxed">
              A CalangoFlux desenvolveu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] font-bold">
                11 agentes personalizados
              </span>{' '}
              disponíveis na Poe gratuitamente.
            </p>
            <p className="text-xl text-[var(--text-secondary)] font-medium">
              É só acessar! 🚀
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl p-8 text-[var(--bg-primary)] max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Como Usar os Agentes Poe
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[var(--bg-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Acesse o Perfil</h4>
                <p className="text-sm opacity-90">Vá para poe.com/@calangoflux</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[var(--bg-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Escolha o Agente</h4>
                <p className="text-sm opacity-90">Selecione por especialidade</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[var(--bg-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Converse</h4>
                <p className="text-sm opacity-90">Obtenha respostas especializadas</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                asChild
                className="bg-[var(--bg-primary)] text-[var(--accent-primary)] hover:bg-[var(--bg-surface)] px-8 py-3 text-lg"
              >
                <a 
                  href="https://poe.com/calangoflux" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Teste Agentes Agora
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="bg-[var(--bg-surface)] border border-[var(--bg-elevated)] rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              🤖 Integração em Desenvolvimento
            </h3>
            <p className="text-[var(--text-secondary)] text-sm">
              Estamos trabalhando para integrar estes agentes diretamente na plataforma AideaFlux. 
              Em breve, tudo funcionará de forma nativa e unificada!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PoeAgentsSection;
