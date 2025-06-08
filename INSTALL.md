# 🚀 Guia de Instalação e Configuração

## 📋 Pré-requisitos

- Navegador web moderno
- Editor de código (recomendado: VS Code)
- Conta no GitHub
- Conta no Vercel (para deploy)

## 🔧 Configuração Local

### 1. Clone o Repositório
```bash
git clone https://github.com/clenio77/clenio.git
cd clenio
```

### 2. Configure as Chaves de API

1. **Copie o arquivo de exemplo:**
   ```bash
   cp config.example.js config.js
   ```

2. **Edite o arquivo `config.js` com suas chaves:**
   ```javascript
   const WEB3FORMS_ACCESS_KEY = "sua_chave_web3forms";
   const WHATSAPP_NUMBER = "5511999999999"; // Seu número
   const GEMINI_API_KEY = "sua_chave_gemini";
   ```

### 3. Obtenha as Chaves Necessárias

#### Web3Forms (Formulário de Contato)
1. Acesse [web3forms.com](https://web3forms.com/)
2. Crie uma conta gratuita
3. Copie sua Access Key

#### Google Gemini AI (Ferramentas de IA)
1. Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Faça login com sua conta Google
3. Crie uma nova API Key
4. Copie a chave gerada

#### WhatsApp (Botão Flutuante)
- Use seu número no formato internacional: `5511999999999`
- Código do país + DDD + número (sem símbolos)

### 4. Execute Localmente

1. **Usando Live Server (VS Code):**
   - Instale a extensão "Live Server"
   - Clique com botão direito em `index.html`
   - Selecione "Open with Live Server"

2. **Usando Python:**
   ```bash
   python -m http.server 8000
   ```
   Acesse: `http://localhost:8000`

3. **Usando Node.js:**
   ```bash
   npx serve .
   ```

## 🌐 Deploy na Vercel

### 1. Configuração Automática
1. Faça fork deste repositório
2. Conecte sua conta Vercel ao GitHub
3. Importe o projeto na Vercel
4. Configure as variáveis de ambiente

### 2. Variáveis de Ambiente na Vercel
No painel da Vercel, adicione:
- `WEB3FORMS_ACCESS_KEY`: Sua chave do Web3Forms
- `WHATSAPP_NUMBER`: Seu número do WhatsApp
- `GEMINI_API_KEY`: Sua chave do Google Gemini

### 3. Deploy Automático
- Cada push na branch `main` fará deploy automático
- O script `create-config.js` gerará o arquivo de configuração

## 📱 PWA (Progressive Web App)

O site é uma PWA completa:
- **Instalável** no desktop e mobile
- **Funciona offline** (cache de recursos)
- **Ícones personalizados** para diferentes dispositivos
- **Service Worker** para performance

### Como Instalar como App:
1. Acesse o site no navegador
2. Procure pelo ícone de "Instalar" na barra de endereços
3. Clique em "Instalar" ou "Adicionar à tela inicial"

## 🔍 SEO e Analytics

### Google Analytics (Opcional)
1. Crie uma conta no Google Analytics
2. Obtenha seu Measurement ID
3. Substitua `GA_MEASUREMENT_ID` no `index.html`

### Sitemap
- O arquivo `sitemap.xml` é gerado automaticamente
- Submeta no Google Search Console para melhor indexação

## 🛠️ Personalização

### Cores e Tema
Edite as variáveis CSS em `index.html`:
```css
:root {
    --accent: #00f0c0;
    --bg-dark: #0a0a0a;
    /* ... outras variáveis */
}
```

### Projetos
Adicione novos projetos editando a seção de projetos no `index.html`.

### Blog Posts
Crie novos arquivos HTML seguindo o padrão de `blog-post-1.html`.

## 🔒 Segurança

- ✅ Arquivo `config.js` protegido pelo `.gitignore`
- ✅ Chaves API não expostas no código fonte
- ✅ Variáveis de ambiente para produção
- ✅ HTTPS obrigatório (Vercel)

## 🐛 Solução de Problemas

### Ferramentas de IA não funcionam
- Verifique se a chave do Gemini está correta
- Confirme se há créditos na conta do Google AI
- Verifique o console do navegador para erros

### Formulário não envia
- Confirme a chave do Web3Forms
- Verifique se o domínio está autorizado

### PWA não instala
- Certifique-se de que está usando HTTPS
- Verifique se o `manifest.json` está acessível
- Confirme se o Service Worker está registrado

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do console do navegador
2. Confirme todas as configurações
3. Abra uma issue no GitHub
4. Entre em contato: clenioti@gmail.com
