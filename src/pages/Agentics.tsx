import { ArrowLeft, Cpu, Brain, Target, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Agentics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Agentics Personalizados | CalangoFlux';
  }, []);

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-primary)] py-20 border-b border-[var(--bg-elevated)]">
        <div className="container">
          <Link to="/" className="inline-flex items-center text-[var(--text-muted)] hover:text-[var(--accent-primary)] mb-8 transition">
            <ArrowLeft size={16} className="mr-2" />
            Voltar para início
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--text-primary)]">Agentics Personalizados</h1>
            <p className="text-xl max-w-3xl mb-8 text-[var(--text-secondary)]">
              Desenvolvemos sistemas autônomos com IA que tomam decisões, aprendem com dados e executam ações com base em critérios definidos. São agentes inteligentes para gestão, atendimento, curadoria ou operação.
            </p>
            <a 
              href="https://wa.me/5522988324416" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn bg-[var(--accent-primary)] text-[var(--bg-primary)] hover:opacity-90"
            >
              Criar meu Agentic
            </a>
          </motion.div>
        </div>
      </section>
      
      <section className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">
                Agentes inteligentes para escalar seu negócio
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Os Agentics são sistemas de IA autônomos capazes de realizar tarefas complexas, tomar decisões e executar ações sem intervenção humana constante.
              </p>
              <p className="text-[var(--text-secondary)]">
                Diferente de simples automações, os Agentics são projetados para aprender, adaptar-se e melhorar continuamente à medida que interagem com seu ambiente e dados.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[var(--bg-surface)] p-8 rounded-xl border border-[var(--bg-elevated)]"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-[var(--bg-elevated)] w-20 h-20 rounded-full flex items-center justify-center text-[var(--accent-primary)]">
                  <Cpu size={40} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-6 text-[var(--text-primary)]">O que torna um Agentic especial:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[var(--bg-elevated)] w-8 h-8 rounded-full flex items-center justify-center text-[var(--accent-primary)] mr-3 mt-1">
                    <Brain size={16} />
                  </div>
                  <div className="text-[var(--text-secondary)]">
                    <span className="font-medium text-[var(--text-primary)]">Autonomia</span> - Toma decisões independentes com base em dados e contexto
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[var(--bg-elevated)] w-8 h-8 rounded-full flex items-center justify-center text-[var(--accent-primary)] mr-3 mt-1">
                    <Target size={16} />
                  </div>
                  <div className="text-[var(--text-secondary)]">
                    <span className="font-medium text-[var(--text-primary)]">Objetivos</span> - Trabalha para atingir metas específicas definidas para seu negócio
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[var(--bg-elevated)] w-8 h-8 rounded-full flex items-center justify-center text-[var(--accent-primary)] mr-3 mt-1">
                    <Activity size={16} />
                  </div>
                  <div className="text-[var(--text-secondary)]">
                    <span className="font-medium text-[var(--text-primary)]">Aprendizado contínuo</span> - Melhora com o tempo e se adapta a novos cenários
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">Casos de uso</h2>
            <div className="w-16 h-1 bg-[var(--accent-primary)] mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[var(--bg-primary)] p-6 rounded-xl shadow-soft border border-[var(--bg-elevated)]"
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">Agentic de Vendas</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Identifica leads qualificados, envia propostas personalizadas e acompanha o funil de vendas automaticamente.
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-2">
                <li>• Qualificação automatizada de leads</li>
                <li>• Envio de propostas personalizadas</li>
                <li>• Acompanhamento proativo de oportunidades</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[var(--bg-primary)] p-6 rounded-xl shadow-soft border border-[var(--bg-elevated)]"
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">Agentic de Atendimento</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Resolve problemas de clientes de forma autônoma, escalando para humanos apenas quando necessário.
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-2">
                <li>• Resolução autônoma de problemas comuns</li>
                <li>• Encaminhamento inteligente para especialistas</li>
                <li>• Acompanhamento de satisfação pós-atendimento</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[var(--bg-primary)] p-6 rounded-xl shadow-soft border border-[var(--bg-elevated)]"
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">Agentic de Conteúdo</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Pesquisa, cria, edita e publica conteúdo relevante para sua audiência.
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-2">
                <li>• Criação de conteúdo baseado em dados</li>
                <li>• Otimização para SEO e conversão</li>
                <li>• Distribuição automatizada em múltiplos canais</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[var(--bg-primary)] p-6 rounded-xl shadow-soft border border-[var(--bg-elevated)]"
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">Agentic de Gestão</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Monitora KPIs, identifica tendências e sugere ações para otimizar resultados.
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-2">
                <li>• Análise contínua de métricas de negócio</li>
                <li>• Previsões e alertas proativos</li>
                <li>• Recomendações estratégicas baseadas em dados</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="bg-[var(--bg-surface)] border border-[var(--bg-elevated)] rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">
                Pronto para ter um agente inteligente trabalhando para você?
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Entre em contato para uma consulta gratuita. Vamos identificar os melhores casos de uso para Agentics em seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://wa.me/5522988324416" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Criar meu Agentic
                </a>
                <a href="/#contato" className="btn btn-outline">
                  Fale conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agentics;
