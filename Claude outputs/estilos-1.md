---
paths:
  - "src/**/*.jsx"
  - "src/App.css"
---

# Estilos, colores e íconos

Un único archivo de estilos propios: `src/App.css` (importado en `main.jsx:6` y `App.jsx:7`). Bootstrap y bootstrap-icons se importan en `App.jsx:8-9`. No hay CSS modules, styled-components ni Tailwind.

## Temas (Fase 3.5)

Dos temas: **oscuro por defecto** y claro opcional. El tema vive en `<html data-theme="dark|light" data-bs-theme="dark|light">`:

- `index.html` trae `dark` fijo en `<html>` y un script inline en `<head>` (antes del bundle, para que no parpadee) que lo cambia a `light` solo si `localStorage.getItem("theme") === "light"`, dentro de `try/catch`. Nunca se usa `prefers-color-scheme`.
- `components/common/ThemeToggle.jsx` (navbar, dentro de `Navbar.Collapse`) cambia los dos atributos y guarda la elección en `localStorage` (clave `"theme"`, con `try/catch`). Lee su estado inicial del atributo de `<html>`; no hay Context ni store.
- `html[data-bs-theme]` en `App.css` conecta variables de Bootstrap a los tokens (`--bs-body-bg`, `--bs-body-color`, `--bs-emphasis-color`, `--bs-secondary-color`, `--bs-border-color`), así inputs, `Modal`, `.card` y `.border` siguen el tema sin clases extra. La navbar toma sus colores de `--bs-navbar-*`, que se definen en `.navbar.site-navbar`.
- Transición de colores de 200 ms (background-color, color, border-color) en `body`, navbar, footer, `.mainColor`, `.home-section-alt`, tarjetas y `.modal-content`; `prefers-reduced-motion` la apaga.

## Tokens (`App.css`: oscuro en `:root`, claro en `[data-theme="light"]`)

| Token | Oscuro (default) | Claro | Uso |
|---|---|---|---|
| `--color-background` | `#0e0e0f` | `#f6f3ee` | fondo de `<main>` (`.mainColor`) y de Bootstrap (`--bs-body-bg`) |
| `--color-surface` | `#161617` | `#ffffff` | navbar, footer, secciones alternas del Home, base del skeleton |
| `--color-card` | `#1c1c1e` | `#ffffff` | tarjetas (`.content-card`, cards de `/proyectos`) |
| `--color-form` | `#1c1c1e` | `#ffffff` | fondo del formulario |
| `--color-accent` | `#c9a54a` | `#a8472a` | chips, `.evidence-tag`, `.btn-outline-violet`, subrayado activo de la navbar, foco |
| `--color-accent-ink` | `#0e0e0f` | `#ffffff` | texto sobre `--color-accent` |
| `--color-text` | `#ece8e1` | `#1c1b19` | texto general (`--bs-body-color`), `.btn-outline-neutral` |
| `--color-text-muted` | `#9d978c` | `#5d5a54` | texto secundario (`--bs-secondary-color`) |
| `--color-border` | `rgba(201,165,74,.22)` | `#e4dfd6` | bordes: navbar, footer, `.content-card`, `--bs-border-color` |
| `--color-success` | `#146c43` | `#146c43` | header del modal de éxito |
| `--color-error` | `#b02a37` | `#b02a37` | header del modal de error |

`--color-surface-soft` se eliminó en la Fase 3.5 (no está en la paleta nueva).

Color nuevo → primero un token **en los dos bloques** (`:root` y `[data-theme="light"]`), después usarlo con `var(--…)`. Nunca hex/rgb sueltos en JSX o en reglas nuevas. Para variantes (transparencias, un tono más claro) usá `color-mix()` sobre un token, como el foco y el skeleton.

## Regla de color de texto y botones

**Nunca `text-white` ni `btn-outline-light` (ni `color: white`, `text-light`, `bg-dark`, `border-black`): usar tokens.** Se rompen en el tema claro.

- Texto: no pongas clase; hereda `var(--color-text)` de `.mainColor` / `--bs-body-color`. Tarjetas nuevas → `.content-card` (ya trae fondo, color y borde).
- Texto sobre un fondo de estado (success/error), que es oscuro en los dos temas: `.modal-header-success` / `.modal-header-error` (usan `var(--bs-white)`), con `closeVariant="white"` en `Modal.Header`.

## Clases vs inline

Orden de preferencia para código nuevo:
1. Utilidades Bootstrap de layout (`d-flex`, `gap-*`, `col-*`, `rounded-*`, `shadow`, `fs-*`). Utilidades de **color** de Bootstrap, no.
2. Clase existente de `App.css` (`btn-outline-violet`, `btn-outline-neutral`, `media-frame`, `mainColor`, `content-card`, `tech-chip`, `home-section`).
3. Clase nueva **kebab-case** en `App.css`.
4. Inline solo para valores realmente dinámicos.

No copies estos inline repetidos; si necesitás el mismo look, creá la clase:
- `{ background: "var(--color-accent)", color: "var(--color-accent-ink)" }` — 4 copias en `tecnologias/*.jsx` (en código nuevo: `.tech-chip`).
- `{ backgroundColor: "var(--color-card)", borderRadius: "40px" }` — `ProjectCardApp.jsx`, `ProjectCardTec.jsx`, `ProjectCardPas.jsx` (en código nuevo: `.content-card`).

## Botones

- Acción principal/propia: `btn btn-outline-violet`.
- Secundario / links externos (GitHub, CV, "ver todo"): `btn btn-outline-neutral` con ícono `bi` + `me-1`.
- Link con aspecto de texto: `btn btn-link-neutral`.
- Íconos sueltos en la navbar (GitHub, LinkedIn): `nav-icon-link`.
- Link externo siempre con `target="_blank" rel="noopener noreferrer"` (p. ej. el CV en `Menu.jsx`).

## Íconos

| Uso | Librería | Ejemplo |
|---|---|---|
| Íconos de UI (GitHub, LinkedIn, PDF, link externo, sol/luna) | `bootstrap-icons` como clase: `<i className="bi bi-github">` | `Menu.jsx`, `ThemeToggle.jsx` |
| Logos de tecnologías | `react-icons/si` (fallback `react-icons/fa`) con `size={30}`, definidos en `data/data.jsx` | `data.jsx` |
| `lucide-react` | solo `GitBranch` (`data.jsx`); no introducir más | — |

Emoji en UI existen solo en los modales del formulario y en `greeting`; no sumarlos como sustituto de íconos.

## Layout / responsive

Breakpoint clave `lg` (992px): navbar superior sticky expandida en desktop y colapsada (toggler) en móvil — `Navbar expand="lg"` en `Menu.jsx`. Las secciones del Home (`.home-section`) tienen `scroll-margin-top` para que la navbar no tape el destino de las anclas. Cualquier cambio de layout o de color se prueba en ambos modos **y en ambos temas**.
