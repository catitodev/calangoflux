import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Brain } from 'lucide-react';

const LLMCarousel = () => {
  const llms = [
    {
      name: "GPT-4",
      company: "OpenAI",
      color: "bg-green-500",
      logo: "🤖"
    },
    {
      name: "Claude 3.5",
      company: "Anthropic", 
      color: "bg-orange-500",
      logo: "🧠"
    },
    {
      name: "Gemini Pro",
      company: "Google",
      color: "bg-blue-500",
      logo: "💎"
    },
    {
      name: "Llama 3",
      company: "Meta",
      color: "bg-purple-500",
      logo: "🦙"
    },
    {
      name: "Mixtral 8x7B",
      company: "Mistral AI",
      color: "bg-red-500",
      logo: "⚡"
    },
    {
      name: "Command R+",
      company: "Cohere",
      color: "bg-teal-500",
      logo: "🎯"
    },
    {
      name: "PaLM 2",
      company: "Google",
      color: "bg-indigo-500",
      logo: "🌴"
    },
    {
      name: "GPT-4 Turbo",
      company: "OpenAI",
      color: "bg-emerald-500",
      logo: "🚀"
    }
  ];

  // Duplicar array para efeito infinito
  const extendedLLMs = [...llms, ...llms];

  return (
    <section className="section bg-gradient-to-r from-gray-50 to-white overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            <Brain className="w-3 h-3 mr-1" />
            LLMs Disponíveis
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Tecnologias{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Avançadas
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Utilizamos as LLMs mais inovadoras do mercado para criar agentes verdadeiramente inteligentes
          </p>
        </motion.div>

        {/* Carrossel animado */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-6"
            animate={{
              x: [0, -50 * llms.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {extendedLLMs.map((llm, index) => (
              <motion.div
                key={`${llm.name}-${index}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-soft border hover:shadow-md transition-shadow duration-300 min-w-[200px]">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${llm.color} rounded-lg flex items-center justify-center text-white text-2xl`}>
                      {llm.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-900">{llm.name}</h3>
                      <p className="text-sm text-gray-600">{llm.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Indicador de flexibilidade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-secondary-900 mb-2">
              🎯 Flexibilidade Total
            </h3>
            <p className="text-gray-700 text-sm">
              Para cada cliente, analisamos o caso específico e escolhemos a melhor combinação de tecnologias. 
              Não limitamos sua criatividade - expandimos suas possibilidades!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LLMCarousel;