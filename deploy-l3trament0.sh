#!/bin/bash

echo "🚀 Script de Deploy para l3trament0web3"
echo "======================================"

# Verificar se existe o remote
if git remote get-url l3trament0 >/dev/null 2>&1; then
    echo "✅ Remote l3trament0 já configurado"
else
    echo "📝 Configurando remote l3trament0..."
    git remote add l3trament0 https://github.com/catitodev/l3trament0web3.git
fi

echo "📦 Fazendo build do projeto..."
npm run build

echo "💾 Fazendo commit das mudanças..."
git add -A
git commit -m "🚀 Deploy: Aplicativo Interativo Letramento Digital + Bens Públicos + Commons + Relações Abundantes + ReFi

✨ Funcionalidades:
- 9 páginas interativas completas
- Sistema de gamificação e progresso
- Comunidade com perfis e projetos
- Dashboard de impacto com métricas
- Design responsivo e moderno
- Animações suaves
- Conteúdo educacional rico

🛠️ Tecnologias:
- React + TypeScript
- Tailwind CSS + Framer Motion
- React Router
- Lucide Icons

🎯 Temas abordados:
- Letramento Digital
- Bens Públicos
- Cultura Commons  
- Relações Abundantes
- ReFi (Finanças Regenerativas)"

echo "🔄 Fazendo push para l3trament0web3..."
git push l3trament0 HEAD:main --force

echo "✅ Deploy concluído!"
echo "🌐 Acesse: https://github.com/catitodev/l3trament0web3"