# 🚀 Deploy CalangoFlux - AGORA!

## ✅ Status Atual:
- **Supabase**: ✅ Configurado (avisos são normais)
- **GitHub**: ✅ Código enviado
- **Vercel CLI**: ✅ Instalado

---

## 🎯 **Opção 1: Deploy via Dashboard (MAIS FÁCIL)**

### 1. Acesse o Vercel:
👉 **https://vercel.com/dashboard**

### 2. Faça login com GitHub:
- Clique em "Continue with GitHub"
- Autorize o Vercel se necessário

### 3. Importe o projeto:
- Clique em **"Add New..."** > **"Project"**
- Encontre o repositório **"calangoflux"**
- Clique em **"Import"**

### 4. Configurações do projeto:
- **Framework Preset**: Vite
- **Root Directory**: ./
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- Clique em **"Deploy"**

### 5. Aguarde o deploy (2-3 minutos):
- Verá uma tela de progresso
- Quando terminar, terá um link do seu site!

---

## 🎯 **Opção 2: Deploy via Terminal**

### Execute no terminal:
```bash
# Fazer login no Vercel (se necessário)
vercel login

# Deploy do projeto
vercel --prod
```

### Responda as perguntas:
- **Set up and deploy?** → Y (sim)
- **Which scope?** → Seu usuário
- **Link to existing project?** → N (não)
- **What's your project's name?** → calangoflux
- **In which directory?** → ./ (enter)

---

## ⚙️ **DEPOIS DO DEPLOY: Configurar Variáveis**

### 1. No dashboard do Vercel:
- Vá no seu projeto
- Clique em **"Settings"**
- Clique em **"Environment Variables"**

### 2. Adicione estas variáveis (uma por uma):

```bash
# Supabase (✅ SUAS CHAVES REAIS)
VITE_SUPABASE_URL=https://twfiakthfeirgobwvfxy.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3Zmlha3RoZmVpcmdvYnd2Znh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4OTg5ODIsImV4cCI6MjA2NzQ3NDk4Mn0.v-VXxPgCtS34O1sjgGYpMIoF5lQXY9T0IpuORhB1ii0

# EmailJS (⏳ CONFIGURE DEPOIS)
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=sua-chave-publica

# OpenAI (⏳ CONFIGURE DEPOIS)
OPENAI_API_KEY=sk-proj-sua-chave-openai

# Extras
VITE_WHATSAPP_NUMBER=5511999999999
VITE_AIDEAFLUX_URL=https://aideaflux.xyz
VITE_POE_PROFILE_URL=https://poe.com/calangoflux
```

### 3. Após adicionar as variáveis:
- Vá em **"Deployments"**
- Clique nos 3 pontinhos do último deploy
- Clique em **"Redeploy"**

---

## 🎉 **Resultado:**

Você terá:
- ✅ **Site no ar**: https://calangoflux.vercel.app
- ✅ **Domínio personalizado** (se quiser)
- ✅ **SSL automático**
- ✅ **Deploy automático** a cada commit

---

## 🔧 **Próximos Passos:**

### 1. **Teste o site básico** (sem chatbot ainda)
### 2. **Configure EmailJS**: https://emailjs.com
### 3. **Configure OpenAI**: https://platform.openai.com/api-keys
### 4. **Adicione as chaves no Vercel**
### 5. **Teste tudo funcionando**

---

## 🆘 **Se Der Problema:**

### Build falha:
- Verifique se `package.json` está correto
- Veja os logs no Vercel

### Site não carrega:
- Verifique se o domínio está correto
- Aguarde alguns minutos (propagação DNS)

### Funcionalidades não funcionam:
- Verifique se as variáveis estão configuradas
- Faça redeploy após adicionar variáveis

---

## 🏁 **Começar Agora:**

### Recomendo a **Opção 1** (Dashboard):
1. Acesse: https://vercel.com/dashboard
2. Import project
3. Deploy
4. Configurar variáveis
5. Redeploy

**🦎 Seu site estará no ar em 5 minutos!**