# Constitution

## Identidad

Este repositorio es un portafolio web estático en **JavaScript/JSX**, construido con **Vite 7 + React 19**, `react-router-dom` 7, Bootstrap/react-bootstrap e i18next. El formulario de contacto usa EmailJS desde el navegador. No hay TypeScript, backend, cliente HTTP, estado global, persistencia implementada en este repositorio ni suite de tests.

## Principios no negociables

1. **Mantener el stack real.** No introducir TypeScript, otro bundler, otro router o una librería de estado sin una migración explícita y completa. La fuente de verdad actual es `package.json:5-37`, `src/main.jsx:1-13` y `src/App.jsx:1-23`.
2. **No exponer secretos.** Solo las variables `VITE_*` necesarias para EmailJS pueden llegar al cliente; nunca agregar credenciales privadas al código ni a archivos versionados. El flujo actual está en `src/components/pages/formulario/FormularioPosible.jsx:29-34` y `.gitignore:10-15`; Vite expone las variables con ese prefijo.
3. **Usar un único flujo de contacto activo.** El formulario montado es `FormularioPosible`, incluido por `src/components/pages/Contacto.jsx:3,48-55`; `src/components/pages/formulario/Form.jsx` es legado no montado y no debe recibir nuevas funcionalidades.
4. **Validar antes de enviar y representar estados asíncronos.** Todo envío debe pasar por `react-hook-form`, bloquear el formulario durante la solicitud y manejar éxito/error. Ese contrato está implementado en `FormularioPosible.jsx:11-18,29-47,56-116`.
5. **Preservar navegación declarativa.** Las rutas públicas son `/`, `/proyectos` y `/contacto`, declaradas en `src/App.jsx:19-23` y montadas bajo `BrowserRouter` en `src/main.jsx:8-13`. No usar navegación manual para enlaces internos.
6. **Mantener las traducciones completas.** El texto visible debe resolverse con `useTranslation` y existir en `src/locales/es/translation.json` y `src/locales/en/translation.json`; el inicializador y fallback están definidos en `src/i18n.js:6-15`.
7. **Respetar el sistema visual existente.** Usar Bootstrap/react-bootstrap y las clases/tokens visuales ya presentes en `src/App.css:14-20,48-70` antes de crear estilos nuevos. Los estilos inline repetidos son deuda, no un patrón a expandir.
8. **No cerrar cambios con validación incompleta.** Ejecutar `npm run build` y `npm run lint`, reportando explícitamente cualquier fallo. Son los únicos comandos de validación declarados en `package.json:7-11`; actualmente el build pasa y lint detecta deuda existente.
