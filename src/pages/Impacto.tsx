import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Globe, 
  Heart, 
  Leaf,
  Award,
  Target,
  Zap,
  BookOpen,
  Share,
  Download,
  Calendar,
  MapPin
} from 'lucide-react';

const Impacto: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('year');

  const globalImpact = [
    {
      metric: 'Pessoas Impactadas',
      value: '127,543',
      growth: '+89%',
      icon: Users,
      color: 'text-blue-600',
      description: 'Indivíduos que participaram de projetos da comunidade'
    },
    {
      metric: 'Projetos Completados',
      value: '1,247',
      growth: '+156%',
      icon: Target,
      color: 'text-green-600',
      description: 'Iniciativas finalizadas com sucesso'
    },
    {
      metric: 'Recursos Compartilhados',
      value: '89,421',
      growth: '+234%',
      icon: Share,
      color: 'text-purple-600',
      description: 'Materiais educativos e ferramentas disponibilizados'
    },
    {
      metric: 'CO2 Compensado',
      value: '12,890',
      growth: '+178%',
      icon: Leaf,
      color: 'text-emerald-600',
      description: 'Toneladas de carbono compensadas através de projetos ReFi'
    }
  ];

  const impactAreas = [
    {
      area: 'Letramento Digital',
      projects: 234,
      beneficiaries: 45678,
      highlights: [
        '15 cursos online criados',
        '230 workshops realizados',
        '5,000+ certificações emitidas'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      area: 'Bens Públicos',
      projects: 156,
      beneficiaries: 32145,
      highlights: [
        '45 plataformas abertas criadas',
        '89 bibliotecas digitais',
        '120+ recursos comunitários'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      area: 'Cultura Commons',
      projects: 189,
      beneficiaries: 28934,
      highlights: [
        '500+ obras em creative commons',
        '78 projetos open source',
        '150 repositórios culturais'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      area: 'Relações Abundantes',
      projects: 298,
      beneficiaries: 15432,
      highlights: [
        '2,100+ conexões facilitadas',
        '145 mentorias formadas',
        '89 parcerias estratégicas'
      ],
      color: 'from-pink-500 to-rose-600'
    },
    {
      area: 'ReFi',
      projects: 67,
      beneficiaries: 5354,
      highlights: [
        '$2.1M em funding regenerativo',
        '34 protocolos implementados',
        '12,890 tons CO2 compensadas'
      ],
      color: 'from-emerald-500 to-green-600'
    }
  ];

  const successStories = [
    {
      title: 'EcoVila Digital',
      location: 'Chapada dos Veadeiros, Brasil',
      impact: 'Capacitou 500 famílias em letramento digital',
      description: 'Comunidade rural que implementou centro de inovação digital sustentável',
      image: '🌱',
      metrics: {
        people: 500,
        duration: '18 meses',
        investment: 'R$ 45,000'
      }
    },
    {
      title: 'Biblioteca Comunitária Digital',
      location: 'Porto, Portugal',
      impact: 'Preservou 10,000 documentos históricos',
      description: 'Digitalização colaborativa do patrimônio cultural local',
      image: '📚',
      metrics: {
        people: 1200,
        duration: '12 meses',
        investment: '€ 25,000'
      }
    },
    {
      title: 'Moeda Regenerativa Local',
      location: 'Medellín, Colômbia',
      impact: 'Fortaleceu economia circular de 2,000 pessoas',
      description: 'Sistema de pagamentos baseado em blockchain para economia local',
      image: '💚',
      metrics: {
        people: 2000,
        duration: '24 meses',
        investment: '$80,000'
      }
    }
  ];

  const monthlyGrowth = [
    { month: 'Jan', users: 850, projects: 15, impact: 2340 },
    { month: 'Fev', users: 1200, projects: 23, impact: 3450 },
    { month: 'Mar', users: 1580, projects: 31, impact: 4560 },
    { month: 'Abr', users: 1890, projects: 28, impact: 5230 },
    { month: 'Mai', users: 2150, projects: 35, impact: 6780 },
    { month: 'Jun', users: 2560, projects: 42, impact: 7890 }
  ];

  const partnerships = [
    { name: 'UNESCO', type: 'Organização Internacional', projects: 12 },
    { name: 'Gitcoin', type: 'Protocolo ReFi', projects: 8 },
    { name: 'Creative Commons', type: 'Organização Cultural', projects: 15 },
    { name: 'Ethereum Foundation', type: 'Fundação Blockchain', projects: 6 },
    { name: 'Mozilla Foundation', type: 'Tecnologia Aberta', projects: 9 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
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
              <BarChart3 className="w-4 h-4" />
              Impacto Global
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Transformação
              <span className="block text-purple-600">Mensurável</span>
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Acompanhe como nossa comunidade está criando impacto positivo no mundo 
              através de projetos colaborativos e iniciativas regenerativas.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Global Impact Metrics */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nosso Impacto Global
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Métricas em tempo real do nosso impacto coletivo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalImpact.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                  <span className="text-green-600 text-sm font-medium">{metric.growth}</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{metric.metric}</div>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Áreas de Impacto
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Como cada tema da jornada está transformando vidas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${area.color} p-6`}>
                  <h3 className="text-xl font-semibold text-white mb-2">{area.area}</h3>
                  <div className="flex items-center justify-between text-white/90">
                    <div>
                      <div className="text-2xl font-bold">{area.projects}</div>
                      <div className="text-sm">Projetos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{area.beneficiaries.toLocaleString()}</div>
                      <div className="text-sm">Beneficiários</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Destaques:</h4>
                  <ul className="space-y-2">
                    {area.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Histórias de Sucesso
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Projetos que estão transformando comunidades ao redor do mundo
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{story.image}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{story.title}</h3>
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mt-1">
                    <MapPin className="w-3 h-3" />
                    {story.location}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium mb-3">
                    {story.impact}
                  </div>
                  <p className="text-gray-600 text-sm">{story.description}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{story.metrics.people}</div>
                    <div className="text-xs text-gray-500">Pessoas</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{story.metrics.duration}</div>
                    <div className="text-xs text-gray-500">Duração</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{story.metrics.investment}</div>
                    <div className="text-xs text-gray-500">Investimento</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Chart */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Crescimento da Comunidade</h2>
                <p className="text-gray-600">Evolução mensal dos principais indicadores</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedPeriod('month')}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    selectedPeriod === 'month' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Mês
                </button>
                <button
                  onClick={() => setSelectedPeriod('year')}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    selectedPeriod === 'year' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Ano
                </button>
              </div>
            </div>
            <div className="h-64 flex items-end justify-between gap-4">
              {monthlyGrowth.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg mb-2" 
                       style={{ height: `${(data.users / 3000) * 200}px` }}>
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1">{data.users}</div>
                  <div className="text-xs text-gray-500">{data.month}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center text-sm text-gray-600">
              Usuários ativos mensais
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Parcerias Estratégicas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Organizações que compartilham nossa visão de abundância
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{partner.type}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-blue-600">
                  <Award className="w-4 h-4" />
                  <span>{partner.projects} projetos colaborativos</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              Faça Parte desta Transformação
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Junte-se a nós e ajude a amplificar o impacto positivo no mundo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Começar Jornada
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Relatório Completo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impacto;