Portfólio Pessoal com Ferramentas de IA
📖 Sobre o Projeto
Este é um portfólio pessoal moderno e interativo, desenvolvido para ser uma vitrine de habilidades e projetos na área de tecnologia e Inteligência Artificial. Com um design inspirado em terminais hacker, o site possui um conjunto de efeitos visuais e ferramentas de IA funcionais para engajar os visitantes.

O projeto foi construído com HTML, CSS e JavaScript puros, utilizando o Google Gemini API para alimentar suas funcionalidades de IA.

✨ Características
O portfólio está repleto de recursos visuais e funcionais para criar uma experiência de usuário única e demonstrar proficiência técnica.

Interface e Experiência do Usuário
Tema Claro e Escuro: Alternador de tema com salvamento da preferência do usuário no localStorage.

Animação "Matrix": Um fundo dinâmico de "chuva digital" na seção principal.

Efeitos de Digitação: O título principal é animado como se estivesse sendo digitado em tempo real.

Animações de Rolagem: Conteúdo que surge suavemente na tela (reveal-on-scroll).

Efeito 3D Interativo: Os cartões de projeto se inclinam em 3D conforme o movimento do mouse.

Preloader Profissional: Uma tela de carregamento que garante que todos os elementos visuais sejam carregados antes de exibir a página.

Totalmente Responsivo: Design que se adapta perfeitamente a desktops, tablets e celulares.

Ferramentas de IA (via Gemini API)
🤖 Otimizador de Código: Analisa um trecho de código e sugere melhorias de performance, legibilidade e boas práticas.

🧠 Explicador de Código: Recebe um código e gera uma explicação clara e didática sobre o seu funcionamento.

↔️ Tradutor de Código: Traduz código entre diferentes linguagens de programação (Python, JavaScript, Java, etc.).

💡 Geradores de Ideias: Ferramentas para sugerir novos temas para posts de blog e ideias para projetos de portfólio.

📋 Botão de Copiar: Todas as ferramentas de IA incluem um botão para copiar facilmente o resultado gerado.

Contato e Conteúdo
Formulário Funcional: Integrado com o serviço open-source Web3Forms para recebimento de mensagens por e-mail.

Botão de WhatsApp: Ícone flutuante para contato direto e rápido.

Estrutura de Blog: Seção de blog com link para uma página de postagem individual.

🛠️ Tecnologias Utilizadas
O projeto foi construído utilizando tecnologias modernas e amplamente utilizadas no mercado.

🚀 Como Executar o Projeto Localmente
Para executar este projeto em sua máquina local, siga os passos abaixo.

Clone o Repositório

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Crie o Arquivo de Configuração
Na raiz do projeto, crie um arquivo chamado config.js e copie o conteúdo de config.example.js (ou use o que criamos). Este arquivo não será enviado para o GitHub, pois está no .gitignore.

Adicione suas Chaves
Abra o arquivo config.js e preencha com suas informações:

const WEB3FORMS_ACCESS_KEY = "SUA_CHAVE_DE_ACESSO_AQUI"; // Obtida em web3forms.com
const WHATSAPP_NUMBER = "5511999999999"; // Seu número no formato internacional
const GEMINI_API_KEY = ""; // Sua chave do Google AI Studio (opcional)

Abra o Projeto
Como este é um site estático, não há necessidade de um processo de build. Basta abrir o arquivo index.html diretamente no seu navegador.

Dica: Para uma melhor experiência de desenvolvimento, use uma extensão como o Live Server no Visual Studio Code, que recarrega a página automaticamente a cada alteração.

☁️ Publicação (Deploy)
Para publicar seu site de forma profissional e gratuita, recomendo usar um serviço de hospedagem de sites estáticos como o Render, Vercel ou Netlify.

Usando o Render
Envie seu projeto para o GitHub (lembre-se que o .gitignore irá proteger seu arquivo config.js).

Crie uma conta no Render.

No painel do Render, vá em Novo > Blueprint.

Conecte seu repositório do GitHub.

O Render irá ler o arquivo render.yaml que está no projeto e configurar tudo automaticamente.

A cada push na sua branch main no GitHub, o Render fará o deploy das atualizações automaticamente.

👨‍💻 Autor
Feito com ❤️ por Clênio.


MIT License

Copyright (c) 2025 Clênio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.