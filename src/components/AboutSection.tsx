import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Leaf, Users, Sparkles, TreePine, Waves, Lightbulb, Target, Zap } from 'lucide-react';
import { Badge } from './ui/badge';
import calangoicone from '../assets/imagens/calangoicone.png';

export default function AboutSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const journeySteps = [
    {
      id: 1,
      title: "Chamado Visceral",
      icon: Heart,
      color: "from-red-400 to-pink-500",
      description: "Uma urgência silenciosa crescendo entre pai e filha diante de um mundo desconectado da natureza e do que realmente importa.",
      position: { x: 10, y: 20 }
    },
    {
      id: 2,
      title: "Bagagens Convergentes",
      icon: TreePine,
      color: "from-green-400 to-emerald-500",
      description: "Pai: superações, permacultura, agroecologia, software livre. Filha: visão sistêmica, pensamento crítico, sensibilidade artística.",
      position: { x: 35, y: 10 }
    },
    {
      id: 3,
      title: "Pacto Intergeracional",
      icon: Users,
      color: "from-blue-400 to-indigo-500",
      description: "Questionamentos que nutriram um compromisso entre gerações, criando um espaço de aprendizagem e transformação mútua.",
      position: { x: 65, y: 15 }
    },
    {
      id: 4,
      title: "Abraço Tecnológico",
      icon: Zap,
      color: "from-purple-400 to-violet-500",
      description: "Tecnologia não como fim, mas como caminho possível para interlocução contemporânea e multiconexões potencializadoras.",
      position: { x: 85, y: 35 }
    },
    {
      id: 5,
      title: "Fluxos Regenerativos",
      icon: Waves,
      color: "from-cyan-400 to-teal-500",
      description: "Ressignificando sistemas inteiros em fluxos regenerativos: planetas, seres sencientes, humanos, digitais, etéreos.",
      position: { x: 70, y: 60 }
    },
    {
      id: 6,
      title: "Organismo Vivo",
      icon: Sparkles,
      color: "from-amber-400 to-orange-500",
      description: "Mais que empresa ou projeto: um gesto de amor radical, um compromisso de códigos digitais a serviço da vida.",
      position: { x: 40, y: 75 }
    },
    {
      id: 7,
      title: "Códigos da Vida",
      icon: Lightbulb,
      color: "from-yellow-400 to-amber-500",
      description: "Compromisso geracional: deixar um mundo onde códigos digitais estejam a serviço da vida, como códigos cromossomais.",
      position: { x: 15, y: 55 }
    }
  ];

  const connectionPaths = [
    { from: 1, to: 2, path: "M 15 25 Q 25 15 30 15" },
    { from: 2, to: 3, path: "M 40 15 Q 52 12 60 20" },
    { from: 3, to: 4, path: "M 70 20 Q 78 25 80 40" },
    { from: 4, to: 5, path: "M 85 45 Q 80 52 75 55" },
    { from: 5, to: 6, path: "M 65 65 Q 55 70 45 70" },
    { from: 6, to: 7, path: "M 35 75 Q 25 65 20 60" },
    { from: 7, to: 1, path: "M 15 50 Q 12 35 12 25" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary-100 text-primary-800 border-primary-200">
            <Heart className="w-3 h-3 mr-1" />
            Nossa Jornada
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Um{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Chamado Visceral
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A CalangoFlux não nasceu de um plano de negócios. Nasceu de um chamado visceral, 
            de uma urgência silenciosa que cresceu entre pai e filha.
          </p>
        </motion.div>

        {/* Infográfico Interativo */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-white/80 to-primary-50/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
          >
            {/* SVG Container para o Workflow */}
            <div className="relative w-full h-[500px] md:h-[600px]">
              
              {/* Conexões Orgânicas */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {connectionPaths.map((connection, index) => (
                  <motion.path
                    key={`${connection.from}-${connection.to}`}
                    d={connection.path}
                    stroke="url(#pathGradient)"
                    strokeWidth="0.5"
                    fill="none"
                    strokeDasharray="2,2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ 
                      duration: 2, 
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </svg>

              {/* Steps do Workflow */}
              {journeySteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${step.position.x}%`,
                      top: `${step.position.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  >
                    {/* Círculo Pulsante */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Anel Pulsante */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-30`}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.1, 0.3]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        style={{ width: '80px', height: '80px' }}
                      />
                      
                      {/* Círculo Principal */}
                      <motion.div
                        className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${step.color} shadow-lg flex items-center justify-center text-white`}
                        whileHover={{ 
                          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                          y: -2
                        }}
                      >
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                      </motion.div>
                      
                      {/* Título */}
                      <motion.div
                        className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        <span className="text-sm md:text-base font-bold text-secondary-900 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                          {step.title}
                        </span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Logo Central */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 1.5, type: "spring" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 p-3 shadow-xl"
                >
                  <img 
                    src={calangoicone} 
                    alt="CalangoFlux" 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Card Explicativo Flutuante */}
        <AnimatePresence>
          {activeStep && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setActiveStep(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-gray-100"
                layoutId={`step-${activeStep}`}
              >
                {(() => {
                  const step = journeySteps.find(s => s.id === activeStep);
                  if (!step) return null;
                  const IconComponent = step.icon;
                  
                  return (
                    <>
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mr-4`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-secondary-900">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      <button
                        onClick={() => setActiveStep(null)}
                        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-lg font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-200"
                      >
                        Fechar
                      </button>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Significado do Nome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 text-center mb-8">
            O Nome?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="text-center bg-white rounded-xl p-6 shadow-lg"
            >
              <TreePine className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-secondary-900 mb-2">Calango</h4>
              <p className="text-gray-700">
                Presente em diferentes biomas brasileiros, com sua agilidade, 
                pés no chão, olhos atentos ao mundo.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="text-center bg-white rounded-xl p-6 shadow-lg"
            >
              <Waves className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-secondary-900 mb-2">Flux</h4>
              <p className="text-gray-700">
                O fluxo da água, das ideias, do tempo, dos processos de aprendizagem, 
                das dinâmicas sistêmicas.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Essência Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-secondary-900 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-2xl md:text-3xl font-bold mb-8"
            >
              Essa criação entre pai e filha é mais que uma empresa ou um projeto.
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed"
            >
              É o compromisso de deixar para as gerações futuras, um mundo onde os códigos digitais 
              estejam a serviço da vida, assim como os códigos originários cromossomais.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}