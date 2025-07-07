import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Building2, Rocket, TestTube, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: "Pioneer Access",
      price: "R$ 147",
      period: "/mês",
      description: "Presença digital completa com automação básica",
      icon: <Rocket className="w-6 h-6" />,
      badge: "Regenerativo",
      badgeColor: "bg-primary-500",
      features: [
        "1 landing page simples",
        "CTAs otimizados",
        "Botões para WhatsApp ou Telegram",
        "1 Linktree para bio",
        "Respostas rápidas no WhatsApp/Telegram",
        "*Identidade visual +R$93,00"
      ],
      buttonText: "Cultivar Mudança",
      buttonVariant: "default" as const,
      popular: true,
      available: true
    },
    {
      name: "Beta Tester",
      price: "R$ 297",
      period: "/mês",
      description: "Presença digital + agente personalizado exclusivo",
      icon: <TestTube className="w-6 h-6" />,
      badge: "Co-criador",
      badgeColor: "bg-secondary-500",
      features: [
        "Tudo do Pioneer Access",
        "1 agente personalizado exclusivo",
        "Funcionando em seu melhor canal",
        "Treinamento personalizado do agente",
        "Suporte técnico dedicado",
        "Atualizações mensais do agente"
      ],
      buttonText: "Co-criar Futuro",
      buttonVariant: "secondary" as const,
      popular: false,
      available: true
    },
    {
      name: "Impact Founder",
      price: "R$ 347",
      period: "/mês",
      description: "Solução completa com automação de redes sociais",
      icon: <Crown className="w-6 h-6" />,
      badge: "Sistêmico",
      badgeColor: "bg-accent-500",
      features: [
        "Tudo do Beta Tester",
        "Automação para 3 postagens semanais",
        "2 redes sociais de sua preferência",
        "Calendário editorial automatizado",
        "Análise de engajamento",
        "Estratégia de conteúdo personalizada"
      ],
      buttonText: "Liderar Regeneração",
      buttonVariant: "outline" as const,
      popular: false,
      available: true
    },
    {
      name: "Enterprise",
      price: "Conversar",
      period: "",
      description: "Para organizações que querem transformação regenerativa em escala",
      icon: <Building2 className="w-6 h-6" />,
      badge: "Transformacional",
      badgeColor: "bg-gray-600",
      features: [
        "Desenvolvimento dedicado",
        "Contrato personalizado",
        "Equipe técnica exclusiva",
        "Transformação organizacional",
        "SLA garantido",
        "Relatórios de impacto regenerativo"
      ],
      buttonText: "Transformar Organização",
      buttonVariant: "ghost" as const,
      popular: false,
      available: true
    }
  ];

  return (
    <section id="pricing" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <DollarSign className="w-3 h-3 mr-1" />
            Economia Regenerativa
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Planos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Regenerativos
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Escolha o plano que melhor se alinha com sua jornada regenerativa. 
            <strong> Contratos mínimos garantem ciclos completos de transformação.</strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className={`h-full relative ${plan.popular ? 'border-2 border-primary-500 shadow-lg scale-105' : 'border shadow-soft'} hover:shadow-lg transition-all duration-300 ${!plan.available ? 'opacity-75' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className={`${plan.badgeColor} text-white`}>
                      Mais Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`p-3 rounded-full ${plan.popular ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'}`}>
                      {plan.icon}
                    </div>
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-secondary-900">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-secondary-900">{plan.price}</span>
                    <span className="text-gray-600 text-lg">{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-600 mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button 
                    asChild={plan.available}
                    variant={plan.buttonVariant}
                    className={`w-full mb-6 ${plan.popular ? 'bg-primary-500 hover:bg-primary-600' : ''} ${!plan.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!plan.available}
                  >
                    <a href={plan.available ? "https://www.aideaflux.xyz" : "#"} target={plan.available ? "_blank" : "_self"} rel={plan.available ? "noopener noreferrer" : ""}>
                      {plan.buttonText}
                    </a>
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      >
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Seção Subsídio Cruzado Original */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Badge variant="outline" className="mb-4">
            <Star className="w-3 h-3 mr-1" />
            Modelo Inovador
          </Badge>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
            Subsídio{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Cruzado
            </span>
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Nosso modelo inovador: <strong>a cada 10 clientes pagantes, 1 serviço é fornecido por subsídio cruzado</strong>. 
            Assim, projetos sociais têm acesso à tecnologia financiados por quem pode pagar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Acesso Justo</h4>
              <p className="text-gray-600 text-sm">Tecnologia de ponta para quem precisa, financiada por quem pode</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-secondary-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Impacto Multiplicado</h4>
              <p className="text-gray-600 text-sm">Cada pagamento gera acesso para projetos sociais</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Sustentabilidade</h4>
              <p className="text-gray-600 text-sm">Modelo que permite crescimento e impacto duradouro</p>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-secondary-900 mb-2">
              🎯 Meta: 100 Clientes Pagantes = 10 Projetos Subsidiados
            </h4>
            <p className="text-gray-700 text-sm">
              Nosso modelo 10:1 permite crescimento sustentável enquanto financiamos projetos de impacto social.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Precisa de Subsídio?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Projetos com <strong>impacto social comprovado</strong> podem solicitar subsídio. 
              Avaliamos cada caso individualmente considerando propósito, alcance e sustentabilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="default" className="px-8 py-3 bg-primary-500 hover:bg-primary-600">
                <a href="https://www.aideaflux.xyz" target="_blank" rel="noopener noreferrer">
                  Solicitar Subsídio
                </a>
              </Button>
              <Button asChild variant="outline" className="px-8 py-3 border-primary-500 text-primary-500 hover:bg-primary-50">
                <a href="#contato">
                  Critérios de Elegibilidade
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Ciclos Completos</h4>
              <p className="text-gray-600 text-sm">Contratos mínimos garantem tempo suficiente para transformação real</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-secondary-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Foco Regenerativo</h4>
              <p className="text-gray-600 text-sm">Cada plano é desenhado para gerar impacto positivo duradouro</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Co-criação</h4>
              <p className="text-gray-600 text-sm">Construímos juntos soluções que regeneram sistemas</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">
              � Economia Regenerativa em Ação
            </h3>
            <p className="text-gray-700 text-sm">
              Nossos planos são desenhados para criar valor compartilhado, regenerar sistemas e promover transformação duradoura.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;