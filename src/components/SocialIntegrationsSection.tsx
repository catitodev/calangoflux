import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Instagram, 
  MessageCircle, 
  Users, 
  Zap, 
  Globe, 
  Smartphone,
  Share2,
  Bot,
  Activity
} from 'lucide-react';

export default function SocialIntegrationsSection() {
  const web2Integrations = [
    {
      name: "Instagram",
      icon: Instagram,
      description: "Posts automatizados, Stories, DMs e analytics",
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "WhatsApp Business",
      icon: MessageCircle,
      description: "Chatbots, campanhas e atendimento automatizado",
      color: "from-green-500 to-green-600"
    },
    {
      name: "LinkedIn",
      icon: Users,
      description: "Networking profissional e lead generation",
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Facebook",
      icon: Share2,
      description: "Páginas, grupos e campanhas publicitárias",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const web3Integrations = [
    {
      name: "Discord",
      icon: Bot,
      description: "Comunidades, bots e integração com NFTs",
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "Telegram",
      icon: Zap,
      description: "Canais, bots e automação de grupos",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "NFTs & Smart Contracts",
      icon: Globe,
      description: "OpenSea, Rarible e contratos inteligentes",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Web3 Wallets",
      icon: Activity,
      description: "MetaMask, WalletConnect e integração DeFi",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary-100 text-primary-800 border-primary-200">
            Integrações Sociais
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Conectamos Seu Negócio{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Em Todas as Plataformas
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Integrações completas com redes sociais Web2 e Web3. 
            Automatize, engaje e cresça em todos os canais digitais!
          </p>
        </motion.div>

        {/* Web2 Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-2 flex items-center justify-center">
              <Smartphone className="w-6 h-6 mr-2 text-primary-500" />
              Redes Sociais Web2
            </h3>
            <p className="text-gray-600">Plataformas tradicionais com máximo engajamento</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {web2Integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${integration.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <integration.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary-900">
                      {integration.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center">
                      {integration.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Web3 Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-2 flex items-center justify-center">
              <Globe className="w-6 h-6 mr-2 text-secondary-500" />
              Ecossistema Web3
            </h3>
            <p className="text-gray-600">O futuro da internet descentralizada</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {web3Integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${integration.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <integration.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary-900">
                      {integration.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center">
                      {integration.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para Conectar Todas as Suas Redes?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Automatize sua presença digital em Web2 e Web3 com nossas integrações avançadas!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="#contato">
                  🚀 Começar Integração Agora
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}