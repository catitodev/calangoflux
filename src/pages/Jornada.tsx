import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  CheckCircle, 
  Play, 
  Star, 
  Trophy,
  Book,
  Users,
  Globe,
  Heart,
  Leaf,
  ArrowRight,
  Target,
  Clock,
  Award
} from 'lucide-react';

const Jornada: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const journeySteps = [
    {
      id: 'letramento',
      title: 'Letramento Digital',
      description: 'Desenvolva habilidades fundamentais para navegar o mundo digital',
      icon: Book,
      color: 'from-blue-500 to-purple-600',
      path: '/letramento-digital',
      duration: '2-3 semanas',
      difficulty: 'Iniciante',
      skills: [
        'Navegação segura na internet',
        'Pesquisa e verificação de informações',
        'Colaboração digital',
        'Criação de conteúdo responsável'
      ],
      outcomes: [
        'Maior segurança online',
        'Pensamento crítico digital',
        'Habilidades de colaboração',
        'Criatividade responsável'
      ]
    },
    {
      id: 'bens-publicos',
      title: 'Bens Públicos',
      description: 'Explore como criar e manter recursos que beneficiam toda a comunidade',
      icon: Globe,
      color: 'from-green-500 to-teal-600',
      path: '/bens-publicos',
      duration: '2-3 semanas',
      difficulty: 'Intermediário',
      skills: [
        'Compreensão de recursos públicos',
        'Identificação de necessidades comunitárias',
        'Mobilização de recursos',
        'Sustentabilidade de projetos'
      ],
      outcomes: [
        'Visão sistêmica do bem comum',
        'Capacidade de liderança comunitária',
        'Habilidades de gestão',
        'Impacto social positivo'
      ]
    },
    {
      id: 'cultura-commons',
      title: 'Cultura Commons',
      description: 'Descubra modelos de compartilhamento que fortalecem o bem comum',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      path: '/cultura-commons',
      duration: '2-3 semanas',
      difficulty: 'Intermediário',
      skills: [
        'Princípios de compartilhamento',
        'Licenças abertas',
        'Colaboração global',
        'Preservação cultural'
      ],
      outcomes: [
        'Mentalidade de abundância',
        'Rede de colaboradores',
        'Projetos open source',
        'Preservação cultural'
      ]
    },
    {
      id: 'relacoes-abundantes',
      title: 'Relações Abundantes',
      description: 'Construa conexões baseadas na generosidade e crescimento mútuo',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      path: '/relacoes-abundantes',
      duration: '3-4 semanas',
      difficulty: 'Avançado',
      skills: [
        'Comunicação empática',
        'Networking genuíno',
        'Mentoria e ensino',
        'Construção de comunidades'
      ],
      outcomes: [
        'Relacionamentos profundos',
        'Rede de apoio forte',
        'Oportunidades multiplicadas',
        'Liderança inspiradora'
      ]
    },
    {
      id: 'refi',
      title: 'ReFi',
      description: 'Participe de finanças regenerativas que curam nossos ecossistemas',
      icon: Leaf,
      color: 'from-emerald-500 to-green-600',
      path: '/refi',
      duration: '3-4 semanas',
      difficulty: 'Avançado',
      skills: [
        'Entendimento de finanças regenerativas',
        'Investimento sustentável',
        'Métricas de impacto',
        'Governança descentralizada'
      ],
      outcomes: [
        'Portfólio regenerativo',
        'Impacto ambiental positivo',
        'Retorno financeiro sustentável',
        'Liderança em ReFi'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Explorador Digital',
      description: 'Complete o módulo de Letramento Digital',
      icon: Star,
      color: 'text-blue-600',
      unlocked: completedSteps.includes(0)
    },
    {
      title: 'Guardião do Bem Comum',
      description: 'Complete o módulo de Bens Públicos',
      icon: Trophy,
      color: 'text-green-600',
      unlocked: completedSteps.includes(1)
    },
    {
      title: 'Colaborador Global',
      description: 'Complete o módulo de Cultura Commons',
      icon: Users,
      color: 'text-orange-600',
      unlocked: completedSteps.includes(2)
    },
    {
      title: 'Construtor de Pontes',
      description: 'Complete o módulo de Relações Abundantes',
      icon: Heart,
      color: 'text-pink-600',
      unlocked: completedSteps.includes(3)
    },
    {
      title: 'Regenerador Planetário',
      description: 'Complete o módulo de ReFi',
      icon: Leaf,
      color: 'text-emerald-600',
      unlocked: completedSteps.includes(4)
    },
    {
      title: 'Mestre da Abundância',
      description: 'Complete toda a jornada',
      icon: Award,
      color: 'text-purple-600',
      unlocked: completedSteps.length === 5
    }
  ];

  const handleStepComplete = (stepIndex: number) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  const progressPercentage = (completedSteps.length / journeySteps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <MapPin className="w-4 h-4" />
              Sua Jornada de Transformação
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Transforme o Mundo
              <span className="block text-purple-600">Uma Habilidade por Vez</span>
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Uma jornada estruturada através dos pilares da abundância digital, 
              construindo habilidades que criam impacto positivo no mundo.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Seu Progresso</h3>
                <p className="text-gray-600">
                  {completedSteps.length} de {journeySteps.length} módulos completos
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-semibold text-gray-900">
                  {achievements.filter(a => a.unlocked).length} conquistas
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <motion.div 
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <p className="text-sm text-gray-600">
              {progressPercentage.toFixed(0)}% da jornada completa
            </p>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Módulos da Jornada
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Cada módulo foi cuidadosamente projetado para construir suas habilidades
            </p>
          </div>
          <div className="space-y-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                    completedSteps.includes(index) 
                      ? 'bg-green-100 border-2 border-green-500' 
                      : 'bg-gray-100 border-2 border-gray-300'
                  }`}>
                    {completedSteps.includes(index) ? (
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    ) : (
                      <span className="text-lg font-bold text-gray-500">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className={`bg-gradient-to-r ${step.color} p-6`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <step.icon className="w-8 h-8 text-white" />
                          <div>
                            <h3 className="text-xl font-semibold text-white">
                              {step.title}
                            </h3>
                            <p className="text-white/90 text-sm">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-white/90 text-sm mb-1">
                            <Clock className="w-4 h-4" />
                            {step.duration}
                          </div>
                          <div className="flex items-center gap-2 text-white/90 text-sm">
                            <Target className="w-4 h-4" />
                            {step.difficulty}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            Habilidades Desenvolvidas
                          </h4>
                          <ul className="space-y-2">
                            {step.skills.map((skill, skillIndex) => (
                              <li key={skillIndex} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                <span className="text-gray-700 text-sm">{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            Resultados Esperados
                          </h4>
                          <ul className="space-y-2">
                            {step.outcomes.map((outcome, outcomeIndex) => (
                              <li key={outcomeIndex} className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-500" />
                                <span className="text-gray-700 text-sm">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 flex gap-3">
                        <Link
                          to={step.path}
                          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all text-center font-medium"
                        >
                          {completedSteps.includes(index) ? 'Revisar' : 'Começar'}
                        </Link>
                        <button
                          onClick={() => handleStepComplete(index)}
                          className={`px-4 py-2 rounded-lg border transition-colors ${
                            completedSteps.includes(index)
                              ? 'bg-green-100 border-green-500 text-green-700'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {completedSteps.includes(index) ? 'Completo' : 'Marcar Completo'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Conquistas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Celebre seu progresso e conquistas na jornada
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-xl p-6 shadow-lg text-center ${
                  achievement.unlocked ? 'border-2 border-yellow-400' : 'opacity-50'
                }`}
              >
                <div className={`inline-flex p-3 rounded-full ${
                  achievement.unlocked ? 'bg-yellow-100' : 'bg-gray-100'
                } mb-4`}>
                  <achievement.icon className={`w-6 h-6 ${
                    achievement.unlocked ? achievement.color : 'text-gray-400'
                  }`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
                {achievement.unlocked && (
                  <div className="mt-3 text-sm text-yellow-600 font-medium">
                    ✨ Desbloqueado!
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jornada;