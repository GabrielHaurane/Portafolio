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
| App con video demo | `cuadroProyectos/ProjectCardApp.jsx` | Loom **fijo** en `:11` | `AppTechnologyIcons` → `appTechnologies` (fijo) |

`ProjectCard.jsx` (sin sufijo) está muerto: no usarlo.

**Stack distinto al del array fijo:** el patrón existente fue crear un array nuevo en `data.jsx` + un componente de íconos nuevo (así nació `AppTechnologyIcons` en 93d9c35). Antes de crear un 5º componente casi idéntico, preguntale al usuario si prefiere que la tarjeta reciba el array por prop. No decidas solo.

**Otra app con video:** `ProjectCardApp` no acepta la URL del embed; hay que agregarle un prop (p.ej. `videoSrc`) manteniendo la URL actual como valor en el uso existente (`Proyectos.jsx:17`).

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

## 4. Stack en `src/data/data.jsx`

Si hace falta un array nuevo: `export const <nombre>Icons = [{ icon: <SiX size={30} />, title: "X" }, …]`. Ícono de `react-icons/si` (fallback `react-icons/fa`), siempre `size={30}`. Si la tecnología es nueva para Gabriel, sumarla también a `knownTechnologies` (`data.jsx:46-62`, alimenta `/tecnologias`).

## 5. Montar la tarjeta

- En `src/components/pages/Proyectos.jsx`, dentro del `<div className="w-100 h-100">` (`:16`), en el orden que pida el usuario. Experiencias van debajo del `<h2>{t("experience.title")}</h2>` (`:46`).
- Links de GitHub/demo como props literales (`githubLink="…"`, `liveLink="…"`), no en locales.
- `ProjectCardTec` recibe `liveLink` pero **no lo muestra** (error de lint base). Si el usuario quiere botón "Ver Página", copiá el bloque de `ProjectCardPas.jsx:49-59` a `ProjectCardTec` (eso además resuelve el error de lint).
- **Destacados del Home (data-driven):** agregar o reordenar una entrada en `featuredProjects` de `data.jsx` (`id`, `titleKey`, `summaryKey`, `img`, `technologies` con claves de `techCatalog`, `videoLink`/`liveLink`/`githubLink`) + `home_page.featured.items.<id>` en ambos locales. Experiencia → `experiences`. Si aporta evidencia de stack, sumar su `id` en `usedIn` de `stackEvidence`. No tocar componentes de `pages/inicio/`.

## 6. Verificar

Invocar el agente `verificador` (build, lint de `src` contra la base, paridad i18n). Probar `/proyectos` y `/` en ambos idiomas y en ancho móvil. Preguntar si también hay que actualizar `README.md` (hoy desactualizado). Commit sugerido: `agregado de proyecto <nombre> al portafolio`.
