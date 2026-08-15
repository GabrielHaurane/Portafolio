# OpenCode

## Contexto operativo

Portafolio personal de una sola aplicación Vite/React. El código de producción vive en `src/`; `src/main.jsx` es la entrada, `src/App.jsx` compone menú, rutas y footer, y las páginas están en `src/components/pages/`. La adopción de JavaScript/JSX es 100% en el código fuente observado: no existen archivos `.ts/.tsx`, `tsconfig.json` ni migración activa. No hay CI (`.github/workflows`), PR template ni tests.

## Comandos

```bash
npm run dev       # servidor Vite
npm run build     # build de producción
npm run preview   # sirve dist después del build
npm run lint      # ESLint sobre el árbol del repositorio
```

`npm run lint` usa `eslint.config.js:7-27`, aplica a `**/*.{js,jsx}` y solo ignora `dist` (`eslint.config.js:8`). El directorio generado `.vite/` no está ignorado y actualmente contamina el resultado; no atribuir sus errores a código fuente. No existe comando `test`.

## Rutas y módulos

- No hay aliases ni `paths` de TypeScript. Resolver imports relativos desde el archivo que importa, como en `src/main.jsx:4-6` y `src/components/pages/Home.jsx:2-4`.
- Rutas declaradas: `/` -> `Home`, `/proyectos` -> `Proyectos`, `/contacto` -> `Contacto` (`src/App.jsx:19-23`). `BrowserRouter` se monta en `src/main.jsx:8-13`; no añadir otro router dentro de `App`.
- `src/components/common/` contiene piezas compartidas por la aplicación (`Menu.jsx`, `Footer.jsx`); `src/components/pages/<pagina>/` contiene piezas específicas de página, por ejemplo `formulario/`, `cuadroProyectos/` y `tecnologias/`.
- Regla de colocación: si una pieza solo sirve a una feature, mantenerla junto a esa página; si dos o más páginas la usan, ascenderla a `components/common` o a una carpeta compartida equivalente. No crear capas `services/`, `hooks/` o `stores/` vacías.

## Convenciones observadas

- Componentes y archivos JSX usan PascalCase: `Home`, `ProjectCardTec`, `LanguageSwitcher` (`src/components/pages/*.jsx`, `src/components/LanguageSwitcher.jsx`). Mantener ese formato para componentes.
- Funciones y variables usan camelCase (`handleSubmit`, `isSubmitting`, `modalType` en `FormularioPosible.jsx:6-18`); constantes exportadas de datos también usan camelCase (`src/data/data.jsx:4,21,32`).
- Los estilos existentes usan CSS global en `src/App.css` y clases Bootstrap; las páginas aplican composición por clases (`src/components/pages/Proyectos.jsx:10-14`). Preferir clases existentes. No convertir inline styles existentes en una nueva convención.
- Los assets se importan desde `src/img` o `src/components/assets` (`src/components/pages/Proyectos.jsx:2-4`, `src/components/common/Menu.jsx:4`). Mantener imports estáticos para assets de la interfaz.

## Datos, estado y persistencia

- No existe API HTTP en este repositorio. No inventar endpoints, `fetch`, axios, caché de servidor ni reintentos. El único efecto remoto es `emailjs.send` en `src/components/pages/formulario/FormularioPosible.jsx:29-34`.
- El estado demostrado es local con `useState`, para modal y envío (`FormularioPosible.jsx:7-9`); usar estado local para UI de una sola feature. No agregar estado global mientras no exista una necesidad transversal demostrada.
- El formulario debe usar `react-hook-form` (`FormularioPosible.jsx:1,11-16`) y conservar validación, bloqueo, reset y modal de error (`:67-116,120-167`). Ver `.opencode/rules/form-validation.md`.
- No implementar localStorage en este proyecto solo porque el README describe esa capacidad de otro portafolio (`README.md:22-30`); no hay acceso a storage en `src/`.

## Internacionalización

El idioma inicial y fallback son español (`src/i18n.js:11-12`), con recursos `es` y `en` (`src/i18n.js:6-10`). Todo texto nuevo visible debe añadirse a ambos JSON y consumirse mediante `t(...)`; no hardcodear copy de interfaz en un solo idioma. Las URLs externas localizadas, como el CV (`src/locales/es/translation.json:32-37`), deben seguir siendo traducciones solo si realmente varían por idioma.

## Límites de deuda existente

- `src/components/pages/formulario/Form.jsx` duplica el formulario, importa `emailjs-com` y no está montado; tratarlo como legado, no como implementación alternativa.
- `src/App.jsx:1,7,14` contiene `useState`, `useTranslation` y `count` sin uso; `Home.jsx:4` importa un asset no usado; tarjetas reciben `liveLink` pero algunas no lo renderizan (`ProjectCard.jsx:11`, `ProjectCardTec.jsx:11`). No ocultar estos problemas con desactivaciones globales de ESLint.
- `package.json:28-30` declara plugins de Tailwind sin configuración o imports encontrados en `src/`; no asumir Tailwind como sistema activo.

## Pre-vuelo

1. Confirmar que la modificación respeta las tres rutas y la estructura `src/components`.
2. Si toca UI, verificar textos en `es` y `en`, navegación interna y responsive Bootstrap.
3. Si toca contacto, comprobar variables `VITE_*`, validación, estado de envío y fallback de error sin imprimir datos sensibles.
4. Ejecutar `npm run build`.
5. Ejecutar `npm run lint`; separar errores preexistentes de los introducidos y no ignorar archivos o reglas para silenciarlos sin justificación.
6. Como no existe `test`, hacer verificación manual de `/`, `/proyectos`, `/contacto`, cambio de idioma, links externos y formulario cuando correspondan.
