import { ArrowLeft, Terminal, Zap, Clock, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Automacoes = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Automações com IA | CalangoFlux';
  }, []);

  return (
    <div className="pt-16">
      <section className="bg-secondary-500 text-white py-20">
        <div className="container">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft size={16} className="mr-2" />
            Voltar para início
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Automações com IA</h1>
            <p className="text-xl max-w-3xl mb-8">
              Integramos IA com plataformas como Notion, Google Drive, WhatsApp, Telegram e n8n. Criamos fluxos automatizados que reduzem trabalho manual e aumentam a eficiência do seu negócio.
            </p>
            <a 
              href="https://wa.me/5522999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn bg-white text-secondary-600 hover:bg-white/90"
            >
              Solicitar automação
            </a>
          </motion.div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-6">
                Automatize processos e economize tempo
              </h2>
              <p className="text-gray-700 mb-6">
                Nossas automações conectam suas ferramentas favoritas e eliminam tarefas repetitivas, permitindo que você e sua equipe foquem no que realmente importa.
              </p>
              <p className="text-gray-700">
                Utilizamos inteligência artificial para tornar seus fluxos de trabalho mais inteligentes, adaptáveis e eficientes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-secondary-50 p-8 rounded-xl"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-secondary-100 w-20 h-20 rounded-full flex items-center justify-center text-secondary-600">
                  <Terminal size={40} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-6">Plataformas que integramos:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-secondary-100 w-8 h-8 rounded-full flex items-center justify-center text-secondary-600 mr-3 mt-1">
                    <Code size={16} />
                  </div>
                  <div>
                    <span className="font-medium">Ferramentas de produtividade</span> - Notion, Google Workspace, Microsoft 365
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-100 w-8 h-8 rounded-full flex items-center justify-center text-secondary-600 mr-3 mt-1">
                    <Zap size={16} />
                  </div>
                  <div>
                    <span className="font-medium">Plataformas de comunicação</span> - WhatsApp, Telegram, Discord, Email
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-100 w-8 h-8 rounded-full flex items-center justify-center text-secondary-600 mr-3 mt-1">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="font-medium">Automação no-code</span> - n8n, Make, Zapier
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">O que podemos automatizar</h2>
            <div className="w-16 h-1 bg-secondary-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Geração de conteúdo</h3>
              <p className="text-gray-700">
                Automatize a criação de posts, emails, newsletters e outros conteúdos com IA.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Análise de dados</h3>
              <p className="text-gray-700">
                Transforme dados brutos em relatórios e insights acionáveis automaticamente.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Gestão de clientes</h3>
              <p className="text-gray-700">
                Automatize o acompanhamento, segmentação e comunicação com leads e clientes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Processos internos</h3>
              <p className="text-gray-700">
                Simplifique fluxos de aprovação, documentação e comunicação entre equipes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Social media</h3>
              <p className="text-gray-700">
                Agende, publique e monitore conteúdo em suas redes sociais automaticamente.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Personalização</h3>
              <p className="text-gray-700">
                Crie experiências personalizadas para clientes com base em seus comportamentos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="bg-secondary-50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-6">
                Pronto para automatizar seu negócio?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Entre em contato para uma consultoria gratuita. Vamos identificar oportunidades de automação e criar soluções sob medida para sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://wa.me/5522999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Solicitar automação
                </a>
                <Link to="/#contato" className="btn btn-outline border-secondary-500 text-secondary-500 hover:bg-secondary-50">
                  Fale conosco
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Automacoes;