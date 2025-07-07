import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Bot, Send, User, Zap, Code, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const LiveAgentDemo = () => {
  const [messages, setMessages] = useState([
    {
      type: 'agent',
      content: 'Olá! Sou um agente simples da CalangoFlux. Como posso ajudar você hoje?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Respostas simples do agente para demonstração
  const agentResponses = {
    'oi': 'Oi! Como você está? 😊',
    'olá': 'Olá! Prazer em conversar com você! 👋',
    'como funciona': 'Este é um agente simples que responde baseado em palavras-chave. Na versão completa, usaremos IA avançada com LLMs como GPT-4 e Claude!',
    'preço': 'Temos um modelo de subsídio cruzado! Projetos sociais podem ter acesso subsidiado. Quer saber mais?',
    'mvp': 'Sim, somos transparentes! Esta é uma demonstração básica do nosso MVP. O agente real será muito mais avançado com IA real.',
    'automação': 'Nossa automação permite criar agentes que trabalham 24/7 para você, conectando com Abacus e Tana!',
    'ia': 'Usamos as melhores LLMs do mercado: GPT-4, Claude 3.5, Gemini, Llama e muito mais!',
    'transparência': 'Nosso propósito é Fluxo Vivo, Impacto Real: Conectando Pessoas, Dados e Regeneração! Por isso mostramos exatamente onde estamos no desenvolvimento.',
    'contato': 'Você pode entrar em contato através da seção de contato no site ou acessar nossa plataforma!',
    'aideaflux': 'AideaFlux é nossa plataforma principal! Acesse em aideaflux.xyz para conhecer.',
    'portfolio': 'Temos AgroFamiliApp, Baya Nativa e em breve a plataforma de Letramento Web3!',
    'default': 'Interessante! Por estar em MVP, ainda não entendo tudo, mas estou aprendendo. Que tal tentar: "como funciona", "preço", "automação", "portfolio" ou "transparência"? 🤖'
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simula processamento do agente
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

      const agentMessage = {
        type: 'agent',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Simula tempo de resposta
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const quickQuestions = [
    'Como funciona?',
    'Preço MVP',
    'Portfólio',
    'Transparência'
  ];

  return (
    <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge variant="outline" className="mb-4 cursor-pointer">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Bot className="w-3 h-3 mr-1" />
              </motion.div>
              Agente Funcionando
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Criamos Sua{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Presença Digital
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Branding • Rebranding • Domínios • Landing Pages • Sites • Plataformas • Apps
            <br />
            <strong className="text-primary-600">Criação completa da sua identidade digital!</strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg h-[600px] flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(50, 184, 144, 0.7)",
                        "0 0 0 10px rgba(50, 184, 144, 0)",
                        "0 0 0 0 rgba(50, 184, 144, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Bot className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <CardTitle className="text-lg">Agente CalangoFlux</CardTitle>
                    <CardDescription className="flex items-center">
                      <motion.div 
                        className="w-2 h-2 bg-green-500 rounded-full mr-2"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      Online - Versão MVP
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 max-h-[400px]">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <motion.div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        layout
                      >
                        <div className="flex items-center space-x-2 mb-1">
                          {message.type === 'agent' ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                              <Bot className="w-4 h-4" />
                            </motion.div>
                          ) : (
                            <User className="w-4 h-4" />
                          )}
                          <span className="text-xs opacity-75">
                            {message.type === 'agent' ? 'Agente' : 'Você'}
                          </span>
                        </div>
                        <p className="text-sm">{message.content}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-100 px-4 py-2 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Bot className="w-4 h-4" />
                          <div className="flex space-x-1">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 bg-gray-500 rounded-full"
                                animate={{ y: [0, -4, 0] }}
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
                </div>

                {/* Quick Questions */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Perguntas rápidas:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setInput(question)}
                          className="text-xs hover:bg-primary-50 hover:border-primary-300"
                        >
                          {question}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="flex space-x-2">
                  <motion.input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    disabled={isTyping}
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      onClick={handleSend}
                      disabled={!input.trim() || isTyping}
                      className="bg-primary-500 hover:bg-primary-600"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Code className="w-5 h-5 mr-2 text-primary-600" />
                    </motion.div>
                    Nossos Serviços Digitais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <motion.li 
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                    >
                      <Zap className="w-4 h-4 text-primary-500 mr-2 mt-0.5" />
                      <span><strong>Branding Completo:</strong> Logo, identidade visual e guidelines</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                    >
                      <Zap className="w-4 h-4 text-secondary-500 mr-2 mt-0.5" />
                      <span><strong>Desenvolvimento Web:</strong> Sites, plataformas e aplicativos</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                    >
                      <Zap className="w-4 h-4 text-accent-500 mr-2 mt-0.5" />
                      <span><strong>Domínios & Hosting:</strong> Configuração completa e otimizada</span>
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <MessageSquare className="w-5 h-5 mr-2 text-secondary-600" />
                    Integrações Sociais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-700">
                    {[
                      "🌐 Redes Sociais (Instagram, LinkedIn, Twitter)",
                      "� WhatsApp Business & Telegram",
                      "� Web3: Discord, NFT marketplaces",
                      "⚡ Automações e chatbots integrados",
                      "� Analytics e métricas unificadas",
                      "🎯 Campanhas cross-platform otimizadas"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-semibold text-secondary-900 mb-2 flex items-center">
                <Bot className="w-5 h-5 mr-2" />
                Presença Digital Completa
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Da criação da marca até a implementação técnica, cuidamos de toda sua presença digital 
                com integrações Web2 e Web3. Tudo conectado e funcionando perfeitamente!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild className="w-full bg-primary-500 hover:bg-primary-600">
                  <a href="#contato">
                    💬 Falar sobre meu Projeto
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveAgentDemo;