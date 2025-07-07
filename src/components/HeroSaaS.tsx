import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Zap, Target, Bot, Play } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const HeroSaaS = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/6 w-96 h-96 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/3 left-1/6 w-80 h-80 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-accent-300 to-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="default" className="mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <Sparkles className="w-3 h-3 mr-1" />
              Plataforma SaaS Agentic
            </Badge>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Automação Inteligente{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Agentic
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transforme seu negócio com agentes de IA autônomos que aprendem, 
            decidem e executam. Conecte-se ao Abacus e Tana para uma experiência completa.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-soft">
              <Zap className="w-5 h-5 text-primary-500 mr-2" />
              <span className="text-sm font-medium">Automação Inteligente</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-soft">
              <Target className="w-5 h-5 text-secondary-500 mr-2" />
              <span className="text-sm font-medium">Decisões Autônomas</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-soft">
              <Bot className="w-5 h-5 text-accent-500 mr-2" />
              <span className="text-sm font-medium">Aprendizado Contínuo</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              onClick={scrollToFeatures} 
              size="lg" 
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-3 text-lg"
            >
              Começar Agora
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-8 py-3 text-lg"
            >
              <Play className="w-4 h-4 mr-2" />
              Ver Demo
            </Button>
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-sm text-gray-600 mb-4">Integração nativa com:</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-primary-600">Abacus</div>
              <div className="text-2xl font-bold text-secondary-600">Tana</div>
              <div className="text-2xl font-bold text-accent-600">WhatsApp</div>
              <div className="text-2xl font-bold text-primary-600">Telegram</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <motion.button
          onClick={scrollToFeatures}
          className="inline-flex flex-col items-center text-gray-600 hover:text-primary-600 transition-colors duration-300 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="text-sm font-medium mb-2">Descobrir recursos</span>
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