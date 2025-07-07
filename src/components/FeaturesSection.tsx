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
  Users
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Autônoma",
      description: "Agentes que aprendem, decidem e executam ações sem intervenção humana",
      badge: "Core",
      color: "text-primary-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automação Inteligente",
      description: "Fluxos de trabalho que se adaptam e otimizam automaticamente",
      badge: "Premium",
      color: "text-secondary-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Metas Definidas",
      description: "Agentes focados em objetivos específicos do seu negócio",
      badge: "Essential",
      color: "text-accent-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Integração Abacus",
      description: "Conexão nativa com o core de dados e automação agentic",
      badge: "Enterprise",
      color: "text-primary-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Tana Knowledge Base",
      description: "Banco de conhecimento dinâmico integrado",
      badge: "Premium",
      color: "text-secondary-600"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Multi-Channel",
      description: "WhatsApp, Telegram, Discord, Web - todos em um lugar",
      badge: "Core",
      color: "text-accent-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Avançada",
      description: "Proteção empresarial com criptografia end-to-end",
      badge: "Enterprise",
      color: "text-primary-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics em Tempo Real",
      description: "Métricas detalhadas e insights sobre performance dos agentes",
      badge: "Premium",
      color: "text-secondary-600"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Fluxos Visuais",
      description: "Editor visual para criar e modificar comportamentos",
      badge: "Core",
      color: "text-accent-600"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Performance Otimizada",
      description: "Resposta em milissegundos com escalabilidade ilimitada",
      badge: "Essential",
      color: "text-primary-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaboração em Equipe",
      description: "Workspace compartilhado com controle granular de acesso",
      badge: "Premium",
      color: "text-secondary-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Configuração Flexível",
      description: "Personalização completa sem necessidade de código",
      badge: "Core",
      color: "text-accent-600"
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Essential": return "outline";
      case "Core": return "default";
      case "Premium": return "secondary";
      case "Enterprise": return "warning";
      default: return "default";
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
            <Zap className="w-3 h-3 mr-1" />
            Recursos Avançados
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Tecnologia que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Revoluciona
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Nossa plataforma combina IA avançada, automação inteligente e integrações nativas 
            para criar a experiência SaaS Agentic mais completa do mercado.
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
                    <Badge variant={getBadgeVariant(feature.badge) as any} className="text-xs">
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
              Pronto para experimentar o futuro da automação?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Comece hoje mesmo e veja como nossos agentes podem transformar seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Teste Gratuito por 14 dias
              </button>
              <button className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Agendar Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;