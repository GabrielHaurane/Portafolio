# CLAUDE.md — Portafolio

Leé primero `CONSTITUTION.md` (máximas no negociables). Este archivo es el manual operativo.

## Producto

Portafolio personal de Gabriel Haurane (desarrollador, Tucumán). SPA Vite + React 19 en JSX, bilingüe es/en, 4 rutas públicas. Contenido casi 100% estático: textos en `src/locales/`, listas de tecnologías en `src/data/data.jsx`, capturas en `src/img/`. Repo: `github.com/GabrielHaurane/Portafolio`.

## Comandos

```bash
npm run dev       # servidor Vite
npm run build     # build de producción → dist/  (hoy pasa)
npm run lint      # eslint .  → hoy FALLA con ~385 errores, casi todos de .vite/
npx eslint src    # lo que importa: hoy 0 errores (verificado al cerrar la Fase 2)
npm run preview
```

`npm run lint` falla porque `eslint.config.js:8` solo ignora `dist` y `.vite/` (caché de Vite) está versionado. **Para juzgar un cambio usá `npx eslint src`** y compará contra la línea base de 0 errores. No existe script `test`.

## Paths y alias

No hay alias (`vite.config.js` solo carga `@vitejs/plugin-react`) ni `jsconfig`. Imports relativos desde el archivo que importa. Ambos estilos conviven (`"./../../img/x.png"` en `Proyectos.jsx:2-3`, `"../../img/x.png"` en `:4`); en código nuevo usá la forma corta `../`. Se omite `.jsx` al importar componentes; `data.jsx` se importa con extensión (`tecnologias/*.jsx:1`).

## Estructura real

```
src/
  main.jsx              entrada: StrictMode + BrowserRouter + ./i18n
  App.jsx               layout (Menu / <main> / Footer) + <Routes> + scroll arriba al cambiar de ruta
  App.css               tokens --color-* y todas las clases propias
  i18n.js               init i18next (lng y fallback 'es')
  data/data.jsx         arrays {icon, title} por tarjeta + datos del Home: techCatalog,
                        contactLinks, featuredProjects, experiences, evidenceSources, stackEvidence
  locales/{es,en}/translation.json
  img/                  capturas de proyectos (hotelCode, recetasHaurane, swaply)
  components/
    LanguageSwitcher.jsx        ⚠ solo lo usa Menu → debería vivir en common/
    assets/                     fotoDePerfil.jpg, logoGH.png (favicon en index.html:6)
    common/                     Menu (navbar sticky), Footer, ThemeToggle, LoadingImage, LoadingIframe
    pages/
      Home.jsx  Proyectos.jsx  Contacto.jsx  Tecnologias.jsx
      inicio/                   secciones del Home: HeroSection, FeaturedProjects(+Card),
                                ExperienceSection, StackEvidence (+StackCategoryGrid), ContactSection, TechChips
      cuadroProyectos/          ProjectCardApp / Tec / Pas  (+ ProjectCard muerto)
      formulario/               FormularioPosible (activo) + Form (muerto)
      tecnologias/              TecIcons, PasIcons, AppTechnologyIcons, TechnologyGrid
```

**Regla de ubicación:** si lo usa una sola página, vive en la subcarpeta de esa página (`pages/<carpeta>/`); si lo usan 2+ páginas, sube a `components/common/`. No crear `hooks/`, `services/` ni `stores/` vacíos.

Violaciones actuales (no moverlas sin pedido; aplicar la regla a código nuevo):
- `tecnologias/` mezcla la grilla de la página Tecnologías (`TechnologyGrid`) con los íconos que consumen las tarjetas (`TecIcons`, `PasIcons`, `AppTechnologyIcons`).
- `common/LoadingIframe.jsx` tiene un único consumidor (`ProjectCardApp.jsx:3`); se tolera como primitivo genérico.
- Dos carpetas de imágenes: `src/img/` (proyectos) y `src/components/assets/` (marca personal). Capturas nuevas → `src/img/`.

## Nomenclatura (observada)

| Qué | Convención | Evidencia |
|---|---|---|
| Archivo/componente | PascalCase, `.jsx` | todos en `components/` |
| Páginas | Español (`Proyectos`, `Contacto`, `Tecnologias`; excepción `Home`) | `pages/*.jsx` |
| Subcomponentes nuevos | Inglés (`TechnologyGrid`, `LoadingImage`, `AppTechnologyIcons`) | último commit 93d9c35 |
| Subcarpetas de página | camelCase en español (`cuadroProyectos`, `formulario`, `tecnologias`) | `pages/` |
| Declaración | `const X = (props) => {…}` + `export default X` al final (17 de 20 componentes) | p.ej. `Home.jsx` |
| Arrays de datos | camelCase + sufijo (`proIcons`, `appTechnologies`) | `data.jsx:21,41` |
| Clases CSS nuevas | kebab-case (`media-frame`, `btn-outline-violet`); las camelCase (`mainColor`, `menuFondoColor`) son legado | `App.css` |
| `key` en listas | valor estable (`item.title`) en código nuevo; `index` es legado | `TechnologyGrid.jsx:6` vs `TecIcons.jsx:6` |
| `import React` | no hace falta (JSX runtime automático); no agregarlo | solo 3 archivos viejos lo tienen |

## Capa de API

**No hay.** Ni `fetch`, ni axios, ni endpoints. El único efecto remoto es `emailjs.send` en `FormularioPosible.jsx:29-34`. No inventar servicios, caché ni reintentos. Detalle del formulario: `.claude/rules/formulario-contacto.md`.

## Estado: cuándo usar qué

| Necesidad | Usar | Ejemplo real |
|---|---|---|
| UI local de un componente | `useState` | `LoadingImage.jsx:4`, modal en `FormularioPosible.jsx:7-9` |
| Formularios | `react-hook-form` (`register`, `handleSubmit`, `reset`) | `FormularioPosible.jsx:11-16` |
| Idioma actual | `i18n.language` / `i18n.changeLanguage` vía `useTranslation` | `LanguageSwitcher.jsx:5-9` |
| Página actual | la URL (`react-router`); `NavLink` para estado activo | `navItems` en `Menu.jsx` |
| Tema claro/oscuro | atributos `data-theme` + `data-bs-theme` de `<html>`; `ThemeToggle` lee su estado inicial de ahí (sin Context ni store) | `ThemeToggle.jsx`, script inline de `index.html` |
| Persistencia | `localStorage` **solo** para la clave `"theme"` (`"dark"`/`"light"`), siempre dentro de `try/catch`. Ningún otro dato se persiste | `ThemeToggle.jsx`, `index.html` |
| Estado compartido | **No existe.** No agregar Context ni store sin pedido explícito | — |

## Estilos y tema

- Bootstrap 5 (utilidades + grid) es la base; react-bootstrap se usa para `Navbar`, `Nav`, `Container`, `Button`, `Modal`. La navbar es `<Navbar expand="lg" sticky="top" collapseOnSelect>`: el colapso móvil lo maneja react-bootstrap, así que **no** se importa `bootstrap.bundle` ni se usan atributos `data-bs-*` en componentes (el único `data-bs-theme` vive en `<html>`).
- **Dos temas (Fase 3.5): oscuro por defecto, claro opcional.** Tokens oscuros en `:root` y claros en `[data-theme="light"]` de `App.css`. El tema vive en `<html data-theme data-bs-theme>`: `index.html` trae `dark` fijo y un script inline (antes del bundle) lo cambia a `light` solo si `localStorage.theme === "light"` — nunca se mira `prefers-color-scheme`. `ThemeToggle` (en la navbar, dentro del `Navbar.Collapse`) cambia ambos atributos y guarda la elección.
- `html[data-bs-theme]` en `App.css` conecta `--bs-body-bg/-color`, `--bs-border-color` y `--bs-secondary-color` a los tokens: inputs, `Modal`, `.card` y `.border` siguen el tema solos.
- Nunca `text-white`, `btn-outline-light` ni `color: white`: texto → hereda `var(--color-text)`; botón secundario → `btn-outline-neutral`; link-botón → `btn-link-neutral`; íconos de la navbar → `nav-icon-link`.
- Transición de colores de 200 ms (background-color, color, border-color) en body, navbar, footer, main, tarjetas y modal; desactivada con `prefers-reduced-motion`.
- Íconos: UI → `bootstrap-icons` (`<i className="bi bi-…">`); logos de tecnologías → `react-icons/si` (o `fa`) con `size={30}` en `data.jsx`.
- Detalle y deuda (inline styles, hex sueltos): `.claude/rules/estilos.md`.

## i18n

Todo texto visible con `t("clave")`, clave presente en `es` y `en`. Detalle: `.claude/rules/i18n.md`. El CV vive en el repo, uno por idioma: `public/cv/DEV_Gabriel_Haurane_CV_ES.pdf` y `public/cv/DEV_Gabriel_Haurane_CV_EN.pdf`. La ruta es una traducción (`menu.cv_url`: `/cv/…_ES.pdf` en `es`, `/cv/…_EN.pdf` en `en`), leída con `t("menu.cv_url")` en `Menu.jsx` y `HeroSection.jsx`, así que el link cambia con el idioma. "Cambiar el CV" = reemplazar el PDF en `public/cv/` **con el mismo nombre**; si cambia el nombre, actualizar `menu.cv_url` en ambos JSON. Los links al CV mantienen `target="_blank" rel="noopener noreferrer"`.

## Testing

No hay tests ni CI (`.github/` no existe), ni hooks de git activos. Verificación = `npm run build` + `npx eslint src` + prueba manual en `npm run dev`: las 4 rutas, cambio de idioma, navbar colapsada en móvil (se cierra al elegir un link), anclas del Home y, si se tocó, el formulario. El agente `verificador` automatiza la parte mecánica.

## Tareas frecuentes

- **Agregar/editar un proyecto o experiencia** → skill `agregar-proyecto`. En el Home es data-driven: una entrada en `featuredProjects` / `experiences` / `stackEvidence` (`data.jsx`) + sus textos en un namespace propio (`inventory_app.*`) o en `home_page.*`; los componentes de `pages/inicio/` no se tocan. Campos opcionales de `featuredProjects` (Fase 3): `highlight` (tarjeta ancha arriba de la grilla), `videoLink` (botón de play sobre la imagen + botón "Ver video"), `embedSrc` (iframe en `/proyectos`), `badgeKey` (badge corto, p. ej. la versión). Las tecnologías se referencian por clave de `techCatalog`.
- **Sección Stack del Inicio** (`StackEvidence` + `StackCategoryGrid`, `id="stack"`, destino de la redirección de `/tecnologias`): data-driven desde `data.jsx` — `stackCategories` (orden y `kind`: `tech` / `ai` / `concepts`), `stackEvidence` (`{ tech, category, usedIn }`; `usedIn: []` = solo nombre e ícono; `["all"]` = "Todos los proyectos"), `aiTools` (`{ key, usageKey }`, etiqueta de uso en vez de "Usado en") y `concepts` (`{ key, usedIn }`, sin ícono). Se muestra como **un solo `<Accordion alwaysOpen>` en todos los tamaños, con todas las categorías abiertas por defecto** (`defaultActiveKey` = todos los ids de `stackCategories`, así una categoría nueva también arranca abierta); cada una se cierra y abre por separado. Encabezado `Accordion.Header as="h3"` con "Título (cantidad)"; grilla 1 / 2 (`sm`) / 4 (`lg`) columnas. Colores del acordeón: `--bs-accordion-*` conectadas a tokens en `.accordion.stack-accordion` y flecha con `mask` + `-webkit-mask` (`App.css`). Teclado nativo: los encabezados son `<button>`.
- **Textos compartidos entre páginas** → namespace `common.*` (hoy: `common.watch_video`, usado en Inicio y Proyectos).
- **Agregar una página** (último caso: `/tecnologias` en 93d9c35): 1) `pages/<Nombre>.jsx`; 2) `import` + `<Route path=…>` en `App.jsx` **sin** `exact` (prop de v5, no hace nada en v7; las rutas actuales la arrastran); 3) una entrada `{ to, labelKey }` en `navItems` de `Menu.jsx`; 4) clave `menu.<x>` + namespace `<pagina>_page` en ambos locales. Contenedor raíz: `container py-4` (`Proyectos.jsx`, `Tecnologias.jsx`, `Contacto.jsx`).
- ⚠ La skill personal `agregar-pagina` describe **otro repo** (Hotel Code: `Catalogo.jsx`, `RutasAdmin`, `helpers/queries`). No aplica acá: usá el checklist de arriba.

## Commits y ramas

- Mensajes en español, minúscula, descriptivos, sin prefijos convencionales: `correcciones y agregado de proyecto al portafolio`, `cambio de cv`, `agregado el responsive`. Mantener ese estilo.
- Se trabaja directo sobre `main`; existen ramas `dev`, `contacto`, `tel` y 2 PRs `dev → main` (#1, #2). No hay PR template ni CONTRIBUTING.

## Deuda conocida (no replicar, no "arreglar de paso" sin pedido)

- `ProjectCard.jsx` y `Form.jsx`: nadie los importa. `serviceData` (`data.jsx:4`) no se usa. `data.jsx:2-3` importa íconos sin uso (`FaFilePdf`, `FaLinkedin`, `BookText`, `Square`, `HomeIcon`, `UserRound`) que ESLint no marca por `varsIgnorePattern: '^[A-Z_]'` (`eslint.config.js:25`).
- Lint base en `src/`: 0 errores.
- `TecIcons`→`proIcons` y `PasIcons`→`pasantiaIcons` siguen con array fijo: todas las tarjetas Tec muestran el mismo stack. `AppTechnologyIcons` ya acepta `items` (por defecto `appTechnologies`) y `ProjectCardApp` acepta `technologies` (claves de `techCatalog`), `videoSrc` (por defecto el Loom de GHProgrammingApp), `videoLink` y `sections=[{ title, items }]`: ese es el patrón para tarjetas nuevas.
- **`Proyectos.jsx` solo lee de `featuredProjects` la tarjeta de `inventory_app`.** GHProgrammingApp, Hotel Code, Recetas y SwaplyAr siguen con links y textos escritos a mano (y claves viejas `projectN_*`): los datos están duplicados con `data.jsx`; si cambia un link, cambiarlo en los dos lugares.
- Datos de contacto: la fuente es `contactLinks` (`data.jsx`), usada por `Menu`, el Home y `Contacto`. Quedan copias literales en `FormularioPosible.jsx:145,155`: si cambian, cambiarlas también.
- **Claves i18n viejas del Home, sin uso desde la Fase 2 — pendientes de borrar en `es` y `en`:** `greeting`, `name`, `description`, `description2`, `projects_intro`.
- Imágenes de 0.4–1.4 MB sin optimizar (salida de `npm run build`).
- README desactualizado (no menciona GHProgrammingApp ni SwaplyAr).

## Reglas operativas (checklist por PR)

| # | Regla | Cómo verificar |
|---|---|---|
| 1 | Build verde | `npm run build` |
| 2 | 0 errores nuevos de lint en `src/` (base: 0) | `npx eslint src` |
| 3 | Claves i18n con paridad es/en | agente `verificador` |
| 4 | Sin texto visible hardcodeado nuevo | revisar diff: strings fuera de `t()` en JSX |
| 5 | Sin hex/rgb nuevos; solo `var(--color-*)`; todo token nuevo en los dos temas; nada de `text-white` / `btn-outline-light` | `git diff \| grep -E "#[0-9a-fA-F]{3,6}\|rgb"` |
| 6 | Sin `style={{…}}` nuevo si existe o puede existir una clase | revisar diff |
| 7 | Ruta nueva: `App.jsx` + entrada en `navItems` de `Menu.jsx` | leer ambos |
| 8 | No tocar `dist/`, `.vite/`, `Form.jsx`, `ProjectCard.jsx` | `git status` |
| 9 | Ninguna credencial literal; solo `import.meta.env.VITE_*` | revisar diff |
