import fs from "fs";
import path from "path";

const outDir = "images/og";

const items = [
  { file: "home.svg", title: "Clênio Moura", subtitle: "Founder Profile e IA Jurídica", tag: "Direito • IA • Sistemas" },
  { file: "projects.svg", title: "Projetos", subtitle: "Case Studies", tag: "IA • Dados • Software" },
  { file: "blog-post-1.svg", title: "Pipeline Jurídico Confiável", subtitle: "LLMs • RAG • Arquitetura", tag: "Nota de Engenharia" },
  { file: "blog-post-2.svg", title: "Dados Jurídicos e Controle de Alucinação", subtitle: "Governança • RAG", tag: "Nota de Engenharia" },
  { file: "blog-post-3.svg", title: "Automação de Análise Documental", subtitle: "Workflow • Produtividade", tag: "Nota de Engenharia" },
  { file: "blog-post-4.svg", title: "Agentes Especializados", subtitle: "Orquestração • Avaliação", tag: "Nota de Engenharia" },
  { file: "genesys.svg", title: "Genesys", subtitle: "Plataforma de dados", tag: "Case Study" },
  { file: "rota-facil.svg", title: "Rota Fácil", subtitle: "Roteirização inteligente", tag: "Case Study" },
  { file: "busca-dinamica.svg", title: "Busca Dinâmica", subtitle: "Busca otimizada", tag: "Case Study" },
  { file: "fenix-pdf.svg", title: "Fênix PDF", subtitle: "Manipulação de PDFs", tag: "Case Study" },
  { file: "capelania.svg", title: "Capelania", subtitle: "Gestão de atendimentos", tag: "Case Study" },
  { file: "diario-maria-alice.svg", title: "Diário da Maria Alice", subtitle: "PWA de memórias", tag: "Case Study" }
];

const svgTemplate = ({ title, subtitle, tag }) => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0a0a" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#00f0c0" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" />
  <rect x="80" y="90" width="1040" height="450" rx="32" fill="#0b1120" stroke="#1f2937" />
  <rect x="120" y="130" width="280" height="10" rx="5" fill="url(#accent)" />
  <text x="120" y="240" fill="#ffffff" font-family="Inter, Arial" font-size="54" font-weight="800">${title}</text>
  <text x="120" y="310" fill="#94a3b8" font-family="Inter, Arial" font-size="28">${subtitle}</text>
  <text x="120" y="380" fill="#00f0c0" font-family="Fira Code, monospace" font-size="22">${tag}</text>
  <text x="120" y="470" fill="#64748b" font-family="Inter, Arial" font-size="18">clenio-moura.vercel.app</text>
  <circle cx="1000" cy="220" r="120" fill="#00f0c0" opacity="0.08" />
  <circle cx="1020" cy="260" r="90" fill="#3b82f6" opacity="0.08" />
</svg>`;

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

for (const item of items) {
  const svg = svgTemplate(item);
  fs.writeFileSync(path.join(outDir, item.file), svg, "utf8");
}

console.log(`Gerados ${items.length} arquivos em ${outDir}`);
