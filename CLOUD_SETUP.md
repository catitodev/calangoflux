# 🌐 Setup CalangoFlux - 100% Cloud

## 1. 🚀 Deploy Frontend (Vercel/Netlify)

### Vercel (Recomendado)
```bash
# Via GitHub - mais simples
1. Push código para GitHub
2. Conectar repositório no Vercel
3. Deploy automático
```

### Netlify
```bash
# Build settings
Build command: npm run build
Publish directory: dist
```

## 2. 🗄️ Banco de Dados (Supabase Cloud)

### Setup via Dashboard
1. **Criar projeto**: https://supabase.com/dashboard
2. **Configurar tabelas**:
   - `leads` (email, nome, telefone, interesse)
   - `subscribers` (email, data_inscricao)
   - `contact_forms` (nome, email, mensagem, servico)

### Variáveis de Ambiente
```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-publica
```

## 3. 🤖 Integração OpenAI (Cloud)

### Setup via Dashboard OpenAI
```env
VITE_OPENAI_API_KEY=sk-proj-...
VITE_OPENAI_ORG_ID=org-...
```

### Implementação Serverless
```javascript
// Usar Edge Functions (Vercel/Netlify)
// Evita expor API keys no frontend
```

## 4. 📧 Email Marketing (EmailJS/Resend)

### EmailJS (Grátis)
```env
VITE_EMAILJS_SERVICE_ID=service_...
VITE_EMAILJS_TEMPLATE_ID=template_...
VITE_EMAILJS_PUBLIC_KEY=...
```

### Resend (Profissional)
```env
RESEND_API_KEY=re_...
```

## 5. 🔗 Integração Abacus

### Via API REST
```javascript
// Usar fetch direto - sem CLI
const response = await fetch('https://api.abacus.com/v1/workflows', {
  headers: {
    'Authorization': `Bearer ${process.env.ABACUS_API_KEY}`,
    'Content-Type': 'application/json'
  }
});
```

## 6. 🌐 CDN e Assets

### Cloudinary (Imagens)
- Upload via dashboard
- URLs otimizadas automáticas
- Transformações on-the-fly

### GitHub Pages (Alternativa)
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 7. 📊 Analytics (Google Analytics 4)

### Setup via Tag Manager
```html
<!-- Google Tag Manager -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 8. 🔐 Autenticação (Supabase Auth)

### Social Login
```javascript
// Google, GitHub, Discord
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: 'https://calangoflux.com/dashboard'
  }
});
```

## 9. 🚀 Deployment Automático

### GitHub Actions
```yaml
name: CI/CD
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 10. 📱 PWA (Progressive Web App)

### Via Vite PWA Plugin
```javascript
// vite.config.js
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
});
```

## 🎯 Próximos Passos

1. **Escolher plataforma**: Vercel (recomendado)
2. **Configurar Supabase**: Criar projeto e tabelas
3. **Deploy inicial**: Push para GitHub + conectar Vercel
4. **Configurar domínio**: calangoflux.com
5. **Adicionar analytics**: Google Analytics 4
6. **Testar integrações**: OpenAI, EmailJS, Abacus

## 💡 Dicas de Performance

- **Lazy Loading**: Componentes carregam sob demanda
- **Code Splitting**: Chunks otimizados
- **Image Optimization**: WebP automático
- **Caching**: CDN global
- **Minification**: Build otimizado

## 🔧 Troubleshooting

### Erro de CORS
```javascript
// Configurar no Supabase Dashboard
// Authentication > URL Configuration
// Site URL: https://calangoflux.com
// Redirect URLs: https://calangoflux.com/**
```

### Variáveis de Ambiente
```bash
# Vercel
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
vercel env add VITE_OPENAI_API_KEY
```

---

**Resultado**: Site 100% funcional sem processar nada localmente! 🚀