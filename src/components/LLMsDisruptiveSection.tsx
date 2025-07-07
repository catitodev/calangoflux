import { motion } from 'framer-motion';
import { Zap, Rocket, Globe, Star, ArrowRight, Sparkles, Brain, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const LLMsDisruptiveSection = () => {
  const llmBrands = [
    "OpenAI", "Anthropic", "Google", "Meta", "Mistral", "Cohere", "Perplexity", "xAI",
    "Hugging Face", "Stability AI", "Midjourney", "RunwayML", "DeepMind", "AI21 Labs"
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "100+ LLMs Globais",
      description: "Acesso direto aos melhores modelos de IA do mundo",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Sem Setup Técnico",
      description: "Use qualquer LLM em segundos, sem configuração",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Acesso Gratuito",
      description: "Teste todas as LLMs sem limite de experimentação",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Compare Resultados",
      description: "Teste múltiplas LLMs simultaneamente",
      color: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section className="relative section bg-gradient-to-br from-gray-900 via-secondary-900 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 1, -1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-lg px-6 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              🚀 DISRUPTIVO
            </Badge>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-white to-secondary-400">
              100+
            </span>{' '}
            <br />
            <span className="text-white">LLMs do Mundo</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">
              em Uma Plataforma
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Pare de pagar separadamente por GPT-4, Claude, Gemini... 
            <strong className="text-primary-400"> Acesse TODAS as LLMs do planeta gratuitamente!</strong>
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {llmBrands.map((brand, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 border border-white/20"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                animate={{ 
                  y: [0, -2, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2 + (index * 0.2),
                  repeat: Infinity,
                  delay: index * 0.1
                }}
              >
                {brand}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-3xl p-12 mb-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Rocket className="w-16 h-16 text-white mx-auto mb-6" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              🔥 ACESSO TOTAL. GRÁTIS. AGORA.
            </h3>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Não perca tempo procurando qual LLM usar. <strong>Teste todas!</strong> 
              OpenAI, Anthropic, Google, Meta... Tudo em um lugar só.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-2xl"
                >
                  <a href="https://aideaflux.xyz" target="_blank" rel="noopener noreferrer">
                    🚀 ACESSAR 100+ LLMs GRÁTIS
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </motion.div>
              
              <motion.p 
                className="text-white/80 text-sm"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡ Sem cartão. Sem limite. Só testar!
              </motion.p>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-black text-primary-400 mb-2">100+</div>
              <div className="text-white font-medium">LLMs Disponíveis</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-black text-secondary-400 mb-2">0</div>
              <div className="text-white font-medium">Setup Necessário</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-black text-accent-400 mb-2">∞</div>
              <div className="text-white font-medium">Possibilidades</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LLMsDisruptiveSection;