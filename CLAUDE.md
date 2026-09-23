# CLAUDE.md — Portafolio

Leé primero `CONSTITUTION.md` (máximas no negociables). Este archivo es el manual operativo.

## Producto

Portafolio personal de Gabriel Haurane (desarrollador, Tucumán). SPA Vite + React 19 en JSX, bilingüe es/en, 4 rutas públicas. Contenido casi 100% estático: textos en `src/locales/`, listas de tecnologías en `src/data/data.jsx`, capturas en `src/img/`. Repo: `github.com/GabrielHaurane/Portafolio`.

## Comandos

```bash
npm run dev       # servidor Vite
npm run build     # build de producción → dist/  (hoy pasa)
npm run lint      # eslint .  → hoy FALLA con ~385 errores, casi todos de .vite/
npx eslint src    # lo que importa: hoy 2 errores preexistentes (ver "Deuda")
npm run preview
```

`npm run lint` falla porque `eslint.config.js:8` solo ignora `dist` y `.vite/` (caché de Vite) está versionado. **Para juzgar un cambio usá `npx eslint src`** y compará contra la línea base de 2 errores. No existe script `test`.

## Paths y alias

No hay alias (`vite.config.js` solo carga `@vitejs/plugin-react`) ni `jsconfig`. Imports relativos desde el archivo que importa. Ambos estilos conviven (`"./../../img/x.png"` en `Proyectos.jsx:2-3`, `"../../img/x.png"` en `:4`); en código nuevo usá la forma corta `../`. Se omite `.jsx` al importar componentes; `data.jsx` se importa con extensión (`tecnologias/*.jsx:1`).

## Estructura real

```
src/
  main.jsx              entrada: StrictMode + BrowserRouter + ./i18n
  App.jsx               layout (Menu / <main> / Footer) + <Routes>
  App.css               tokens --color-* y todas las clases propias
  i18n.js               init i18next (lng y fallback 'es')
  data/data.jsx         arrays {icon, title} de tecnologías por tarjeta
  locales/{es,en}/translation.json
  img/                  capturas de proyectos (hotelCode, recetasHaurane, swaply)
  components/
    LanguageSwitcher.jsx        ⚠ solo lo usa Menu → debería vivir en common/
    assets/                     fotoDePerfil.jpg, logoGH.png (favicon en index.html:6)
    common/                     Menu, Footer, LoadingImage, LoadingIframe
    pages/
      Home.jsx  Proyectos.jsx  Contacto.jsx  Tecnologias.jsx
      cuadroProyectos/          ProjectCardApp / Tec / Pas  (+ ProjectCard muerto)
      formulario/               FormularioPosible (activo) + Form (muerto)
      tecnologias/              TecIcons, PasIcons, AppTechnologyIcons, TechnologyGrid
```

**Regla de ubicación:** si lo usa una sola página, vive en la subcarpeta de esa página (`pages/<carpeta>/`); si lo usan 2+ páginas, sube a `components/common/`. No crear `hooks/`, `services/` ni `stores/` vacíos.

Violaciones actuales (no moverlas sin pedido; aplicar la regla a código nuevo):
- `cuadroProyectos/ProjectCardApp.jsx` lo usan `Home.jsx:2` y `Proyectos.jsx:7` → correspondería a `common/`.
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
| Página actual | la URL (`react-router`); `NavLink` para estado activo | `Menu.jsx:19-22` |
| Estado compartido / persistencia | **No existe.** No agregar Context, store ni `localStorage` sin pedido explícito | — |

## Estilos y tema

- Bootstrap 5 (utilidades + grid) es la base; react-bootstrap se usa solo para `Nav`, `Button`, `Modal`. El offcanvas móvil usa JS vanilla de Bootstrap (`App.jsx:11`, `data-bs-*` en `Menu.jsx:72-73,93`).
- Un solo tema oscuro violeta, sin modo claro. Tokens en `App.css:1-11`.
- Íconos: UI → `bootstrap-icons` (`<i className="bi bi-…">`); logos de tecnologías → `react-icons/si` (o `fa`) con `size={30}` en `data.jsx`.
- Detalle y deuda (inline styles, hex sueltos): `.claude/rules/estilos.md`.

## i18n

Todo texto visible con `t("clave")`, clave presente en `es` y `en`. Detalle: `.claude/rules/i18n.md`. El link del CV es una traducción (`menu.drive`), así que "cambiar el CV" = editar esa clave en ambos JSON (5 commits "cambio de cv").

## Testing

No hay tests ni CI (`.github/` no existe), ni hooks de git activos. Verificación = `npm run build` + `npx eslint src` + prueba manual en `npm run dev`: las 4 rutas, cambio de idioma, menú móvil (offcanvas) y, si se tocó, el formulario. El agente `verificador` automatiza la parte mecánica.

## Tareas frecuentes

- **Agregar/editar un proyecto o experiencia** → skill `agregar-proyecto`.
- **Agregar una página** (último caso: `/tecnologias` en 93d9c35): 1) `pages/<Nombre>.jsx`; 2) `import` + `<Route path=…>` en `App.jsx` **sin** `exact` (prop de v5, no hace nada en v7; las rutas actuales la arrastran); 3) `NavLink` en **las dos** navs de `Menu.jsx` (sidebar con `className={({isActive})=>…}`, offcanvas con el `<div data-bs-dismiss="offcanvas">`); 4) clave `menu.<x>` + namespace `<pagina>_page` en ambos locales. Contenedor raíz: `col-12 col-lg-9 col-xl-10 px-2 pt-3 pe-lg-3 pe-xl-4` (`Proyectos.jsx:11`, `Tecnologias.jsx:8`).
- ⚠ La skill personal `agregar-pagina` describe **otro repo** (Hotel Code: `Catalogo.jsx`, `RutasAdmin`, `helpers/queries`). No aplica acá: usá el checklist de arriba.

## Commits y ramas

- Mensajes en español, minúscula, descriptivos, sin prefijos convencionales: `correcciones y agregado de proyecto al portafolio`, `cambio de cv`, `agregado el responsive`. Mantener ese estilo.
- Se trabaja directo sobre `main`; existen ramas `dev`, `contacto`, `tel` y 2 PRs `dev → main` (#1, #2). No hay PR template ni CONTRIBUTING.

## Deuda conocida (no replicar, no "arreglar de paso" sin pedido)

- `ProjectCard.jsx` y `Form.jsx`: nadie los importa. `serviceData` (`data.jsx:4`) no se usa. `data.jsx:2-3` importa íconos sin uso (`FaFilePdf`, `FaLinkedin`, `BookText`, `Square`, `HomeIcon`, `UserRound`) que ESLint no marca por `varsIgnorePattern: '^[A-Z_]'` (`eslint.config.js:25`).
- Lint base en `src/`: `liveLink` sin usar en `ProjectCard.jsx:12` y `ProjectCardTec.jsx:12` (la tarjeta Tec no muestra botón "Ver Página").
- Cada tipo de tarjeta tiene su propio componente de íconos con array fijo (`TecIcons`→`proIcons`, etc.): todas las tarjetas Tec muestran el mismo stack. El embed de Loom está fijo en `ProjectCardApp.jsx:11`.
- Datos de contacto duplicados (mail y WhatsApp en `Contacto.jsx:20,35` y `FormularioPosible.jsx:145,155`; GitHub/LinkedIn dos veces en `Menu.jsx`). Si cambian, cambiar todas las copias.
- Imágenes de 0.4–1.4 MB sin optimizar (salida de `npm run build`).
- README desactualizado (no menciona GHProgrammingApp ni SwaplyAr).

## Reglas operativas (checklist por PR)

| # | Regla | Cómo verificar |
|---|---|---|
| 1 | Build verde | `npm run build` |
| 2 | 0 errores nuevos de lint en `src/` (base: 2) | `npx eslint src` |
| 3 | Claves i18n con paridad es/en | agente `verificador` |
| 4 | Sin texto visible hardcodeado nuevo | revisar diff: strings fuera de `t()` en JSX |
| 5 | Sin hex/rgb nuevos; solo `var(--color-*)` | `git diff \| grep -E "#[0-9a-fA-F]{3,6}\|rgb"` |
| 6 | Sin `style={{…}}` nuevo si existe o puede existir una clase | revisar diff |
| 7 | Ruta nueva: `App.jsx` + 2 NavLinks en `Menu.jsx` | leer ambos |
| 8 | No tocar `dist/`, `.vite/`, `Form.jsx`, `ProjectCard.jsx` | `git status` |
| 9 | Ninguna credencial literal; solo `import.meta.env.VITE_*` | revisar diff |
