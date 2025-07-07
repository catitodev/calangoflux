import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, Sparkles, ExternalLink, Phone, Mail } from 'lucide-react'
import { leadService } from '../../lib/supabase'
import { emailService } from '../../lib/emailjs'

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: 'Olá! Sou o CalangoBot 🦎\n\nSou especialista em todos os serviços da CalangoFlux e estou aqui para tornar sua experiência única.\n\nPosso te ajudar com informações sobre nossos serviços, preços, processos ou conectar você diretamente com nossa equipe.\n\nComo posso ajudar você hoje?',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' })
  const [showUserForm, setShowUserForm] = useState(false)
  const [conversationStage, setConversationStage] = useState('initial') // initial, interested, qualifying, converting
  const messagesEndRef = useRef(null)

  // Base de conhecimento completa da CalangoFlux
  const knowledgeBase = {
    empresa: {
      nome: "CalangoFlux",
      proposito: "Fluxo Vivo, Impacto Real: Conectando Pessoas, Dados e Regeneração",
      valores: ["Transparência", "Impacto social", "Tecnologia regenerativa", "Autonomia"],
      estatisticas: {
        apps: 4,
        sites: 5,
        plataformas: 3,
        transparencia: "100%"
      }
    },
    servicos: {
      "agentes-ai": {
        nome: "Agentes de IA",
        descricao: "Assistentes virtuais personalizados que automatizam atendimento, vendas e suporte",
        beneficios: ["Disponibilidade 24/7", "Redução de custos", "Melhoria na experiência", "Escalabilidade"],
        casos: ["Atendimento ao cliente", "Qualificação de leads", "Suporte técnico", "Vendas automatizadas"]
      },
      "automacoes": {
        nome: "Automações",
        descricao: "Fluxos de trabalho inteligentes que otimizam processos e aumentam produtividade",
        beneficios: ["Economia de tempo", "Redução de erros", "Processos padronizados", "Eficiência operacional"],
        casos: ["Marketing automation", "Gestão de leads", "Processos administrativos", "Integrações entre sistemas"]
      },
      "agentics": {
        nome: "Agentics",
        descricao: "Sistemas de agentes inteligentes que tomam decisões e executam ações complexas",
        beneficios: ["Decisões inteligentes", "Adaptabilidade", "Aprendizado contínuo", "Autonomia operacional"],
        casos: ["Análise preditiva", "Otimização de recursos", "Gestão de riscos", "Tomada de decisão automatizada"]
      },
      "webdesign": {
        nome: "Web Design",
        descricao: "Sites modernos, responsivos e otimizados para conversão e experiência do usuário",
        beneficios: ["Design responsivo", "SEO otimizado", "Alta conversão", "Performance superior"],
        casos: ["Sites institucionais", "E-commerce", "Landing pages", "Portfólios profissionais"]
      },
      "letramento-web3": {
        nome: "Letramento Web3",
        descricao: "Capacitação em blockchain, ReFi e tecnologias descentralizadas",
        beneficios: ["Fluência digital", "Autonomia tecnológica", "Conhecimento em ReFi", "Empoderamento digital"],
        casos: ["Treinamentos corporativos", "Consultoria blockchain", "Implementação ReFi", "Educação Web3"]
      }
    },
    plataformas: {
      aideaflux: {
        nome: "AideaFlux",
        url: "https://aideaflux.xyz",
        descricao: "Acesso gratuito a 100+ LLMs do mundo inteiro",
        modelos: ["GPT-4", "Claude", "Gemini", "LLaMA", "Mistral", "e 95+ outros"],
        diferenciais: ["Totalmente gratuito", "Sem limites", "Interface unificada", "Comparação de modelos"]
      },
      poe: {
        nome: "Poe Agents",
        url: "https://poe.com/calangoflux",
        descricao: "11 agentes especializados para diferentes necessidades",
        agentes: ["Consultor de Negócios", "Especialista em IA", "Designer Web", "Analista de Dados", "e 7+ outros"]
      }
    },
    precos: {
      "pioneer-access": {
        nome: "Pioneer Access",
        preco: "R$ 47/mês",
        contrato: "3 meses mínimo",
        descricao: "Para quem está começando a jornada regenerativa"
      },
      "beta-tester": {
        nome: "Beta Tester", 
        preco: "R$ 97/mês",
        contrato: "3 meses mínimo",
        descricao: "Para quem quer co-criar o futuro"
      },
      "impact-founder": {
        nome: "Impact Founder",
        preco: "R$ 197/mês", 
        contrato: "6 meses mínimo",
        descricao: "Para líderes que querem causar impacto sistêmico"
      },
      "enterprise": {
        nome: "Enterprise",
        preco: "Sob consulta",
        contrato: "Personalizado",
        descricao: "Para organizações que querem transformação completa"
      }
    },
    subsidio: {
      modelo: "Subsídio cruzado",
      proporcao: "A cada 10 clientes pagantes = 1 serviço por subsídio",
      objetivo: "Garantir acesso para quem mais precisa"
    },
    contato: {
      whatsapp: "5511999999999",
      email: "calangoflux@gmail.com",
      site: "https://calangoflux.xyz"
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Sistema de respostas inteligentes
  const generateIntelligentResponse = (userInput) => {
    const input = userInput.toLowerCase()
    
    // Saudações
    if (input.match(/^(oi|olá|ola|hey|hi|hello|bom dia|boa tarde|boa noite)/)) {
      return `Olá! 😊 Que bom ter você aqui!\n\nSou o CalangoBot, especialista em todos os serviços da CalangoFlux. Estou aqui para tornar sua jornada conosco excepcional.\n\nPosso te apresentar nossos serviços, explicar processos, falar sobre investimentos ou conectar você com nossa equipe.\n\nO que você gostaria de descobrir?`
    }

    // Serviços específicos
    if (input.includes('agente') || input.includes('ai') || input.includes('chatbot')) {
      const servico = knowledgeBase.servicos["agentes-ai"]
      return `🤖 **${servico.nome}**\n\n${servico.descricao}\n\n**Principais benefícios:**\n${servico.beneficios.map(b => `• ${b}`).join('\n')}\n\n**Casos de uso:**\n${servico.casos.map(c => `• ${c}`).join('\n')}\n\nQuer saber mais sobre implementação ou preços? 💬`
    }

    if (input.includes('automação') || input.includes('automatizar') || input.includes('processo')) {
      const servico = knowledgeBase.servicos.automacoes
      return `⚙️ **${servico.nome}**\n\n${servico.descricao}\n\n**Principais benefícios:**\n${servico.beneficios.map(b => `• ${b}`).join('\n')}\n\n**Casos de uso:**\n${servico.casos.map(c => `• ${c}`).join('\n')}\n\nQual processo você gostaria de automatizar? 🚀`
    }

    if (input.includes('agentic') || input.includes('sistema inteligente') || input.includes('decisão')) {
      const servico = knowledgeBase.servicos.agentics
      return `🧠 **${servico.nome}**\n\n${servico.descricao}\n\n**Principais benefícios:**\n${servico.beneficios.map(b => `• ${b}`).join('\n')}\n\n**Casos de uso:**\n${servico.casos.map(c => `• ${c}`).join('\n')}\n\nVamos conversar sobre como isso pode transformar seu negócio? 💡`
    }

    if (input.includes('site') || input.includes('web') || input.includes('design')) {
      const servico = knowledgeBase.servicos.webdesign
      return `🎨 **${servico.nome}**\n\n${servico.descricao}\n\n**Principais benefícios:**\n${servico.beneficios.map(b => `• ${b}`).join('\n')}\n\n**Casos de uso:**\n${servico.casos.map(c => `• ${c}`).join('\n')}\n\nQue tipo de site você precisa? 🌐`
    }

    if (input.includes('web3') || input.includes('blockchain') || input.includes('refi') || input.includes('cripto')) {
      const servico = knowledgeBase.servicos["letramento-web3"]
      return `📚 **${servico.nome}**\n\n${servico.descricao}\n\n**Principais benefícios:**\n${servico.beneficios.map(b => `• ${b}`).join('\n')}\n\n**Casos de uso:**\n${servico.casos.map(c => `• ${c}`).join('\n')}\n\nQuer começar sua jornada Web3? 🌱`
    }

    // AideaFlux
    if (input.includes('aideaflux') || input.includes('llm') || input.includes('gpt') || input.includes('grátis') || input.includes('gratuito')) {
      const plataforma = knowledgeBase.plataformas.aideaflux
      return `🚀 **${plataforma.nome}** - Nossa plataforma revolucionária!\n\n${plataforma.descricao}\n\n**Modelos disponíveis:**\n${plataforma.modelos.join(', ')}\n\n**Diferenciais:**\n${plataforma.diferenciais.map(d => `• ${d}`).join('\n')}\n\n🔗 Acesse agora: ${plataforma.url}\n\nÉ realmente 100% gratuito! 🎉`
    }

    // Preços
    if (input.includes('preço') || input.includes('valor') || input.includes('custo') || input.includes('investimento') || input.includes('plano')) {
      const precos = knowledgeBase.precos
      return `💰 **Nossos Planos Regenerativos:**\n\n🌱 **Pioneer Access** - ${precos["pioneer-access"].preco}\n${precos["pioneer-access"].descricao}\n\n🌿 **Beta Tester** - ${precos["beta-tester"].preco}\n${precos["beta-tester"].descricao}\n\n🌳 **Impact Founder** - ${precos["impact-founder"].preco}\n${precos["impact-founder"].descricao}\n\n🏢 **Enterprise** - ${precos.enterprise.preco}\n${precos.enterprise.descricao}\n\n**Modelo de Subsídio:** ${knowledgeBase.subsidio.proporcao}\n\nQual plano faz mais sentido para você? 🤔`
    }

    // Contato e conversão
    if (input.includes('contato') || input.includes('falar') || input.includes('conversar') || input.includes('whatsapp') || input.includes('email')) {
      return `📞 **Vamos conversar!**\n\nFico feliz que queira falar conosco! Temos algumas opções:\n\n💬 **WhatsApp:** Fale direto com nossa equipe\n📧 **Email:** calangoflux@gmail.com\n🤖 **Aqui mesmo:** Posso capturar suas informações\n\nQual você prefere? Ou quer que eu anote seus dados para nossa equipe entrar em contato? 😊`
    }

    // Interesse comercial
    if (input.includes('quero') || input.includes('preciso') || input.includes('interessado') || input.includes('contratar') || input.includes('orçamento')) {
      setConversationStage('interested')
      return `🎯 **Que ótimo!** Vejo que você tem interesse real em nossos serviços!\n\nPara te atender da melhor forma, me conta:\n\n1️⃣ **Qual serviço** mais desperta seu interesse?\n2️⃣ **Qual o principal desafio** que você quer resolver?\n3️⃣ **Qual o timeline** que você tem em mente?\n\nCom essas informações, posso te conectar com o especialista certo da nossa equipe! 🚀`
    }

    // Empresa
    if (input.includes('empresa') || input.includes('calangoflux') || input.includes('sobre') || input.includes('quem')) {
      const empresa = knowledgeBase.empresa
      return `🦎 **Sobre a CalangoFlux:**\n\n**Propósito:** ${empresa.proposito}\n\n**Nossos números:**\n• ${empresa.estatisticas.apps} apps desenvolvidos\n• ${empresa.estatisticas.sites} sites criados\n• ${empresa.estatisticas.plataformas} plataformas principais\n• ${empresa.estatisticas.transparencia} transparência\n\n**Valores:**\n${empresa.valores.map(v => `• ${v}`).join('\n')}\n\nSomos uma empresa que conecta tecnologia com impacto social real! 🌱`
    }

    // Dúvidas gerais
    if (input.includes('como') || input.includes('funciona') || input.includes('processo') || input.includes('metodologia')) {
      return `🔄 **Como trabalhamos:**\n\n1️⃣ **Descoberta:** Entendemos seu desafio e objetivos\n2️⃣ **Estratégia:** Criamos a solução ideal para você\n3️⃣ **Desenvolvimento:** Implementamos com tecnologia de ponta\n4️⃣ **Entrega:** Colocamos no ar e treinamos sua equipe\n5️⃣ **Evolução:** Acompanhamos e otimizamos continuamente\n\n**Diferencial:** Foco em impacto social e sustentabilidade! 🌍\n\nQuer saber mais sobre alguma etapa específica?`
    }

    // Resposta padrão inteligente
    return `Entendo sua pergunta! 🤔\n\nComo CalangoBot, posso te ajudar com:\n\n🤖 **Agentes de IA e Chatbots**\n⚙️ **Automações e Processos**\n🧠 **Sistemas Agentics**\n🎨 **Web Design Moderno**\n📚 **Letramento Web3**\n🚀 **AideaFlux (100+ LLMs grátis)**\n💰 **Investimentos e Planos**\n📞 **Contato Direto**\n\nSobre qual desses você gostaria de descobrir mais? Ou tem alguma necessidade específica que posso ajudar? 😊`
  }

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
    const currentInput = inputMessage
    setInputMessage('')
    setIsTyping(true)

    try {
      // Simular delay de digitação para parecer mais natural
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))

      const response = generateIntelligentResponse(currentInput)
      
      const assistantMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: response,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])

      // Detectar interesse comercial e capturar lead
      if (shouldCaptureAsLead(currentInput) && conversationStage !== 'converting') {
        setTimeout(() => setShowUserForm(true), 2000)
        setConversationStage('converting')
      }

    } catch (error) {
      console.error('Erro no chat:', error)
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'Ops! Tive um probleminha técnico 😅\n\nMas não se preocupe! Você pode:\n\n📱 **WhatsApp:** Falar direto com nossa equipe\n📧 **Email:** calangoflux@gmail.com\n🔄 **Tentar novamente** sua pergunta\n\nEstamos aqui para ajudar! 💪',
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
      'interessado', 'quero', 'preciso', 'ajuda', 'consultoria', 'falar',
      'contato', 'whatsapp', 'email', 'conversar', 'reunião'
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
        telefone: userInfo.phone || '',
        interesse: 'Chat - Demonstrou interesse em serviços',
        origem: 'Chatbot Site',
        conversa: messages.map(msg => `${msg.role}: ${msg.content}`).join('\n\n')
      })

      // Enviar notificação por email
      await emailService.sendLeadNotification({
        nome: userInfo.name,
        email: userInfo.email,
        telefone: userInfo.phone || 'Não informado',
        interesse: 'Demonstrou interesse via chatbot'
      })

      setShowUserForm(false)
      
      const thankYouMessage = {
        id: Date.now(),
        role: 'assistant',
        content: `🎉 **Obrigado, ${userInfo.name}!**\n\nSuas informações foram registradas com sucesso! Nossa equipe entrará em contato em breve.\n\n**Enquanto isso:**\n🚀 Conheça a AideaFlux: https://aideaflux.xyz\n👥 Nossos agentes Poe: https://poe.com/calangoflux\n\n**Próximos passos:**\n1️⃣ Nossa equipe analisará sua necessidade\n2️⃣ Entraremos em contato em até 24h\n3️⃣ Agendaremos uma conversa personalizada\n\nFique à vontade para continuar nossa conversa! 😊`,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, thankYouMessage])
      setConversationStage('converted')
      
    } catch (error) {
      console.error('Erro ao capturar lead:', error)
      const errorMessage = {
        id: Date.now(),
        role: 'assistant',
        content: `Ops! Houve um problema ao salvar suas informações 😅\n\nMas não se preocupe! Você pode nos contatar diretamente:\n\n📱 **WhatsApp:** +55 11 99999-9999\n📧 **Email:** calangoflux@gmail.com\n\nOu tente novamente em alguns segundos! 🔄`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    }
  }

  const quickActions = [
    {
      text: "🤖 Agentes de IA",
      action: () => setInputMessage("Quero saber sobre agentes de IA")
    },
    {
      text: "🚀 AideaFlux Grátis", 
      action: () => setInputMessage("Como funciona a AideaFlux?")
    },
    {
      text: "💰 Preços e Planos",
      action: () => setInputMessage("Quais são os preços?")
    },
    {
      text: "📞 Falar com Equipe",
      action: () => setInputMessage("Quero falar com um consultor")
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
          🦎
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
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[700px] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">CalangoBot</h3>
                    <p className="text-sm opacity-90">Seu assistente inteligente</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href={`https://wa.me/${knowledgeBase.contato.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-white/20 rounded-full p-2 transition-colors"
                    title="WhatsApp"
                  >
                    <Phone size={16} />
                  </a>
                  <a
                    href={`mailto:${knowledgeBase.contato.email}`}
                    className="hover:bg-white/20 rounded-full p-2 transition-colors"
                    title="Email"
                  >
                    <Mail size={16} />
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-white/20 rounded-full p-2 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                        message.role === 'user'
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.role === 'assistant' && (
                          <Sparkles size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                        )}
                        <div className="text-sm whitespace-pre-wrap leading-relaxed">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl px-4 py-3">
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
                🤝 Vamos nos conectar!
              </h3>
              <p className="text-gray-600 mb-6">
                Percebi que você tem interesse real em nossos serviços! Que tal deixar seus dados para nossa equipe entrar em contato?
              </p>
              
              <form onSubmit={handleUserFormSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="WhatsApp (opcional)"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                    🚀 Vamos conversar!
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