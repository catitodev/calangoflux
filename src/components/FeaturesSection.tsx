import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Cpu } from 'lucide-react';
import { Badge } from './ui/badge';
import calangoicone from '../assets/imagens/calangoicone.png';

const FeaturesSection = () => {
  const [activeSegment, setActiveSegment] = useState<number | null>(null);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  const automationSteps = [
    {
      id: 1,
      title: "Input Trigger",
      subtitle: "Entrada de Dados",
      description: "Recebe inputs de múltiplas fontes: WhatsApp, Telegram, APIs, webhooks. Sistema de parsing inteligente identifica contexto e intenção do usuário.",
      color: "#10b981", // emerald-500
      angle: { start: 0, end: 45 }
    },
    {
      id: 2,
      title: "IA Processing",
      subtitle: "Processamento Inteligente",
      description: "Engine de IA analisa contexto, classifica intenções e determina fluxo de automação apropriado. Integração com múltiplos LLMs para máxima precisão.",
      color: "#3b82f6", // blue-500
      angle: { start: 45, end: 90 }
    },
    {
      id: 3,
      title: "Decision Engine",
      subtitle: "Motor de Decisão",
      description: "Algoritmos de decisão baseados em regras e ML. Roteamento inteligente para diferentes workflows baseado no contexto e histórico.",
      color: "#8b5cf6", // violet-500
      angle: { start: 90, end: 135 }
    },
    {
      id: 4,
      title: "Knowledge Base",
      subtitle: "Base de Conhecimento",
      description: "Integração com Tana para armazenamento dinâmico. Contexto persistente e aprendizado contínuo dos padrões de uso e preferências.",
      color: "#06b6d4", // cyan-500
      angle: { start: 135, end: 180 }
    },
    {
      id: 5,
      title: "Workflow Engine",
      subtitle: "Motor de Automação",
      description: "Execução de workflows complexos com Abacus. Orquestração de múltiplos agentes e sistemas externos com monitoramento em tempo real.",
      color: "#f59e0b", // amber-500
      angle: { start: 180, end: 225 }
    },
    {
      id: 6,
      title: "API Gateway",
      subtitle: "Gateway de Integração",
      description: "Hub central para integrações externas. Conecta com CRMs, ERPs, plataformas de comunicação e serviços de terceiros de forma segura.",
      color: "#ef4444", // red-500
      angle: { start: 225, end: 270 }
    },
    {
      id: 7,
      title: "Analytics Engine",
      subtitle: "Motor de Análise",
      description: "Coleta métricas em tempo real, gera insights e alimenta loops de feedback para otimização contínua dos workflows e performance.",
      color: "#ec4899", // pink-500
      angle: { start: 270, end: 315 }
    },
    {
      id: 8,
      title: "Response Delivery",
      subtitle: "Entrega de Resposta",
      description: "Sistema de entrega multi-canal com formatação inteligente. Adapta resposta ao canal e contexto do usuário para máxima efetividade.",
      color: "#22c55e", // green-500
      angle: { start: 315, end: 360 }
    }
  ];

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", x, y,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  };

  // Função para calcular posição do texto no segmento
  const getTextPosition = (step: typeof automationSteps[0]) => {
    const middleAngle = (step.angle.start + step.angle.end) / 2;
    const textRadius = 115; // Reduzido para aproximar mais do centro
    return polarToCartesian(200, 200, textRadius, middleAngle);
  };

  // Função para calcular posição específica por segmento (ajuste fino)
  const getAdjustedTextPosition = (step: typeof automationSteps[0]) => {
    const basePos = getTextPosition(step);
    
    // Ajustes específicos para cada segmento baseado no ID
    const adjustments: { [key: number]: { x: number; y: number } } = {
      1: { x: -8, y: 0 },   // Input Trigger - mover para esquerda
      2: { x: -12, y: -5 }, // IA Processing - mover para esquerda e um pouco para cima
      3: { x: -8, y: 0 },   // Decision Engine - mover para esquerda
      4: { x: -8, y: 5 },   // Knowledge Base - mover para esquerda e um pouco para baixo
      5: { x: -8, y: 0 },   // Workflow Engine - mover para esquerda
      6: { x: -8, y: -5 },  // API Gateway - mover para esquerda e um pouco para cima
      7: { x: -8, y: 0 },   // Analytics Engine - mover para esquerda
      8: { x: -8, y: 5 }    // Response Delivery - mover para esquerda e um pouco para baixo
    };
    
    const adjustment = adjustments[step.id] || { x: 0, y: 0 };
    
    return {
      x: basePos.x + adjustment.x,
      y: basePos.y + adjustment.y
    };
  };

  return (
    <section id="features" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Cpu className="w-3 h-3 mr-1" />
            Arquitetura de Automação
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4 md:mb-6">
            Ecossistema{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Agentic
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Nossa arquitetura circular integrada. Clique em cada segmento colorido para explorar 
            os componentes do nosso ecossistema de automação inteligente.
          </p>
        </motion.div>

        {/* Circular Diagram - Simplificado */}
        <div className="relative max-w-3xl lg:max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-full shadow-2xl p-4 md:p-6 lg:p-8"
          >
            {/* SVG Circle - Limpo e Elegante */}
            <div className="relative w-full max-w-lg lg:max-w-2xl mx-auto aspect-square">
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full transform -rotate-90"
                style={{ minHeight: '300px' }}
              >
                {/* Background Circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="160"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="2"
                  opacity="0.3"
                />
                
                {/* Segmentos Interativos Limpos */}
                {automationSteps.map((step, index) => (
                  <motion.g key={step.id}>
                    {/* Segmento Principal */}
                    <motion.path
                      d={describeArc(200, 200, 160, step.angle.start, step.angle.end)}
                      fill={step.color}
                      stroke="#ffffff"
                      strokeWidth="3"
                      className="cursor-pointer transition-all duration-300"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: hoveredSegment === step.id ? 1 : 0.85,
                        scale: hoveredSegment === step.id ? 1.02 : 1
                      }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      onMouseEnter={() => setHoveredSegment(step.id)}
                      onMouseLeave={() => setHoveredSegment(null)}
                      onClick={() => setActiveSegment(activeSegment === step.id ? null : step.id)}
                      style={{
                        filter: hoveredSegment === step.id ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))' : 'none'
                      }}
                    />
                    
                    {/* Efeito de Hover - Anel Externo */}
                    <motion.path
                      d={describeArc(200, 200, 170, step.angle.start, step.angle.end)}
                      fill="none"
                      stroke={step.color}
                      strokeWidth="4"
                      opacity="0"
                      className="pointer-events-none"
                      animate={{
                        opacity: hoveredSegment === step.id ? 0.6 : 0,
                        scale: hoveredSegment === step.id ? 1.01 : 1
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.g>
                ))}
                
                {/* Inner Circle for Logo */}
                <circle
                  cx="200"
                  cy="200"
                  r="70"
                  fill="white"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  className="drop-shadow-lg"
                />
              </svg>
              
              {/* Logo Central */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                  <img 
                    src={calangoicone} 
                    alt="CalangoFlux" 
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>
              </motion.div>
              
              {/* Títulos Incorporados nos Segmentos */}
              {automationSteps.map((step, index) => {
                const textPos = getAdjustedTextPosition(step);
                
                return (
                  <motion.div
                    key={`label-${step.id}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                    className="absolute text-center pointer-events-none"
                    style={{
                      left: `${((textPos.x / 400) * 100)}%`,
                      top: `${((textPos.y / 400) * 100)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: hoveredSegment === step.id ? 1.05 : 1,
                        y: hoveredSegment === step.id ? -2 : 0
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <h4 className="text-sm md:text-base font-bold text-white leading-tight drop-shadow-lg">
                        {step.title}
                      </h4>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {activeSegment && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setActiveSegment(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full mx-4 shadow-2xl border border-gray-100 relative overflow-hidden"
              >
                {/* Background Decoration */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 -mr-16 -mt-16" 
                  style={{ 
                    background: `linear-gradient(135deg, ${automationSteps.find(s => s.id === activeSegment)?.color}40, ${automationSteps.find(s => s.id === activeSegment)?.color}20)`
                  }}
                />
                
                {(() => {
                  const step = automationSteps.find(s => s.id === activeSegment);
                  if (!step) return null;
                  
                  return (
                    <div className="relative">
                      <div className="flex items-center mb-6">
                        <div 
                          className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white mr-4 shadow-lg"
                          style={{ backgroundColor: step.color }}
                        >
                          <span className="text-lg md:text-2xl font-bold">
                            {step.id}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600 font-medium">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                        {step.description}
                      </p>
                      
                      <button
                        onClick={() => setActiveSegment(null)}
                        className="w-full text-white py-3 md:py-4 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                        style={{ 
                          background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`
                        }}
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Arquitetura Circular Integrada
            </h3>
            <p className="text-base md:text-lg mb-6 opacity-90">
              Cada segmento colorido é um componente interativo. Clique para explorar nossa arquitetura agentic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-6 md:px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Explorar Arquitetura
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 md:px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Documentação Técnica
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;