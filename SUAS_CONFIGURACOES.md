# 🎯 Suas Configurações Específicas

## 🗄️ Supabase - Já Configurado!

### ✅ Seu projeto Supabase:
- **URL**: https://twfiakthfeirgobwvfxy.supabase.co
- **Projeto ID**: twfiakthfeirgobwvfxy
- **Dashboard**: https://supabase.com/dashboard/project/twfiakthfeirgobwvfxy

### 📋 O que você precisa fazer:

1. **Pegar a chave anon**:
   - Vá em: https://supabase.com/dashboard/project/twfiakthfeirgobwvfxy/settings/api
   - Copie a chave `anon public` (começa com `eyJ...`)

2. **Executar o SQL**:
   - Vá em: https://supabase.com/dashboard/project/twfiakthfeirgobwvfxy/sql/new
   - Cole TODO o conteúdo do arquivo `supabase-schema.sql`
   - Clique em "RUN"

3. **Configurar no Vercel**:
   ```
   VITE_SUPABASE_URL=https://twfiakthfeirgobwvfxy.supabase.co
   VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
   ```

---

## 🚀 Próximos Passos Simples:

### 1. Execute o script automático:
```bash
./setup-rapido.sh
```

### 2. Ou siga o guia manual:
- Abra o arquivo `SETUP_FACIL.md`
- Siga cada passo numerado
- Marque ✅ conforme for completando

### 3. Teste tudo:
- Acesse seu site
- Teste o chatbot
- Envie um formulário de contato
- Verifique se os leads aparecem no Supabase

---

## 🔧 Variáveis para o Vercel:

Copie e cole estas no Vercel > Settings > Environment Variables:

```bash
# Supabase (obrigatório)
VITE_SUPABASE_URL=https://twfiakthfeirgobwvfxy.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-do-supabase

# EmailJS (obrigatório para emails)
VITE_EMAILJS_SERVICE_ID=seu-service-id
VITE_EMAILJS_TEMPLATE_ID=seu-template-id
VITE_EMAILJS_PUBLIC_KEY=sua-chave-publica

# OpenAI (obrigatório para chatbot)
OPENAI_API_KEY=sk-proj-sua-chave-openai

# Configurações extras (opcional)
VITE_WHATSAPP_NUMBER=5511999999999
VITE_AIDEAFLUX_URL=https://aideaflux.xyz
VITE_POE_PROFILE_URL=https://poe.com/calangoflux
VITE_SITE_URL=https://calangoflux.vercel.app
```

---

## 🎉 Resultado Final:

Quando tudo estiver configurado, você terá:

- ✅ **Site no ar**: https://calangoflux.vercel.app (ou seu domínio)
- ✅ **Chatbot inteligente**: Responde perguntas sobre CalangoFlux
- ✅ **Captura de leads**: Salva no Supabase automaticamente
- ✅ **Emails automáticos**: Você recebe notificação de cada lead
- ✅ **Banco de dados**: Todos os dados seguros no Supabase
- ✅ **Analytics**: Relatórios no Vercel e Supabase

---

## 🆘 Se Precisar de Ajuda:

1. **Chatbot não funciona**: Verifique a `OPENAI_API_KEY`
2. **Emails não chegam**: Teste o EmailJS no dashboard
3. **Leads não salvam**: Verifique se executou o SQL no Supabase
4. **Site não carrega**: Veja os logs no Vercel

---

## 📊 Como Acompanhar os Leads:

1. **Acesse**: https://supabase.com/dashboard/project/twfiakthfeirgobwvfxy/editor/leads
2. **Veja todos os leads** capturados em tempo real
3. **Exporte para Excel** se quiser
4. **Configure alertas** por email

---

**🦎 Seu projeto está pronto para decolar!**