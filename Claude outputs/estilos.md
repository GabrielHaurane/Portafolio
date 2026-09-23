---
paths:
  - "src/**/*.jsx"
  - "src/App.css"
---

# Estilos, colores e íconos

Un único archivo de estilos propios: `src/App.css` (importado en `main.jsx:6` y `App.jsx:7`). Bootstrap y bootstrap-icons se importan en `App.jsx:8-9`. No hay CSS modules, styled-components ni Tailwind.

## Tokens (`App.css:1-11`)

| Token | Uso actual |
|---|---|
| `--color-background` | fondo de `<main>` (`.mainColor`) |
| `--color-surface` | navbar (`.site-navbar`), footer, secciones alternas del Home (`.home-section-alt`) |
| `--color-surface-soft` | borde inferior de la navbar |
| `--color-card` | fondo de tarjetas de proyecto (`.content-card` en el Home) |
| `--color-form` | fondo del formulario |
| `--color-accent` / `--color-accent-ink` | chips de tecnologías (`.tech-chip`), `.evidence-tag`, `.btn-outline-violet` |
| `--color-success` / `--color-error` | headers de los modales del formulario |

Color nuevo → primero un token en `:root`, después usarlo con `var(--…)`. Nunca hex/rgb sueltos en JSX o en reglas nuevas.

Hex existentes que son deuda (no copiarlos): `App.css:39` (skeleton repite los valores de `surface`/`surface-soft`), `App.css:115` (rgba del accent), `App.css:139` (`#fff`), `ProjectCard.jsx:20` (`#5f307c`, archivo muerto). Texto blanco: usar la utilidad Bootstrap `text-white`, como hace todo el repo.

## Clases vs inline

Hay 19 `style={{…}}` en `src/`. Orden de preferencia para código nuevo:
1. Utilidades Bootstrap (`d-flex`, `gap-*`, `col-*`, `rounded-*`, `shadow`, `fs-*`).
2. Clase existente de `App.css` (`btn-outline-violet`, `media-frame`, `mainColor`, `content-card`, `tech-chip`, `home-section`).
3. Clase nueva **kebab-case** en `App.css`.
4. Inline solo para valores realmente dinámicos.

No copies estos inline repetidos; si necesitás el mismo look, creá la clase:
- `{ background: "var(--color-accent)", color: "var(--color-accent-ink)" }` — 4 copias en `tecnologias/*.jsx` (en código nuevo: `.tech-chip`).
- `{ backgroundColor: "var(--color-card)", borderRadius: "40px" }` — `ProjectCardApp.jsx:9`, `ProjectCardTec.jsx:19-20`, `ProjectCardPas.jsx:11-12` (en código nuevo: `.content-card`).

## Botones

- Acción principal/propia: `btn btn-outline-violet` (`App.css:102-125`).
- Links externos sobre fondo oscuro: `btn btn-outline-light` con ícono `bi` + `me-1` (`ProjectCardTec.jsx:59-61`).
- Link externo siempre con `target="_blank" rel="noopener noreferrer"` (p. ej. el CV en `Menu.jsx`).

## Íconos

| Uso | Librería | Ejemplo |
|---|---|---|
| Íconos de UI (GitHub, LinkedIn, PDF, link externo) | `bootstrap-icons` como clase: `<i className="bi bi-github">` | `Menu.jsx`, `ProjectCardPas.jsx:56` |
| Logos de tecnologías | `react-icons/si` (fallback `react-icons/fa`) con `size={30}`, definidos en `data/data.jsx` | `data.jsx:5-61` |
| `lucide-react` | solo `GitBranch` (`data.jsx:15`); no introducir más | — |

Emoji en UI existen solo en los modales del formulario y en `greeting`; no sumarlos como sustituto de íconos.

## Layout / responsive

Breakpoint clave `lg` (992px): navbar superior sticky expandida en desktop y colapsada (toggler) en móvil — `Navbar expand="lg"` en `Menu.jsx`. Las secciones del Home (`.home-section`) tienen `scroll-margin-top` para que la navbar no tape el destino de las anclas. Cualquier cambio de layout se prueba en ambos modos (varios commits "correccion de la vision … de celular").
