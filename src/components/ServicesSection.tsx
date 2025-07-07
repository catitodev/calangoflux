import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Bot, 
  Zap, 
  Palette, 
  Globe, 
  ArrowRight,
  Sparkles,
  Code,
  Users
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 'agentes-ai',
      title: 'Agentes AI',
      description: 'Agentes inteligentes personalizados para automatizar tarefas complexas e interagir naturalmente com seus clientes.',
      icon: Bot,
      color: 'from-blue-500 to-cyan-500',
      features: ['Processamento de linguagem natural', 'Aprendizado contínuo', 'Integração com APIs'],
      link: '/agentes-ai'
    },
    {
      id: 'automacoes',
      title: 'Automações',
      description: 'Fluxos de trabalho inteligentes que conectam sistemas e executam tarefas repetitivas automaticamente.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      features: ['Workflows personalizados', 'Integração multi-plataforma', 'Monitoramento em tempo real'],
      link: '/automacoes'
    },
    {
      id: 'agentics',
      title: 'Agentics',
      description: 'Sistemas agentic avançados que tomam decisões autônomas e se adaptam ao ambiente em tempo real.',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      features: ['Tomada de decisão autônoma', 'Adaptação dinâmica', 'Aprendizado por reforço'],
      link: '/agentics'
    },
    {
      id: 'webdesign',
      title: 'Web Design',
      description: 'Criação de websites e aplicações web modernas, responsivas e otimizadas para conversão.',
      icon: Palette,
      color: 'from-green-500 to-teal-500',
      features: ['Design responsivo', 'UX/UI otimizada', 'Performance avançada'],
      link: '/webdesign'
    },
    {
      id: 'letramento-web3',
      title: 'Letramento Web3',
      description: 'Educação e implementação de tecnologias Web3, blockchain e ecossistemas descentralizados.',
      icon: Globe,
      color: 'from-indigo-500 to-blue-500',
      features: ['Educação blockchain', 'Smart contracts', 'DApps development'],
      link: '/letramento-web3'
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
            Nossos Serviços
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Soluções Completas para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Sua Transformação Digital
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Oferecemos serviços especializados em IA, automação e desenvolvimento web 
            para impulsionar seu negócio no futuro digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white/80 backdrop-blur-sm">
                <CardHeader className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button asChild className="w-full group/btn">
                      <Link to={service.link}>
                        <span className="flex items-center justify-center">
                          Saiba Mais
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </span>
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold">
                Pronto para Começar?
              </h3>
            </div>
            
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Nossos especialistas estão prontos para criar a solução perfeita 
              para suas necessidades específicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    💬 Falar com Especialista
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 text-lg font-semibold"
                  asChild
                >
                  <a href="https://aideaflux.xyz" target="_blank" rel="noopener noreferrer">
                    🚀 Testar AideaFlux
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}