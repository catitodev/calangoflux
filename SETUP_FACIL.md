# 🚀 Setup Fácil - CalangoFlux (Para Iniciantes)

## 📋 Checklist Rápido
- [ ] 1. Criar conta no GitHub
- [ ] 2. Criar conta no Vercel
- [ ] 3. Configurar Supabase
- [ ] 4. Configurar EmailJS
- [ ] 5. Deploy automático
- [ ] 6. Testar tudo

---

## 🎯 PASSO 1: GitHub (2 minutos)

### Se você ainda não tem conta:
1. Acesse: https://github.com
2. Clique em "Sign up"
3. Crie sua conta

### Subir o código:
```bash
# No terminal, dentro da pasta do projeto:
git init
git add .
git commit -m "Primeiro commit CalangoFlux"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/calangoflux.git
git push -u origin main
```

---

## 🚀 PASSO 2: Vercel (1 minuto)

### Conectar GitHub ao Vercel:
1. Acesse: https://vercel.com
2. Clique em "Continue with GitHub"
3. Autorize o Vercel
4. Clique em "Import Project"
5. Selecione seu repositório `calangoflux`
6. Clique em "Deploy"

**✅ Pronto! Seu site já está no ar!**

---

## 🗄️ PASSO 3: Supabase (5 minutos)

### Você já tem o link: https://supabase.com/dashboard/project/twfiakthfeirgobwvfxy

### 3.1 - Pegar as chaves:
1. No seu projeto Supabase, vá em **Settings** > **API**
2. Copie estas duas informações:
   - `URL`: https://twfiakthfeirgobwvfxy.supabase.co
   - `anon public`: eyJ... (chave longa)

### 3.2 - Criar tabelas:
1. Vá em **SQL Editor**
2. Cole TODO o conteúdo do arquivo `supabase-schema.sql`
3. Clique em "RUN"

### 3.3 - Configurar no Vercel:
1. No Vercel, vá no seu projeto
2. Clique em **Settings** > **Environment Variables**
3. Adicione:
   - `VITE_SUPABASE_URL` = `https://twfiakthfeirgobwvfxy.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `sua-chave-anon-aqui`

---

## 📧 PASSO 4: EmailJS (3 minutos)

### 4.1 - Criar conta:
1. Acesse: https://emailjs.com
2. Clique em "Sign Up"
3. Confirme seu email

### 4.2 - Configurar serviço:
1. Vá em **Email Services**
2. Clique em "Add New Service"
3. Escolha **Gmail** (mais fácil)
4. Conecte sua conta Gmail
5. Anote o **Service ID** (ex: `service_abc123`)

### 4.3 - Criar template:
1. Vá em **Email Templates**
2. Clique em "Create New Template"
3. Use este template:

```html
Assunto: Novo contato do site CalangoFlux

Olá equipe CalangoFlux!

Você recebeu um novo contato:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Serviço: {{service}}
Mensagem: {{message}}

---
Enviado automaticamente pelo site
```

4. Salve e anote o **Template ID** (ex: `template_xyz789`)

### 4.4 - Pegar chave pública:
1. Vá em **Account** > **General**
2. Copie a **Public Key**

### 4.5 - Configurar no Vercel:
No Vercel, adicione estas variáveis:
- `VITE_EMAILJS_SERVICE_ID` = `service_abc123`
- `VITE_EMAILJS_TEMPLATE_ID` = `template_xyz789`
- `VITE_EMAILJS_PUBLIC_KEY` = `sua-chave-publica`

---

## 🤖 PASSO 5: OpenAI (2 minutos)

### 5.1 - Pegar API Key:
1. Acesse: https://platform.openai.com/api-keys
2. Clique em "Create new secret key"
3. Copie a chave (começa com `sk-proj-...`)

### 5.2 - Configurar no Vercel:
- `OPENAI_API_KEY` = `sk-proj-sua-chave-aqui`

---

## 🔧 PASSO 6: Configurações Extras

### No Vercel, adicione também:
```
VITE_WHATSAPP_NUMBER=5511999999999
VITE_AIDEAFLUX_URL=https://aideaflux.xyz
VITE_POE_PROFILE_URL=https://poe.com/calangoflux
VITE_SITE_URL=https://calangoflux.vercel.app
```

---

## ✅ PASSO 7: Testar Tudo

### Após configurar tudo:
1. No Vercel, vá em **Deployments**
2. Clique em "Redeploy" para aplicar as variáveis
3. Acesse seu site
4. Teste:
   - [ ] Chatbot funciona
   - [ ] Formulário de contato envia email
   - [ ] Newsletter funciona
   - [ ] Botões levam para AideaFlux

---

## 🆘 Se Algo Der Errado

### Chatbot não funciona:
- Verifique se a `OPENAI_API_KEY` está configurada
- Veja os logs no Vercel > Functions

### Emails não chegam:
- Verifique as configurações do EmailJS
- Teste o template no dashboard do EmailJS

### Leads não salvam:
- Verifique se executou o SQL no Supabase
- Veja se as chaves do Supabase estão corretas

### Site não carrega:
- Verifique se o build passou no Vercel
- Veja os logs de deploy

---

## 📞 Contatos de Emergência

- **Vercel Support**: https://vercel.com/help
- **Supabase Docs**: https://supabase.com/docs
- **EmailJS Support**: https://emailjs.com/docs

---

## 🎉 Resultado Final

Quando tudo estiver configurado, você terá:

- ✅ **Site profissional** no ar
- ✅ **Chatbot inteligente** funcionando
- ✅ **Captura de leads** automática
- ✅ **Emails automáticos** para você
- ✅ **Banco de dados** seguro
- ✅ **Analytics** básico
- ✅ **Domínio gratuito** (.vercel.app)

**🚀 Tempo total: ~15 minutos**

---

## 💡 Dicas Extras

### Para domínio próprio:
1. No Vercel > Settings > Domains
2. Adicione seu domínio
3. Configure o DNS

### Para monitorar leads:
1. Acesse seu Supabase Dashboard
2. Vá em Table Editor > leads
3. Veja todos os leads capturados

### Para ver analytics:
1. No Vercel > Analytics
2. Veja visitantes, performance, etc.

---

**🦎 Agora é só aguardar os primeiros leads chegarem!**