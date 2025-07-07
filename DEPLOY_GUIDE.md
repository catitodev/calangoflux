# 🚀 Guia de Deploy - CalangoFlux Website

## ✅ Build Finalizado com Sucesso!
- **Tamanho otimizado**: 451.81 kB (126.71 kB gzipped)
- **1862 módulos** transformados
- **Pronto para deploy!**

---

## 🏆 **OPÇÃO 1: Vercel (Mais Recomendado)**

### **Por que Vercel?**
- ✅ **Deploy automático** com Git
- ✅ **CDN global** incluído
- ✅ **HTTPS automático**
- ✅ **Otimizado para React/Vite**
- ✅ **Preview de branches**
- ✅ **100% gratuito** para projetos pessoais

### **Passos para Deploy:**

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Fazer login (vai abrir o browser)
vercel login

# 3. Deploy inicial (na pasta do projeto)
vercel

# 4. Deploy de produção
vercel --prod
```

### **Deploy via Interface Web:**
1. Acesse [vercel.com](https://vercel.com)
2. Conecte sua conta GitHub
3. Importe o repositório
4. Vercel detecta automaticamente que é Vite
5. Deploy automático!

---

## 🌐 **OPÇÃO 2: Netlify**

### **Deploy Manual (Mais Rápido):**
1. Acesse [netlify.com](https://netlify.com)
2. Faça login
3. Arraste a pasta `dist` para o site
4. **Pronto!** Site no ar instantaneamente

### **Deploy via CLI:**
```bash
# 1. Instalar Netlify CLI
npm i -g netlify-cli

# 2. Fazer login
netlify login

# 3. Deploy de produção
netlify deploy --prod --dir=dist
```

### **Deploy via Git:**
1. Conectar repositório no Netlify
2. **Build Command**: `npm run build`
3. **Publish Directory**: `dist`
4. Deploy automático a cada push!

---

## 📄 **OPÇÃO 3: GitHub Pages**

### **Setup:**
```bash
# 1. Instalar gh-pages
npm i -D gh-pages

# 2. Adicionar script no package.json
```

Adicione no `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://SEU_USUARIO.github.io/NOME_REPO"
}
```

```bash
# 3. Deploy
npm run deploy
```

### **Configurar GitHub Pages:**
1. Vá nas **Settings** do repositório
2. **Pages** → Source: **Deploy from a branch**
3. Branch: **gh-pages**
4. Folder: **/ (root)**

---

## 🖥️ **OPÇÃO 4: VPS/Servidor Próprio**

### **Nginx + PM2:**
```bash
# 1. Upload da pasta dist para o servidor
scp -r dist/ usuario@servidor:/var/www/calangoflux/

# 2. Configurar Nginx
sudo nano /etc/nginx/sites-available/calangoflux
```

**Configuração Nginx:**
```nginx
server {
    listen 80;
    server_name calangoflux.com www.calangoflux.com;
    
    root /var/www/calangoflux/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache estático
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
# 3. Ativar site
sudo ln -s /etc/nginx/sites-available/calangoflux /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 4. SSL com Certbot
sudo certbot --nginx -d calangoflux.com -d www.calangoflux.com
```

---

## ⚡ **OPÇÃO 5: Deploy Express Simples**

Se quiser um servidor Node.js simples:

```bash
# 1. Criar servidor
npm i express serve-static
```

**server.js:**
```javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

```bash
# 2. Deploy (Heroku, Railway, etc.)
node server.js
```

---

## 🎯 **Recomendação Final**

### **Para CalangoFlux, recomendo:**

**🏆 1º Lugar: Vercel**
- Deploy mais simples
- Performance excelente
- Integração perfeita com React
- Preview links para testar

**🥈 2º Lugar: Netlify**
- Interface amigável
- Drag & drop funciona perfeitamente
- Forms nativos (útil para contato)

**🥉 3º Lugar: GitHub Pages**
- Gratuito e integrado ao Git
- Boa para projetos open source

---

## 🚀 **Deploy Agora Mesmo!**

**Opção mais rápida (Netlify):**
1. Vá em [netlify.com](https://netlify.com)
2. Arraste a pasta `dist` 
3. **Pronto!** Site no ar em 30 segundos

**Opção mais profissional (Vercel):**
```bash
npm i -g vercel
vercel login
vercel --prod
```

**Seu site estará no ar com:**
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Performance otimizada
- ✅ URL personalizada

---

**🎉 Parabéns! Seu site CalangoFlux está pronto para conquistar o mundo da automação agentic!**