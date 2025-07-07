import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Brain, 
  Zap, 
  Target, 
  Shield, 
  Workflow, 
  BarChart3, 
  MessageSquare, 
  Settings,
  Database,
  Cloud,
  Gauge,
  Users,
  Wrench,
  Play,
  CheckCircle,
  Clock,
  ArrowRight,
  GitBranch,
  Cpu,
  Network
} from 'lucide-react';
import { Badge } from './ui/badge';

const FeaturesSection = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [flowAnimation, setFlowAnimation] = useState(false);

  const automationNodes = [
    {
      id: 1,
      type: "trigger",
      title: "Input Trigger",
      subtitle: "Entrada de Dados",
      description: "Recebe inputs de múltiplas fontes: WhatsApp, Telegram, APIs, webhooks. Sistema de parsing inteligente identifica contexto e intenção.",
      icon: MessageSquare,
      status: "Funcional",
      color: "from-green-400 to-emerald-500",
      position: { x: 5, y: 20 },
      connections: [2]
    },
    {
      id: 2,
      type: "processor",
      title: "IA Processing",
      subtitle: "Processamento Inteligente",
      description: "Engine de IA analisa contexto, classifica intenções e determina fluxo de automação apropriado. Integração com múltiplos LLMs.",
      icon: Brain,
      status: "Em Desenvolvimento",
      color: "from-blue-400 to-indigo-500",
      position: { x: 25, y: 15 },
      connections: [3, 4]
    },
    {
      id: 3,
      type: "decision",
      title: "Decision Engine",
      subtitle: "Motor de Decisão",
      description: "Algoritmos de decisão baseados em regras e ML. Roteamento inteligente para diferentes workflows baseado no contexto.",
      icon: GitBranch,
      status: "Protótipo",
      color: "from-purple-400 to-violet-500",
      position: { x: 50, y: 10 },
      connections: [5, 6]
    },
    {
      id: 4,
      type: "database",
      title: "Knowledge Base",
      subtitle: "Base de Conhecimento",
      description: "Integração com Tana para armazenamento dinâmico. Contexto persistente e aprendizado contínuo dos padrões de uso.",
      icon: Database,
      status: "Roadmap",
      color: "from-cyan-400 to-teal-500",
      position: { x: 45, y: 35 },
      connections: [7]
    },
    {
      id: 5,
      type: "automation",
      title: "Workflow Engine",
      subtitle: "Motor de Automação",
      description: "Execução de workflows complexos com Abacus. Orquestração de múltiplos agentes e sistemas externos.",
      icon: Workflow,
      status: "MVP",
      color: "from-orange-400 to-red-500",
      position: { x: 70, y: 15 },
      connections: [8]
    },
    {
      id: 6,
      type: "integration",
      title: "API Gateway",
      subtitle: "Gateway de Integração",
      description: "Hub central para integrações externas. Conecta com CRMs, ERPs, plataformas de comunicação e serviços de terceiros.",
      icon: Network,
      status: "Básico",
      color: "from-yellow-400 to-amber-500",
      position: { x: 70, y: 40 },
      connections: [8]
    },
    {
      id: 7,
      type: "analytics",
      title: "Analytics Engine",
      subtitle: "Motor de Análise",
      description: "Coleta métricas em tempo real, gera insights e alimenta loops de feedback para otimização contínua dos workflows.",
      icon: BarChart3,
      status: "Parcial",
      color: "from-pink-400 to-rose-500",
      position: { x: 50, y: 60 },
      connections: [8]
    },
    {
      id: 8,
      type: "output",
      title: "Response Delivery",
      subtitle: "Entrega de Resposta",
      description: "Sistema de entrega multi-canal com formatação inteligente. Adapta resposta ao canal e contexto do usuário.",
      icon: Target,
      status: "Funcional",
      color: "from-emerald-400 to-green-500",
      position: { x: 90, y: 30 },
      connections: []
    }
  ];

  const connectionPaths = [
    { from: 1, to: 2, path: "M 10 25 Q 17 20 20 20", type: "primary" },
    { from: 2, to: 3, path: "M 30 20 Q 40 15 45 15", type: "primary" },
    { from: 2, to: 4, path: "M 30 20 Q 37 27 40 30", type: "secondary" },
    { from: 3, to: 5, path: "M 55 15 Q 62 15 65 20", type: "primary" },
    { from: 3, to: 6, path: "M 55 15 Q 62 27 65 35", type: "conditional" },
    { from: 4, to: 7, path: "M 50 40 Q 50 50 50 55", type: "data" },
    { from: 5, to: 8, path: "M 75 20 Q 82 25 85 25", type: "primary" },
    { from: 6, to: 8, path: "M 75 35 Q 82 32 85 30", type: "integration" },
    { from: 7, to: 8, path: "M 55 65 Q 70 50 85 35", type: "feedback" }
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

  const getPathStyle = (type: string) => {
    switch (type) {
      case "primary": return "stroke-blue-500 stroke-2";
      case "secondary": return "stroke-green-500 stroke-2 stroke-dasharray-4";
      case "conditional": return "stroke-purple-500 stroke-2 stroke-dasharray-2";
      case "data": return "stroke-cyan-500 stroke-2";
      case "integration": return "stroke-orange-500 stroke-2";
      case "feedback": return "stroke-pink-500 stroke-2 stroke-dasharray-6";
      default: return "stroke-gray-400 stroke-1";
    }
  };

  const startFlowAnimation = () => {
    setFlowAnimation(true);
    setTimeout(() => setFlowAnimation(false), 5000);
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
            Fluxo de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Automação Agentic
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Explore nossa arquitetura de automação inteligente. Cada nó representa um componente 
            especializado em nosso ecossistema agentic.
          </p>
          
          <motion.button
            onClick={startFlowAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Play className="w-4 h-4" />
            Simular Fluxo de Automação
          </motion.button>
        </motion.div>

        {/* Workflow Diagram */}
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 overflow-hidden"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }} />
            </div>

            {/* Workflow Container */}
            <div className="relative w-full h-[600px] md:h-[700px]">
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                  </marker>
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
                    className={getPathStyle(connection.type)}
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: flowAnimation ? 1 : 0.7 
                    }}
                    transition={{ 
                      duration: flowAnimation ? 0.5 : 2, 
                      delay: flowAnimation ? index * 0.2 : index * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </svg>

              {/* Automation Nodes */}
              {automationNodes.map((node, index) => {
                const IconComponent = node.icon;
                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 120
                    }}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `${node.position.x}%`,
                      top: `${node.position.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                  >
                    {/* Node Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${node.color} opacity-20 blur-xl`}
                      animate={{ 
                        scale: flowAnimation ? [1, 1.3, 1] : [1, 1.1, 1],
                        opacity: flowAnimation ? [0.2, 0.4, 0.2] : [0.2, 0.3, 0.2]
                      }}
                      transition={{ 
                        duration: flowAnimation ? 1 : 3,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                      style={{ width: '120px', height: '120px' }}
                    />
                    
                    {/* Main Node */}
                    <motion.div
                      className={`relative bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-4 min-w-[100px] max-w-[140px] transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                        y: -5
                      }}
                      animate={{
                        borderColor: flowAnimation ? "#3b82f6" : "#e5e7eb",
                        boxShadow: flowAnimation ? "0 20px 40px rgba(59,130,246,0.3)" : "0 10px 25px rgba(0,0,0,0.1)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Icon */}
                      <div className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-r ${node.color} flex items-center justify-center text-white shadow-lg`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-sm font-bold text-gray-900 text-center mb-1 leading-tight">
                        {node.title}
                      </h4>
                      
                      {/* Subtitle */}
                      <p className="text-xs text-gray-600 text-center mb-2 leading-tight">
                        {node.subtitle}
                      </p>
                      
                      {/* Status Badge */}
                      <div className={`text-xs px-2 py-1 rounded-full text-center border ${getStatusColor(node.status)}`}>
                        {node.status}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Node Detail Modal */}
        <AnimatePresence>
          {activeNode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setActiveNode(null)}
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
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-3xl opacity-30 -mr-16 -mt-16" />
                
                {(() => {
                  const node = automationNodes.find(n => n.id === activeNode);
                  if (!node) return null;
                  const IconComponent = node.icon;
                  
                  return (
                    <div className="relative">
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${node.color} flex items-center justify-center text-white mr-4 shadow-lg`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                            {node.title}
                          </h3>
                          <p className="text-gray-600 font-medium">
                            {node.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border mb-4 ${getStatusColor(node.status)}`}>
                        {node.status}
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base">
                        {node.description}
                      </p>
                      
                      <button
                        onClick={() => setActiveNode(null)}
                        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 md:py-4 rounded-xl font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        Entendido
                      </button>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto"
        >
          {[
            { color: "bg-blue-500", label: "Fluxo Principal" },
            { color: "bg-green-500", label: "Dados Secundários" },
            { color: "bg-purple-500", label: "Decisões Condicionais" },
            { color: "bg-cyan-500", label: "Armazenamento" },
            { color: "bg-orange-500", label: "Integrações" },
            { color: "bg-pink-500", label: "Feedback Loop" }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div className={`w-4 h-1 ${item.color} rounded`} />
              <span className="text-gray-700">{item.label}</span>
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
              Pronto para Automatizar seu Negócio?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nossa arquitetura agentic está sendo desenvolvida para transformar como você trabalha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Solicitar Demo Técnica
              </button>
              <button className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Ver Documentação
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;