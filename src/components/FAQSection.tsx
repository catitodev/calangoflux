import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que é um sistema Agentic?",
      answer: "Um sistema Agentic é uma forma avançada de IA que vai além da simples automação. Nossos agentes são capazes de aprender, tomar decisões autônomas e executar ações complexas com base em objetivos definidos. Eles se adaptam ao contexto e melhoram continuamente sua performance."
    },
    {
      question: "Como funcionam nossas integrações e automações?",
      answer: "Utilizamos as melhores ferramentas do mercado para criar automações inteligentes, fornecendo a infraestrutura necessária para processamento avançado. Nossos sistemas funcionam como um banco de conhecimento dinâmico que alimenta nossos agentes com informações contextuais. Ambas as integrações são nativas e funcionam em tempo real."
    },
    {
      question: "Posso começar com um teste gratuito?",
      answer: "Sim! Oferecemos 14 dias de teste gratuito completo em todos os planos. Durante esse período, você tem acesso a todos os recursos, pode criar agentes, testar integrações e avaliar a plataforma sem nenhum custo ou compromisso."
    },
    {
      question: "É seguro para dados empresariais?",
      answer: "Absolutamente. Utilizamos criptografia end-to-end, infraestrutura em nuvem com certificação SOC 2 Type II, e seguimos rigorosamente a LGPD. Nossos agentes processam dados localmente quando necessário e todas as integrações são protegidas por autenticação multifator."
    },
    {
      question: "Como é o suporte técnico?",
      answer: "Oferecemos suporte escalonado por plano: email para Essential, prioritário para Core, 24/7 para Premium e suporte dedicado para Enterprise. Também fornecemos documentação completa, tutoriais em vídeo e uma comunidade ativa de usuários."
    },
    {
      question: "Posso personalizar os agentes?",
      answer: "Sim! Nossa plataforma oferece total flexibilidade. Você pode personalizar o comportamento, aparência, canais de comunicação e até mesmo criar agentes especializados para casos de uso específicos do seu negócio. Tudo isso através de nossa interface visual intuitiva."
    },
    {
      question: "Quais plataformas são suportadas?",
      answer: "Integramos nativamente com WhatsApp Business, Telegram, Discord, Slack, e-mail, websites e aplicativos mobile. Também oferecemos API robusta para integrações customizadas com qualquer sistema existente."
    },
    {
      question: "Como funciona o processo de onboarding?",
      answer: "Após a contratação, nossa equipe técnica conduz um onboarding personalizado que inclui: configuração inicial, treinamento da equipe, criação dos primeiros agentes e acompanhamento durante as primeiras semanas para garantir o sucesso da implementação."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <HelpCircle className="w-3 h-3 mr-1" />
            Perguntas Frequentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Dúvidas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Esclarecidas
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre nossa plataforma SaaS Agentic.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-soft hover:shadow-md transition-shadow duration-300">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold text-secondary-900 pr-4">
                        {faq.question}
                      </CardTitle>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </CardHeader>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <CardContent className="pt-0">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Não encontrou sua resposta?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Nossa equipe está pronta para esclarecer qualquer dúvida sobre a plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Falar com Especialista
              </button>
              <button className="btn border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Agendar Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;