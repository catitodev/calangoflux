#!/bin/bash

# 🚀 Setup Rápido CalangoFlux - Versão Iniciante
echo "🦎 Bem-vindo ao setup automático da CalangoFlux!"
echo ""

# Verificar se está na pasta correta
if [ ! -f "package.json" ]; then
    echo "❌ Erro: Execute este script na pasta raiz do projeto CalangoFlux"
    exit 1
fi

# Função para perguntar sim/não
ask_yes_no() {
    while true; do
        read -p "$1 (s/n): " yn
        case $yn in
            [Ss]* ) return 0;;
            [Nn]* ) return 1;;
            * ) echo "Por favor, responda s ou n.";;
        esac
    done
}

echo "📋 Vamos configurar tudo passo a passo..."
echo ""

# PASSO 1: Git
echo "🔧 PASSO 1: Configurando Git..."
if [ ! -d ".git" ]; then
    if ask_yes_no "Inicializar repositório Git?"; then
        git init
        echo "✅ Git inicializado!"
    fi
else
    echo "✅ Git já configurado!"
fi

# PASSO 2: Commit inicial
echo ""
echo "📝 PASSO 2: Preparando código..."
git add .
if git diff --cached --quiet; then
    echo "✅ Código já commitado!"
else
    git commit -m "Setup inicial CalangoFlux - $(date '+%Y-%m-%d %H:%M:%S')"
    echo "✅ Código commitado!"
fi

# PASSO 3: Configurar remote (se necessário)
echo ""
echo "🔗 PASSO 3: Configurando GitHub..."
if ! git remote get-url origin &> /dev/null; then
    echo "Você precisa criar um repositório no GitHub primeiro:"
    echo "1. Acesse: https://github.com/new"
    echo "2. Nome: calangoflux"
    echo "3. Deixe público"
    echo "4. NÃO marque 'Add a README file'"
    echo "5. Clique em 'Create repository'"
    echo ""
    read -p "Cole aqui a URL do seu repositório (ex: https://github.com/usuario/calangoflux.git): " repo_url
    
    if [ ! -z "$repo_url" ]; then
        git remote add origin "$repo_url"
        git branch -M main
        git push -u origin main
        echo "✅ Código enviado para GitHub!"
    else
        echo "⚠️ Pule este passo por enquanto. Configure o GitHub manualmente depois."
    fi
else
    git push origin main
    echo "✅ Código atualizado no GitHub!"
fi

# PASSO 4: Instruções para Vercel
echo ""
echo "🚀 PASSO 4: Deploy no Vercel"
echo "Agora você precisa fazer o deploy:"
echo "1. Acesse: https://vercel.com"
echo "2. Clique em 'Continue with GitHub'"
echo "3. Autorize o Vercel"
echo "4. Clique em 'Import Project'"
echo "5. Selecione o repositório 'calangoflux'"
echo "6. Clique em 'Deploy'"
echo ""
if ask_yes_no "Já fez o deploy no Vercel?"; then
    echo "✅ Deploy realizado!"
else
    echo "⚠️ Faça o deploy e volte aqui depois."
    echo "Quando terminar, execute novamente: ./setup-rapido.sh"
    exit 0
fi

# PASSO 5: Configurar Supabase
echo ""
echo "🗄️ PASSO 5: Configurando Supabase"
echo "Você já tem o projeto: https://supabase.com/dashboard/project/twfiakthfeirgobwvfxy"
echo ""
echo "Faça isso agora:"
echo "1. Vá em Settings > API"
echo "2. Copie a URL e a chave anon"
echo "3. Vá em SQL Editor"
echo "4. Cole o conteúdo do arquivo 'supabase-schema.sql'"
echo "5. Clique em RUN"
echo ""
if ask_yes_no "Já configurou o Supabase?"; then
    echo "✅ Supabase configurado!"
else
    echo "⚠️ Configure o Supabase e volte aqui depois."
    exit 0
fi

# PASSO 6: Configurar EmailJS
echo ""
echo "📧 PASSO 6: Configurando EmailJS"
echo "1. Acesse: https://emailjs.com"
echo "2. Crie uma conta"
echo "3. Configure um serviço (Gmail é mais fácil)"
echo "4. Crie um template de email"
echo "5. Pegue as chaves: Service ID, Template ID, Public Key"
echo ""
if ask_yes_no "Já configurou o EmailJS?"; then
    echo "✅ EmailJS configurado!"
else
    echo "⚠️ Configure o EmailJS e volte aqui depois."
    exit 0
fi

# PASSO 7: Configurar OpenAI
echo ""
echo "🤖 PASSO 7: Configurando OpenAI"
echo "1. Acesse: https://platform.openai.com/api-keys"
echo "2. Clique em 'Create new secret key'"
echo "3. Copie a chave (começa com sk-proj-)"
echo ""
if ask_yes_no "Já tem a chave da OpenAI?"; then
    echo "✅ OpenAI configurado!"
else
    echo "⚠️ Pegue a chave da OpenAI e volte aqui depois."
    exit 0
fi

# PASSO 8: Instruções finais
echo ""
echo "⚙️ PASSO 8: Configurar variáveis no Vercel"
echo ""
echo "Agora vá no Vercel e adicione estas variáveis:"
echo "1. Vá no seu projeto no Vercel"
echo "2. Clique em Settings > Environment Variables"
echo "3. Adicione uma por uma:"
echo ""
echo "VITE_SUPABASE_URL=https://twfiakthfeirgobwvfxy.supabase.co"
echo "VITE_SUPABASE_ANON_KEY=sua-chave-anon-do-supabase"
echo "VITE_EMAILJS_SERVICE_ID=seu-service-id"
echo "VITE_EMAILJS_TEMPLATE_ID=seu-template-id"
echo "VITE_EMAILJS_PUBLIC_KEY=sua-chave-publica"
echo "OPENAI_API_KEY=sk-proj-sua-chave-openai"
echo "VITE_WHATSAPP_NUMBER=5511999999999"
echo "VITE_AIDEAFLUX_URL=https://aideaflux.xyz"
echo "VITE_POE_PROFILE_URL=https://poe.com/calangoflux"
echo ""
echo "4. Depois vá em Deployments > Redeploy"
echo ""

if ask_yes_no "Já configurou todas as variáveis no Vercel?"; then
    echo ""
    echo "🎉 PARABÉNS! Setup completo!"
    echo ""
    echo "✅ Seu site está no ar com:"
    echo "  - Chatbot inteligente"
    echo "  - Captura de leads"
    echo "  - Envio de emails"
    echo "  - Banco de dados"
    echo "  - Analytics"
    echo ""
    echo "🔗 Acesse seu site e teste tudo!"
    echo "🦎 CalangoFlux está pronto para capturar leads!"
else
    echo ""
    echo "⚠️ Termine de configurar as variáveis no Vercel"
    echo "📖 Consulte o arquivo SETUP_FACIL.md se precisar de ajuda"
fi

echo ""
echo "🆘 Se algo der errado:"
echo "  - Veja os logs no Vercel > Functions"
echo "  - Teste as configurações no Supabase"
echo "  - Verifique se o EmailJS está funcionando"
echo ""
echo "🚀 Boa sorte com a CalangoFlux!"