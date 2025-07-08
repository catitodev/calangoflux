import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Share, 
  HandHeart, 
  Lightbulb, 
  Globe, 
  Music,
  BookOpen,
  Palette,
  Code,
  Camera,
  Cpu,
  Zap
} from 'lucide-react';

const CulturaCommons: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const commonsProjects = [
    {
      id: 'creative-commons',
      title: 'Creative Commons',
      description: 'Licenças que permitem o compartilhamento e uso de obras criativas',
      icon: Palette,
      color: 'from-purple-500 to-pink-600',
      impact: '2+ bilhões de obras licenciadas',
      examples: [
        'Fotos no Flickr',
        'Artigos da Wikipedia',
        'Músicas livres',
        'Vídeos educativos'
      ],
      principles: [
        'Compartilhamento',
        'Atribuição',
        'Remix permitido',
        'Uso comercial opcional'
      ]
    },
    {
      id: 'open-source',
      title: 'Software Livre',
      description: 'Código aberto que pode ser usado, modificado e distribuído',
      icon: Code,
      color: 'from-green-500 to-blue-600',
      impact: '90% dos softwares usam código aberto',
      examples: [
        'Linux',
        'Python',
        'WordPress',
        'Firefox'
      ],
      principles: [
        'Código aberto',
        'Modificação livre',
        'Distribuição livre',
        'Colaboração global'
      ]
    },
    {
      id: 'knowledge-commons',
      title: 'Conhecimento Aberto',
      description: 'Informação e pesquisa disponíveis para todos',
      icon: BookOpen,
      color: 'from-blue-500 to-teal-600',
      impact: '55+ milhões de artigos abertos',
      examples: [
        'Wikipedia',
        'Khan Academy',
        'arXiv',
        'MIT OpenCourseWare'
      ],
      principles: [
        'Acesso livre',
        'Revisão por pares',
        'Construção coletiva',
        'Transparência'
      ]
    },
    {
      id: 'cultural-commons',
      title: 'Patrimônio Cultural',
      description: 'Tradições, arte e cultura preservadas e compartilhadas',
      icon: Music,
      color: 'from-orange-500 to-red-600',
      impact: '1000+ patrimônios mundiais',
      examples: [
        'Folclore digital',
        'Museus virtuais',
        'Línguas ancestrais',
        'Receitas tradicionais'
      ],
      principles: [
        'Preservação',
        'Transmissão',
        'Valorização',
        'Inclusão'
      ]
    }
  ];

  const commonsValues = [
    {
      title: 'Compartilhamento',
      description: 'Recursos disponíveis para todos usarem',
      icon: Share,
      color: 'text-blue-600'
    },
    {
      title: 'Colaboração',
      description: 'Trabalho conjunto para criar valor',
      icon: HandHeart,
      color: 'text-green-600'
    },
    {
      title: 'Acesso Aberto',
      description: 'Sem barreiras para participação',
      icon: Globe,
      color: 'text-purple-600'
    },
    {
      title: 'Inovação',
      description: 'Criatividade através da liberdade',
      icon: Lightbulb,
      color: 'text-orange-600'
    }
  ];

  const participationWays = [
    {
      title: 'Crie e Compartilhe',
      description: 'Produza conteúdo sob licenças abertas',
      icon: Camera,
      actions: [
        'Fotografe e compartilhe',
        'Escreva artigos',
        'Grave vídeos educativos',
        'Componha música livre'
      ]
    },
    {
      title: 'Contribua para Projetos',
      description: 'Participe de iniciativas existentes',
      icon: Code,
      actions: [
        'Edite artigos Wikipedia',
        'Contribua código open source',
        'Traduza conteúdo',
        'Documente processos'
      ]
    },
    {
      title: 'Educação e Ensino',
      description: 'Transmita conhecimento livremente',
      icon: BookOpen,
      actions: [
        'Crie cursos online',
        'Mentore outros',
        'Workshops gratuitos',
        'Tutoriais em vídeo'
      ]
    },
    {
      title: 'Preserve e Curate',
      description: 'Mantenha o patrimônio comum',
      icon: Cpu,
      actions: [
        'Archive documentos',
        'Organize bibliotecas',
        'Preserve tradições',
        'Catalogue recursos'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
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
              <Users className="w-4 h-4" />
              Cultura Commons
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Compartilhando para
              <span className="block text-purple-600">Fortalecer o Comum</span>
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Descubra modelos de compartilhamento e colaboração que fortalecem o bem comum, 
              desde software livre até patrimônio cultural.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Valores da Cultura Commons
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Princípios que guiam o compartilhamento e colaboração
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonsValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className={`inline-flex p-3 rounded-full bg-gray-100 ${value.color} mb-4`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commons Projects */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Projetos Inspiradores
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Exemplos de como a cultura commons transforma o mundo
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commonsProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedProject(index)}
              >
                <div className={`bg-gradient-to-r ${project.color} p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <project.icon className="w-8 h-8 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-white font-medium">
                      Impacto: {project.impact}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Exemplos Práticos
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.examples.map((example, exampleIndex) => (
                        <span 
                          key={exampleIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm text-center"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Princípios Fundamentais
                    </h4>
                    <ul className="space-y-2">
                      {project.principles.map((principle, principleIndex) => (
                        <li key={principleIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <span className="text-gray-700">{principle}</span>
                        </li>
                      ))}
                    </ul>
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
              Maneiras de contribuir para a cultura commons
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
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <way.icon className="w-6 h-6 text-purple-600" />
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
                      <Zap className="w-4 h-4 text-green-500" />
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
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
            <Users className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              Junte-se ao Movimento Commons
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Faça parte de uma comunidade global que acredita no poder do compartilhamento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Começar a Contribuir
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Encontrar Projetos
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CulturaCommons;