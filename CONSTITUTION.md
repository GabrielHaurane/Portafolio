# Constitución — Portafolio de Gabriel Haurane

**Qué es:** SPA estática de portafolio personal (Inicio, Proyectos y Experiencia, Contacto, Tecnologías), bilingüe es/en. Sin backend propio: el único efecto remoto es el envío de mails por EmailJS desde el navegador.

**Stack fijo:** Vite 7 + React 19 en **JavaScript/JSX (0 archivos .ts)** · react-router-dom 7 · Bootstrap 5 + react-bootstrap · i18next/react-i18next · react-hook-form · @emailjs/browser (`package.json:12-38`).

## Máximas no negociables

1. **No cambiar el stack sin migración explícita.** Ni TypeScript, ni otro router, ni librería de estado global. **Tailwind no se usa**: `@tailwindcss/*` está declarado en `package.json:28-29` pero no tiene config ni una sola clase en `src/`; es dependencia muerta.
2. **Ningún secreto en el código.** EmailJS se configura solo con `import.meta.env.VITE_SERVICE_ID / VITE_TEMPLATE_ID / VITE_PUBLIC_KEY` (`FormularioPosible.jsx:29-34`). `.env` está ignorado (`.gitignore:14`) y no se versiona.
3. **Un único formulario de contacto: `FormularioPosible.jsx`** (montado en `Contacto.jsx:48-55`). `formulario/Form.jsx` es código muerto que importa `emailjs-com`, paquete **no instalado**: importarlo rompe el build.
4. **Todo texto visible sale de `t()` y existe en los dos idiomas.** `src/locales/es` y `src/locales/en` hoy tienen paridad exacta de claves; no romperla (`i18n.js:6-12`, fallback `es`).
5. **Colores solo por tokens.** Toda la paleta vive en `:root` de `src/App.css:1-11` (`--color-*`). Ningún hex nuevo en JSX ni CSS.
6. **Rutas declarativas.** Toda página se registra en `<Routes>` de `App.jsx:17-22` y se enlaza agregando una entrada al array `navItems` de `Menu.jsx` (navbar superior única, `<Nav.Link as={NavLink} eventKey>`). Dentro de las páginas, los enlaces internos usan `<Link>`. Nunca `<a href>` ni `window.open` para rutas internas (las anclas `#seccion` del Home sí son `<a href>`).
7. **No editar artefactos generados.** `dist/` y `.vite/` son salida de Vite. (`.vite/` además está versionado por error: 28 archivos trackeados.)
8. **Ningún cambio se cierra sin `npm run build` verde y 0 errores nuevos de ESLint en `src/`.** No hay tests; el build y el lint son la única verificación automática (`package.json:6-11`).
