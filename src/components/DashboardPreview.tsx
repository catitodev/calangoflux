import { motion } from 'framer-motion';
import { 
  Activity, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Bot,
  Zap,
  Target,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const DashboardPreview = () => {
  const stats = [
    {
      title: "Agentes Ativos",
      value: "12",
      change: "+3 hoje",
      icon: <Bot className="w-5 h-5" />,
      color: "text-primary-600"
    },
    {
      title: "Interações",
      value: "1.2k",
      change: "+18% vs ontem",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "text-secondary-600"
    },
    {
      title: "Automações",
      value: "24",
      change: "+2 esta semana",
      icon: <Zap className="w-5 h-5" />,
      color: "text-accent-600"
    },
    {
      title: "Taxa de Sucesso",
      value: "94%",
      change: "+2% vs semana passada",
      icon: <Target className="w-5 h-5" />,
      color: "text-green-600"
    }
  ];

  const recentActivity = [
    {
      agent: "Agente de Vendas",
      action: "Qualificou novo lead",
      time: "2 min atrás",
      status: "success"
    },
    {
      agent: "Agente de Suporte",
      action: "Resolveu ticket #1234",
      time: "5 min atrás",
      status: "success"
    },
    {
      agent: "Agente de Conteúdo",
      action: "Publicou post no LinkedIn",
      time: "8 min atrás",
      status: "success"
    },
    {
      agent: "Agente de Gestão",
      action: "Enviou relatório semanal",
      time: "12 min atrás",
      status: "success"
    }
  ];

  const integrations = [
    { name: "CalangoFlux AI", status: "connected", color: "bg-primary-500" },
    { name: "Tana", status: "connected", color: "bg-secondary-500" },
    { name: "WhatsApp", status: "connected", color: "bg-green-500" },
    { name: "Telegram", status: "connected", color: "bg-blue-500" },
    { name: "Discord", status: "connected", color: "bg-purple-500" },
    { name: "Slack", status: "pending", color: "bg-gray-400" }
  ];

  return (
    <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Activity className="w-3 h-3 mr-1" />
            Dashboard Preview
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Controle Total da sua{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Operação
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Monitore seus agentes, analise performance e otimize resultados 
            em tempo real através do nosso dashboard intuitivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-secondary-900">
                  Dashboard Principal
                </CardTitle>
                <CardDescription>
                  Visão geral da sua operação agentic
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`${stat.color} bg-opacity-10 p-2 rounded-lg`}>
                          {stat.icon}
                        </div>
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="text-3xl font-bold text-secondary-900 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.title}</div>
                      <div className="text-xs text-green-600 mt-1">{stat.change}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border">
                  <h3 className="font-semibold text-secondary-900 mb-4">
                    Atividade Recente
                  </h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-white/50"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <div className="flex-1">
                          <div className="font-medium text-secondary-900">
                            {activity.agent}
                          </div>
                          <div className="text-sm text-gray-600">
                            {activity.action}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">
                          {activity.time}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Integrações */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-secondary-900">
                  Integrações
                </CardTitle>
                <CardDescription>
                  Conecte suas ferramentas favoritas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-white/50"
                    >
                      <div className={`w-3 h-3 rounded-full ${integration.color}`} />
                      <span className="text-sm font-medium text-secondary-900">
                        {integration.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-secondary-900">
                  Ações Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <button className="w-full p-3 text-left rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors">
                    <div className="font-medium text-primary-800">Criar Agente</div>
                    <div className="text-sm text-primary-600">Configure um novo agente</div>
                  </button>
                  <button className="w-full p-3 text-left rounded-lg bg-secondary-50 hover:bg-secondary-100 transition-colors">
                    <div className="font-medium text-secondary-800">Ver Relatórios</div>
                    <div className="text-sm text-secondary-600">Análise detalhada</div>
                  </button>
                  <button className="w-full p-3 text-left rounded-lg bg-accent-50 hover:bg-accent-100 transition-colors">
                    <div className="font-medium text-accent-800">Configurações</div>
                    <div className="text-sm text-accent-600">Ajustar parâmetros</div>
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;