// Configuração OpenAI via Edge Functions (Vercel)
// API key lives server-side only — frontend calls /api/chat

const CHAT_ENDPOINT = '/api/chat'

// === Type Definitions ===

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

interface ChatOptions {
  model?: string
  temperature?: number
  maxTokens?: number
  stream?: boolean
}

interface ChatChoice {
  message: ChatMessage
}

interface ChatResponse {
  choices: ChatChoice[]
}

interface ChatRequestBody {
  messages: ChatMessage[]
  stream: boolean
}

type IntentCategory = 'servicos' | 'plataforma' | 'contato' | 'duvidas' | 'outro'

// === Chat Service ===

export const openaiService = {
  async chat(messages: ChatMessage[], options: ChatOptions = {}): Promise<ChatResponse> {
    try {
      const body: ChatRequestBody = {
        messages,
        stream: options.stream || false
      }

      const response: Response = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })

      if (!response.ok) {
        throw new Error(`Chat API error: ${response.status}`)
      }

      const data: ChatResponse = await response.json()
      return data
    } catch (error) {
      console.error('Erro na chamada do chat:', error)
      throw error
    }
  },

  async generateResponse(prompt: string, context: string = ''): Promise<ChatResponse> {
    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: `Você é um assistente especializado da CalangoFlux, focado em soluções regenerativas e tecnologia para impacto social. ${context}`
      },
      {
        role: 'user',
        content: prompt
      }
    ]

    return await this.chat(messages)
  },

  async analyzeIntent(userMessage: string): Promise<ChatResponse> {
    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: `Analise a intenção do usuário e categorize entre: 
        - "servicos" (interesse em nossos serviços)
        - "plataforma" (sobre AideaFlux/100+ LLMs)
        - "contato" (quer falar conosco)
        - "duvidas" (perguntas gerais)
        - "outro" (outros assuntos)
        
        Responda apenas com a categoria.`
      },
      {
        role: 'user',
        content: userMessage
      }
    ]

    return await this.chat(messages)
  }
}

// Simulação local para desenvolvimento (quando não houver Edge Functions)
export const mockOpenAI = {
  async chat(messages: ChatMessage[]): Promise<ChatResponse> {
    const lastMessage: ChatMessage | undefined = messages[messages.length - 1]

    // Respostas simuladas baseadas no contexto
    const responses: Record<IntentCategory | 'default', string> = {
      servicos: "Nossos serviços incluem Agentes de IA, Automações, Agentics e Web Design. Qual área mais te interessa?",
      plataforma: "A AideaFlux oferece acesso gratuito a 100+ LLMs do mundo inteiro! Quer conhecer? https://aideaflux.xyz",
      contato: "Ficamos felizes em conversar! Você pode nos encontrar no WhatsApp ou preencher nosso formulário de contato.",
      duvidas: "Estou aqui para ajudar! A CalangoFlux trabalha com tecnologia regenerativa para impacto social. O que gostaria de saber?",
      outro: "Olá! Sou o assistente da CalangoFlux. Posso ajudar com informações sobre nossos serviços, plataforma AideaFlux, ou conectar você com nossa equipe. Como posso ajudar?",
      default: "Olá! Sou o assistente da CalangoFlux. Como posso ajudar você hoje? 🦎✨"
    }

    // Análise simples de intenção
    const content: string = lastMessage?.content.toLowerCase() ?? ''
    let response: string = responses.default

    if (content.includes('serviço') || content.includes('preço')) {
      response = responses.servicos
    } else if (content.includes('plataforma') || content.includes('llm') || content.includes('ai')) {
      response = responses.plataforma
    } else if (content.includes('contato') || content.includes('falar')) {
      response = responses.contato
    } else if (content.includes('como') || content.includes('que')) {
      response = responses.duvidas
    }

    return {
      choices: [{
        message: {
          role: 'assistant',
          content: response
        }
      }]
    }
  }
}

// Configuração de prompts do sistema
export const systemPrompts: Record<string, string> = {
  chatbot: `Você é um assistente especializado da CalangoFlux, empresa de tecnologia regenerativa.

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
- Respostas muito longas`,

  leadQualification: `Você é um qualificador de leads da CalangoFlux.

OBJETIVO: Identificar o nível de interesse e necessidade do lead.

PERGUNTAS CHAVE:
1. Qual desafio você está enfrentando?
2. Já tentou alguma solução similar?
3. Qual o timeline para implementação?
4. Qual o orçamento aproximado?

CLASSIFICAÇÃO:
- HOT: Necessidade urgente + orçamento definido
- WARM: Interesse claro + timeline próximo
- COLD: Apenas explorando opções`,

  serviceRecommendation: `Você é um consultor de serviços da CalangoFlux.

SERVIÇOS DISPONÍVEIS:
1. Agentes de IA: Assistentes virtuais personalizados
2. Automações: Fluxos de trabalho automatizados
3. Agentics: Sistemas inteligentes complexos
4. Web Design: Sites modernos e responsivos
5. Letramento Web3: Educação em blockchain e ReFi

COMO RECOMENDAR:
- Entenda primeiro a necessidade
- Sugira a solução mais adequada
- Explique os benefícios específicos
- Ofereça consultoria gratuita`
}

// Utilitários para formatação
export const formatChatResponse = (response: ChatResponse): string => {
  if (!response || !response.choices || !response.choices[0]) {
    return "Desculpe, não consegui processar sua mensagem. Tente novamente!"
  }

  return response.choices[0].message.content
}

export const createChatHistory = (messages: ChatMessage[]): Array<ChatMessage & { timestamp: string }> => {
  return messages.map((msg: ChatMessage) => ({
    role: msg.role,
    content: msg.content,
    timestamp: new Date().toISOString()
  }))
}
