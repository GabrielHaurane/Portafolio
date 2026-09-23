import { SiReact, SiTailwindcss, SiBootstrap, SiMongodb, SiNodedotjs, SiTypescript, SiNextdotjs, SiVite, SiJavascript, SiPython, SiHtml5, SiMysql, SiDotnet, SiSharp } from "react-icons/si";
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

export const knownTechnologies = [
  { icon: <SiJavascript size={30} />, title: "JavaScript" },
  { icon: <SiTypescript size={30} />, title: "TypeScript" },
  { icon: <SiPython size={30} />, title: "Python" },
  { icon: <SiHtml5 size={30} />, title: "HTML" },
  { icon: <FaCss3 size={30} />, title: "CSS" },
  { icon: <SiReact size={30} />, title: "React" },
  { icon: <SiBootstrap size={30} />, title: "Bootstrap" },
  { icon: <SiTailwindcss size={30} />, title: "Tailwind CSS" },
  { icon: <SiNodedotjs size={30} />, title: "Node.js" },
  { icon: <SiMongodb size={30} />, title: "MongoDB" },
  { icon: <SiVite size={30} />, title: "Vite" },
  { icon: <SiNextdotjs size={30} />, title: "Next.js" },
  { icon: <SiMysql size={30} />, title: "MySQL Workbench" },
  { icon: <SiDotnet size={30} />, title: ".NET" },
  { icon: <SiSharp size={30} />, title: "C#" },
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
};

// Canales de contacto: única fuente para el código nuevo (Menu, Home, Contacto).
export const contactLinks = {
  emailCompose: "https://mail.google.com/mail/?view=cm&fs=1&to=gabrielhaurane@gmail.com",
  whatsapp: "https://wa.me/543816970612",
  github: "https://github.com/GabrielHaurane",
  linkedin: "https://www.linkedin.com/in/gabriel-haurane-b117a627b/",
};

// Proyectos destacados, en el orden en que se muestran. Los lee el Home y,
// por ahora, solo la tarjeta de inventory_app en Proyectos.jsx.
// - highlight: true → tarjeta ancha arriba de la grilla del Home.
// - videoLink → botón de play sobre la imagen (abre el video en pestaña nueva).
// - embedSrc → URL del iframe en /proyectos (ProjectCardApp, prop videoSrc).
// - badgeKey → clave i18n de un badge corto (p. ej. la versión).
export const featuredProjects = [
  {
    id: "inventory_app",
    titleKey: "inventory_app.title",
    summaryKey: "inventory_app.summary",
    badgeKey: "inventory_app.version",
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
// arrays anteriores. Una fuente que no sea proyecto destacado ni experiencia
// se agrega a mano, como "portfolio".
export const evidenceSources = {
  ...Object.fromEntries(featuredProjects.map((project) => [project.id, project.titleKey])),
  ...Object.fromEntries(experiences.map((experience) => [experience.id, experience.companyKey])),
  portfolio: "home_page.stack.this_portfolio",
};

// Stack con evidencia: solo tecnologías usadas en algo verificable.
// Node.js y MongoDB se suman cuando se enlace el repo del backend de Hotel Code.
export const stackEvidence = [
  { tech: "typescript", usedIn: ["swaplyar"] },
  { tech: "nextjs", usedIn: ["swaplyar"] },
  { tech: "react", usedIn: ["swaplyar", "hotel_code", "recetas", "portfolio"] },
  { tech: "tailwind", usedIn: ["swaplyar"] },
  { tech: "javascript", usedIn: ["hotel_code", "recetas", "portfolio"] },
  { tech: "bootstrap", usedIn: ["hotel_code", "recetas", "portfolio"] },
  { tech: "vite", usedIn: ["hotel_code", "recetas", "portfolio"] },
  { tech: "python", usedIn: ["gh_app"] },
  { tech: "csharp", usedIn: ["inventory_app"] },
  { tech: "dotnet", usedIn: ["inventory_app"] },
  { tech: "mysql", usedIn: ["inventory_app"] },
];
