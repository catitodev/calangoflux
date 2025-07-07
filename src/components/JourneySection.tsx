import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Sparkles, Lightbulb, Zap, Leaf, TreePine } from 'lucide-react';
import { Badge } from './ui/badge';

export default function JourneySection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const journeySteps = [
    {
      id: 1,
      title: "Organismo Vivo",
      icon: Sparkles,
      color: "from-emerald-400 to-teal-500",
      description: "Mais que uma empresa ou projeto, somos um organismo vivo que respira, cresce e se adapta. Cada interação, cada projeto, cada conexão alimenta nossa evolução contínua.",
      position: { x: 20, y: 25 }
    },
    {
      id: 2,
      title: "Gesto de Amor Radical",
      icon: Heart,
      color: "from-rose-400 to-pink-500",
      description: "Cada linha de código, cada solução, cada inovação nasce do amor radical pela vida e pelo futuro. É o combustível que move nossas decisões e cria impacto real.",
      position: { x: 50, y: 15 }
    },
    {
      id: 3,
      title: "Compromisso Geracional",
      icon: Users,
      color: "from-blue-400 to-indigo-500",
      description: "Trabalhamos hoje pensando nas gerações futuras. Cada tecnologia desenvolvida carrega a responsabilidade de deixar um mundo melhor para quem virá.",
      position: { x: 80, y: 30 }
    },
    {
      id: 4,
      title: "Códigos da Vida",
      icon: Lightbulb,
      color: "from-amber-400 to-orange-500",
      description: "Assim como os códigos cromossomais organizam a vida, nossos códigos digitais devem servir à vida, criando harmonia entre tecnologia e natureza.",
      position: { x: 70, y: 65 }
    },
    {
      id: 5,
      title: "Fluxos Regenerativos",
      icon: Leaf,
      color: "from-green-400 to-emerald-500",
      description: "Desenvolvemos sistemas que regeneram, não apenas sustentam. Cada projeto busca criar ciclos virtuosos que beneficiam ecossistemas inteiros.",
      position: { x: 40, y: 75 }
    },
    {
      id: 6,
      title: "Multiconexões",
      icon: Zap,
      color: "from-purple-400 to-violet-500",
      description: "Conectamos pessoas, dados, ideias e natureza em redes inteligentes. Cada conexão potencializa outras, criando um efeito multiplicador de impacto.",
      position: { x: 15, y: 55 }
    }
  ];

  const connectionPaths = [
    { from: 1, to: 2, path: "M 25 30 Q 35 20 45 20" },
    { from: 2, to: 3, path: "M 55 20 Q 67 22 75 35" },
    { from: 3, to: 4, path: "M 80 40 Q 78 50 75 60" },
    { from: 4, to: 5, path: "M 65 70 Q 55 75 45 70" },
    { from: 5, to: 6, path: "M 35 75 Q 25 65 20 60" },
    { from: 6, to: 1, path: "M 15 50 Q 15 35 20 30" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50/30 via-white to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-secondary-100 text-secondary-800 border-secondary-200">
            <TreePine className="w-3 h-3 mr-1" />
            Nossa Jornada
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Fluxos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Regenerativos
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore os princípios que guiam nossa jornada de transformação digital regenerativa
          </p>
        </motion.div>

        {/* Infográfico Interativo Orgânico */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-white/80 to-secondary-50/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 overflow-hidden"
          >
            {/* Elementos de Fundo Orgânicos */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-secondary-200/20 to-primary-200/20 rounded-full blur-3xl"
              />
            </div>

            {/* Container do Workflow */}
            <div className="relative w-full h-[400px] md:h-[500px]">
              
              {/* Conexões Orgânicas SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="organicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {connectionPaths.map((connection, index) => (
                  <motion.path
                    key={`${connection.from}-${connection.to}`}
                    d={connection.path}
                    stroke="url(#organicGradient)"
                    strokeWidth="0.8"
                    fill="none"
                    strokeDasharray="3,3"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ 
                      duration: 2.5, 
                      delay: index * 0.4,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </svg>

              {/* Nós Interativos */}
              {journeySteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 120,
                      damping: 8
                    }}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `${step.position.x}%`,
                      top: `${step.position.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  >
                    {/* Anel Pulsante */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-20`}
                      animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0.05, 0.2]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.7,
                        ease: "easeInOut"
                      }}
                      style={{ width: '100px', height: '100px' }}
                    />
                    
                    {/* Círculo Principal */}
                    <motion.div
                      className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${step.color} shadow-xl flex items-center justify-center text-white transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.15,
                        boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                        y: -5
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                    </motion.div>
                    
                    {/* Título Flutuante */}
                    <motion.div
                      className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      <span className="text-xs md:text-sm font-bold text-secondary-900 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-white/20">
                        {step.title}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Modal Explicativo */}
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
                className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-gray-100 relative overflow-hidden"
              >
                {/* Elemento decorativo de fundo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-3xl opacity-30 -mr-16 -mt-16" />
                
                {(() => {
                  const step = journeySteps.find(s => s.id === activeStep);
                  if (!step) return null;
                  const IconComponent = step.icon;
                  
                  return (
                    <div className="relative">
                      <div className="flex items-center mb-6">
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mr-4 shadow-lg`}>
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-secondary-900">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                        {step.description}
                      </p>
                      
                      <button
                        onClick={() => setActiveStep(null)}
                        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 md:py-4 rounded-xl font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        Compreendido
                      </button>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}