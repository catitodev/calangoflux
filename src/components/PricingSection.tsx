import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Building2, Rocket, TestTube, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: "Pioneer Access",
      price: "R$ 47",
      period: "/mês",
      description: "Acesso subsidiado por projetos com propósito e impacto social",
      icon: <Rocket className="w-6 h-6" />,
      badge: "Impacto Social",
      badgeColor: "bg-primary-500",
      features: [
        "Acesso completo ao MVP",
        "Subsídio de 100% por 6 meses",
        "Feedback direto com a equipe",
        "Atualizações semanais",
        "Suporte prioritário",
        "Dados preservados na migração"
      ],
      buttonText: "Solicitar Subsídio",
      buttonVariant: "default" as const,
      popular: true,
      available: true
    },
    {
      name: "Beta Tester",
      price: "R$ 97",
      period: "/mês",
      description: "Para quem quer testar recursos avançados e subsidiar o desenvolvimento",
      icon: <TestTube className="w-6 h-6" />,
      badge: "Subsidiador",
      badgeColor: "bg-secondary-500",
      features: [
        "Tudo do Pioneer Access",
        "Recursos experimentais",
        "Testes A/B exclusivos",
        "Sessões de feedback",
        "Subsídio cruzado para projetos sociais",
        "Desconto de 50% no lançamento"
      ],
      buttonText: "Subsidiar & Testar",
      buttonVariant: "secondary" as const,
      popular: false,
      available: true
    },
    {
      name: "Impact Founder",
      price: "R$ 197",
      period: "/mês",
      description: "Para empresas que querem apoiar ativamente o desenvolvimento social",
      icon: <Crown className="w-6 h-6" />,
      badge: "Mecenas",
      badgeColor: "bg-accent-500",
      features: [
        "Tudo do Beta Tester",
        "Influência no roadmap",
        "Consultoria personalizada",
        "Implementação assistida",
        "Patrocínio de projetos sociais",
        "Reconhecimento como fundador"
      ],
      buttonText: "Ser Mecenas",
      buttonVariant: "outline" as const,
      popular: false,
      available: true
    },
    {
      name: "Enterprise",
      price: "Conversar",
      period: "",
      description: "Para grandes empresas com orçamento específico para impacto social",
      icon: <Building2 className="w-6 h-6" />,
      badge: "Corporativo",
      badgeColor: "bg-gray-600",
      features: [
        "Desenvolvimento dedicado",
        "Equipe técnica exclusiva",
        "Programa de responsabilidade social",
        "SLA garantido",
        "Infraestrutura dedicada",
        "Relatórios de impacto social"
      ],
      buttonText: "Agendar Conversa",
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
            Modelo Sustentável
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Subsídio{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Cruzado
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Nosso modelo inovador: <strong>a cada 10 clientes pagantes, 1 serviço é fornecido por subsídio cruzado</strong>. 
            Assim, projetos sociais têm acesso à tecnologia financiados por quem pode pagar.
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Como Funciona o Subsídio Cruzado?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Modelo 10:1</strong> - A cada 10 clientes que pagam nossos serviços, conseguimos financiar 
              1 projeto social com acesso completo e gratuito. É sustentável e gera impacto real!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="default" className="px-8 py-3 bg-primary-500 hover:bg-primary-600">
                <a href="https://www.aideaflux.xyz" target="_blank" rel="noopener noreferrer">
                  Solicitar Subsídio
                </a>
              </Button>
              <Button asChild variant="outline" className="px-8 py-3 border-primary-500 text-primary-500 hover:bg-primary-50">
                <a href="#contato">
                  Saber Mais
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
              🎯 Meta: 100 Clientes Pagantes = 10 Projetos Subsidiados
            </h3>
            <p className="text-gray-700 text-sm">
              Nosso modelo 10:1 permite crescimento sustentável enquanto financiamos projetos de impacto social.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;