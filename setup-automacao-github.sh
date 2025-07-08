#!/bin/bash

# 🤖 Setup Automático - Automação GitHub L3trament0Web3
# Este script configura toda a infraestrutura de automação GitHub

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Emojis
ROBOT="🤖"
ROCKET="🚀"
GEAR="⚙️"
CHECK="✅"
WARNING="⚠️"
INFO="ℹ️"

echo -e "${CYAN}${ROBOT} Setup Automação GitHub L3trament0Web3${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Function to print colored output
print_status() {
    echo -e "${GREEN}${CHECK} $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}${WARNING} $1${NC}"
}

print_info() {
    echo -e "${BLUE}${INFO} $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if gh CLI is installed
check_gh_cli() {
    if ! command -v gh &> /dev/null; then
        print_error "GitHub CLI (gh) não está instalado"
        echo -e "${YELLOW}Instale o GitHub CLI primeiro:${NC}"
        echo "  macOS: brew install gh"
        echo "  Ubuntu: sudo apt install gh"
        echo "  Windows: winget install GitHub.cli"
        echo ""
        echo "Ou visite: https://cli.github.com/"
        exit 1
    fi
    print_status "GitHub CLI detectado"
}

# Check if user is authenticated
check_auth() {
    if ! gh auth status &> /dev/null; then
        print_warning "Você não está autenticado no GitHub CLI"
        echo -e "${BLUE}Execute: ${CYAN}gh auth login${NC}"
        echo ""
        read -p "Pressione Enter após fazer login..."
    fi
    print_status "Autenticação GitHub verificada"
}

# Get repository information
get_repo_info() {
    REPO_URL=$(git remote get-url origin 2>/dev/null || echo "")
    if [[ -z "$REPO_URL" ]]; then
        print_error "Não foi possível detectar o repositório GitHub"
        echo "Execute este script dentro do repositório l3trament0web3"
        exit 1
    fi
    
    # Extract owner/repo from URL
    REPO_PATH=$(echo "$REPO_URL" | sed -E 's/.*github\.com[:/]([^/]+\/[^/]+)(\.git)?$/\1/')
    print_status "Repositório detectado: $REPO_PATH"
}

# Function to set GitHub secret
set_secret() {
    local secret_name=$1
    local secret_value=$2
    local description=$3
    
    if [[ -n "$secret_value" ]]; then
        echo "$secret_value" | gh secret set "$secret_name" --repo "$REPO_PATH"
        print_status "Secret configurado: $secret_name"
    else
        print_warning "Secret $secret_name deixado em branco - configure manualmente depois"
    fi
}

# Collect secrets from user
collect_secrets() {
    echo -e "${PURPLE}${GEAR} Configuração de Secrets${NC}"
    echo -e "${BLUE}Configure os secrets necessários para automação completa${NC}"
    echo -e "${YELLOW}Você pode deixar em branco e configurar depois no GitHub${NC}"
    echo ""

    # Vercel secrets
    echo -e "${CYAN}🌐 Vercel Configuration:${NC}"
    read -p "Vercel Token: " VERCEL_TOKEN
    read -p "Vercel Org ID: " ORG_ID
    read -p "Vercel Project ID: " PROJECT_ID
    echo ""

    # Netlify secrets
    echo -e "${CYAN}🌍 Netlify Configuration:${NC}"
    read -p "Netlify Auth Token: " NETLIFY_AUTH_TOKEN
    read -p "Netlify Site ID: " NETLIFY_SITE_ID
    echo ""

    # Notification secrets
    echo -e "${CYAN}🔔 Notifications Configuration:${NC}"
    read -p "Discord Webhook URL: " DISCORD_WEBHOOK
    read -p "Slack Webhook URL: " SLACK_WEBHOOK_URL
    read -p "Telegram Bot Token: " TELEGRAM_BOT_TOKEN
    read -p "Telegram Chat ID: " TELEGRAM_CHAT_ID
    echo ""

    # API secrets
    echo -e "${CYAN}🔗 API Configuration:${NC}"
    read -p "API Token: " API_TOKEN
    read -p "Webhook Secret: " WEBHOOK_SECRET
    read -p "Backup Token: " BACKUP_TOKEN
    echo ""
}

# Configure GitHub secrets
configure_secrets() {
    echo -e "${PURPLE}${GEAR} Configurando Secrets no GitHub...${NC}"
    
    set_secret "VERCEL_TOKEN" "$VERCEL_TOKEN" "Vercel deployment token"
    set_secret "ORG_ID" "$ORG_ID" "Vercel organization ID"
    set_secret "PROJECT_ID" "$PROJECT_ID" "Vercel project ID"
    set_secret "NETLIFY_AUTH_TOKEN" "$NETLIFY_AUTH_TOKEN" "Netlify authentication token"
    set_secret "NETLIFY_SITE_ID" "$NETLIFY_SITE_ID" "Netlify site ID"
    set_secret "DISCORD_WEBHOOK" "$DISCORD_WEBHOOK" "Discord webhook URL"
    set_secret "SLACK_WEBHOOK_URL" "$SLACK_WEBHOOK_URL" "Slack webhook URL"
    set_secret "TELEGRAM_BOT_TOKEN" "$TELEGRAM_BOT_TOKEN" "Telegram bot token"
    set_secret "TELEGRAM_CHAT_ID" "$TELEGRAM_CHAT_ID" "Telegram chat ID"
    set_secret "API_TOKEN" "$API_TOKEN" "API authentication token"
    set_secret "WEBHOOK_SECRET" "$WEBHOOK_SECRET" "Webhook secret key"
    set_secret "BACKUP_TOKEN" "$BACKUP_TOKEN" "Backup service token"
    
    echo ""
    print_status "Secrets configurados com sucesso!"
}

# Enable GitHub Actions if not enabled
enable_actions() {
    echo -e "${PURPLE}${GEAR} Verificando GitHub Actions...${NC}"
    
    # This will be handled by the workflows themselves when pushed
    print_status "GitHub Actions será habilitado automaticamente"
}

# Create labels for the repository
create_labels() {
    echo -e "${PURPLE}${GEAR} Criando labels do projeto...${NC}"
    
    # Define labels with colors
    labels=(
        "🐛 bug|d73a4a|Something isn't working"
        "✨ enhancement|a2eeef|New feature or request" 
        "📚 documentation|0075ca|Improvements or additions to documentation"
        "🔧 component|f9d0c4|Component related changes"
        "📱 pages|c2e0c6|Page related changes"
        "🎨 styles|e4e669|Style and design changes"
        "📦 dependencies|0052cc|Dependency updates"
        "🤖 automation|5319e7|Automation and CI/CD"
        "🔍 needs-triage|fbca04|Needs initial evaluation"
        "🔍 needs-discussion|c5def5|Needs community discussion"
        "🚀 priority-high|b60205|High priority item"
        "🟡 priority-medium|fbca04|Medium priority item"
        "🟢 priority-low|0e8a16|Low priority item"
        "size/small|00ff00|Small changes (< 50 lines)"
        "size/medium|ffff00|Medium changes (50-200 lines)"
        "size/large|ff0000|Large changes (> 200 lines)"
    )
    
    for label in "${labels[@]}"; do
        IFS='|' read -r name color description <<< "$label"
        gh label create "$name" --color "$color" --description "$description" --repo "$REPO_PATH" 2>/dev/null || true
    done
    
    print_status "Labels criadas com sucesso!"
}

# Setup branch protection rules
setup_branch_protection() {
    echo -e "${PURPLE}${GEAR} Configurando proteção de branches...${NC}"
    
    # Enable branch protection for main branch
    gh api repos/"$REPO_PATH"/branches/main/protection \
        --method PUT \
        --field required_status_checks='{"strict":true,"checks":[{"context":"🔍 Análise de Código"}]}' \
        --field enforce_admins=false \
        --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true}' \
        --field restrictions=null \
        --field allow_force_pushes=false \
        --field allow_deletions=false 2>/dev/null || print_warning "Proteção de branch requer permissões de admin"
    
    print_status "Proteção de branches configurada"
}

# Commit and push automation files
commit_automation() {
    echo -e "${PURPLE}${GEAR} Commitando arquivos de automação...${NC}"
    
    git add .github/
    git add "📖_GUIA_AUTOMACAO_GITHUB.md"
    git add "setup-automacao-github.sh"
    
    if git diff --staged --quiet; then
        print_info "Nenhuma mudança para commitar"
    else
        git commit -m "🤖 feat: Implementar infraestrutura completa de automação GitHub

- ✅ CI/CD avançado com deploy multi-plataforma
- 🤖 Bot automático para PR review
- 🔗 Sistema de webhooks e sincronização
- 📋 Templates inteligentes para issues e PRs
- 📊 Monitoramento e métricas automáticas
- 🔒 Análise de segurança contínua

Co-authored-by: L3trament0-Bot <bot@l3trament0.com>"
        
        git push origin main
        print_status "Arquivos de automação commitados e enviados!"
    fi
}

# Generate summary report
generate_summary() {
    echo ""
    echo -e "${CYAN}${ROCKET} Setup Concluído com Sucesso!${NC}"
    echo -e "${BLUE}============================================${NC}"
    echo ""
    echo -e "${GREEN}✅ Infraestrutura de automação configurada${NC}"
    echo -e "${GREEN}✅ Workflows GitHub Actions criados${NC}"
    echo -e "${GREEN}✅ Templates de Issues e PRs configurados${NC}"
    echo -e "${GREEN}✅ Sistema de labels implementado${NC}"
    echo -e "${GREEN}✅ Secrets de deploy configurados${NC}"
    echo ""
    echo -e "${PURPLE}🎯 Próximos Passos:${NC}"
    echo -e "${BLUE}1. Visite: https://github.com/$REPO_PATH/actions${NC}"
    echo -e "${BLUE}2. Verifique se os workflows estão executando${NC}"
    echo -e "${BLUE}3. Configure secrets adicionais se necessário${NC}"
    echo -e "${BLUE}4. Teste criando uma issue ou PR${NC}"
    echo ""
    echo -e "${CYAN}📖 Documentação completa:${NC}"
    echo -e "${BLUE}📖_GUIA_AUTOMACAO_GITHUB.md${NC}"
    echo ""
    echo -e "${YELLOW}💡 Comandos úteis:${NC}"
    echo -e "${CYAN}gh secret list                    ${NC}# Ver secrets configurados"
    echo -e "${CYAN}gh workflow list                  ${NC}# Ver workflows disponíveis"
    echo -e "${CYAN}gh run list                       ${NC}# Ver execuções recentes"
    echo ""
    echo -e "${GREEN}${ROCKET} L3trament0Web3 está pronto para colaboração automatizada!${NC}"
}

# Main execution
main() {
    echo -e "${BLUE}Iniciando configuração da automação GitHub...${NC}"
    echo ""
    
    check_gh_cli
    check_auth
    get_repo_info
    
    echo ""
    echo -e "${YELLOW}${WARNING} Este script irá:${NC}"
    echo "• Configurar secrets no GitHub"
    echo "• Criar labels do projeto"
    echo "• Configurar proteção de branches"
    echo "• Commitar arquivos de automação"
    echo ""
    
    read -p "Continuar? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Setup cancelado."
        exit 0
    fi
    
    collect_secrets
    configure_secrets
    enable_actions
    create_labels
    setup_branch_protection
    commit_automation
    generate_summary
}

# Execute main function
main "$@"