// Configuração das LLMs
export const LLM_CONFIG = {
  openai: {
    apiKey: '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',
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

export const SYSTEM_PROMPT = `Você é um assistente da CalangoFlux, uma empresa de tecnologia regenerativa que desenvolve soluções agentic, automações e presença digital. 

Informações importantes sobre a CalangoFlux:
- Propósito: "Fluxo Vivo, Impacto Real: Conectando Pessoas, Dados e Regeneração"
- Planos: Pioneer Access (R$147/mês), Beta Tester (R$297/mês), Impact Founder (R$347/mês)
- Modelo de subsídio cruzado: 10 clientes pagantes = 1 serviço subsidiado
- Tecnologias: Integração com Abacus, Tana, múltiplas LLMs
- Serviços: Landing pages, agentes personalizados, automação de redes sociais

Seja prestativo, profissional e destaque os serviços da empresa quando relevante. Mantenha um tom amigável mas informativo.`;