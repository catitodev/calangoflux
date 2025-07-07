import { motion } from 'framer-motion';
import { ExternalLink, Bot, Zap, Users, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const PoeAgentsSection = () => {
  const agents = [
    {
      name: "Marketing Strategist",
      description: "Especialista em estratégias de marketing digital e growth hacking",
      specialty: "Marketing",
      color: "bg-blue-500"
    },
    {
      name: "Sales Expert",
      description: "Agente focado em vendas, conversão e relacionamento com clientes",
      specialty: "Vendas",
      color: "bg-green-500"
    },
    {
      name: "Tech Support",
      description: "Suporte técnico especializado e resolução de problemas",
      specialty: "Suporte",
      color: "bg-purple-500"
    },
    {
      name: "Content Creator",
      description: "Criação de conteúdo envolvente e estratégias de storytelling",
      specialty: "Conteúdo",
      color: "bg-orange-500"
    },
    {
      name: "Data Analyst",
      description: "Análise de dados, métricas e insights estratégicos",
      specialty: "Analytics",
      color: "bg-indigo-500"
    },
    {
      name: "Product Manager",
      description: "Gestão de produtos, roadmaps e funcionalidades",
      specialty: "Produto",
      color: "bg-red-500"
    },
    {
      name: "Financial Advisor",
      description: "Consultoria financeira e planejamento estratégico",
      specialty: "Financeiro",
      color: "bg-emerald-500"
    },
    {
      name: "Legal Consultant",
      description: "Orientações legais e compliance para startups",
      specialty: "Jurídico",
      color: "bg-gray-600"
    },
    {
      name: "Innovation Coach",
      description: "Coaching em inovação e desenvolvimento de negócios",
      specialty: "Inovação",
      color: "bg-pink-500"
    },
    {
      name: "Community Manager",
      description: "Gestão de comunidades e engajamento social",
      specialty: "Comunidade",
      color: "bg-teal-500"
    },
    {
      name: "Tech Architect",
      description: "Arquitetura técnica e soluções de infraestrutura",
      specialty: "Arquitetura",
      color: "bg-cyan-500"
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Users className="w-3 h-3 mr-1" />
            Agentes Especializados
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            11 Agentes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Personalizados
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
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
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-3 text-lg mb-8"
            >
              <a 
                href="https://poe.com/@calangoflux" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Acessar @calangoflux no Poe
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className={`w-12 h-12 ${agent.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Bot className="w-6 h-6 text-white" />
                    </motion.div>
                    <Badge variant="outline" className="text-xs">
                      {agent.specialty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {agent.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {agent.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <motion.div
                    className="flex items-center text-sm text-primary-600 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Ativo no Poe
                  </motion.div>
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
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Como Usar os Agentes Poe
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Acesse o Perfil</h4>
                <p className="text-sm opacity-90">Vá para poe.com/@calangoflux</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Escolha o Agente</h4>
                <p className="text-sm opacity-90">Selecione por especialidade</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Converse</h4>
                <p className="text-sm opacity-90">Obtenha respostas especializadas</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                <a 
                  href="https://poe.com/@calangoflux" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Testar Agentes Agora
                </a>
              </Button>
              <Button
                asChild 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600"
              >
                <a href="https://www.aideaflux.xyz" target="_blank" rel="noopener noreferrer">
                  Solicitar Early Access
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
          <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">
              🤖 Integração em Desenvolvimento
            </h3>
            <p className="text-gray-700 text-sm">
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