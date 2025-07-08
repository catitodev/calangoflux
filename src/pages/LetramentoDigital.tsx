import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Shield, 
  Search, 
  Users, 
  Code, 
  Lightbulb,
  CheckCircle,
  PlayCircle,
  Award,
  Target
} from 'lucide-react';

const LetramentoDigital: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [completedSkills, setCompletedSkills] = useState<number[]>([]);

  const skills = [
    {
      id: 'navegacao',
      title: 'Navegação Segura',
      description: 'Aprenda a navegar na internet de forma segura e eficiente',
      icon: Shield,
      color: 'from-blue-500 to-cyan-600',
      content: {
        concepts: [
          'Identificação de sites seguros',
          'Uso de senhas fortes',
          'Reconhecimento de phishing',
          'Privacidade online'
        ],
        activities: [
          'Simulação de navegação segura',
          'Criação de senhas fortes',
          'Quiz de segurança digital'
        ]
      }
    },
    {
      id: 'pesquisa',
      title: 'Pesquisa Crítica',
      description: 'Desenvolva habilidades para encontrar e avaliar informações confiáveis',
      icon: Search,
      color: 'from-green-500 to-teal-600',
      content: {
        concepts: [
          'Técnicas de pesquisa avançada',
          'Verificação de fontes',
          'Análise crítica de conteúdo',
          'Combate à desinformação'
        ],
        activities: [
          'Prática de fact-checking',
          'Comparação de fontes',
          'Análise de viés em notícias'
        ]
      }
    },
    {
      id: 'colaboracao',
      title: 'Colaboração Digital',
      description: 'Participe de comunidades online e projetos colaborativos',
      icon: Users,
      color: 'from-purple-500 to-pink-600',
      content: {
        concepts: [
          'Comunicação online efetiva',
          'Etiqueta digital',
          'Trabalho em equipe virtual',
          'Resolução de conflitos online'
        ],
        activities: [
          'Participação em fóruns',
          'Projetos colaborativos',
          'Mediação de discussões'
        ]
      }
    },
    {
      id: 'criacao',
      title: 'Criação de Conteúdo',
      description: 'Crie e compartilhe conteúdo digital responsável e impactante',
      icon: Code,
      color: 'from-orange-500 to-red-600',
      content: {
        concepts: [
          'Princípios de design digital',
          'Direitos autorais e licenças',
          'Narrativa digital',
          'Acessibilidade em conteúdo'
        ],
        activities: [
          'Criação de blog pessoal',
          'Produção de vídeo educativo',
          'Design de infográficos'
        ]
      }
    }
  ];

  const handleSkillComplete = (skillIndex: number) => {
    if (!completedSkills.includes(skillIndex)) {
      setCompletedSkills([...completedSkills, skillIndex]);
    }
  };

  const progressPercentage = (completedSkills.length / skills.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <BookOpen className="w-4 h-4" />
              Letramento Digital
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Navegue o Mundo Digital
              <span className="block text-blue-600">com Confiança</span>
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Desenvolva habilidades essenciais para navegar, criar e participar 
              ativamente no mundo digital de forma segura e responsável.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Seu Progresso</h3>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-gray-600">
                  {completedSkills.length} de {skills.length} completos
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {progressPercentage.toFixed(0)}% completo
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${skill.color} p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-8 h-8 text-white" />
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {skill.title}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                    {completedSkills.includes(index) && (
                      <CheckCircle className="w-6 h-6 text-white" />
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Conceitos Principais
                    </h4>
                    <ul className="space-y-2">
                      {skill.content.concepts.map((concept, conceptIndex) => (
                        <li key={conceptIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-gray-700">{concept}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      Atividades Práticas
                    </h4>
                    <ul className="space-y-2">
                      {skill.content.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-center gap-2">
                          <PlayCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setCurrentSkill(index)}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Explorar
                    </button>
                    <button
                      onClick={() => handleSkillComplete(index)}
                      className={`px-4 py-2 rounded-lg border transition-colors ${
                        completedSkills.includes(index)
                          ? 'bg-green-100 border-green-500 text-green-700'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {completedSkills.includes(index) ? 'Completo' : 'Marcar como Completo'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Challenge */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Desafio Interativo
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Teste suas habilidades digitais em cenários do mundo real
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Começar Desafio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LetramentoDigital;