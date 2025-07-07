import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Building2, Rocket, TestTube } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: "Early Access",
      price: "Gratuito",
      period: "por 6 meses",
      description: "Acesso prioritário ao MVP para os primeiros usuários",
      icon: <Rocket className="w-6 h-6" />,
      badge: "Limitado",
      badgeColor: "bg-primary-500",
      features: [
        "Acesso ao MVP completo",
        "Feedback direto com a equipe",
        "Atualizações semanais",
        "Sem compromisso de compra",
        "Suporte prioritário",
        "Dados preservados na migração"
      ],
      buttonText: "Solicitar Acesso",
      buttonVariant: "default" as const,
      popular: true,
      available: true
    },
    {
      name: "Beta Tester",
      price: "R$ 47",
      period: "/mês",
      description: "Para quem quer testar recursos avançados em desenvolvimento",
      icon: <TestTube className="w-6 h-6" />,
      badge: "Experimental",
      badgeColor: "bg-secondary-500",
      features: [
        "Tudo do Early Access",
        "Recursos experimentais",
        "Testes A/B exclusivos",
        "Sessões de feedback",
        "Desconto de 50% no lançamento",
        "Créditos de uso futuros"
      ],
      buttonText: "Quero Testar",
      buttonVariant: "secondary" as const,
      popular: false,
      available: true
    },
    {
      name: "Founder",
      price: "R$ 197",
      period: "/mês",
      description: "Para empresas que querem apoiar o desenvolvimento",
      icon: <Crown className="w-6 h-6" />,
      badge: "Apoiador",
      badgeColor: "bg-accent-500",
      features: [
        "Tudo do Beta Tester",
        "Influência no roadmap",
        "Consultoria personalizada",
        "Implementação assistida",
        "Preço congelado por 2 anos",
        "Reconhecimento como fundador"
      ],
      buttonText: "Apoiar Projeto",
      buttonVariant: "outline" as const,
      popular: false,
      available: true
    },
    {
      name: "Enterprise",
      price: "Conversar",
      period: "",
      description: "Para grandes empresas que precisam de desenvolvimento customizado",
      icon: <Building2 className="w-6 h-6" />,
      badge: "Customizado",
      badgeColor: "bg-gray-600",
      features: [
        "Desenvolvimento dedicado",
        "Equipe técnica exclusiva",
        "Integrações personalizadas",
        "SLA garantido",
        "Infraestrutura dedicada",
        "Consultoria estratégica"
      ],
      buttonText: "Agendar Conversa",
      buttonVariant: "ghost" as const,
      popular: false,
      available: false
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
            <Rocket className="w-3 h-3 mr-1" />
            Early Access
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Faça Parte da{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Jornada
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Estamos em fase MVP e buscamos pioneiros para construir juntos a primeira 
            plataforma brasileira de automação agentic.
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
              <Card className={`h-full relative ${plan.popular ? 'border-2 border-primary-500 shadow-lg' : 'border shadow-soft'} hover:shadow-lg transition-shadow duration-300 ${!plan.available ? 'opacity-75' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className={`${plan.badgeColor} text-white`}>
                      Mais Popular
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
                    className={`w-full mb-6 ${plan.popular ? 'bg-primary-500 hover:bg-primary-600' : ''} ${!plan.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!plan.available}
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
              Por que estamos oferecendo acesso gratuito?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Porque acreditamos que os melhores produtos são construídos junto com seus usuários. 
              Seu feedback será fundamental para criar algo realmente útil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" className="px-8 py-3 bg-primary-500 hover:bg-primary-600">
                Quero Participar
              </Button>
              <Button variant="outline" className="px-8 py-3 border-primary-500 text-primary-500 hover:bg-primary-50">
                Saber Mais
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
                <Rocket className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Acesso Prioritário</h4>
              <p className="text-gray-600 text-sm">Seja um dos primeiros a usar a tecnologia agentic</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-secondary-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Influência no Produto</h4>
              <p className="text-gray-600 text-sm">Ajude a definir o futuro da plataforma</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Preços Especiais</h4>
              <p className="text-gray-600 text-sm">Garantia de preços exclusivos quando lançarmos</p>
            </div>
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
              🎯 Meta: 50 Early Access Users
            </h3>
            <p className="text-gray-700 text-sm">
              Estamos limitando o acesso inicial para garantir qualidade do feedback. 
              Restam apenas algumas vagas!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;