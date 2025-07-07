# 📧 Resolver Erro EmailJS - Gmail API

## 🚨 **Problema Identificado:**
```
412 Gmail_API: Request had insufficient authentication scopes.
```

## ✅ **Solução Passo a Passo:**

### 1. **Desconectar Gmail atual:**
- No EmailJS, clique em **"Disconnect"**
- Confirme a desconexão

### 2. **Reconectar com permissões completas:**
- Clique em **"Gmail Connect"** novamente
- **IMPORTANTE**: Quando aparecer a tela do Google:
  - ✅ Marque **TODAS** as permissões
  - ✅ Especialmente "Send email on your behalf"
  - ✅ E "Manage your email"

### 3. **Verificar conexão:**
- Deve aparecer: "Connected as calangoflux@gmail.com" ✅
- **SEM** erro 412

### 4. **Testar envio:**
- Marque ✅ "Send test email to verify configuration"
- Clique em **"Create Service"**
- Verifique se chegou email de teste

---

## 🎯 **Alternativa: Usar SMTP (Mais Simples)**

Se o Gmail continuar dando problema:

### 1. **Desconectar Gmail**
### 2. **Escolher "Other" ou "SMTP"**
### 3. **Configurar SMTP Gmail:**
```
SMTP Server: smtp.gmail.com
Port: 587
Username: calangoflux@gmail.com
Password: [Senha de App do Gmail]
```

### 4. **Criar Senha de App Gmail:**
- Vá em: https://myaccount.google.com/security
- Ative "2-Step Verification" (se não tiver)
- Vá em "App passwords"
- Gere senha para "EmailJS"
- Use essa senha no SMTP

---

## 📝 **Suas Configurações Atuais:**

### ✅ **Já configurado:**
- **Service ID**: `service_xf9f757`
- **Email**: calangoflux@gmail.com
- **OpenAI Key**: Nova chave criada

### ⏳ **Falta configurar:**
- **Template ID**: Criar template de email
- **Public Key**: Pegar no Account > General

---

## 🚀 **Próximos Passos:**

### 1. **Resolver Gmail** (escolha uma opção):
   - **Opção A**: Reconectar Gmail com todas permissões
   - **Opção B**: Usar SMTP com senha de app

### 2. **Criar Template:**
   - Vá em **Email Templates**
   - Clique **"Create New Template"**
   - Use este template:

```html
Assunto: 🦎 Novo contato CalangoFlux

Olá equipe CalangoFlux!

Novo contato recebido:

👤 Nome: {{from_name}}
📧 Email: {{from_email}}
📱 Telefone: {{phone}}
🎯 Serviço: {{service}}
💬 Mensagem: {{message}}

---
Enviado automaticamente pelo site CalangoFlux
```

### 3. **Pegar Template ID e Public Key**

### 4. **Configurar no Vercel**

---

## 🎯 **Variáveis Finais para o Vercel:**

```bash
# OpenAI (✅ NOVA CHAVE)
OPENAI_API_KEY=sua-nova-chave-openai

# EmailJS (⏳ COMPLETAR)
VITE_EMAILJS_SERVICE_ID=service_xf9f757
VITE_EMAILJS_TEMPLATE_ID=template_[PEGAR_DEPOIS]
VITE_EMAILJS_PUBLIC_KEY=[PEGAR_NO_ACCOUNT]
```

---

## 🆘 **Se Continuar Dando Erro:**

### Gmail API ainda com erro 412:
1. **Desconecte completamente**
2. **Limpe cache do navegador**
3. **Use aba anônima**
4. **Reconecte marcando TODAS as permissões**

### Alternativa final:
- Use **Outlook** ou **Yahoo** em vez do Gmail
- Ou configure **SMTP direto**

---

**🎯 Comece resolvendo o Gmail primeiro, depois criamos o template!**