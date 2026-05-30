export const config = { runtime: 'edge' };

interface LeadPayload {
  nome?: string;
  email?: string;
  interesse?: string;
  origem?: string;
  session_id?: string;
  conversa?: string;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req: Request): Promise<Response> {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  }

  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  }

  // Must have at least email or interesse
  if (!body.email && !body.interesse) {
    return new Response(JSON.stringify({ error: 'Missing email or interesse' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  }

  // Save to Supabase
  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '';
  const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';

  if (supabaseUrl && supabaseKey) {
    try {
      const leadRecord = {
        nome: body.nome || '',
        email: body.email || '',
        interesse: body.interesse || '',
        origem: body.origem || 'chatbot',
        conversa: body.conversa || '',
        status: 'novo',
        prioridade: body.email ? 'alta' : 'normal',
      };

      // Upsert by email if provided
      const endpoint = body.email
        ? `${supabaseUrl}/rest/v1/leads?on_conflict=email`
        : `${supabaseUrl}/rest/v1/leads`;

      const method = body.email ? 'POST' : 'POST';
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
      };

      if (body.email) {
        headers['Prefer'] = 'resolution=merge-duplicates';
      }

      await fetch(endpoint, {
        method,
        headers,
        body: JSON.stringify(leadRecord),
      });
    } catch {
      // Don't fail the request if Supabase is down
    }
  }

  // Forward to CalangoFlux Agentic OS for processing (replaces n8n)
  const AGENTIC_OS_URL = process.env.AGENTIC_OS_URL || 'http://34.151.199.200:8080/api/tasks';
  try {
    await fetch(AGENTIC_OS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        task_type: 'action',
        payload: JSON.stringify({
          event: 'new_lead',
          timestamp: new Date().toISOString(),
          lead: {
            nome: body.nome || 'Não informado',
            email: body.email || 'Não informado',
            interesse: body.interesse || 'Não especificado',
            origem: body.origem || 'chatbot',
            session_id: body.session_id || '',
          },
        }),
      }),
    });
  } catch {
    // Don't fail if Agentic OS is unreachable
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}
