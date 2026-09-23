---
name: agregar-proyecto
description: Alta o edición de un proyecto o experiencia laboral en el Portafolio (tarjeta en /proyectos y/o Home, textos es/en, imagen y stack). Usar cuando pidan "agregá un proyecto", "sumá mi nueva experiencia", "actualizá el proyecto X", "cambiá el proyecto destacado".
---

# Agregar / actualizar un proyecto en el Portafolio

Flujo recurrente del repo (commits 93d9c35 "agregado de proyecto al portafolio", 16d9202, c740cb7, baaec41, bcb8bb8). Toca 4-6 archivos; seguí el orden.

## 0. Preguntar lo que falta

Antes de editar, confirmá con el usuario: título, 3-5 características (en es y en), links (GitHub, demo), estado (activo/inactivo), stack, e imagen o video. Para experiencia: empresa, rol, duración.

## 1. Elegir el tipo de tarjeta

| Caso | Componente | Media | Íconos |
|---|---|---|---|
| Proyecto web con captura | `cuadroProyectos/ProjectCardTec.jsx` | `img` (prop) | `TecIcons` → `proIcons` (fijo) |
| Experiencia laboral | `cuadroProyectos/ProjectCardPas.jsx` | `img` (prop) | `PasIcons` → `pasantiaIcons` (fijo) |
| App con video demo | `cuadroProyectos/ProjectCardApp.jsx` | prop `videoSrc` (por defecto el Loom de GHProgrammingApp) | prop `technologies` (claves de `techCatalog`); sin ella, `appTechnologies` |

`ProjectCard.jsx` (sin sufijo) está muerto: no usarlo.

**Stack distinto al del array fijo:** no crear más componentes de íconos. Patrón nuevo (Fase 3, GH Sistema de Control de Inventario): el stack son claves de `techCatalog` (si falta la tecnología, sumarla ahí) y la tarjeta las recibe por prop; `AppTechnologyIcons` acepta `items=[{ icon, title }]`. `TecIcons`/`PasIcons` siguen fijos: si un proyecto Tec necesita otro stack, preguntá antes si aplicar el mismo patrón a `ProjectCardTec`.

**App con video (`ProjectCardApp`):** props `title`, `sections=[{ title, items: [string] }]` (se recorre en orden: características, problema, roles, estado…), `technologies`, `videoSrc` (URL del embed), `videoLink` (botón "Ver video", `common.watch_video`) y `githubLink`. Ejemplo completo: la tarjeta de `inventory_app` en `Proyectos.jsx`, que lee sus links de `featuredProjects`.

## 2. Imagen

- Guardar en `src/img/<nombreCamelCase>.png` (como `hotelCode.png`, `recetasHaurane.png`).
- Importarla estáticamente en la página: `import miProyecto from "../../img/miProyecto.png";` (`Proyectos.jsx:4`).
- Las actuales pesan 0.4–1.4 MB; si la nueva es grande, sugerí comprimirla antes de commitear.

## 3. Textos (ambos idiomas, mismas claves)

En `src/locales/es/translation.json` y `src/locales/en/translation.json`, un **namespace anidado** por proyecto (patrón `gh_app`, no el viejo `projectN_*`):

```json
"mi_proyecto": {
  "title": "…",
  "features_title": "Características",
  "features": ["…", "…"]
}
```

Estado reutiliza `bool` / `status` (`Proyectos.jsx:26-27`). Hoy `status` es global ("inactivo") para todas las Tec: si el nuevo tiene otro estado, agregá `mi_proyecto.status` en ambos idiomas y pasalo como `statusItem`. Experiencia: hoy existe un solo `experience.*`; para una segunda, preguntar si crear `experience_<empresa>.*`.

Ejemplo completo de namespace (Fase 3): `inventory_app.*` → `title`, `version`, `summary` (lo usa el Home), `problem_title`/`problem`, `roles_title`/`roles[]`, `highlights_title`/`highlights[]`, `status`. En `ProjectCardApp` cada par título/lista es una entrada de `sections`. Textos compartidos entre páginas van en `common.*`.

## 4. Stack en `src/data/data.jsx`

No crear arrays `<nombre>Icons` nuevos: sumá la tecnología a `techCatalog` (`clave: { Icon: SiX, title: "X" }`, se guarda el componente, no el elemento) y referenciala por clave en `featuredProjects[].technologies`, `stackEvidence` y la prop `technologies` de la tarjeta. Ícono de `react-icons/si` (fallback `react-icons/fa`), siempre `size={30}`. Si la tecnología es nueva para Gabriel, sumarla también a `knownTechnologies` (`data.jsx:46-62`, alimenta `/tecnologias`).

## 5. Montar la tarjeta

- En `src/components/pages/Proyectos.jsx`, dentro del `<div className="w-100 h-100">` (`:16`), en el orden que pida el usuario. Experiencias van debajo del `<h2>{t("experience.title")}</h2>` (`:46`).
- Links de GitHub/demo como props literales (`githubLink="…"`, `liveLink="…"`), no en locales.
- `ProjectCardTec` recibe `liveLink` pero **no lo muestra** (error de lint base). Si el usuario quiere botón "Ver Página", copiá el bloque de `ProjectCardPas.jsx:49-59` a `ProjectCardTec` (eso además resuelve el error de lint).
- **Proyecto destacado (Home):** el Home es data-driven desde `featuredProjects` (`data.jsx`); el orden del array es el orden en pantalla. Campos: `id`, `titleKey`, `summaryKey`, `img` (import local o URL), `technologies`, y opcionales `highlight` (tarjeta ancha arriba de la grilla), `videoLink` (play sobre la imagen + botón "Ver video"), `embedSrc` (iframe en `/proyectos`), `badgeKey`, `liveLink`, `githubLink`. Sumá el `id` en `stackEvidence` para cada tecnología que use. No se tocan los componentes de `pages/inicio/`.
- Miniatura de un video de YouTube sin captura local: `https://img.youtube.com/vi/<id>/mqdefault.jpg` (16:9). Mejor: captura local WebP en `src/img/`.

## 6. Verificar

Invocar el agente `verificador` (build, lint de `src` contra la base, paridad i18n). Probar `/proyectos` y `/` en ambos idiomas y en ancho móvil. Preguntar si también hay que actualizar `README.md` (hoy desactualizado). Commit sugerido: `agregado de proyecto <nombre> al portafolio`.
