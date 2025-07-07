# 🔧 Guia Técnico - Integrações CalangoFlux

## ✅ **Atualizações Implementadas no Site:**

### 🎯 **Item 4**: Link Agentes Poe ✅ 
- **Nova seção** "11 Agentes Personalizados"
- **Link direto**: https://poe.com/@calangoflux
- **Showcase visual** de todos os agentes especializados
- **Footer atualizado** com link direto

### 💰 **Item 5**: Preços Atualizados ✅
- **Pioneer Access**: R$ 47/mês (era "Subsidiado")
- **Beta Tester**: R$ 97/mês (era R$ 47/mês)
- **Mantido modelo** 10:1 de subsídio cruzado

---

## 🔧 **Explicação Técnica dos Itens 1, 2, 3:**

### **1. 🎯 Conectar Agentic à Conta Abacus**

#### **Pré-requisitos:**
- Conta Abacus ativa
- API Key do Abacus
- Workspace configurado
- Webhook endpoints

#### **Estrutura de Integração:**

```javascript
// 1. Configuração do Cliente Abacus
import { AbacusClient } from '@abacus/sdk';

const abacusConfig = {
  apiKey: process.env.ABACUS_API_KEY,        // Sua API Key
  workspace: 'calangoflux-workspace',        // Seu workspace
  endpoint: 'https://api.abacus.ai/v1',      // Endpoint oficial
  webhookUrl: 'https://seu-site.com/webhook' // Para receber eventos
};

const abacus = new AbacusClient(abacusConfig);

// 2. Orquestração de Agentes
class CalangoFluxAgent {
  constructor() {
    this.abacus = abacus;
    this.workflows = new Map();
  }

  async createWorkflow(userIntent, context) {
    const workflow = await this.abacus.workflows.create({
      name: `calangoflux-${userIntent}`,
      steps: [
        {
          type: 'llm_call',
          model: 'gpt-4',
          prompt: this.buildPrompt(userIntent, context)
        },
        {
          type: 'action_execution',
          actions: this.getActions(userIntent)
        },
        {
          type: 'response_formatting',
          template: 'calangoflux_response'
        }
      ]
    });
    
    return workflow;
  }

  async executeWorkflow(workflowId, input) {
    return await this.abacus.workflows.execute(workflowId, {
      input: input,
      context: this.getCurrentContext()
    });
  }
}

// 3. Integração no Chatbot Flutuante
// Em src/components/FloatingChatbot.tsx
const handleSendWithAbacus = async () => {
  if (!input.trim()) return;

  // Criar workflow no Abacus
  const workflow = await calangoAgent.createWorkflow(
    classifyIntent(input),
    { user: userContext, conversation: messages }
  );

  // Executar workflow
  const response = await calangoAgent.executeWorkflow(workflow.id, input);
  
  // Processar resposta
  const agentMessage = {
    id: Date.now().toString(),
    content: response.output,
    type: 'agent',
    timestamp: new Date()
  };

  setMessages(prev => [...prev, agentMessage]);
};
```

#### **Passos de Implementação:**

1. **Obter Credenciais Abacus:**
   ```bash
   # No dashboard Abacus:
   # 1. Criar novo projeto "CalangoFlux"
   # 2. Gerar API Key
   # 3. Configurar webhook endpoint
   # 4. Copiar Project ID
   ```

2. **Configurar Variáveis de Ambiente:**
   ```env
   ABACUS_API_KEY=abacus_key_xxxxxxxxxxxxx
   ABACUS_PROJECT_ID=proj_xxxxxxxxxxxxx
   ABACUS_WORKSPACE=calangoflux-workspace
   ABACUS_WEBHOOK_SECRET=webhook_secret_xxxxx
   ```

3. **Instalar SDK Abacus:**
   ```bash
   npm install @abacus/sdk
   # ou
   npm install abacus-ai-sdk
   ```

---

### **2. 🤖 Conectar aos 11 Agentes Poe (@calangoflux)**

#### **Limitações Técnicas:**
- **Poe não tem API oficial pública** ainda
- **Web scraping** é contra ToS
- **Soluções alternativas** necessárias

#### **Abordagens Possíveis:**

**A) Simulação via OpenAI com Personas:**
```javascript
// Mapeamento dos 11 agentes como personas OpenAI
const poeAgentsPersonas = {
  'marketing-strategist': {
    systemPrompt: `Você é um especialista em marketing digital com 10+ anos de experiência. 
                   Foco em growth hacking, performance marketing e conversão...`,
    model: 'gpt-4',
    temperature: 0.7
  },
  'sales-expert': {
    systemPrompt: `Você é um expert em vendas B2B e B2C. Especialista em funil de vendas, 
                   objeções, fechamento e relacionamento com clientes...`,
    model: 'gpt-4',
    temperature: 0.8
  },
  // ... outros 9 agentes
};

class PoeAgentSimulator {
  constructor(openaiApiKey) {
    this.openai = new OpenAI({ apiKey: openaiApiKey });
    this.agents = poeAgentsPersonas;
  }

  async routeToAgent(message, agentType) {
    const agent = this.agents[agentType];
    
    const response = await this.openai.chat.completions.create({
      model: agent.model,
      messages: [
        { role: 'system', content: agent.systemPrompt },
        { role: 'user', content: message }
      ],
      temperature: agent.temperature
    });

    return response.choices[0].message.content;
  }

  async classifyIntent(message) {
    // IA para classificar qual agente usar
    const classification = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'system',
        content: `Classifique esta mensagem entre: marketing, sales, support, content, 
                  analytics, product, financial, legal, innovation, community, architecture`
      }, {
        role: 'user',
        content: message
      }]
    });

    return classification.choices[0].message.content.toLowerCase();
  }
}
```

**B) Integração quando Poe liberar API:**
```javascript
// Estrutura futura quando API estiver disponível
const poeConfig = {
  apiKey: 'poe_api_key_xxxxx',
  username: 'calangoflux',
  baseUrl: 'https://api.poe.com/v1'
};

class PoeIntegration {
  async getAvailableAgents() {
    const response = await fetch(`${poeConfig.baseUrl}/users/calangoflux/bots`, {
      headers: { 'Authorization': `Bearer ${poeConfig.apiKey}` }
    });
    return response.json();
  }

  async sendMessage(agentName, message) {
    const response = await fetch(`${poeConfig.baseUrl}/bots/${agentName}/chat`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${poeConfig.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });
    return response.json();
  }
}
```

---

### **3. 🔗 Conectar com OpenAI API Key**

#### **Implementação Completa:**

```javascript
// 1. Configuração OpenAI
import OpenAI from 'openai';

const openaiConfig = {
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID, // Opcional
  project: process.env.OPENAI_PROJECT_ID   // Opcional
};

const openai = new OpenAI(openaiConfig);

// 2. Sistema de Prompt CalangoFlux
const CALANGOFLUX_SYSTEM_PROMPT = `
Você é o Agente CalangoFlux, especialista em automação agentic e IA. 

CONTEXTO:
- CalangoFlux é a primeira plataforma brasileira de automação agentic
- Trabalhamos com subsídio cruzado (10 clientes pagantes = 1 projeto social gratuito)
- Estamos em fase MVP com total transparência
- Temos 11 agentes especializados no Poe (@calangoflux)
- Nossa plataforma principal é aideaflux.xyz

ESPECIALIDADES:
- Automação agentic com Abacus e Tana
- Integração com múltiplas LLMs (GPT-4, Claude, Gemini, etc.)
- Desenvolvimento de agentes personalizados
- Consultoria em IA para empresas

PERSONALIDADE:
- Transparente e honesto sobre limitações
- Entusiasta da tecnologia agentic
- Focado em impacto social positivo
- Técnico mas acessível

DIRETRIZES:
- Sempre mencione o modelo de subsídio cruzado quando relevante
- Direcione para aideaflux.xyz para Early Access
- Seja transparente sobre estar em fase MVP
- Foque em soluções práticas e viáveis
`;

// 3. Integração no Chatbot
class OpenAICalangoAgent {
  constructor() {
    this.openai = openai;
    this.conversationHistory = new Map();
  }

  async generateResponse(userMessage, userId = 'anonymous') {
    try {
      // Buscar histórico da conversa
      const history = this.conversationHistory.get(userId) || [];
      
      // Construir mensagens
      const messages = [
        { role: 'system', content: CALANGOFLUX_SYSTEM_PROMPT },
        ...history,
        { role: 'user', content: userMessage }
      ];

      // Chamar OpenAI
      const response = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
        presence_penalty: 0.1,
        frequency_penalty: 0.1
      });

      const assistantMessage = response.choices[0].message.content;

      // Atualizar histórico
      history.push(
        { role: 'user', content: userMessage },
        { role: 'assistant', content: assistantMessage }
      );

      // Manter apenas últimas 10 mensagens
      if (history.length > 20) {
        history.splice(0, history.length - 20);
      }

      this.conversationHistory.set(userId, history);

      return {
        success: true,
        message: assistantMessage,
        usage: response.usage
      };

    } catch (error) {
      console.error('OpenAI Error:', error);
      return {
        success: false,
        message: 'Desculpe, estou com dificuldades técnicas. Tente novamente em instantes.',
        error: error.message
      };
    }
  }

  // Streaming para respostas em tempo real
  async *generateStreamResponse(userMessage, userId = 'anonymous') {
    const history = this.conversationHistory.get(userId) || [];
    const messages = [
      { role: 'system', content: CALANGOFLUX_SYSTEM_PROMPT },
      ...history,
      { role: 'user', content: userMessage }
    ];

    const stream = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages,
      max_tokens: 1000,
      temperature: 0.7,
      stream: true
    });

    let fullResponse = '';
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      fullResponse += content;
      yield content;
    }

    // Salvar resposta completa no histórico
    history.push(
      { role: 'user', content: userMessage },
      { role: 'assistant', content: fullResponse }
    );
    this.conversationHistory.set(userId, history);
  }
}

// 4. Integração no FloatingChatbot.tsx
const calangoAgent = new OpenAICalangoAgent();

const handleSendWithOpenAI = async () => {
  if (!input.trim()) return;

  const userMessage = {
    id: Date.now().toString(),
    content: input,
    type: 'user',
    timestamp: new Date()
  };

  setMessages(prev => [...prev, userMessage]);
  setInput('');
  setIsTyping(true);

  try {
    const response = await calangoAgent.generateResponse(input);
    
    const agentMessage = {
      id: (Date.now() + 1).toString(),
      content: response.success ? response.message : response.message,
      type: 'agent',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, agentMessage]);
  } catch (error) {
    const errorMessage = {
      id: (Date.now() + 1).toString(),
      content: 'Desculpe, ocorreu um erro. Tente novamente.',
      type: 'agent',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, errorMessage]);
  } finally {
    setIsTyping(false);
  }
};
```

#### **Variáveis de Ambiente Necessárias:**
```env
# OpenAI
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
OPENAI_ORG_ID=org-xxxxxxxxxxxxxxxxxxxxxxxx
OPENAI_PROJECT_ID=proj_xxxxxxxxxxxxxxxxxxxxxxxx

# Rate Limiting
OPENAI_MAX_REQUESTS_PER_MINUTE=100
OPENAI_MAX_TOKENS_PER_MINUTE=40000
```

#### **Instalação de Dependências:**
```bash
npm install openai
# ou
yarn add openai
```

---

## 🚀 **Deploy Realizado com Sucesso!**

✅ **Preços atualizados**: Pioneer R$ 47/mês, Beta R$ 97/mês  
✅ **Seção Poe Agents**: 11 agentes com link direto @calangoflux  
✅ **Footer atualizado**: Link para agentes Poe  
✅ **Guia técnico**: Integrações Abacus, Poe e OpenAI documentadas  

**🔗 Acesse:** https://vercel.com/catitodevs-projects/calangoflux

---

## 📋 **Próximos Passos Técnicos:**

1. **Obter API Keys**:
   - [ ] Abacus API Key
   - [ ] OpenAI API Key  
   - [ ] Configurar webhooks

2. **Implementar Integrações**:
   - [ ] Backend com as integrações documentadas
   - [ ] Sistema de roteamento de agentes
   - [ ] Streaming de respostas

3. **Testes e Validação**:
   - [ ] Teste de performance
   - [ ] Validação de custos OpenAI
   - [ ] Monitoramento de uso

**💡 Recomendação**: Comece com a integração OpenAI (item 3) que é mais direta, depois Abacus (item 1), e por último simule os agentes Poe (item 2) até API oficial estar disponível.