import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, TechStart",
      company: "Startup de Tecnologia",
      content: "A CalangoFlux transformou nossa operação. Nossos agentes conseguem qualificar leads 24/7 e nossa taxa de conversão aumentou 40%.",
      rating: 5,
      avatar: "CS"
    },
    {
      name: "Ana Santos",
      role: "Diretora de Marketing",
      company: "E-commerce Fashion",
      content: "Impressionante como os agentes conseguem entender o contexto e responder de forma personalizada. Nosso atendimento nunca foi tão eficiente.",
      rating: 5,
      avatar: "AS"
    },
    {
      name: "Pedro Costa",
      role: "Founder",
      company: "Consultoria Digital",
      content: "A integração com Abacus e Tana foi perfeita. Agora temos um sistema completo de gestão de conhecimento automatizado.",
      rating: 5,
      avatar: "PC"
    },
    {
      name: "Marina Oliveira",
      role: "Head de Vendas",
      company: "SaaS B2B",
      content: "Reduzimos 70% do tempo gasto em tarefas repetitivas. Nossa equipe agora foca apenas em vendas de alto valor.",
      rating: 5,
      avatar: "MO"
    },
    {
      name: "Lucas Ferreira",
      role: "CTO",
      company: "EdTech",
      content: "A plataforma é intuitiva e poderosa. Conseguimos criar agentes educacionais que auxiliam milhares de alunos simultaneamente.",
      rating: 5,
      avatar: "LF"
    },
    {
      name: "Juliana Rocha",
      role: "Diretora de Operações",
      company: "FinTech",
      content: "Segurança e compliance são fundamentais para nós. A CalangoFlux atende todos os requisitos sem comprometer a performance.",
      rating: 5,
      avatar: "JR"
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-white to-gray-50">
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
            Depoimentos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Empresas que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Confiam
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Veja como empresas de todos os tamanhos estão revolucionando 
            suas operações com nossa plataforma SaaS Agentic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-secondary-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                        </div>
                        <div className="text-xs text-gray-500">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-primary-300" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.content}"
                  </p>
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
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Junte-se a centenas de empresas que já transformaram seus negócios
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Comece hoje mesmo e descubra como nossa plataforma pode revolucionar sua operação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Começar Teste Gratuito
              </button>
              <button className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Falar com Especialista
              </button>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-900 mb-2">500+</div>
              <div className="text-gray-600">Empresas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-900 mb-2">10k+</div>
              <div className="text-gray-600">Agentes Criados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-900 mb-2">1M+</div>
              <div className="text-gray-600">Interações Processadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Garantido</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;