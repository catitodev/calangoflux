import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  TrendingUp, 
  Gift, 
  Sparkles, 
  HandHeart,
  Zap,
  Sun,
  Compass,
  Flower,
  Circle,
  Star
} from 'lucide-react';

const RelacoesAbundantes: React.FC = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState(0);

  const abundancePrinciples = [
    {
      id: 'generosidade',
      title: 'Generosidade',
      description: 'Dar sem esperar retorno direto, criando ciclos de abundância',
      icon: Gift,
      color: 'from-pink-500 to-rose-600',
      practices: [
        'Compartilhar conhecimento livremente',
        'Oferecer ajuda sem esperar reciprocidade',
        'Celebrar sucessos dos outros',
        'Conectar pessoas que podem se beneficiar'
      ],
      benefits: [
        'Fortalece redes de apoio',
        'Cria reputação positiva',
        'Desenvolve empatia',
        'Multiplica oportunidades'
      ]
    },
    {
      id: 'reciprocidade',
      title: 'Reciprocidade',
      description: 'Trocas equilibradas que fortalecem laços e criam valor mútuo',
      icon: Circle,
      color: 'from-blue-500 to-cyan-600',
      practices: [
        'Reconhecer contribuições dos outros',
        'Retribuir favores e gentilezas',
        'Criar parcerias win-win',
        'Manter equilíbrio nas relações'
      ],
      benefits: [
        'Constrói confiança',
        'Mantém relacionamentos saudáveis',
        'Cria estabilidade',
        'Promove justiça'
      ]
    },
    {
      id: 'colaboracao',
      title: 'Colaboração',
      description: 'Trabalhar juntos para alcançar objetivos compartilhados',
      icon: Users,
      color: 'from-green-500 to-teal-600',
      practices: [
        'Compartilhar recursos e habilidades',
        'Dividir responsabilidades',
        'Criar sinergia em projetos',
        'Tomar decisões consensuais'
      ],
      benefits: [
        'Amplifica capacidades',
        'Reduz custos individuais',
        'Acelera resultados',
        'Fortalece vínculos'
      ]
    },
    {
      id: 'crescimento',
      title: 'Crescimento Mútuo',
      description: 'Evoluir juntos, criando valor para todos os envolvidos',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600',
      practices: [
        'Mentoria e ensino',
        'Feedback construtivo',
        'Oportunidades de desenvolvimento',
        'Celebração de conquistas'
      ],
      benefits: [
        'Desenvolve talentos',
        'Cria líderes',
        'Expande horizontes',
        'Fortalece a comunidade'
      ]
    }
  ];

  const relationshipTypes = [
    {
      type: 'Pessoais',
      description: 'Família, amigos e relacionamentos íntimos',
      icon: Heart,
      color: 'text-pink-600',
      strategies: [
        'Tempo de qualidade',
        'Comunicação aberta',
        'Apoio emocional',
        'Momentos especiais'
      ]
    },
    {
      type: 'Profissionais',
      description: 'Colegas, mentores e redes de trabalho',
      icon: Compass,
      color: 'text-blue-600',
      strategies: [
        'Colaboração em projetos',
        'Compartilhamento de conhecimento',
        'Networking genuíno',
        'Mentoria mútua'
      ]
    },
    {
      type: 'Comunitárias',
      description: 'Vizinhos, grupos locais e causas sociais',
      icon: Sun,
      color: 'text-orange-600',
      strategies: [
        'Participação em eventos',
        'Voluntariado',
        'Iniciativas locais',
        'Apoio a causas'
      ]
    },
    {
      type: 'Digitais',
      description: 'Comunidades online e redes sociais',
      icon: Zap,
      color: 'text-purple-600',
      strategies: [
        'Participação ativa',
        'Criação de conteúdo',
        'Suporte a outros',
        'Construção de comunidade'
      ]
    }
  ];

  const abundanceSteps = [
    {
      step: 1,
      title: 'Pratique a Gratidão',
      description: 'Reconheça e aprecie o que você já tem',
      icon: Star
    },
    {
      step: 2,
      title: 'Compartilhe Generosamente',
      description: 'Ofereça seu tempo, conhecimento e recursos',
      icon: Gift
    },
    {
      step: 3,
      title: 'Cultive Conexões',
      description: 'Invista tempo em relacionamentos significativos',
      icon: Flower
    },
    {
      step: 4,
      title: 'Crie Valor Mútuo',
      description: 'Busque oportunidades win-win para todos',
      icon: Sparkles
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <Heart className="w-4 h-4" />
              Relações Abundantes
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Conexões que
              <span className="block text-pink-600">Geram Abundância</span>
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Construa conexões baseadas na generosidade e no crescimento mútuo, 
              criando uma rede de relacionamentos que geram valor para todos.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Princípios da Abundância
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fundamentos para relacionamentos prósperos e generosos
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {abundancePrinciples.map((principle, index) => (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedPrinciple(index)}
              >
                <div className={`bg-gradient-to-r ${principle.color} p-6`}>
                  <div className="flex items-center gap-3">
                    <principle.icon className="w-8 h-8 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {principle.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Práticas Essenciais
                    </h4>
                    <ul className="space-y-2">
                      {principle.practices.map((practice, practiceIndex) => (
                        <li key={practiceIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full" />
                          <span className="text-gray-700">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Benefícios
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {principle.benefits.map((benefit, benefitIndex) => (
                        <span 
                          key={benefitIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm text-center"
                        >
                          {benefit}
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

      {/* Relationship Types */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tipos de Relacionamentos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Diferentes contextos para aplicar princípios de abundância
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relationshipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <type.icon className={`w-6 h-6 ${type.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {type.type}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {type.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {type.strategies.map((strategy, strategyIndex) => (
                    <div key={strategyIndex} className="flex items-center gap-2">
                      <HandHeart className="w-4 h-4 text-pink-500" />
                      <span className="text-gray-700">{strategy}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps to Abundance */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Passos para a Abundância
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Como cultivar relações abundantes em sua vida
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {abundanceSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                <div className="mt-4">
                  <step.icon className="w-8 h-8 text-pink-600 mx-auto mb-4" />
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <Heart className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              Comece Sua Jornada de Abundância
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Transforme seus relacionamentos e crie uma rede de abundância
            </p>
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Iniciar Transformação
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RelacoesAbundantes;