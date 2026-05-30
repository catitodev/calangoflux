import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que é automação agentic e como é diferente de automação tradicional?",
      answer: "Automação agentic usa agentes de IA autônomos que tomam decisões, aprendem com contexto e executam tarefas complexas sem intervenção manual. Diferente de ferramentas como n8n ou Zapier (que seguem fluxos fixos), nossos agentes entendem objetivos, classificam demandas e agem de forma inteligente — como um funcionário digital que pensa antes de agir."
    },
    {
      question: "Quanto custa contratar automação agentic para meu negócio?",
      answer: "Na CalangoFlux, os serviços variam de R$700 a R$3.900 por entrega, com ciclo de 10 a 20 dias úteis. Não cobramos mensalidade obrigatória. Você paga pelo que precisa e escala quando quiser. A cada 10 clientes pagantes, atendemos 1 projeto social gratuitamente."
    },
    {
      question: "Preciso de conhecimento técnico para usar agentes de IA?",
      answer: "Não. Entregamos tudo funcionando com documentação completa e treinamento. Nosso modelo é baseado em autonomia — você sai sabendo usar, sem depender de nós. Oferecemos suporte por 30 dias após a entrega."
    },
    {
      question: "Como funciona o atendimento automatizado com IA no site?",
      answer: "O CalangoBot no site faz triagem inicial usando IA (Llama 3.3 70B via Groq). Quando detecta necessidade de análise mais profunda, escala para o Gemini via nosso sistema operacional agentic. Tudo acontece em tempo real, com detecção automática de leads e notificação instantânea."
    },
    {
      question: "O que é Web3 e como a CalangoFlux usa blockchain?",
      answer: "Web3 é a internet descentralizada baseada em blockchain. Usamos para: tokenização de ativos ecológicos (créditos de carbono), rastreabilidade de produtos orgânicos, DAOs para governança de coletivos, e oferecemos letramento Web3 gratuito para comunidades que nunca tiveram contato com a tecnologia."
    },
    {
      question: "Vocês atendem ONGs e projetos sociais?",
      answer: "Sim. Nosso modelo de subsídio cruzado garante que a cada 10 clientes pagantes, 1 projeto social é atendido com a mesma qualidade profissional. Autônomos, coletivos, cooperativas e ONGs são nosso público principal."
    },
    {
      question: "Qual a diferença entre CalangoFlux e outras agências digitais?",
      answer: "Somos 80% agentic e 100% cloud. Nossos agentes de IA trabalham 24/7 em containers isolados com segurança zero-trust e audit trail imutável. Não usamos templates genéricos — cada solução é personalizada com IA que aprende o contexto do seu negócio. E somos open source (Apache-2.0)."
    },
    {
      question: "Como funciona a segurança dos dados?",
      answer: "Usamos isolamento WASM por agente (cada um em sandbox próprio), credenciais nunca expostas (apenas tokens temporários de 5 minutos), audit trail imutável via SHA-256 hash chain, e monitoramento em tempo real pelo agente SHIELD. Seguimos a LGPD e todo o código é auditável (open source)."
    },
    {
      question: "Posso integrar com ferramentas que já uso (Notion, Airtable, Telegram)?",
      answer: "Sim. O sistema suporta 20+ integrações nativas: Notion, Airtable, Telegram, WhatsApp, Google Drive, email, LinkedIn, Instagram, Slack, e mais. Todas as integrações são feitas pelo agente OpenClaw, que gerencia credenciais de forma segura."
    },
    {
      question: "Como entro em contato?",
      answer: "WhatsApp: +55 22 98832-4416. Email: calangoflux@calangoflux.xyz. Ou converse com o CalangoBot aqui no site — ele está disponível 24/7 e pode agendar uma conversa com nossa equipe."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-[var(--bg-primary)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-[var(--bg-elevated)] text-[var(--text-secondary)]">
            <HelpCircle className="w-3 h-3 mr-1" />
            Perguntas Frequentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Dúvidas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              Esclarecidas
            </span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
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
                <Card className="border border-[var(--bg-elevated)] shadow-soft hover:shadow-md transition-shadow duration-300 bg-[var(--bg-surface)]">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold text-[var(--text-primary)] pr-4">
                        {faq.question}
                      </CardTitle>
                      <ChevronDown 
                        className={`w-5 h-5 text-[var(--text-muted)] transition-transform duration-300 ${
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
                      <p className="text-[var(--text-secondary)] leading-relaxed">
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
          <div className="bg-[var(--bg-surface)] border border-[var(--bg-elevated)] rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              Não encontrou sua resposta?
            </h3>
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              Nossa equipe está pronta para esclarecer qualquer dúvida sobre a plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-[var(--bg-primary)] px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Falar com Especialista
              </button>
              <button className="btn border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 px-8 py-3 rounded-lg font-medium transition-all duration-200">
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
