import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react'
import { mockOpenAI, formatChatResponse } from '../../lib/openai'
import { leadService } from '../../lib/supabase'
import { emailService } from '../../lib/emailjs'

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: 'Olá! Sou o assistente da CalangoFlux 🦎✨\n\nComo posso ajudar você hoje? Posso falar sobre:\n• Nossos serviços de IA e automação\n• A plataforma AideaFlux (100+ LLMs gratuitos)\n• Projetos regenerativos\n• Qualquer dúvida sobre tecnologia!',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [userInfo, setUserInfo] = useState({ name: '', email: '' })
  const [showUserForm, setShowUserForm] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    try {
      // Usar mock OpenAI temporariamente para garantir funcionamento
      const response = await mockOpenAI.chat([
        {
          role: 'system',
          content: `Você é um assistente especializado da CalangoFlux, empresa de tecnologia regenerativa.

SOBRE A CALANGOFLUX:
- Propósito: Fluxo Vivo, Impacto Real - Conectando Pessoas, Dados e Regeneração
- Serviços: Agentes de IA, Automações, Agentics, Web Design, Letramento Web3
- Plataforma AideaFlux: 100+ LLMs gratuitos (https://aideaflux.xyz)
- Valores: Transparência, impacto social, tecnologia regenerativa

COMO RESPONDER:
- Seja acolhedor e empático
- Foque em soluções regenerativas
- Direcione para AideaFlux quando perguntarem sobre IA
- Ofereça contato para assuntos comerciais
- Use emojis com moderação (🦎✨🌱)

EVITE:
- Promessas que não podemos cumprir
- Informações técnicas muito complexas
- Respostas muito longas`
        },
        ...messages.slice(-5).map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        {
          role: 'user',
          content: inputMessage
        }
      ])

      const assistantMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: formatChatResponse(response),
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])

      // Detectar interesse comercial e capturar lead
      if (shouldCaptureAsLead(inputMessage)) {
        setTimeout(() => setShowUserForm(true), 2000)
      }

    } catch (error) {
      console.error('Erro no chat:', error)
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'Desculpe, tive um problema técnico. Você pode tentar novamente ou entrar em contato conosco diretamente pelo WhatsApp! 📱',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const shouldCaptureAsLead = (message) => {
    const leadKeywords = [
      'preço', 'orçamento', 'custo', 'valor', 'contratar', 'serviço',
      'projeto', 'desenvolver', 'criar', 'automatizar', 'site', 'app',
      'interessado', 'quero', 'preciso', 'ajuda', 'consultoria'
    ]
    
    return leadKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
    )
  }

  const handleUserFormSubmit = async (e) => {
    e.preventDefault()
    if (!userInfo.name || !userInfo.email) return

    try {
      // Salvar lead no Supabase
      await leadService.createLead({
        nome: userInfo.name,
        email: userInfo.email,
        interesse: 'Chat - Interesse demonstrado',
        origem: 'Chatbot Site',
        conversa: messages.map(msg => `${msg.role}: ${msg.content}`).join('\n\n')
      })

      // Enviar notificação por email
      await emailService.sendLeadNotification({
        nome: userInfo.name,
        email: userInfo.email,
        interesse: 'Chat - Interesse demonstrado'
      })

      setShowUserForm(false)
      
      const thankYouMessage = {
        id: Date.now(),
        role: 'assistant',
        content: `Obrigado, ${userInfo.name}! 🙏\n\nSuas informações foram registradas e nossa equipe entrará em contato em breve.\n\nEnquanto isso, que tal conhecer nossa plataforma AideaFlux? Lá você tem acesso gratuito a 100+ LLMs: https://aideaflux.xyz 🚀`,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, thankYouMessage])
      
    } catch (error) {
      console.error('Erro ao capturar lead:', error)
    }
  }

  const quickActions = [
    {
      text: "🤖 Serviços de IA",
      action: () => setInputMessage("Quais são os serviços de IA da CalangoFlux?")
    },
    {
      text: "🚀 Plataforma AideaFlux",
      action: () => setInputMessage("Como funciona a plataforma AideaFlux?")
    },
    {
      text: "💰 Preços e Planos",
      action: () => setInputMessage("Quais são os preços dos serviços?")
    },
    {
      text: "📞 Falar com Humano",
      action: () => setInputMessage("Quero falar com um consultor humano")
    }
  ]

  return (
    <>
      {/* Botão Flutuante */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(16, 185, 129, 0.3)",
            "0 0 30px rgba(16, 185, 129, 0.5)",
            "0 0 20px rgba(16, 185, 129, 0.3)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle size={24} />
        <motion.div
          className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          AI
        </motion.div>
      </motion.button>

      {/* Modal do Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-end p-4 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">CalangoFlux AI</h3>
                    <p className="text-sm opacity-90">Assistente Regenerativo</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.role === 'user'
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.role === 'assistant' && (
                          <Sparkles size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                        )}
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <Bot size={16} className="text-emerald-500" />
                        <div className="flex space-x-1">
                          <motion.div
                            className="w-2 h-2 bg-emerald-500 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-emerald-500 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-emerald-500 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              {messages.length === 1 && (
                <div className="px-4 py-2 border-t">
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={action.action}
                        className="text-xs bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-2 transition-colors text-left"
                      >
                        {action.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t">
                <form onSubmit={handleSendMessage} className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    disabled={isTyping}
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-emerald-500 text-white rounded-full p-2 hover:bg-emerald-600 disabled:opacity-50 transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form de Captura de Lead */}
      <AnimatePresence>
        {showUserForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Vamos nos conhecer melhor! 🤝
              </h3>
              <p className="text-gray-600 mb-6">
                Percebi que você tem interesse em nossos serviços. Que tal deixar seus dados para conversarmos melhor?
              </p>
              
              <form onSubmit={handleUserFormSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Seu email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
                
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowUserForm(false)}
                    className="flex-1 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition-colors"
                  >
                    Agora não
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-emerald-500 text-white rounded-lg py-3 hover:bg-emerald-600 transition-colors"
                  >
                    Vamos conversar!
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingChatbot