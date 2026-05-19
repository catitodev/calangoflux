export const config = { runtime: 'edge' };

interface ChatMessage {
  role: string;
  content: string;
}

interface ChatRequest {
  messages?: ChatMessage[];
  stream?: boolean;
}

interface ChatErrorResponse {
  error: string;
  code: 'VALIDATION_ERROR' | 'UPSTREAM_ERROR' | 'GATEWAY_TIMEOUT' | 'SERVICE_UNAVAILABLE';
}

const SYSTEM_PROMPT = `Você é o CalangoBot, assistente inteligente da CalangoFlux.

SOBRE A CALANGOFLUX:
- Propósito: "Fluxo Vivo, Impacto Real: Conectando Pessoas, Dados e Regeneração"
- Primeira plataforma brasileira de automação agentic
- Foco: IA + Web3 + tecnologias regenerativas

SERVIÇOS (5 camadas):
1. Diagnóstico e Planejamento — mapear necessidades
2. Execução Base — agente IA, automação, vitrine digital
3. Expansão e Integrações — Google, Telegram, WhatsApp, painéis
4. Autonomia e Treinamento — documentação, suporte
5. Inteligência Contínua — manutenção, atualização (opcional)

PREÇOS:
- Faixa: R$ 700 a R$ 3.900 por serviço
- Ciclo médio: 10 a 20 dias úteis
- Modelo de subsídio cruzado: a cada 10 pagantes, 1 projeto social gratuito

CONTATO:
- WhatsApp: +55 22 98832-4416
- Email: calangoflux@proton.me
- AideaFlux (100+ LLMs grátis): https://aideaflux.xyz

PERSONALIDADE:
- Ética radical, sem promessas falsas
- Clareza estratégica, sem enrolação
- Inovação acessível, sem elitismo
- Escuta acima de oferta
- Autonomia acima de dependência
- Use emojis com moderação (🦎✨🌱)
- Respostas concisas e diretas
- Nunca pressione para fechar serviço

CAPTURA DE CONTATO:
- Quando o visitante demonstrar interesse claro em um serviço (perguntar preço, pedir orçamento, descrever uma necessidade específica), pergunte de forma natural: "Para eu te enviar mais detalhes, pode me passar seu nome e email? 📧"
- Se já tiver o interesse mas não o contato, pergunte UMA vez de forma leve. Se a pessoa não quiser dar, respeite e ofereça o WhatsApp como alternativa.
- Nunca peça contato logo na primeira mensagem. Primeiro entenda a necessidade.
- Quando receber nome e/ou email, confirme: "Anotado! Vou encaminhar para nossa equipe. 🦎"

EVITE:
- Promessas que não podemos cumprir
- Informações técnicas muito complexas para leigos
- Respostas muito longas (max 3 parágrafos)
- Simular escassez ou urgência falsa
- Pedir contato mais de uma vez na mesma conversa`;

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function errorResponse(status: number, error: string, code: ChatErrorResponse['code']): Response {
  return new Response(JSON.stringify({ error, code }), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}

function validateMessages(messages: unknown): messages is ChatMessage[] {
  if (!Array.isArray(messages)) return false;
  if (messages.length === 0) return false;
  return messages.every(
    (msg) =>
      typeof msg === 'object' &&
      msg !== null &&
      typeof (msg as ChatMessage).role === 'string' &&
      typeof (msg as ChatMessage).content === 'string'
  );
}

export default async function handler(req: Request): Promise<Response> {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (req.method !== 'POST') {
    return errorResponse(405, 'Method not allowed', 'VALIDATION_ERROR');
  }

  // Check API key (supports GROQ_API_KEY or OPENAI_API_KEY for flexibility)
  const apiKey = process.env.GROQ_API_KEY || process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return errorResponse(500, 'AI service is currently unavailable.', 'SERVICE_UNAVAILABLE');
  }

  // Parse and validate request body
  let body: ChatRequest;
  try {
    body = await req.json();
  } catch {
    return errorResponse(400, 'Invalid JSON body.', 'VALIDATION_ERROR');
  }

  if (!validateMessages(body.messages)) {
    return errorResponse(
      400,
      'Request body must contain a "messages" array with at least one element, each having "role" and "content" strings.',
      'VALIDATION_ERROR'
    );
  }

  if (body.messages.length > 50) {
    return errorResponse(
      400,
      'Messages array exceeds the maximum of 50 messages.',
      'VALIDATION_ERROR'
    );
  }

  const useStream = body.stream === true;

  // Build messages with system prompt injected
  const messagesWithSystem: ChatMessage[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...body.messages,
  ];

  // Set up abort controller for 30s timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const openaiResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messagesWithSystem,
        max_tokens: 1000,
        stream: useStream,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!openaiResponse.ok) {
      return errorResponse(
        502,
        'The upstream AI service returned an error. Please try again later.',
        'UPSTREAM_ERROR'
      );
    }

    if (useStream) {
      // Streaming mode: forward as SSE
      const encoder = new TextEncoder();
      const decoder = new TextDecoder();

      const stream = new ReadableStream({
        async start(streamController) {
          const reader = openaiResponse.body?.getReader();
          if (!reader) {
            streamController.enqueue(encoder.encode('data: [DONE]\n\n'));
            streamController.close();
            return;
          }

          let buffer = '';

          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;

              buffer += decoder.decode(value, { stream: true });
              const lines = buffer.split('\n');
              buffer = lines.pop() || '';

              for (const line of lines) {
                const trimmed = line.trim();
                if (!trimmed || !trimmed.startsWith('data: ')) continue;

                const data = trimmed.slice(6);
                if (data === '[DONE]') {
                  streamController.enqueue(encoder.encode('data: [DONE]\n\n'));
                  continue;
                }

                try {
                  const parsed = JSON.parse(data);
                  const delta = parsed.choices?.[0]?.delta?.content;
                  if (delta) {
                    streamController.enqueue(
                      encoder.encode(`data: ${JSON.stringify({ delta })}\n\n`)
                    );
                  }
                } catch {
                  // Skip malformed chunks
                }
              }
            }

            // Process remaining buffer
            if (buffer.trim()) {
              const trimmed = buffer.trim();
              if (trimmed.startsWith('data: ')) {
                const data = trimmed.slice(6);
                if (data === '[DONE]') {
                  streamController.enqueue(encoder.encode('data: [DONE]\n\n'));
                } else {
                  try {
                    const parsed = JSON.parse(data);
                    const delta = parsed.choices?.[0]?.delta?.content;
                    if (delta) {
                      streamController.enqueue(
                        encoder.encode(`data: ${JSON.stringify({ delta })}\n\n`)
                      );
                    }
                  } catch {
                    // Skip malformed
                  }
                }
              }
            }

            // Ensure stream ends with [DONE]
            streamController.enqueue(encoder.encode('data: [DONE]\n\n'));
          } catch {
            streamController.enqueue(encoder.encode('data: [DONE]\n\n'));
          } finally {
            streamController.close();
          }
        },
      });

      return new Response(stream, {
        status: 200,
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          Connection: 'keep-alive',
          ...CORS_HEADERS,
        },
      });
    } else {
      // Non-streaming mode: return complete JSON response
      const data = await openaiResponse.json();
      const assistantMessage = data.choices?.[0]?.message;

      if (!assistantMessage) {
        return errorResponse(
          502,
          'The upstream AI service returned an unexpected response format.',
          'UPSTREAM_ERROR'
        );
      }

      return new Response(
        JSON.stringify({
          message: {
            role: assistantMessage.role,
            content: assistantMessage.content,
          },
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
        }
      );
    }
  } catch (err: unknown) {
    clearTimeout(timeoutId);

    if (err instanceof Error && err.name === 'AbortError') {
      return errorResponse(
        504,
        'The AI service did not respond within the allowed time. Please try again.',
        'GATEWAY_TIMEOUT'
      );
    }

    return errorResponse(
      502,
      'The upstream AI service is temporarily unavailable.',
      'UPSTREAM_ERROR'
    );
  }
}
