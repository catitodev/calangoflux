import { ArrowLeft, Laptop, Layout, Smartphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Webdesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Webdesign Completo | CalangoFlux';
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--text-primary)]">Webdesign Completo</h1>
            <p className="text-xl max-w-3xl mb-8 text-[var(--text-secondary)]">
              Cuidamos de tudo: identidade visual, branding, design UX/UI, domínio e publicação do site. Sites responsivos, leves e conectados com automações e IA, já prontos para divulgar, vender ou captar.
            </p>
            <a
              href="https://wa.me/5522988324416"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[var(--accent-primary)] text-[var(--bg-primary)] hover:opacity-90"
            >
              Quero meu site
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
                Projetos web que geram resultados
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Criamos sites que não são apenas bonitos, mas também funcionais, rápidos e otimizados para conversão. Nossa abordagem combina design centrado no usuário com as mais recentes tecnologias web.
              </p>
              <p className="text-[var(--text-secondary)]">
                Todos os nossos projetos são desenvolvidos com foco em responsividade, acessibilidade e otimização para mecanismos de busca (SEO).
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
                  <Laptop size={40} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-6 text-[var(--text-primary)]">Nossa metodologia:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[var(--bg-elevated)] w-8 h-8 rounded-full flex items-center justify-center text-[var(--accent-primary)] mr-3 mt-1">
                    <Layout size={16} />
                  </div>
                  <div className="text-[var(--text-secondary)]">
                    <span className="font-medium text-[var(--text-primary)]">Design centrado no usuário</span> - Interfaces intuitivas e focadas na experiência
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[var(--bg-elevated)] w-8 h-8 rounded-full flex items-center justify-center text-[var(--accent-primary)] mr-3 mt-1">
                    <Smartphone size={16} />
                  </div>
                  <div className="text-[var(--text-secondary)]">
                    <span className="font-medium text-[var(--text-primary)]">Mobile-first</span> - Sites otimizados para todos os dispositivos
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[var(--bg-elevated)] w-8 h-8 rounded-full flex items-center justify-center text-[var(--accent-primary)] mr-3 mt-1">
                    <Zap size={16} />
                  </div>
                  <div className="text-[var(--text-secondary)]">
                    <span className="font-medium text-[var(--text-primary)]">Performance</span> - Carregamento rápido e experiência fluida
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
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">O que incluímos</h2>
            <div className="w-16 h-1 bg-[var(--accent-primary)] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[var(--bg-primary)] p-6 rounded-xl shadow-soft border border-[var(--bg-elevated)]"
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">Branding completo</h3>
              <ul className="text-[var(--text-secondary)] space-y-2">
                <li>• Logo e identidade visual</li>
                <li>• Paleta de cores</li>
                <li>• Tipografia</li>
                <li>• Guia de estilo</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[var(--bg-primary)] p-6 rounded-xl shadow-soft border border-[var(--bg-elevated)]"
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">Design UX/UI</h3>
              <ul className="text-[var(--text-secondary)] space-y-2">
                <li>• Wireframes e protótipos</li>
                <li>• Design responsivo</li>
                <li>• Interfaces intuitivas</li>
                <li>• Testes de usabilidade</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[var(--bg-primary)] p-6 rounded-xl shadow-soft border border-[var(--bg-elevated)]"
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">Desenvolvimento</h3>
              <ul className="text-[var(--text-secondary)] space-y-2">
                <li>• Código limpo e otimizado</li>
                <li>• SEO técnico</li>
                <li>• Otimização de performance</li>
                <li>• Testes em múltiplos dispositivos</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[var(--bg-primary)] p-6 rounded-xl shadow-soft border border-[var(--bg-elevated)]"
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">Conteúdo</h3>
              <ul className="text-[var(--text-secondary)] space-y-2">
                <li>• Copywriting persuasivo</li>
                <li>• Otimização para SEO</li>
                <li>• Seleção de imagens</li>
                <li>• Estruturação de informações</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[var(--bg-primary)] p-6 rounded-xl shadow-soft border border-[var(--bg-elevated)]"
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">Tecnologia</h3>
              <ul className="text-[var(--text-secondary)] space-y-2">
                <li>• CMS customizado (quando necessário)</li>
                <li>• Integrações com IA</li>
                <li>• Automações personalizadas</li>
                <li>• Ferramentas de análise</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-[var(--bg-primary)] p-6 rounded-xl shadow-soft border border-[var(--bg-elevated)]"
            >
              <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">Lançamento</h3>
              <ul className="text-[var(--text-secondary)] space-y-2">
                <li>• Domínio e hospedagem</li>
                <li>• Configuração de emails</li>
                <li>• Implementação de certificado SSL</li>
                <li>• Treinamento para uso</li>
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
                Pronto para ter um site que converte?
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Entre em contato para uma consulta gratuita. Vamos entender seus objetivos e criar um projeto web sob medida para seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://wa.me/5522999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Quero meu site
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

export default Webdesign;
