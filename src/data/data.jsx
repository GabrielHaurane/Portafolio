import { SiReact, SiTailwindcss, SiBootstrap, SiMongodb, SiNodedotjs, SiTypescript, SiNextdotjs, SiVite, SiJavascript, SiPython, SiMysql, SiDotnet, SiSharp, SiGit, SiGithub, SiPostman, SiNetlify, SiFigma, SiClaude, SiGooglegemini, SiOpenai } from "react-icons/si";
import { FaHtml5, FaCss3 } from 'react-icons/fa';
import ghProgrammingAppImg from "../img/ghProgrammingApp.png";
import hotelCodeImg from "../img/hotelCode.png";
import recetasHauraneImg from "../img/recetasHaurane.png";
import swaplyImg from "../img/swaply.png";

export const proIcons = [
  { icon: <FaHtml5 size={30} />, title: "HTML" },
  { icon: <FaCss3 size={30} />, title: "CSS" },
  { icon: <SiJavascript  size={30} />, title: "JavaScript" },
  { icon: <SiReact size={30} />, title: "React" },
  { icon: <SiBootstrap size={30} />, title: "Bootstrap" },
  { icon: <SiNodedotjs size={30} />, title: "Node.Js" },
  { icon: <SiMongodb size={30} />, title: "MongoDB" },
  { icon: <SiVite size={30} />, title: "Vite" },
];

export const pasantiaIcons = [
{ icon: <FaHtml5 size={30} />, title: "HTML" },
  { icon: <FaCss3 size={30} />, title: "CSS" },
  { icon: <SiTypescript size={30} />, title: "TypeScript" },
  { icon: <SiNextdotjs size={30} />, title: "Next.Js" },
  { icon: <SiReact size={30} />, title: "React" },
  { icon: <SiTailwindcss size={30} />, title: "Tailwind CSS" },
]

export const appTechnologies = [
  { icon: <SiPython size={30} />, title: "Python" },
  { icon: <SiPython size={30} />, title: "Tkinter" },
];

// ---------------------------------------------------------------------------
// Datos del Home (Fase 2). Para sumar un proyecto, experiencia o tecnología
// se agrega una entrada acá y sus textos en src/locales/{es,en}; los
// componentes de pages/inicio/ no se tocan.
// ---------------------------------------------------------------------------

// Catálogo único de tecnologías: se referencia por clave desde los arrays de abajo.
// Se guarda el componente (Icon) y no el elemento, para elegir el tamaño al renderizar.
export const techCatalog = {
  html: { Icon: FaHtml5, title: "HTML" },
  css: { Icon: FaCss3, title: "CSS" },
  javascript: { Icon: SiJavascript, title: "JavaScript" },
  typescript: { Icon: SiTypescript, title: "TypeScript" },
  react: { Icon: SiReact, title: "React" },
  nextjs: { Icon: SiNextdotjs, title: "Next.js" },
  tailwind: { Icon: SiTailwindcss, title: "Tailwind CSS" },
  bootstrap: { Icon: SiBootstrap, title: "Bootstrap" },
  vite: { Icon: SiVite, title: "Vite" },
  python: { Icon: SiPython, title: "Python" },
  tkinter: { Icon: SiPython, title: "Tkinter" },
  node: { Icon: SiNodedotjs, title: "Node.js" },
  mongodb: { Icon: SiMongodb, title: "MongoDB" },
  csharp: { Icon: SiSharp, title: "C#" },
  dotnet: { Icon: SiDotnet, title: ".NET" },
  mysql: { Icon: SiMysql, title: "MySQL" },
  git: { Icon: SiGit, title: "Git" },
  github: { Icon: SiGithub, title: "GitHub" },
  postman: { Icon: SiPostman, title: "Postman" },
  netlify: { Icon: SiNetlify, title: "Netlify" },
  figma: { Icon: SiFigma, title: "Figma" },
  // Herramientas de IA (sección Stack, categoría "ai").
  claude: { Icon: SiClaude, title: "Claude" },
  gemini: { Icon: SiGooglegemini, title: "Gemini" },
  chatgpt: { Icon: SiOpenai, title: "ChatGPT" },
  // Entradas combinadas: solo para la sección Stack del Home (una tarjeta por grupo).
  html_css: { Icon: FaHtml5, title: "HTML · CSS" },
  csharp_dotnet_winforms: { Icon: SiSharp, title: "C# · .NET · Windows Forms" },
  python_tkinter: { Icon: SiPython, title: "Python · Tkinter" },
};

// Canales de contacto: única fuente para el código nuevo (Menu, Home, Contacto).
export const contactLinks = {
  emailCompose: "https://mail.google.com/mail/?view=cm&fs=1&to=gabrielhaurane@gmail.com",
  whatsapp: "https://wa.me/543816970612",
  github: "https://github.com/GabrielHaurane",
  linkedin: "https://www.linkedin.com/in/gabriel-haurane-b117a627b/",
};

// Todos los proyectos, en el orden en que se muestran. Pese al nombre, la lista
// es completa: el Home muestra solo los que tienen featured: true, y Proyectos.jsx
// por ahora lee de acá solo la tarjeta de inventory_app.
// - featured: true → aparece en "Proyectos destacados" del Home. Sin el campo,
//   el proyecto va solo a /proyectos.
// - highlight: true → tarjeta ancha (imagen a la izquierda) en vez de grilla.
// - videoLink → botón de play sobre la imagen (abre el video en pestaña nueva).
// - embedSrc → URL del iframe en /proyectos (ProjectCardApp, prop videoSrc).
// - badgeKey → clave i18n de un badge corto (p. ej. la versión).
export const featuredProjects = [
  {
    id: "inventory_app",
    titleKey: "inventory_app.title",
    summaryKey: "inventory_app.summary",
    badgeKey: "inventory_app.version",
    featured: true,
    highlight: true,
    img: "https://img.youtube.com/vi/tLdaupYmB1Y/mqdefault.jpg",
    technologies: ["csharp", "dotnet", "mysql"],
    videoLink: "https://youtu.be/tLdaupYmB1Y",
    embedSrc: "https://www.youtube-nocookie.com/embed/tLdaupYmB1Y",
    githubLink: "https://github.com/GabrielHaurane/GHSistemadeControldeInventario",
  },
  {
    id: "gh_app",
    titleKey: "gh_app.title",
    summaryKey: "home_page.featured.items.gh_app",
    featured: true,
    highlight: true,
    img: ghProgrammingAppImg,
    technologies: ["python", "tkinter"],
    videoLink: "https://www.loom.com/share/ea776b1232bc45fc9f535fce52f77298",
    githubLink: "https://github.com/GabrielHaurane/GHProgramingApp",
  },
  {
    id: "hotel_code",
    titleKey: "project1_title",
    summaryKey: "home_page.featured.items.hotel_code",
    img: hotelCodeImg,
    technologies: ["react", "javascript", "bootstrap", "vite"],
    liveLink: "https://hotel-code.netlify.app",
    githubLink: "https://github.com/GabrielHaurane/Frontend-Proyecto-Final",
  },
  {
    id: "recetas",
    titleKey: "project2_title",
    summaryKey: "home_page.featured.items.recetas",
    img: recetasHauraneImg,
    technologies: ["react", "javascript", "bootstrap", "vite"],
    liveLink: "https://las-recetas-de-haurane.netlify.app",
    githubLink: "https://github.com/GabrielHaurane/blog-recetas-front",
  },
];

// Experiencia profesional mostrada en el Home.
export const experiences = [
  {
    id: "swaplyar",
    companyKey: "experience.company",
    roleKey: "experience.role",
    durationKey: "experience.duration",
    descriptionKey: "experience.description",
    img: swaplyImg,
    technologies: ["typescript", "nextjs", "react", "tailwind"],
    liveLink: "https://www.swaplyar.com/es/como-usar-swaplyar",
  },
];

// Nombre visible de cada fuente de evidencia (clave i18n), derivado de los
// arrays anteriores. Las fuentes que no son proyecto ni experiencia se agregan
// a mano: "portfolio" (este sitio) y "all" (una sola etiqueta "Todos los proyectos").
export const evidenceSources = {
  ...Object.fromEntries(featuredProjects.map((project) => [project.id, project.titleKey])),
  ...Object.fromEntries(experiences.map((experience) => [experience.id, experience.companyKey])),
  portfolio: "home_page.stack.this_portfolio",
  all: "home_page.stack.all_projects",
};

// ---------------------------------------------------------------------------
// Sección Stack del Home (Fase 3.6)
// ---------------------------------------------------------------------------

// Categorías, en el orden en que se muestran. kind decide cómo se dibujan:
// - "tech"     → ítems de stackEvidence con esa category (ícono + "Usado en").
// - "ai"       → aiTools (ícono + etiqueta de uso, sin "Usado en").
// - "concepts" → concepts (texto + "Usado en", sin ícono).
export const stackCategories = [
  { id: "frontend", titleKey: "home_page.stack.categories.frontend", kind: "tech" },
  { id: "desktop", titleKey: "home_page.stack.categories.desktop", kind: "tech" },
  { id: "backend", titleKey: "home_page.stack.categories.backend", kind: "tech" },
  { id: "databases", titleKey: "home_page.stack.categories.databases", kind: "tech" },
  { id: "tools", titleKey: "home_page.stack.categories.tools", kind: "tech" },
  { id: "ai", titleKey: "home_page.stack.categories.ai", kind: "ai" },
  { id: "concepts", titleKey: "home_page.stack.categories.concepts", kind: "concepts" },
];

// Única lista de tecnologías (claves de techCatalog). Orden = orden dentro de su categoría.
// - usedIn con fuentes (claves de evidenceSources) → "Usado en: …". Solo fuentes
//   verificables: repos enlazados, textos de los proyectos o lo que Gabriel confirmó.
// - usedIn: [] → solo nombre e ícono.
// Node.js y MongoDB quedan sin fuente: los repos enlazados de Hotel Code y Recetas son solo frontend.
export const stackEvidence = [
  { tech: "html_css", category: "frontend", usedIn: ["hotel_code", "recetas", "portfolio"] },
  { tech: "javascript", category: "frontend", usedIn: ["hotel_code", "recetas", "portfolio"] },
  { tech: "typescript", category: "frontend", usedIn: ["swaplyar"] },
  { tech: "react", category: "frontend", usedIn: ["swaplyar", "hotel_code", "recetas", "portfolio"] },
  { tech: "nextjs", category: "frontend", usedIn: ["swaplyar"] },
  { tech: "bootstrap", category: "frontend", usedIn: ["hotel_code", "recetas", "portfolio"] },
  { tech: "tailwind", category: "frontend", usedIn: ["swaplyar"] },
  { tech: "csharp_dotnet_winforms", category: "desktop", usedIn: ["inventory_app"] },
  { tech: "python_tkinter", category: "desktop", usedIn: ["gh_app"] },
  { tech: "node", category: "backend", usedIn: [] },
  { tech: "mysql", category: "databases", usedIn: ["inventory_app"] },
  { tech: "mongodb", category: "databases", usedIn: [] },
  { tech: "vite", category: "tools", usedIn: ["hotel_code", "recetas", "portfolio"] },
  { tech: "git", category: "tools", usedIn: ["all"] },
  { tech: "github", category: "tools", usedIn: ["all"] },
  { tech: "postman", category: "tools", usedIn: [] },
  { tech: "netlify", category: "tools", usedIn: ["hotel_code", "recetas", "portfolio"] },
  { tech: "figma", category: "tools", usedIn: [] },
];

// Herramientas de IA: se usan a diario en todo el trabajo, así que en vez de
// "Usado en" muestran una etiqueta con su uso (usageKey, clave i18n).
export const aiTools = [
  { key: "claude", usageKey: "home_page.stack.ai.claude" },
  { key: "gemini", usageKey: "home_page.stack.ai.gemini" },
  { key: "chatgpt", usageKey: "home_page.stack.ai.chatgpt" },
];

// Conceptos y prácticas: sin ícono. El nombre sale de home_page.stack.concepts.<key>.
export const concepts = [
  { key: "crud", usedIn: ["inventory_app", "hotel_code"] },
  { key: "rbac", usedIn: ["inventory_app"] },
  { key: "soft_delete", usedIn: ["inventory_app"] },
  { key: "responsive", usedIn: ["hotel_code", "recetas", "portfolio"] },
  { key: "i18n", usedIn: ["portfolio"] },
  { key: "a11y", usedIn: ["portfolio"] },
];
