import { motion } from 'framer-motion';
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
  Wrench
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Autônoma",
      description: "Agentes que aprendem, decidem e executam ações com autonomia real",
      badge: "Em Desenvolvimento",
      color: "text-primary-600",
      status: "building"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automação Inteligente",
      description: "Fluxos de trabalho que se adaptam e evoluem automaticamente",
      badge: "Protótipo",
      color: "text-secondary-600",
      status: "prototype"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Metas Definidas",
      description: "Agentes focados em objetivos específicos do seu negócio",
      badge: "Planejado",
      color: "text-accent-600",
      status: "planned"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Integração Abacus",
      description: "Conexão com core de dados e automação agentic (em desenvolvimento)",
      badge: "Roadmap",
      color: "text-primary-600",
      status: "planned"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Tana Knowledge Base",
      description: "Banco de conhecimento dinâmico integrado (planejado)",
      badge: "Roadmap",
      color: "text-secondary-600",
      status: "planned"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Multi-Channel",
      description: "WhatsApp, Telegram, Discord - alguns já funcionais",
      badge: "Parcial",
      color: "text-accent-600",
      status: "partial"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Avançada",
      description: "Proteção empresarial com criptografia (em implementação)",
      badge: "Planejado",
      color: "text-primary-600",
      status: "planned"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics",
      description: "Métricas básicas implementadas, dashboard em desenvolvimento",
      badge: "MVP",
      color: "text-secondary-600",
      status: "mvp"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Fluxos Visuais",
      description: "Editor visual para criar comportamentos (em desenvolvimento)",
      badge: "Protótipo",
      color: "text-accent-600",
      status: "prototype"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Performance",
      description: "Otimizações básicas implementadas, escalabilidade planejada",
      badge: "Básico",
      color: "text-primary-600",
      status: "basic"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaboração",
      description: "Sistema de usuários básico, features avançadas no roadmap",
      badge: "Roadmap",
      color: "text-secondary-600",
      status: "planned"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Configuração",
      description: "Interface de configuração simplificada funcionando",
      badge: "Funcional",
      color: "text-accent-600",
      status: "working"
    }
  ];

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case "working": return "success";
      case "mvp": return "default";
      case "prototype": return "secondary";
      case "building": return "warning";
      case "partial": return "warning";
      case "basic": return "secondary";
      case "planned": return "outline";
      default: return "outline";
    }
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
            <Wrench className="w-3 h-3 mr-1" />
            Roadmap de Desenvolvimento
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Nossa{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Jornada
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Acompanhe o desenvolvimento da nossa plataforma em tempo real. 
            Transparência total sobre o que está funcionando, em desenvolvimento e planejado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-soft bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`${feature.color} bg-gradient-to-br from-gray-50 to-white p-3 rounded-xl`}>
                      {feature.icon}
                    </div>
                    <Badge variant={getBadgeVariant(feature.status) as any} className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-secondary-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Quer acompanhar nosso progresso de perto?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Junte-se ao nosso programa de Early Access e receba atualizações semanais do desenvolvimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Solicitar Early Access
              </button>
              <button className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Ver Roadmap Completo
              </button>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-900 mb-2">Q1 2024</div>
              <div className="text-gray-600">MVP Launch</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-900 mb-2">Q2 2024</div>
              <div className="text-gray-600">Integrações Principais</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-900 mb-2">Q3 2024</div>
              <div className="text-gray-600">Recursos Avançados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-900 mb-2">Q4 2024</div>
              <div className="text-gray-600">Plataforma Completa</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;