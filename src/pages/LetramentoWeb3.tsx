import { ArrowLeft, Network, Key, Users, BookOpen, Orbit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const LetramentoWeb3 = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Set page title
    document.title = 'Letramento Web3 | CalangoFlux';
  }, []);

  const features = [
    {
      icon: <Network className="w-8 h-8 text-emerald-500" />,
      title: "Blockchain Fundamentals",
      description: "Compreenda os conceitos básicos da tecnologia blockchain e suas aplicações."
    },
    {
      icon: <Key className="w-8 h-8 text-emerald-500" />,
      title: "Carteiras Digitais",
      description: "Aprenda a criar, gerenciar e proteger suas carteiras de criptomoedas."
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-500" />,
      title: "ReFi (Finanças Regenerativas)",
      description: "Explore como as finanças descentralizadas podem gerar impacto positivo."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
      title: "NFTs & Smart Contracts",
      description: "Entenda tokens não-fungíveis e contratos inteligentes na prática."
    },
    {
      icon: <Orbit className="w-8 h-8 text-emerald-500" />,
      title: "Empoderamento Digital",
      description: "Desenvolva autonomia e confiança no mundo digital descentralizado."
    }
  ]

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Letramento Web3</h1>
            <p className="text-xl max-w-3xl mb-8">
              Estamos atravessando uma virada histórica: da internet centralizada para redes descentralizadas, onde pessoas e tecnologias se conectam com mais autonomia, ética e impacto real.
            </p>
            <a
              href="https://discord.gg/NjJeB285"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-secondary-600 hover:bg-white/90"
            >
              Inicie sua jornada
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
                Conhecimento Regenerativo Disruptivo
              </h2>
              <p className="text-gray-700 mb-6">
                A CalangoFlux abre este espaço de letramento Web3 gratuito, voltado pra quem quer entender — sem hype e sem enrolação — temas como:
              </p>
              <p className="text-gray-700">
                Tudo com linguagem acessível, foco real em impacto e acolhimento pra quem tá começando.
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
                  <BookOpen size={40} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-6">Temas</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-secondary-100 w-8 h-8 rounded-full flex items-center justify-center text-secondary-600 mr-3 mt-1">
                    <Key size={16} />
                  </div>
                  <div>
                    • O que é Web3?
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-100 w-8 h-8 rounded-full flex items-center justify-center text-secondary-600 mr-3 mt-1">
                    <Users size={16} />
                  </div>
                  <div>
                    • DAOs, tokens, NFTs e contratos inteligentes
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-100 w-8 h-8 rounded-full flex items-center justify-center text-secondary-600 mr-3 mt-1">
                    <Network size={16} />
                  </div>
                  <div>
                    • Como isso se conecta com justiça social e soberania digital?
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-100 w-8 h-8 rounded-full flex items-center justify-center text-secondary-600 mr-3 mt-1">
                    <Orbit size={16} />
                  </div>
                  <div>
                    • Por que tudo isso importa agora?
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">A Jornada Web3 Envolve</h2>
            <div className="w-16 h-1 bg-secondary-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Estruturação de DAOs</h3>
              <p className="text-gray-700 mb-4">
                Entendendo Organizações Descentralizadas Autônomas.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Contratos Inteligentes personalizados</li>
                <li>• Mecanismos de Governança</li>
                <li>• Tokenomics, Defi & Refi</li>
                <li>• Processos Autogestionários Participativos</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Letramento Web3</h3>
              <p className="text-gray-700 mb-4">
                Capacitamos sua equipe ou comunidade com os conhecimentos necessários para operar no ecossistema Web3.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Workshops educativos</li>
                <li>• Treinamentos práticos</li>
                <li>• Documentação personalizada</li>
                <li>• Acompanhamento contínuo</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">NFTs funcionais</h3>
              <p className="text-gray-700 mb-4">
                Incentivamos criação de NFTs que vão além da arte digital, com utilidades reais para sua comunidade.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Tokens de acesso a produtos e serviços</li>
                <li>• Certificações e credenciais</li>
                <li>• Sistemas de lealdade e recompensas</li>
                <li>• Identidades digitais</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-3 text-secondary-700">Integrações e ferramentas</h3>
              <p className="text-gray-700 mb-4">
                Conectamos sua DAO com o ecossistema de ferramentas Web3 mais adequado para suas necessidades.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• TONxDAO para gestão organizacional</li>
                <li>• ENS para identidade e domínios</li>
                <li>• IPFS para armazenamento descentralizado</li>
                <li>• Gnosis Safe para gestão segura de fundos</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="bg-secondary-50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-6">
                Pronto para entrar no futuro da organização?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Entre em contato para uma consulta gratuita. Vamos entender seus objetivos e desenhar a melhor estrutura de DAO para sua organização.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://discord.gg/NjJeB285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Inicie sua jornada
                </a>
                <a href="https://calangoflux.rf.gd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline border-secondary-500 text-secondary-500 hover:bg-secondary-50">
                  Web3
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LetramentoWeb3;