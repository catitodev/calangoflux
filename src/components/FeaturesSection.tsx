import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Cpu } from 'lucide-react';
import { Badge } from './ui/badge';
import calangoicone from '../assets/imagens/calangoicone.png';

const FeaturesSection = () => {
  const [activeSegment, setActiveSegment] = useState<number | null>(null);

  const automationSteps = [
    {
      id: 1,
      title: "Input Trigger",
      subtitle: "Entrada de Dados",
      description: "Recebe inputs de múltiplas fontes: WhatsApp, Telegram, APIs, webhooks. Sistema de parsing inteligente identifica contexto e intenção do usuário.",
      status: "Funcional",
      color: "#10b981", // emerald-500
      angle: { start: 0, end: 45 }
    },
    {
      id: 2,
      title: "IA Processing",
      subtitle: "Processamento Inteligente",
      description: "Engine de IA analisa contexto, classifica intenções e determina fluxo de automação apropriado. Integração com múltiplos LLMs para máxima precisão.",
      status: "Em Desenvolvimento",
      color: "#3b82f6", // blue-500
      angle: { start: 45, end: 90 }
    },
    {
      id: 3,
      title: "Decision Engine",
      subtitle: "Motor de Decisão",
      description: "Algoritmos de decisão baseados em regras e ML. Roteamento inteligente para diferentes workflows baseado no contexto e histórico.",
      status: "Protótipo",
      color: "#8b5cf6", // violet-500
      angle: { start: 90, end: 135 }
    },
    {
      id: 4,
      title: "Knowledge Base",
      subtitle: "Base de Conhecimento",
      description: "Integração com Tana para armazenamento dinâmico. Contexto persistente e aprendizado contínuo dos padrões de uso e preferências.",
      status: "Roadmap",
      color: "#06b6d4", // cyan-500
      angle: { start: 135, end: 180 }
    },
    {
      id: 5,
      title: "Workflow Engine",
      subtitle: "Motor de Automação",
      description: "Execução de workflows complexos com Abacus. Orquestração de múltiplos agentes e sistemas externos com monitoramento em tempo real.",
      status: "MVP",
      color: "#f59e0b", // amber-500
      angle: { start: 180, end: 225 }
    },
    {
      id: 6,
      title: "API Gateway",
      subtitle: "Gateway de Integração",
      description: "Hub central para integrações externas. Conecta com CRMs, ERPs, plataformas de comunicação e serviços de terceiros de forma segura.",
      status: "Básico",
      color: "#ef4444", // red-500
      angle: { start: 225, end: 270 }
    },
    {
      id: 7,
      title: "Analytics Engine",
      subtitle: "Motor de Análise",
      description: "Coleta métricas em tempo real, gera insights e alimenta loops de feedback para otimização contínua dos workflows e performance.",
      status: "Parcial",
      color: "#ec4899", // pink-500
      angle: { start: 270, end: 315 }
    },
    {
      id: 8,
      title: "Response Delivery",
      subtitle: "Entrega de Resposta",
      description: "Sistema de entrega multi-canal com formatação inteligente. Adapta resposta ao canal e contexto do usuário para máxima efetividade.",
      status: "Funcional",
      color: "#22c55e", // green-500
      angle: { start: 315, end: 360 }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Funcional": return "bg-green-100 text-green-800 border-green-200";
      case "MVP": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Protótipo": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Em Desenvolvimento": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Parcial": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Básico": return "bg-gray-100 text-gray-800 border-gray-200";
      case "Roadmap": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

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

  return (
    <section id="features" className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Cpu className="w-3 h-3 mr-1" />
            Arquitetura de Automação
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Ecossistema{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Agentic
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Nossa arquitetura circular integrada. Clique em cada segmento para explorar 
            os componentes do nosso ecossistema de automação inteligente.
          </p>
        </motion.div>

        {/* Circular Diagram */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-full shadow-2xl p-8 md:p-12"
          >
            {/* SVG Circle */}
            <div className="relative w-full max-w-2xl mx-auto aspect-square">
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full transform -rotate-90"
              >
                {/* Background Circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="2"
                  opacity="0.3"
                />
                
                {/* Segments */}
                {automationSteps.map((step, index) => (
                  <motion.path
                    key={step.id}
                    d={describeArc(200, 200, 180, step.angle.start, step.angle.end)}
                    fill={step.color}
                    stroke="#ffffff"
                    strokeWidth="3"
                    className="cursor-pointer transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 0.7,
                      scale: 1
                    }}
                    whileHover={{ 
                      opacity: 0.9,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    onClick={() => setActiveSegment(activeSegment === step.id ? null : step.id)}
                  />
                ))}
                
                {/* Inner Circle for Logo */}
                <circle
                  cx="200"
                  cy="200"
                  r="80"
                  fill="white"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  className="drop-shadow-lg"
                />
              </svg>
              
              {/* Logo Central - Corrigido e Simplificado */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <img 
                    src={calangoicone} 
                    alt="CalangoFlux" 
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>
              </motion.div>
              
              {/* Cards Transparentes Posicionados sobre as Cores */}
              {automationSteps.map((step, index) => {
                const middleAngle = (step.angle.start + step.angle.end) / 2;
                const cardRadius = 130; // Posicionado sobre o círculo colorido
                const cardPos = polarToCartesian(200, 200, cardRadius, middleAngle);
                
                return (
                  <motion.div
                    key={`card-${step.id}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                    className="absolute text-center cursor-pointer"
                    style={{
                      left: `${((cardPos.x / 400) * 100)}%`,
                      top: `${((cardPos.y / 400) * 100)}%`,
                      transform: 'translate(-50%, -50%)',
                      maxWidth: '140px'
                    }}
                    onClick={() => setActiveSegment(activeSegment === step.id ? null : step.id)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-3 shadow-lg border border-white/30 transition-all duration-300 hover:bg-white/30"
                    >
                      <h4 className="text-sm font-bold text-white leading-tight mb-2 drop-shadow-lg">
                        {step.title}
                      </h4>
                      <div className={`text-xs px-2 py-1 rounded-full border bg-white/90 ${getStatusColor(step.status).replace('bg-', '').replace('text-', 'text-').replace('border-', 'border-')}`}>
                        {step.status}
                      </div>
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
                className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl border border-gray-100 relative overflow-hidden"
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
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mr-4 shadow-lg"
                          style={{ backgroundColor: step.color }}
                        >
                          <span className="text-2xl font-bold">
                            {step.id}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 font-medium">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border mb-4 ${getStatusColor(step.status)}`}>
                        {step.status}
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
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

        {/* Status Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto"
        >
          {[
            { status: "Funcional", count: 2 },
            { status: "MVP", count: 1 },
            { status: "Protótipo", count: 1 },
            { status: "Em Desenvolvimento", count: 1 },
            { status: "Parcial", count: 1 },
            { status: "Básico", count: 1 },
            { status: "Roadmap", count: 1 }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border mb-2 ${getStatusColor(item.status)}`}>
                {item.status}
              </div>
              <div className="text-xs text-gray-600">
                {item.count} componente{item.count > 1 ? 's' : ''}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Arquitetura Circular Integrada
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Cada componente trabalha em harmonia para criar um ecossistema agentic completo e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Explorar Arquitetura
              </button>
              <button className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-all duration-200">
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