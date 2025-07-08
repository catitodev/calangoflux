import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  TreePine, 
  Coins, 
  TrendingUp, 
  Globe, 
  Users,
  Zap,
  Sun,
  Waves,
  Recycle,
  Heart,
  Shield
} from 'lucide-react';

const ReFi: React.FC = () => {
  const [selectedProtocol, setSelectedProtocol] = useState(0);

  const refiProtocols = [
    {
      id: 'carbon-credits',
      title: 'Créditos de Carbono',
      description: 'Tokenização de compensações ambientais verificáveis',
      icon: TreePine,
      color: 'from-green-500 to-emerald-600',
      impact: '50M+ toneladas CO2 tokenizadas',
      mechanisms: [
        'Verificação transparente',
        'Rastreabilidade on-chain',
        'Fracionamento de créditos',
        'Mercado descentralizado'
      ],
      projects: [
        'Toucan Protocol',
        'Klima DAO',
        'Moss.Earth',
        'Regen Network'
      ]
    },
    {
      id: 'biodiversity',
      title: 'Biodiversidade',
      description: 'Financiamento de conservação e restauração de ecossistemas',
      icon: Leaf,
      color: 'from-emerald-500 to-green-600',
      impact: '1M+ hectares protegidos',
      mechanisms: [
        'NFTs de biodiversidade',
        'Bonds de conservação',
        'Staking ecológico',
        'Pagamentos por serviços ambientais'
      ],
      projects: [
        'Celo Climate',
        'Gitcoin Climate',
        'Single.Earth',
        'Oworld'
      ]
    },
    {
      id: 'renewable-energy',
      title: 'Energia Renovável',
      description: 'Financiamento descentralizado de projetos de energia limpa',
      icon: Sun,
      color: 'from-yellow-500 to-orange-600',
      impact: '100+ projetos financiados',
      mechanisms: [
        'Crowdfunding de energia',
        'Tokens de energia renovável',
        'Certificados digitais',
        'Microgrids descentralizadas'
      ],
      projects: [
        'Energy Web Chain',
        'Power Ledger',
        'WePower',
        'Electron'
      ]
    },
    {
      id: 'circular-economy',
      title: 'Economia Circular',
      description: 'Incentivos para redução de desperdício e reutilização',
      icon: Recycle,
      color: 'from-blue-500 to-cyan-600',
      impact: '500K+ toneladas recicladas',
      mechanisms: [
        'Tokens de reciclagem',
        'Rastreamento de materiais',
        'Recompensas por reutilização',
        'Marketplaces circulares'
      ],
      projects: [
        'Plastic Bank',
        'Sweat Economy',
        'Planetwatch',
        'Flowcarbon'
      ]
    }
  ];

  const refiPrinciples = [
    {
      title: 'Regeneração',
      description: 'Criar valor positivo para o planeta',
      icon: Leaf,
      color: 'text-green-600'
    },
    {
      title: 'Transparência',
      description: 'Impacto verificável e auditável',
      icon: Shield,
      color: 'text-blue-600'
    },
    {
      title: 'Inclusão',
      description: 'Acesso democrático aos benefícios',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Sustentabilidade',
      description: 'Viabilidade econômica de longo prazo',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  const participationWays = [
    {
      title: 'Investidor',
      description: 'Financie projetos regenerativos',
      icon: Coins,
      actions: [
        'Comprar tokens ReFi',
        'Stake em protocolos',
        'Participar de DAOs',
        'Financiar projetos'
      ]
    },
    {
      title: 'Desenvolvedor',
      description: 'Construa soluções ReFi',
      icon: Zap,
      actions: [
        'Desenvolver protocolos',
        'Criar ferramentas',
        'Auditar contratos',
        'Educar comunidade'
      ]
    },
    {
      title: 'Validador',
      description: 'Verifique impacto ambiental',
      icon: Shield,
      actions: [
        'Medir emissões',
        'Verificar projetos',
        'Auditar dados',
        'Reportar resultados'
      ]
    },
    {
      title: 'Usuário',
      description: 'Adote práticas regenerativas',
      icon: Heart,
      actions: [
        'Usar produtos verdes',
        'Compensar pegada',
        'Apoiar projetos',
        'Educar outros'
      ]
    }
  ];

  const impactMetrics = [
    {
      metric: 'CO2 Removido',
      value: '10M+',
      unit: 'toneladas',
      trend: '+145%',
      color: 'text-green-600'
    },
    {
      metric: 'Áreas Protegidas',
      value: '2.5M',
      unit: 'hectares',
      trend: '+89%',
      color: 'text-blue-600'
    },
    {
      metric: 'Energia Renovável',
      value: '500',
      unit: 'GWh',
      trend: '+234%',
      color: 'text-yellow-600'
    },
    {
      metric: 'Capital Mobilizado',
      value: '$2.1B',
      unit: 'USD',
      trend: '+178%',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
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
              <Leaf className="w-4 h-4" />
              ReFi - Finanças Regenerativas
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Finanças que
              <span className="block text-green-600">Curam o Planeta</span>
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Participe de finanças regenerativas que curam e fortalecem nossos 
              ecossistemas através de incentivos alinhados com o bem-estar planetário.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Impacto Global ReFi
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Métricas de regeneração planetária em tempo real
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {metric.unit}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.metric}
                </div>
                <div className="text-sm text-green-600 font-medium">
                  {metric.trend} este ano
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Princípios ReFi
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fundamentos das finanças regenerativas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {refiPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className={`inline-flex p-3 rounded-full bg-gray-100 ${principle.color} mb-4`}>
                  <principle.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Protocolos ReFi
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Plataformas que transformam finanças em força regenerativa
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {refiProtocols.map((protocol, index) => (
              <motion.div
                key={protocol.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedProtocol(index)}
              >
                <div className={`bg-gradient-to-r ${protocol.color} p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <protocol.icon className="w-8 h-8 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {protocol.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {protocol.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-white font-medium">
                      Impacto: {protocol.impact}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Mecanismos
                    </h4>
                    <ul className="space-y-2">
                      {protocol.mechanisms.map((mechanism, mechanismIndex) => (
                        <li key={mechanismIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-gray-700">{mechanism}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Projetos Principais
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {protocol.projects.map((project, projectIndex) => (
                        <span 
                          key={projectIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm text-center"
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

      {/* Participation Ways */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Como Participar
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Diferentes formas de contribuir para a economia regenerativa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {participationWays.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <way.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {way.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {way.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {way.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{action}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
            <Globe className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              Participe da Regeneração Planetária
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Junte-se ao movimento que está transformando finanças em força de cura
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Começar Agora
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Explorar Protocolos
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReFi;