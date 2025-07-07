#!/bin/bash

# 🚀 Script de Deploy CalangoFlux - 100% Cloud
echo "🦎 Iniciando deploy da CalangoFlux..."

# Verificar se está em um repositório Git
if [ ! -d ".git" ]; then
    echo "❌ Erro: Este não é um repositório Git!"
    echo "Execute: git init && git add . && git commit -m 'Initial commit'"
    exit 1
fi

# Verificar se há mudanças não commitadas
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Commitando mudanças..."
    git add .
    git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Verificar se tem remote origin
if ! git remote get-url origin &> /dev/null; then
    echo "❌ Erro: Nenhum remote 'origin' configurado!"
    echo "Execute: git remote add origin https://github.com/seu-usuario/calangoflux.git"
    exit 1
fi

# Push para GitHub
echo "📤 Enviando para GitHub..."
git push origin main

# Verificar se Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel
fi

# Deploy no Vercel
echo "🚀 Fazendo deploy no Vercel..."
vercel --prod

echo "✅ Deploy concluído!"
echo ""
echo "🌐 Próximos passos:"
echo "1. Configurar variáveis de ambiente no Vercel:"
echo "   - VITE_SUPABASE_URL"
echo "   - VITE_SUPABASE_ANON_KEY"
echo "   - OPENAI_API_KEY"
echo "   - VITE_EMAILJS_SERVICE_ID"
echo "   - VITE_EMAILJS_TEMPLATE_ID"
echo "   - VITE_EMAILJS_PUBLIC_KEY"
echo ""
echo "2. Configurar domínio personalizado (opcional)"
echo "3. Configurar Supabase (tabelas e RLS)"
echo "4. Configurar EmailJS (templates)"
echo ""
echo "🎉 Site disponível em: https://calangoflux.vercel.app"