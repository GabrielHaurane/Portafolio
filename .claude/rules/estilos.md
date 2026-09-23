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
| `--color-surface` | sidebar, footer |
| `--color-surface-soft` | offcanvas móvil (`.menuFondoColor`) |
| `--color-card` | fondo de tarjetas de proyecto |
| `--color-form` | fondo del formulario |
| `--color-accent` / `--color-accent-ink` | chips de tecnologías, `.btn-outline-violet` |
| `--color-success` / `--color-error` | headers de los modales del formulario |

Color nuevo → primero un token en `:root`, después usarlo con `var(--…)`. Nunca hex/rgb sueltos en JSX o en reglas nuevas.

Hex existentes que son deuda (no copiarlos): `App.css:39` (skeleton repite los valores de `surface`/`surface-soft`), `App.css:115` (rgba del accent), `App.css:139` (`#fff`), `ProjectCard.jsx:20` (`#5f307c`, archivo muerto). Texto blanco: usar la utilidad Bootstrap `text-white`, como hace todo el repo.

## Clases vs inline

Hay 19 `style={{…}}` en `src/`. Orden de preferencia para código nuevo:
1. Utilidades Bootstrap (`d-flex`, `gap-*`, `col-*`, `rounded-*`, `shadow`, `fs-*`).
2. Clase existente de `App.css` (`btn-outline-violet`, `media-frame`, `sidebar`, `mainColor`).
3. Clase nueva **kebab-case** en `App.css`.
4. Inline solo para valores realmente dinámicos.

No copies estos inline repetidos; si necesitás el mismo look, creá la clase:
- `{ background: "var(--color-accent)", color: "var(--color-accent-ink)" }` — 4 copias en `tecnologias/*.jsx`.
- `{ backgroundColor: "var(--color-card)", borderRadius: "40px" }` — `ProjectCardApp.jsx:9`, `ProjectCardTec.jsx:19-20`, `ProjectCardPas.jsx:11-12`.
- `Menu.jsx:14` y `:75` repiten inline lo que ya definen `.sidebar` (`App.css:55-57`) y `.hamburger-btn` (`App.css:76-81`).

## Botones

- Acción principal/propia: `btn btn-outline-violet` (`App.css:102-125`).
- Links externos sobre fondo oscuro: `btn btn-outline-light` con ícono `bi` + `me-1` (`ProjectCardTec.jsx:59-61`).
- Link externo siempre con `target="_blank" rel="noopener noreferrer"` (`Menu.jsx:45-46`).

## Íconos

| Uso | Librería | Ejemplo |
|---|---|---|
| Íconos de UI (GitHub, LinkedIn, PDF, link externo) | `bootstrap-icons` como clase: `<i className="bi bi-github">` | `Menu.jsx:49,59`, `ProjectCardPas.jsx:56` |
| Logos de tecnologías | `react-icons/si` (fallback `react-icons/fa`) con `size={30}`, definidos en `data/data.jsx` | `data.jsx:5-61` |
| `lucide-react` | solo `GitBranch` (`data.jsx:15`); no introducir más | — |

Emoji en UI existen solo en los modales del formulario y en `greeting`; no sumarlos como sustituto de íconos.

## Layout / responsive

Breakpoint clave `lg` (992px): sidebar fijo en desktop (`d-none d-lg-flex`), hamburguesa + offcanvas en móvil (`d-lg-none`), ver `Menu.jsx:14,70` y `App.css:83-87,146-150`. Cualquier cambio de layout se prueba en ambos modos (varios commits "correccion de la vision … de celular").
