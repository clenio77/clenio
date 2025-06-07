// Este script é executado pela Vercel durante o processo de build.
const fs = require('fs');

// As variáveis de ambiente são injetadas pela Vercel no objeto 'process.env'.
const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
const whatsappNumber = process.env.WHATSAPP_NUMBER;
const geminiKey = process.env.GEMINI_API_KEY || "AIzaSyC4Y1JWl8Ma_NmjdfHATnHWuv68F1f9uhY"; // Define como vazio se não for fornecido

// Conteúdo que será escrito no arquivo config.js
const configContent = `
const WEB3FORMS_ACCESS_KEY = "${web3formsKey}";
const WHATSAPP_NUMBER = "${whatsappNumber}";
const GEMINI_API_KEY = "${geminiKey}";
`;

// Cria o arquivo config.js no ambiente de build da Vercel.
fs.writeFileSync('config.js', configContent.trim());

console.log('Arquivo config.js criado com sucesso no build!');
