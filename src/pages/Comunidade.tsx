import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Globe, 
  Heart, 
  Star,
  Plus,
  Search,
  Filter,
  MapPin,
  Clock,
  UserPlus,
  Video,
  BookOpen,
  Coffee
} from 'lucide-react';

const Comunidade: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('members');

  const communityMembers = [
    {
      id: 1,
      name: 'Ana Silva',
      role: 'Educadora Digital',
      location: 'São Paulo, Brasil',
      expertise: ['Letramento Digital', 'Educação'],
      avatar: '👩‍🏫',
      contributions: 42,
      level: 'Expert'
    },
    {
      id: 2,
      name: 'Carlos Santos',
      role: 'Desenvolvedor ReFi',
      location: 'Lisboa, Portugal',
      expertise: ['ReFi', 'Blockchain'],
      avatar: '👨‍💻',
      contributions: 67,
      level: 'Master'
    },
    {
      id: 3,
      name: 'Maria Gonzalez',
      role: 'Ativista Commons',
      location: 'Barcelona, Espanha',
      expertise: ['Commons', 'Sustentabilidade'],
      avatar: '👩‍🌾',
      contributions: 38,
      level: 'Expert'
    },
    {
      id: 4,
      name: 'João Mendes',
      role: 'Designer UX',
      location: 'Rio de Janeiro, Brasil',
      expertise: ['Design', 'Acessibilidade'],
      avatar: '👨‍🎨',
      contributions: 29,
      level: 'Advanced'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Workshop: Criando Bens Públicos Digitais',
      date: '2024-02-15',
      time: '19:00',
      type: 'workshop',
      host: 'Ana Silva',
      participants: 23,
      maxParticipants: 30,
      description: 'Aprenda a identificar e criar recursos digitais que beneficiem toda a comunidade'
    },
    {
      id: 2,
      title: 'Discussão: O Futuro do ReFi no Brasil',
      date: '2024-02-18',
      time: '20:00',
      type: 'discussion',
      host: 'Carlos Santos',
      participants: 45,
      maxParticipants: 50,
      description: 'Debate sobre oportunidades e desafios das finanças regenerativas'
    },
    {
      id: 3,
      title: 'Café Virtual: Networking Abundante',
      date: '2024-02-20',
      time: '18:30',
      type: 'networking',
      host: 'Maria Gonzalez',
      participants: 12,
      maxParticipants: 20,
      description: 'Conexões informais para trocar experiências e formar parcerias'
    }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Como medir o impacto de projetos de commons?',
      author: 'Ana Silva',
      replies: 12,
      lastActivity: '2 horas atrás',
      tags: ['Commons', 'Métricas'],
      excerpt: 'Estou desenvolvendo um projeto comunitário e gostaria de feedback sobre indicadores...'
    },
    {
      id: 2,
      title: 'Oportunidades em ReFi para iniciantes',
      author: 'Carlos Santos',
      replies: 8,
      lastActivity: '5 horas atrás',
      tags: ['ReFi', 'Iniciantes'],
      excerpt: 'Listando protocolos e plataformas acessíveis para quem está começando...'
    },
    {
      id: 3,
      title: 'Ferramentas para letramento digital em comunidades',
      author: 'João Mendes',
      replies: 15,
      lastActivity: '1 dia atrás',
      tags: ['Letramento', 'Ferramentas'],
      excerpt: 'Compartilhando recursos gratuitos para educação digital...'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'PlataformaEdu Aberta',
      description: 'Plataforma de educação digital gratuita para comunidades rurais',
      status: 'Em desenvolvimento',
      contributors: 8,
      skills: ['Desenvolvimento', 'Design', 'Conteúdo'],
      leader: 'Ana Silva'
    },
    {
      id: 2,
      title: 'Mapeamento ReFi Brasil',
      description: 'Documentação de iniciativas de finanças regenerativas no país',
      status: 'Buscando colaboradores',
      contributors: 3,
      skills: ['Pesquisa', 'Escrita', 'Análise'],
      leader: 'Carlos Santos'
    },
    {
      id: 3,
      title: 'Rede de Trocas Locais',
      description: 'Sistema de economia solidária baseado em blockchain',
      status: 'Planejamento',
      contributors: 5,
      skills: ['Blockchain', 'Economia', 'Comunidade'],
      leader: 'Maria Gonzalez'
    }
  ];

  const tabs = [
    { id: 'members', label: 'Membros', icon: Users },
    { id: 'events', label: 'Eventos', icon: Calendar },
    { id: 'discussions', label: 'Discussões', icon: MessageCircle },
    { id: 'projects', label: 'Projetos', icon: BookOpen }
  ];

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
              <Users className="w-4 h-4" />
              Comunidade Abundante
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Conecte-se com
              <span className="block text-blue-600">Agentes de Mudança</span>
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Faça parte de uma comunidade global de pessoas que acreditam no poder 
              da colaboração, do compartilhamento e da regeneração.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">1,247</div>
              <div className="text-sm text-gray-600">Membros Ativos</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">43</div>
              <div className="text-sm text-gray-600">Países</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">89</div>
              <div className="text-sm text-gray-600">Projetos Ativos</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Heart className="w-8 h-8 text-pink-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">2,156</div>
              <div className="text-sm text-gray-600">Conexões Formadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  selectedTab === tab.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Members Tab */}
          {selectedTab === 'members' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Membros da Comunidade</h2>
                <div className="flex gap-3">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Buscar membros..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    Filtros
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {communityMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{member.avatar}</div>
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                      <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        {member.location}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.expertise.map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span>{member.contributions} contribuições</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                        {member.level}
                      </span>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <UserPlus className="w-4 h-4" />
                      Conectar
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Events Tab */}
          {selectedTab === 'events' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Próximos Eventos</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  Criar Evento
                </button>
              </div>
              <div className="space-y-6">
                {events.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl p-6 shadow-lg"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            event.type === 'workshop' ? 'bg-green-100 text-green-800' :
                            event.type === 'discussion' ? 'bg-blue-100 text-blue-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {event.type === 'workshop' ? 'Workshop' :
                             event.type === 'discussion' ? 'Discussão' : 'Networking'}
                          </span>
                          <span className="text-sm text-gray-500">por {event.host}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(event.date).toLocaleDateString('pt-BR')}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {event.participants}/{event.maxParticipants}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Participar
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                          <Video className="w-4 h-4 mx-auto" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Discussions Tab */}
          {selectedTab === 'discussions' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Discussões Ativas</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  Nova Discussão
                </button>
              </div>
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <motion.div
                    key={discussion.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{discussion.title}</h3>
                        <p className="text-gray-600 mb-3">{discussion.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span>por {discussion.author}</span>
                          <span>{discussion.replies} respostas</span>
                          <span>{discussion.lastActivity}</span>
                        </div>
                        <div className="flex gap-2">
                          {discussion.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-blue-600">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {selectedTab === 'projects' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Projetos Colaborativos</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  Propor Projeto
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl p-6 shadow-lg"
                  >
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Em desenvolvimento' ? 'bg-blue-100 text-blue-800' :
                          project.status === 'Buscando colaboradores' ? 'bg-orange-100 text-orange-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Users className="w-4 h-4" />
                        <span>{project.contributors} colaboradores</span>
                        <span>•</span>
                        <span>Liderado por {project.leader}</span>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-900 mb-2">Habilidades necessárias:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Participar
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <Star className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Comunidade;