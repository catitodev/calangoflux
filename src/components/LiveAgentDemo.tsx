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
    'oi': 'Oi! Como você está?',
    'olá': 'Olá! Prazer em conversar com você!',
    'como funciona': 'Este é um agente simples que responde baseado em palavras-chave. Na versão completa, usaremos IA avançada!',
    'preço': 'Estamos oferecendo Early Access gratuito por 6 meses. Quer saber mais?',
    'mvp': 'Sim, somos transparentes! Esta é uma demonstração básica do nosso MVP. O agente real será muito mais avançado.',
    'automação': 'Nossa automação permite criar agentes que trabalham 24/7 para você!',
    'ia': 'Usamos IA para criar agentes que aprendem e se adaptam às suas necessidades.',
    'transparência': 'Transparência é nosso DNA! Por isso mostramos exatamente onde estamos no desenvolvimento.',
    'contato': 'Você pode entrar em contato através da seção de contato no site ou pelo WhatsApp!',
    'default': 'Interessante! Por estar em MVP, ainda não entendo tudo, mas estou aprendendo. Que tal tentar: "como funciona", "preço", "automação" ou "mvp"?'
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
    'Preço do MVP',
    'Sobre automação',
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
          <Badge variant="outline" className="mb-4">
            <Bot className="w-3 h-3 mr-1" />
            Agente Funcionando
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Teste Nosso{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Agente MVP
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conheça uma versão simplificada da nossa tecnologia agentic. 
            Este agente funciona de verdade e responde em tempo real!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg h-[600px] flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Agente CalangoFlux</CardTitle>
                    <CardDescription className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <div className="flex items-center space-x-2 mb-1">
                          {message.type === 'agent' ? (
                            <Bot className="w-4 h-4" />
                          ) : (
                            <User className="w-4 h-4" />
                          )}
                          <span className="text-xs opacity-75">
                            {message.type === 'agent' ? 'Agente' : 'Você'}
                          </span>
                        </div>
                        <p className="text-sm">{message.content}</p>
                      </div>
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
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
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
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => setInput(question)}
                        className="text-xs"
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    className="bg-primary-500 hover:bg-primary-600"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
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
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Code className="w-5 h-5 mr-2 text-primary-600" />
                  Como Este Agente Funciona
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-primary-500 mr-2 mt-0.5" />
                    <span><strong>Simples mas Real:</strong> Responde baseado em palavras-chave</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-secondary-500 mr-2 mt-0.5" />
                    <span><strong>Tempo Real:</strong> Processamento instantâneo de mensagens</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-accent-500 mr-2 mt-0.5" />
                    <span><strong>MVP Honesto:</strong> Mostra nossas capacidades atuais</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MessageSquare className="w-5 h-5 mr-2 text-secondary-600" />
                  Na Versão Completa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>🧠 IA avançada com processamento de linguagem natural</li>
                  <li>🔗 Integração com Abacus e Tana</li>
                  <li>📊 Aprendizado contínuo a partir das conversas</li>
                  <li>⚡ Decisões autônomas e execução de ações</li>
                  <li>🔄 Automação de tarefas complexas</li>
                  <li>📱 Multi-channel (WhatsApp, Telegram, Discord)</li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl p-6">
              <h3 className="font-semibold text-secondary-900 mb-2 flex items-center">
                <Bot className="w-5 h-5 mr-2" />
                Este é o Início
              </h3>
              <p className="text-gray-700 text-sm">
                Este agente simples é prova de que nossa tecnologia funciona. 
                Estamos construindo algo muito maior - quer fazer parte desta jornada?
              </p>
              <Button className="mt-4 w-full bg-primary-500 hover:bg-primary-600">
                Solicitar Early Access
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveAgentDemo;