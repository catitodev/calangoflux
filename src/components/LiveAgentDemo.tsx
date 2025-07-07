import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Bot, Send, User, Zap, Code, MessageSquare, Brain, Sparkles, Cpu } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const LiveAgentDemo = () => {
  const [messages, setMessages] = useState([
    {
      type: 'agent',
      content: 'Olá! Sou um agente da CalangoFlux. Escolha uma das 3 LLMs disponíveis e vamos conversar!',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedLLM, setSelectedLLM] = useState('gpt-4');
  const [isConnected, setIsConnected] = useState(false);

  // Configuração das 3 LLMs disponíveis
  const availableLLMs = [
    {
      id: 'gpt-4',
      name: 'GPT-4',
      description: 'OpenAI GPT-4 - Versátil e poderoso',
      icon: <Brain className="w-4 h-4" />,
      color: 'from-green-500 to-emerald-500',
      provider: 'OpenAI'
    },
    {
      id: 'claude-3',
      name: 'Claude 3',
      description: 'Anthropic Claude - Analítico e preciso',
      icon: <Sparkles className="w-4 h-4" />,
      color: 'from-purple-500 to-violet-500',
      provider: 'Anthropic'
    },
    {
      id: 'gemini-pro',
      name: 'Gemini Pro',
      description: 'Google Gemini - Multimodal e rápido',
      icon: <Cpu className="w-4 h-4" />,
      color: 'from-blue-500 to-cyan-500',
      provider: 'Google'
    }
  ];

  const currentLLM = availableLLMs.find(llm => llm.id === selectedLLM);

  // Função para enviar mensagem para a API
  const sendMessageToAPI = async (message: string, llmModel: string) => {
    try {
      const response = await fetch('https://calangoflux-ai.typingcloud.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer demo-token', // Token demo para demonstração
        },
        body: JSON.stringify({
          message: message,
          model: llmModel,
          stream: false,
          context: messages.slice(-5) // Últimas 5 mensagens para contexto
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.response || data.message || 'Desculpe, não consegui processar sua mensagem.';
    } catch (error) {
      console.error('Erro na API:', error);
      // Fallback para demonstração quando a API não está disponível
      return `[Modo Demo] Resposta simulada da ${currentLLM?.name}: Esta é uma demonstração. A integração real com ${currentLLM?.provider} estará disponível em breve! 🚀`;
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsTyping(true);

    try {
      const response = await sendMessageToAPI(currentInput, selectedLLM);
      
      const agentMessage = {
        type: 'agent',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, agentMessage]);
    } catch (error) {
      const errorMessage = {
        type: 'agent',
        content: 'Desculpe, ocorreu um erro. Tente novamente em alguns instantes.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleLLMChange = (llmId: string) => {
    setSelectedLLM(llmId);
    const newLLM = availableLLMs.find(llm => llm.id === llmId);
    const switchMessage = {
      type: 'agent',
      content: `Agora estou usando ${newLLM?.name} (${newLLM?.provider}). Como posso ajudar você?`,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, switchMessage]);
  };

  const quickQuestions = [
    'Como funciona a CalangoFlux?',
    'Quais serviços vocês oferecem?',
    'Como é o processo de desenvolvimento?',
    'Fale sobre economia regenerativa'
  ];

  // Simular conexão
  useEffect(() => {
    const timer = setTimeout(() => setIsConnected(true), 1000);
    return () => clearTimeout(timer);
  }, []);

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
            Chat com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              3 LLMs Avançadas
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experimente nossa integração com GPT-4, Claude 3 e Gemini Pro
            <br />
            <strong className="text-primary-600">Escolha a LLM e converse em tempo real!</strong>
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
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg h-[700px] flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className={`w-10 h-10 bg-gradient-to-br ${currentLLM?.color} rounded-full flex items-center justify-center`}
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(50, 184, 144, 0.7)",
                          "0 0 0 10px rgba(50, 184, 144, 0)",
                          "0 0 0 0 rgba(50, 184, 144, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {currentLLM?.icon}
                    </motion.div>
                    <div>
                      <CardTitle className="text-lg">{currentLLM?.name}</CardTitle>
                      <CardDescription className="flex items-center">
                        <motion.div 
                          className={`w-2 h-2 ${isConnected ? 'bg-green-500' : 'bg-yellow-500'} rounded-full mr-2`}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        {isConnected ? 'Conectado' : 'Conectando...'} - {currentLLM?.provider}
                      </CardDescription>
                    </div>
                  </div>
                </div>

                {/* LLM Selector */}
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Escolha a LLM:</p>
                  <div className="flex gap-2">
                    {availableLLMs.map((llm) => (
                      <motion.button
                        key={llm.id}
                        onClick={() => handleLLMChange(llm.id)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm border transition-all ${
                          selectedLLM === llm.id
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {llm.icon}
                        <span>{llm.name}</span>
                      </motion.button>
                    ))}
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
                              {currentLLM?.icon}
                            </motion.div>
                          ) : (
                            <User className="w-4 h-4" />
                          )}
                          <span className="text-xs opacity-75">
                            {message.type === 'agent' ? currentLLM?.name : 'Você'}
                          </span>
                        </div>
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
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
                          {currentLLM?.icon}
                          <span className="text-xs text-gray-600">{currentLLM?.name} está pensando...</span>
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
                  <p className="text-sm text-gray-600 mb-2">Perguntas sugeridas:</p>
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
                  <motion.textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={`Converse com ${currentLLM?.name}...`}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                    disabled={isTyping || !isConnected}
                    rows={2}
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      onClick={handleSend}
                      disabled={!input.trim() || isTyping || !isConnected}
                      className={`bg-gradient-to-r ${currentLLM?.color} hover:opacity-90 h-full`}
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
                    LLMs Disponíveis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {availableLLMs.map((llm) => (
                      <motion.div
                        key={llm.id}
                        className={`p-3 rounded-lg border transition-all ${
                          selectedLLM === llm.id ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                        }`}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 bg-gradient-to-br ${llm.color} rounded-lg flex items-center justify-center text-white`}>
                            {llm.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm">{llm.name}</h4>
                            <p className="text-xs text-gray-600">{llm.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
                    Recursos Disponíveis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-700">
                    {[
                      "🧠 3 LLMs de última geração",
                      "⚡ Respostas em tempo real",
                      "🔄 Troca de modelo instantânea",
                      "💬 Contexto de conversa mantido",
                      "🎯 Perguntas sugeridas inteligentes",
                      "🔒 Conversas seguras e privadas"
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
                Tecnologia Agentic Avançada
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Este chat demonstra nossa capacidade de integrar múltiplas LLMs em uma interface única. 
                Imagine isso aplicado ao seu negócio com automações personalizadas!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild className="w-full bg-primary-500 hover:bg-primary-600">
                  <a href="#pricing">
                    � Quero Meu Agente Personalizado
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