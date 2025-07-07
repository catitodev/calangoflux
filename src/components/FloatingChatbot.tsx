import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Minimize2, Bot, User, Zap } from 'lucide-react';
import { Button } from './ui/button';

interface Message {
  id: string;
  content: string;
  type: 'user' | 'agent';
  timestamp: Date;
}

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Olá! Sou o agente CalangoFlux powered by Abacus. Como posso ajudar você hoje? 🚀',
      type: 'agent',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Respostas do agente com integração Abacus simulada
  const agentResponses: Record<string, string> = {
    'oi': 'Oi! Como posso ajudar você com automação agentic? 😊',
    'olá': 'Olá! Que bom te ver aqui! Como posso te auxiliar? 👋',
    'preço': 'Trabalhamos com subsídio cruzado: a cada 10 clientes pagantes, 1 projeto social recebe acesso gratuito. Quer saber mais sobre nossos planos?',
    'subsídio': 'Nosso modelo 10:1 permite que projetos sociais tenham acesso à tecnologia enquanto mantemos sustentabilidade financeira. É inovador!',
    'aideaflux': 'AideaFlux é nossa plataforma GRATUITA com 100+ LLMs! Acesse aideaflux.xyz e teste GPT-4, Claude, Gemini e muito mais sem pagar nada! ✨',
    'llms': 'Temos 100+ LLMs disponíveis gratuitamente na AideaFlux! OpenAI, Anthropic, Google, Meta... Todas em um lugar só! 🤖',
    'gratuito': 'Sim! Nossa plataforma AideaFlux dá acesso GRATUITO a 100+ LLMs do mundo todo. Sem cartão, sem limite! Acesse aideaflux.xyz',
    'automação': 'Nossa automação conecta com Abacus, Tana e outras ferramentas para criar agentes que trabalham 24/7 para você!',
    'agentes': 'Nossos agentes são powered by Abacus e usam as melhores LLMs do mercado. Eles aprendem, decidem e executem ações autonomamente!',
    'abacus': 'Abacus é nossa ferramenta principal para orquestração de agentes. Permite criar workflows complexos e automações inteligentes!',
    'contato': 'Pode falar conosco pelo WhatsApp +55 (22) 98832-4416 ou email contato@calangoflux.com. Também acesse aideaflux.xyz!',
    'mvp': 'Estamos em fase MVP com total transparência. Já temos 2 apps funcionando e 1 plataforma core com 100+ LLMs gratuitas!',
    'transparência': 'Nosso propósito é Fluxo Vivo, Impacto Real: Conectando Pessoas, Dados e Regeneração! Construímos com propósito e honestidade!',
    'propósito': 'Fluxo Vivo, Impacto Real: Conectando Pessoas, Dados e Regeneração. Este é o propósito da CalangoFlux! 🌱',
    'early access': 'Solicite Early Access em aideaflux.xyz! Estamos buscando pioneiros para construir juntos a automação agentic!',
    'poe': 'Temos 11 agentes especializados no Poe! Acesse poe.com/calangoflux para falar com nossos agentes por área específica.',
    'gpt': 'GPT-4, GPT-3.5, todas as versões OpenAI estão disponíveis GRATUITAMENTE na AideaFlux! Teste agora em aideaflux.xyz',
    'claude': 'Claude 3.5, Claude Instant... Todos os modelos Anthropic gratuitos na AideaFlux! Acesse aideaflux.xyz',
    'gemini': 'Gemini Pro, PaLM, todos os modelos Google disponíveis grátis na nossa plataforma! aideaflux.xyz',
    'default': 'Interessante! Estou aprendendo mais a cada conversa. Que tal tentar: "llms", "gratuito", "aideaflux", "poe" ou "agentes"? 🤖'
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      type: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simula processamento do agente Abacus
    setTimeout(() => {
      const lowercaseInput = input.toLowerCase();
      let response = agentResponses.default;

      // Busca por palavras-chave
      for (const [keyword, reply] of Object.entries(agentResponses)) {
        if (lowercaseInput.includes(keyword)) {
          response = reply;
          break;
        }
      }

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        type: 'agent',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Botão Flutuante */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300 }}
      >
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(50, 184, 144, 0.7)",
                "0 0 0 10px rgba(50, 184, 144, 0)",
                "0 0 0 0 rgba(50, 184, 144, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 60 : 500 
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Bot className="w-4 h-4" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-sm">CalangoFlux Agent</h3>
                  <p className="text-xs opacity-90 flex items-center">
                    <motion.div 
                      className="w-1.5 h-1.5 bg-green-300 rounded-full mr-1"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    Powered by Abacus
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <div className="flex flex-col h-80">
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                          message.type === 'user'
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <div className="flex items-center space-x-1 mb-1">
                          {message.type === 'agent' ? (
                            <Bot className="w-3 h-3" />
                          ) : (
                            <User className="w-3 h-3" />
                          )}
                          <span className="text-xs opacity-75">
                            {message.type === 'agent' ? 'Agente' : 'Você'}
                          </span>
                        </div>
                        <p>{message.content}</p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-100 px-3 py-2 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Bot className="w-3 h-3" />
                          <div className="flex space-x-1">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                                animate={{ y: [0, -3, 0] }}
                                transition={{
                                  duration: 0.6,
                                  repeat: Infinity,
                                  delay: i * 0.2
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Digite sua mensagem..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={handleSend}
                      disabled={!input.trim() || isTyping}
                      size="sm"
                      className="bg-primary-500 hover:bg-primary-600"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 flex items-center">
                    <Zap className="w-3 h-3 mr-1" />
                    Agente em desenvolvimento - Respostas baseadas em keywords
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatbot;