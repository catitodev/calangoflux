<div align="center">

<img src="src/assets/imagens/calango-logo-transp.png" alt="CalangoFlux" width="120" />

# CalangoFlux

### `Fluxo Vivo, Impacto Real`

**A primeira plataforma brasileira de automação agentic**
<br/>
IA autônoma · Web3 · Tecnologias Regenerativas

<br/>

[![Deploy](https://img.shields.io/badge/deploy-vercel-000?style=for-the-badge&logo=vercel)](https://calangoflux.vercel.app)
[![Stack](https://img.shields.io/badge/stack-React_18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![AI](https://img.shields.io/badge/AI-Groq_Llama_3.3-F55036?style=for-the-badge&logo=meta&logoColor=white)](https://groq.com)
[![License](https://img.shields.io/badge/license-proprietary-1E293B?style=for-the-badge)](LICENSE)

<br/>

[🌐 Site](https://calangoflux.vercel.app) · [🚀 AideaFlux](https://aideaflux.xyz) · [🤖 Agentes Poe](https://poe.com/@calangoflux) · [💬 WhatsApp](https://wa.me/5522988324416)

</div>

<br/>

---

<br/>

## ⚡ Sobre

A CalangoFlux cria **agentes de IA, automações e soluções digitais** para autônomos, coletivos e pequenos negócios que querem crescer com inteligência — sem depender de sistemas complexos ou inacessíveis.

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   🧠 Diagnóstico  →  🛠️ Execução  →  ⚙️ Expansão       │
│                                                         │
│   📚 Autonomia    →  🔄 Inteligência Contínua           │
│                                                         │
│   "Cada camada é uma entrega. Cada entrega é real."     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

<br/>

## 🎯 Serviços

| Serviço | Descrição | Status |
|---------|-----------|--------|
| **Agentes de IA** | Chatbots personalizados para WhatsApp, Telegram, Web | `ativo` |
| **Automações** | Workflows com n8n, Notion, APIs integradas | `ativo` |
| **Agentics** | Sistemas que tomam decisões autônomas | `ativo` |
| **Web Design** | Sites modernos, responsivos, dark-first | `ativo` |
| **Letramento Web3** | Educação gratuita em blockchain e ReFi | `ativo` |

<br/>

## 🏗️ Arquitetura

```
                    ┌──────────────────┐
                    │   Vercel Edge    │
                    │   (api/chat.ts)  │
                    └────────┬─────────┘
                             │ Groq API
                             │ Llama 3.3 70B
                             ▼
┌──────────┐    ┌──────────────────────┐    ┌──────────────┐
│  React   │◄──►│   CalangoBot (SSE)   │───►│   Supabase   │
│  SPA     │    │   Streaming Chat     │    │   PostgreSQL │
└──────────┘    └──────────────────────┘    └──────────────┘
     │                                            │
     │          ┌──────────────────────┐          │
     └─────────►│   EmailJS            │          │
                │   Contact Forms      │          │
                └──────────────────────┘          │
                                                  │
                ┌──────────────────────┐          │
                │   Leads · Conversas  │◄─────────┘
                │   Subscribers · RLS  │
                └──────────────────────┘
```

<br/>

## 🛠️ Stack

<table>
<tr>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
<br/><sub>React 18</sub>
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=ts" width="48" height="48" alt="TypeScript" />
<br/><sub>TypeScript</sub>
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=vite" width="48" height="48" alt="Vite" />
<br/><sub>Vite 5</sub>
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
<br/><sub>Tailwind CSS</sub>
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=supabase" width="48" height="48" alt="Supabase" />
<br/><sub>Supabase</sub>
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel" />
<br/><sub>Vercel Edge</sub>
</td>
</tr>
</table>

| Camada | Tecnologia | Propósito |
|--------|-----------|-----------|
| **Frontend** | React 18 + Vite 5 + Tailwind CSS | SPA com dark-first design |
| **Animações** | Framer Motion 11 | Scroll-driven, cursor-reactive, page transitions |
| **AI/Chat** | Groq API (Llama 3.3 70B) | CalangoBot com streaming SSE |
| **Backend** | Vercel Edge Functions | Proxy seguro para IA |
| **Database** | Supabase (PostgreSQL + RLS) | Leads, conversas, contatos |
| **Email** | EmailJS | Formulário de contato |
| **UI** | Radix UI + CVA + Lucide | Componentes acessíveis |

<br/>

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/catitodev/calangoflux.git
cd calangoflux

# Instale dependências
npm install

# Configure variáveis (copie e edite)
cp .env.example .env

# Rode em desenvolvimento
npm run dev
```

Acesse `http://localhost:5173`

<br/>

## ⚙️ Variáveis de Ambiente

```bash
# === FRONTEND (safe to expose) ===
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=your-public-key

# === SERVER-ONLY (Vercel dashboard only) ===
GROQ_API_KEY=gsk_your-groq-key        # https://console.groq.com
```

<br/>

## 📂 Estrutura

```
calangoflux/
├── api/
│   └── chat.ts              # Edge function (Groq AI proxy)
├── src/
│   ├── components/
│   │   ├── CalangoBot/      # Chat widget (8 sub-components)
│   │   ├── ErrorBoundary    # Error handling
│   │   ├── NewsletterForm   # Subscriber form
│   │   └── ui/              # Primitivos (button, card, badge)
│   ├── hooks/
│   │   ├── useChatEngine    # SSE streaming + lead detection
│   │   ├── useLeadPersistence # Supabase lead storage
│   │   ├── useScrollAnimation # Scroll-driven animations
│   │   └── useMouseTracker  # Cursor-reactive elements
│   ├── lib/
│   │   ├── emailjs.ts       # Email service (typed)
│   │   ├── openai.ts        # Chat API client (typed)
│   │   └── supabase.ts      # Database client (typed)
│   └── pages/               # Route pages
├── supabase-schema.sql       # Database schema
├── supabase-rls.sql          # Row Level Security policies
└── vercel.json               # Edge function routing
```

<br/>

## 🤖 CalangoBot

O CalangoBot é um assistente com IA real que roda no site:

- **Modelo**: Llama 3.3 70B via Groq (gratuito, open-source)
- **Streaming**: Respostas em tempo real via Server-Sent Events
- **Lead Detection**: Identifica interesse automaticamente
- **Persistência**: Salva conversas e leads no Supabase
- **Fallback**: Oferece WhatsApp/Telegram se a IA falhar
- **Personalidade**: Baseada no manifesto CalangoFlux — ética, clareza, escuta

```
Visitante → CalangoBot → Qualificação → Lead no Supabase
                ↓                              ↓
         Resposta com IA              Notificação por email
```

<br/>

## 🎨 Design System

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg-primary` | `#0F172A` | Background principal |
| `--bg-surface` | `#1E293B` | Cards, containers |
| `--accent-primary` | `#00FF87` | CTAs, destaques, glow |
| `--accent-secondary` | `#60EFFF` | Links, hover states |
| `--text-primary` | `#F8FAFC` | Texto principal |

**Tipografia**: Space Grotesk (display) · Inter (body) · JetBrains Mono (code)

**Animações**: Scroll-driven parallax · Cursor-reactive particles · Page transitions · Glow effects

<br/>

## 💰 Modelo de Negócio

```
┌─────────────────────────────────────────────┐
│                                             │
│   💎 R$ 700 – R$ 3.900 por serviço         │
│   📅 Ciclo: 10 a 20 dias úteis             │
│                                             │
│   ♻️  SUBSÍDIO CRUZADO (10:1)               │
│   A cada 10 clientes pagantes,             │
│   1 projeto social é atendido grátis.      │
│                                             │
└─────────────────────────────────────────────┘
```

<br/>

## 🌱 Ecossistema

| Marca | Função | Link |
|-------|--------|------|
| **CalangoFlux** | Plataforma SaaS core | [calangoflux.vercel.app](https://calangoflux.vercel.app) |
| **AideaFlux** | 100+ LLMs gratuitos | [aideaflux.xyz](https://aideaflux.xyz) |
| **Agentes Poe** | Bots especializados | [poe.com/@calangoflux](https://poe.com/@calangoflux) |

<br/>

## 📊 Deploy

O deploy é automático via Vercel:

```bash
git push origin main    # Vercel detecta e deploya automaticamente
```

**Requisitos no Vercel Dashboard:**
- `GROQ_API_KEY` — chave da Groq (gratuita)
- `VITE_SUPABASE_URL` — URL do projeto Supabase
- `VITE_SUPABASE_ANON_KEY` — anon key do Supabase
- `VITE_EMAILJS_*` — credenciais EmailJS

<br/>

## 🗄️ Database

Execute no SQL Editor do Supabase:

1. `supabase-schema.sql` — Cria tabelas (leads, contact_forms, subscribers, chat_conversations)
2. `supabase-rls.sql` — Configura Row Level Security

<br/>

## 🧪 Scripts

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build
npm run typecheck    # Verificação de tipos
npm run lint         # ESLint
npm run test         # Vitest
```

<br/>

## 🦎 Manifesto

> *Ética radical, sem promessas falsas.*
> *Clareza estratégica, sem enrolação.*
> *Inovação acessível, sem elitismo.*
> *Impacto real, medido em transformação, não likes.*
>
> — CalangoFlux

<br/>

---

<div align="center">

**Feito com 💚 no Brasil** · Serra Macaense, RJ

por [Catito](https://github.com/catitodev) — Biólogo, Agroecologista, Fullstack & Web3 Developer

<br/>

© 2025-2026 CalangoFlux. Todos os direitos reservados.

</div>
