import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Zap, Target, Bot, Play, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const HeroSaaS = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animações dos elementos de fundo
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/6 w-96 h-96 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full mix-blend-multiply filter blur-3xl"
          animate={pulseAnimation}
          style={{ animationDelay: '0s' }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/6 w-80 h-80 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full mix-blend-multiply filter blur-3xl"
          animate={pulseAnimation}
          style={{ animationDelay: '2s' }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-accent-300 to-primary-300 rounded-full mix-blend-multiply filter blur-3xl"
          animate={pulseAnimation}
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge variant="default" className="mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white cursor-pointer">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Rocket className="w-3 h-3 mr-1" />
                </motion.div>
                Early Access MVP
              </Badge>
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.span
              animate={floatingAnimation}
              style={{ display: 'inline-block' }}
            >
              Automação Inteligente{' '}
            </motion.span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              <motion.span
                animate={floatingAnimation}
                style={{ display: 'inline-block', animationDelay: '0.5s' }}
              >
                Agentic
              </motion.span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Estamos construindo a primeira plataforma brasileira de agentes de IA autônomos com 
            <strong className="text-primary-600"> acesso a 100+ LLMs globais</strong>. 
            Junte-se ao nosso programa de Early Access e seja pioneiro na automação agentic.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-soft"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-5 h-5 text-primary-500 mr-2" />
              </motion.div>
              <span className="text-sm font-medium">MVP em Desenvolvimento</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-soft"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <Target className="w-5 h-5 text-secondary-500 mr-2" />
              </motion.div>
              <span className="text-sm font-medium">Early Access Limitado</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-soft"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Bot className="w-5 h-5 text-accent-500 mr-2" />
              </motion.div>
              <span className="text-sm font-medium">Tecnologia Própria</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-3 text-lg"
              >
                <a href="https://aideaflux.xyz" target="_blank" rel="noopener noreferrer">
                  🚀 Testar 100+ LLMs Grátis
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={scrollToFeatures}
                variant="outline" 
                size="lg" 
                className="border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-8 py-3 text-lg"
              >
                <Play className="w-4 h-4 mr-2" />
                Ver Roadmap
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-sm text-gray-600 mb-4">Integrações planejadas:</p>
            <motion.div 
              className="flex justify-center items-center gap-8 opacity-60 flex-wrap"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="text-lg font-bold text-primary-600"
                whileHover={{ scale: 1.1, color: "#32b890" }}
              >
                Abacus
              </motion.div>
              <motion.div 
                className="text-lg font-bold text-secondary-600"
                whileHover={{ scale: 1.1, color: "#0066c8" }}
              >
                Tana
              </motion.div>
              <motion.div 
                className="text-lg font-bold text-accent-600"
                whileHover={{ scale: 1.1, color: "#ff9800" }}
              >
                WhatsApp
              </motion.div>
              <motion.div 
                className="text-lg font-bold text-primary-600"
                whileHover={{ scale: 1.1, color: "#32b890" }}
              >
                Instagram
              </motion.div>
              <motion.div 
                className="text-lg font-bold text-secondary-600"
                whileHover={{ scale: 1.1, color: "#0066c8" }}
              >
                Discord
              </motion.div>
              <motion.div 
                className="text-lg font-bold text-accent-600"
                whileHover={{ scale: 1.1, color: "#ff9800" }}
              >
                Telegram
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-xs text-gray-500 mt-3"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌐 Web2 & Web3 • 📱 Social Media • 🤖 Automação Total
            </motion.p>
          </motion.div>

          <motion.div 
            className="mt-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl p-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-primary-600 mr-2" />
              </motion.div>
              <h3 className="text-lg font-semibold text-secondary-900">
                Propósito CalangoFlux
              </h3>
            </div>
            <p className="text-gray-700 text-center">
              Fluxo Vivo, Impacto Real: Conectando Pessoas, Dados e Regeneração.
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <motion.button
          onClick={scrollToFeatures}
          className="inline-flex flex-col items-center text-gray-600 hover:text-primary-600 transition-colors duration-300 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm font-medium mb-2">Conhecer a visão</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="group-hover:text-primary-600"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSaaS;