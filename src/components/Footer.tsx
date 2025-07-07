import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Phone, MapPin, Heart } from 'lucide-react';
import calangoicone from '../assets/imagens/calangoicone.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <img className="w-10 h-10 mr-3" src={calangoicone} alt="CalangoFlux" />
              <span className="font-heading font-bold text-2xl">
                Calango<span className="text-primary-400">Flux</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Primeira plataforma brasileira de automação agentic. Construindo o futuro 
              da inteligência artificial com transparência, propósito e impacto social.
            </p>
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://www.aideaflux.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Acessar Plataforma
              </motion.a>
            </div>
          </motion.div>

          {/* Links Úteis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-6">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Subsídio Cruzado
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Projetos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-6">Nossos Projetos</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://agrofamiliapp.dedyn.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors flex items-center"
                >
                  AgroFamiliApp
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.bayanativa.dedyn.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors flex items-center"
                >
                  Baya Nativa
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aideaflux.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors flex items-center"
                >
                  AideaFlux Platform
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <span className="text-gray-500 text-sm">Letramento Web3 (em breve)</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Contato e Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-6">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-primary-400" />
                <a href="mailto:contato@calangoflux.com" className="hover:text-primary-400 transition-colors">
                  contato@calangoflux.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-primary-400" />
                <a href="https://wa.me/5522988324416" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  +55 (22) 98832-4416
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-primary-400" />
                <span>Rio de Janeiro, Brasil</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-end"
          >
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end mb-4">
                <Heart className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-gray-300">Feito com propósito no Brasil</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transparência é nosso DNA • Impacto é nossa missão
              </p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} <strong>CalangoFlux</strong>. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Termos de Uso
              </a>
              <span className="text-gray-600">|</span>
              <span className="text-primary-400 font-medium">
                Early Access MVP v1.0
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;