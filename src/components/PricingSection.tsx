import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Building2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: "Essential",
      price: "R$ 97",
      period: "/mês",
      description: "Perfeito para pequenos negócios começando com automação",
      icon: <Zap className="w-6 h-6" />,
      badge: "Mais Popular",
      badgeColor: "bg-primary-500",
      features: [
        "Até 5 agentes ativos",
        "1.000 interações/mês",
        "Integrações básicas",
        "Suporte por email",
        "Dashboard básico",
        "WhatsApp + Telegram"
      ],
      buttonText: "Começar Teste Gratuito",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Core",
      price: "R$ 197",
      period: "/mês",
      description: "Ideal para empresas crescendo com automação avançada",
      icon: <Star className="w-6 h-6" />,
      badge: "Recomendado",
      badgeColor: "bg-secondary-500",
      features: [
        "Até 15 agentes ativos",
        "5.000 interações/mês",
        "Todas as integrações",
        "Suporte prioritário",
        "Analytics avançado",
        "Multi-channel completo",
        "Fluxos visuais",
        "API access"
      ],
      buttonText: "Começar Agora",
      buttonVariant: "secondary" as const,
      popular: false
    },
    {
      name: "Premium",
      price: "R$ 397",
      period: "/mês",
      description: "Para empresas que precisam de máxima performance",
      icon: <Crown className="w-6 h-6" />,
      badge: "Mais Recursos",
      badgeColor: "bg-accent-500",
      features: [
        "Agentes ilimitados",
        "25.000 interações/mês",
        "Integração Abacus + Tana",
        "Suporte 24/7",
        "White-label",
        "Automação personalizada",
        "Colaboração em equipe",
        "Webhooks avançados",
        "Backup automático"
      ],
      buttonText: "Escalar Agora",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      description: "Solução completa para grandes organizações",
      icon: <Building2 className="w-6 h-6" />,
      badge: "Sob Medida",
      badgeColor: "bg-gray-600",
      features: [
        "Tudo do Premium",
        "Interações ilimitadas",
        "Infraestrutura dedicada",
        "Suporte técnico dedicado",
        "Treinamento personalizado",
        "Integração customizada",
        "SLA garantido",
        "Compliance empresarial",
        "Consultoria estratégica"
      ],
      buttonText: "Falar com Vendas",
      buttonVariant: "ghost" as const,
      popular: false
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
            <Star className="w-3 h-3 mr-1" />
            Planos e Preços
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Escolha o plano{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Ideal
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comece grátis e escale conforme seu negócio cresce. 
            Todos os planos incluem 14 dias de teste gratuito.
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
            >
              <Card className={`h-full relative ${plan.popular ? 'border-2 border-primary-500 shadow-lg' : 'border shadow-soft'} hover:shadow-lg transition-shadow duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className={`${plan.badgeColor} text-white`}>
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${plan.popular ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'}`}>
                      {plan.icon}
                    </div>
                  </div>
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
                    variant={plan.buttonVariant}
                    className={`w-full mb-6 ${plan.popular ? 'bg-primary-500 hover:bg-primary-600' : ''}`}
                  >
                    {plan.buttonText}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Ainda tem dúvidas sobre qual plano escolher?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Fale com nossos especialistas e descubra qual solução se adapta melhor ao seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="px-8 py-3">
                Agendar Consulta
              </Button>
              <Button variant="ghost" className="px-8 py-3">
                Comparar Planos
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
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Teste Gratuito</h4>
              <p className="text-gray-600 text-sm">14 dias completos para testar todos os recursos</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-secondary-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Sem Taxas de Setup</h4>
              <p className="text-gray-600 text-sm">Comece imediatamente sem custos adicionais</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Upgrade Flexível</h4>
              <p className="text-gray-600 text-sm">Mude de plano quando quiser, sem complicações</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;