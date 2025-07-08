import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Trees, 
  Wifi, 
  BookOpen, 
  Lightbulb, 
  Users,
  MapPin,
  Heart,
  TrendingUp,
  Gift,
  Zap,
  Building
} from 'lucide-react';

const BensPublicos: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState(0);

  const publicGoods = [
    {
      id: 'infraestrutura',
      title: 'Infraestrutura Digital',
      description: 'Redes, protocolos e plataformas que conectam e servem a todos',
      icon: Wifi,
      color: 'from-blue-500 to-cyan-600',
      examples: [
        'Internet aberta e descentralizada',
        'Protocolos de comunicação',
        'Plataformas de código aberto',
        'Redes de dados distribuídas'
      ],
      impact: '4.66 bilhões de usuários conectados globalmente',
      projects: [
        'Protocolo IPFS',
        'Sistema DNS',
        'Redes mesh comunitárias',
        'Blockchain públicas'
      ]
    },
    {
      id: 'conhecimento',
      title: 'Conhecimento Aberto',
      description: 'Informação e educação acessíveis para todos',
      icon: BookOpen,
      color: 'from-green-500 to-teal-600',
      examples: [
        'Enciclopédias abertas',
        'Cursos online gratuitos',
        'Bibliotecas digitais',
        'Pesquisa científica aberta'
      ],
      impact: '500+ milhões de artigos da Wikipedia',
      projects: [
        'Wikipedia',
        'Khan Academy',
        'Coursera gratuito',
        'arXiv científico'
      ]
    },
    {
      id: 'ambiente',
      title: 'Recursos Naturais',
      description: 'Ar limpo, água potável e biodiversidade preservada',
      icon: Trees,
      color: 'from-emerald-500 to-green-600',
      examples: [
        'Ar limpo e atmosfera estável',
        'Água potável e oceanos',
        'Biodiversidade e ecossistemas',
        'Clima estável'
      ],
      impact: '15% das áreas terrestres protegidas',
      projects: [
        'Reservas naturais',
        'Parques nacionais',
        'Corredores ecológicos',
        'Áreas de conservação'
      ]
    },
    {
      id: 'cultura',
      title: 'Patrimônio Cultural',
      description: 'Arte, música, literatura e tradições compartilhadas',
      icon: Heart,
      color: 'from-purple-500 to-pink-600',
      examples: [
        'Músicas e artes livres',
        'Literatura em domínio público',
        'Tradições culturais',
        'Festivais comunitários'
      ],
      impact: '1000+ sítios do patrimônio mundial',
      projects: [
        'Creative Commons',
        'Museus virtuais',
        'Arquivos culturais',
        'Festivais abertos'
      ]
    }
  ];

  const characteristics = [
    {
      title: 'Não-Excludente',
      description: 'Ninguém pode ser impedido de usar',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Não-Rivalizante',
      description: 'O uso de uma pessoa não diminui o de outra',
      icon: Gift,
      color: 'text-green-600'
    },
    {
      title: 'Benefício Coletivo',
      description: 'Toda a sociedade se beneficia',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Sustentabilidade',
      description: 'Mantido através de cooperação',
      icon: Zap,
      color: 'text-orange-600'
    }
  ];

  const createProjectSteps = [
    {
      step: 1,
      title: 'Identifique uma Necessidade',
      description: 'Encontre algo que beneficiaria toda a comunidade',
      icon: Lightbulb
    },
    {
      step: 2,
      title: 'Mobilize a Comunidade',
      description: 'Reúna pessoas interessadas em contribuir',
      icon: Users
    },
    {
      step: 3,
      title: 'Desenvolva o Projeto',
      description: 'Crie uma solução sustentável e acessível',
      icon: Building
    },
    {
      step: 4,
      title: 'Mantenha e Evolua',
      description: 'Garanta que o bem público continue servindo',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <Globe className="w-4 h-4" />
              Bens Públicos
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Recursos que
              <span className="block text-green-600">Beneficiam Todos</span>
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore como criar e manter recursos que beneficiam toda a comunidade, 
              desde infraestrutura digital até conhecimento aberto.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Characteristics */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Características dos Bens Públicos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              O que torna um recurso verdadeiramente público?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {characteristics.map((char, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className={`inline-flex p-3 rounded-full bg-gray-100 ${char.color} mb-4`}>
                  <char.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {char.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {char.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Goods Examples */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Exemplos de Bens Públicos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Recursos que usamos todos os dias e que beneficiam toda a humanidade
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publicGoods.map((good, index) => (
              <motion.div
                key={good.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${good.color} p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <good.icon className="w-8 h-8 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {good.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {good.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-white font-medium">
                      Impacto: {good.impact}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Exemplos Práticos
                    </h4>
                    <ul className="space-y-2">
                      {good.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-gray-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Projetos Inspiradores
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {good.projects.map((project, projectIndex) => (
                        <span 
                          key={projectIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Create Your Own */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Crie Seu Próprio Bem Público
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Passos para desenvolver um recurso que beneficie toda a comunidade
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {createProjectSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                <div className="mt-4">
                  <step.icon className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Começar Meu Projeto
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              Mapa Global de Bens Públicos
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Explore projetos de bens públicos ao redor do mundo
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explorar Mapa
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BensPublicos;