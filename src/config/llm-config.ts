// Configuração das LLMs
export const LLM_CONFIG = {
  openai: {
    apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
    endpoint: 'https://api.openai.com/v1/chat/completions',
    model: 'gpt-4',
    maxTokens: 500,
    temperature: 0.7
  },
  anthropic: {
    // API da Anthropic será configurada quando disponível
    endpoint: 'https://api.anthropic.com/v1/messages',
    model: 'claude-3-sonnet-20240229',
    maxTokens: 500
  },
  google: {
    // API do Google será configurada quando disponível
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    model: 'gemini-pro'
  }
};

export const SYSTEM_PROMPT = `Você é o CalangoBot, assistente inteligente da CalangoFlux, uma empresa de tecnologia regenerativa que desenvolve soluções agentic, automações e presença digital. 

Informações importantes sobre a CalangoFlux:
- Propósito: "Fluxo Vivo, Impacto Real: Conectando Pessoas, Dados e Regeneração"
- Planos: Pioneer Access (R$47/mês), Beta Tester (R$97/mês), Impact Founder (R$197/mês), Enterprise (sob consulta)
- Modelo de subsídio cruzado: A cada 10 clientes pagantes = 1 serviço por subsídio
- Plataforma AideaFlux: 100+ LLMs gratuitos (https://aideaflux.xyz)
- Agentes Poe: 11 agentes especializados (https://poe.com/calangoflux)
- Serviços: Agentes de IA, Automações, Agentics, Web Design, Letramento Web3

Seja prestativo, profissional e destaque os serviços da empresa quando relevante. Mantenha um tom amigável mas informativo. Sua personalidade é sutil e elegante, focada em excelência.`;