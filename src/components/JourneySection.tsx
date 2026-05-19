import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Users, Target, Zap, Heart, Sparkles } from 'lucide-react';
import { Badge } from './ui/badge';

export default function JourneySection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const journeySteps = [
    {
      id: 1,
      title: "Identificamos o Problema",
      icon: Target,
      color: "from-red-400 to-pink-500",
      description: "Começamos entendendo exatamente qual é o seu desafio. Seja automatizar processos, criar um site ou desenvolver um chatbot - primeiro precisamos saber onde você quer chegar.",
      emoji: "🎯",
      simple: "Entendemos seu desafio"
    },
    {
      id: 2,
      title: "Criamos a Solução Perfeita",
      icon: Sparkles,
      color: "from-blue-400 to-indigo-500",
      description: "Com tecnologia de ponta, desenvolvemos uma solução sob medida para você. Usamos IA, automação e design moderno para resolver seu problema de forma inteligente e eficiente.",
      emoji: "✨",
      simple: "Desenvolvemos a solução ideal"
    },
    {
      id: 3,
      title: "Lançamos a Solução",
      icon: Rocket,
      color: "from-emerald-400 to-teal-500",
      description: "Sua solução vai ao ar funcionando perfeitamente. Cuidamos de toda a parte técnica, configurações e testes para que você possa focar no que realmente importa: seus resultados.",
      emoji: "🚀",
      simple: "Lançamos tudo funcionando"
    },
    {
      id: 4,
      title: "Acompanhamos os Resultados",
      icon: Heart,
      color: "from-purple-400 to-violet-500",
      description: "Não abandonamos você após a entrega. Monitoramos o desempenho, fazemos ajustes necessários e garantimos que você esteja obtendo os melhores resultados possíveis.",
      emoji: "💚",
      simple: "Cuidamos dos seus resultados"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[var(--bg-surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30">
            <Zap className="w-3 h-3 mr-1" />
            Nossa Jornada
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Como{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              Trabalhamos
            </span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Um processo simples e eficiente para transformar suas ideias em realidade
          </p>
        </motion.div>

        {/* Timeline Horizontal */}
        <div className="relative">
          {/* Linha conectora */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-primary)]/20 via-[var(--accent-secondary)]/20 to-[var(--accent-primary)]/20 rounded-full transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Card */}
                  <motion.div
                    className="bg-[var(--bg-primary)] rounded-2xl p-6 shadow-lg border border-[var(--bg-elevated)] hover:border-[var(--accent-primary)]/30 transition-all duration-300 cursor-pointer group min-h-[200px] flex flex-col"
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  >
                    {/* Número do passo */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="text-2xl font-bold text-[var(--bg-elevated)]">
                          0{step.id}
                        </div>
                      </div>
                      <div className="text-3xl">
                        {step.emoji}
                      </div>
                    </div>

                    {/* Título */}
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                      {step.title}
                    </h3>

                    {/* Descrição simples */}
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 flex-1">
                      {step.simple}
                    </p>

                    {/* CTA */}
                    <div className="text-[var(--accent-primary)] text-sm font-medium mt-auto">
                      Clique para saber mais →
                    </div>
                  </motion.div>

                  {/* Seta conectora (apenas desktop) */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                        className="w-8 h-8 bg-[var(--bg-surface)] rounded-full shadow-lg flex items-center justify-center border-2 border-[var(--accent-primary)]/30"
                      >
                        <div className="w-0 h-0 border-l-[6px] border-l-[var(--accent-primary)] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 border border-[var(--accent-primary)]/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              Pronto para começar sua jornada? 🚀
            </h3>
            <p className="text-lg mb-6 text-[var(--text-secondary)]">
              Vamos conversar sobre seu projeto e transformar suas ideias em realidade
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--accent-primary)] text-[var(--bg-primary)] px-8 py-3 rounded-xl font-semibold hover:bg-[var(--accent-primary)]/90 transition-colors shadow-glow-sm hover:shadow-glow-md"
              onClick={() => {
                const chatbot = document.querySelector('#calangobot') as HTMLElement;
                chatbot?.click();
              }}
            >
              Começar Agora! 💬
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal Detalhado */}
      <AnimatePresence>
        {activeStep && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveStep(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--bg-surface)] border border-[var(--bg-elevated)] rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl"
            >
              {(() => {
                const step = journeySteps.find(s => s.id === activeStep);
                if (!step) return null;
                const IconComponent = step.icon;
                
                return (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mr-4 shadow-lg`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="text-sm text-[var(--text-muted)] font-medium">Passo 0{step.id}</div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-8 text-lg">
                      {step.description}
                    </p>
                    
                    <button
                      onClick={() => setActiveStep(null)}
                      className="w-full bg-[var(--accent-primary)] text-[var(--bg-primary)] py-4 rounded-xl font-semibold hover:bg-[var(--accent-primary)]/90 transition-all duration-200 shadow-glow-sm"
                    >
                      Entendi! ✨
                    </button>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
