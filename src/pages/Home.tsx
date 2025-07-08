import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Globe, 
  Users, 
  Heart, 
  Leaf, 
  ArrowRight,
  Sparkles,
  Network,
  Shield,
  Zap
} from 'lucide-react';

const Home: React.FC = () => {
  const themes = [
    {
      id: 'letramento-digital',
      title: 'Letramento Digital',
      description: 'Desenvolva habilidades essenciais para navegar, criar e participar ativamente no mundo digital',
      icon: BookOpen,
      color: 'from-blue-500 to-purple-600',
      path: '/letramento-digital'
    },
    {
      id: 'bens-publicos',
      title: 'Bens Públicos',
      description: 'Explore como criar e manter recursos que beneficiam toda a comunidade',
      icon: Globe,
      color: 'from-green-500 to-teal-600',
      path: '/bens-publicos'
    },
    {
      id: 'cultura-commons',
      title: 'Cultura Commons',
      description: 'Descubra modelos de compartilhamento e colaboração que fortalecem o bem comum',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      path: '/cultura-commons'
    },
    {
      id: 'relacoes-abundantes',
      title: 'Relações Abundantes',
      description: 'Construa conexões baseadas na generosidade e no crescimento mútuo',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      path: '/relacoes-abundantes'
    },
    {
      id: 'refi',
      title: 'ReFi',
      description: 'Participe de finanças regenerativas que curam e fortalecem nossos ecossistemas',
      icon: Leaf,
      color: 'from-emerald-500 to-green-600',
      path: '/refi'
    }
  ];

  const journeySteps = [
    {
      icon: Sparkles,
      title: 'Explore',
      description: 'Descubra cada conceito através de experiências interativas'
    },
    {
      icon: Network,
      title: 'Conecte',
      description: 'Participe de uma comunidade de pessoas interessadas em transformação'
    },
    {
      icon: Shield,
      title: 'Pratique',
      description: 'Aplique os conhecimentos em projetos reais e simulações'
    },
    {
      icon: Zap,
      title: 'Transforme',
      description: 'Crie impacto positivo no mundo através de suas ações'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Construindo um
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}Futuro Abundante
              </span>
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Uma jornada interativa para explorar letramento digital, bens públicos, 
              cultura commons, relações abundantes e finanças regenerativas.
            </motion.p>
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/jornada"
                className="rounded-md bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Começar Jornada
              </Link>
              <Link
                to="/comunidade"
                className="text-base font-semibold leading-7 text-gray-900 hover:text-purple-600 transition-colors"
              >
                Explorar Comunidade <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Temas Principais
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore cada conceito através de experiências interativas e práticas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <Link to={theme.path}>
                  <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-r ${theme.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${theme.color} text-white mb-4`}>
                      <theme.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {theme.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {theme.description}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-medium text-purple-600">
                      Explorar
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sua Jornada de Transformação
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quatro passos para criar impacto positivo no mundo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pronto para começar?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Junte-se a uma comunidade de pessoas que acreditam no poder da colaboração, 
              do compartilhamento e da regeneração para criar um mundo mais justo e abundante.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/jornada"
                className="rounded-md bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Iniciar Jornada
              </Link>
              <Link
                to="/impacto"
                className="rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Ver Impacto
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;