# Portafolio — Gabriel Haurane

Portafolio personal de **Gabriel Alejandro Haurane**, desarrollador de software de Tucumán, Argentina. Es una SPA bilingüe (español / inglés) donde muestro mis proyectos, mi experiencia profesional y las tecnologías con las que trabajo.

🔗 **Sitio:** [gabrielhauraneportafolio.netlify.app](https://gabrielhauraneportafolio.netlify.app)

## Sobre mí

Empecé a programar a los 15 años con HTML y desde entonces fui sumando habilidades con cursos, un bootcamp intensivo y experiencia profesional en equipos multiculturales. Trabajo tanto en desarrollo web como en aplicaciones de escritorio, con foco en soluciones eficientes, escalables y con buena experiencia de usuario.

## Proyectos

### GHProgrammingApp

Aplicación de escritorio para aprender a programar, empezando por la teoría.

- Quiz con preguntas basadas en la teoría de cada nivel.
- Tutorial inicial para identificar el nivel adecuado de cada persona.
- Por ahora incluye los niveles 1 y 2.

**Tecnologías:** Python, Tkinter  
**Código:** [GitHub](https://github.com/GabrielHaurane/GHProgramingApp)

### Hotel Code

Aplicación web de gestión hotelera: búsqueda de habitaciones por disponibilidad, reservas con fecha de entrada y salida, registro e inicio de sesión de clientes y notificaciones visuales de éxito y error.

**Tecnologías:** JavaScript, HTML5, CSS3, React, Vite, Bootstrap, SweetAlert2  
**Código:** [GitHub](https://github.com/GabrielHaurane/Frontend-Proyecto-Final) · **Demo:** [hotel-code.netlify.app](https://hotel-code.netlify.app)  
**Estado:** inactivo (en migración)

### Recetas Haurane

Blog de recetas para explorar, buscar y filtrar por nombre o categoría, con vista detallada de ingredientes, instrucciones y tiempo de preparación, y favoritos guardados en el navegador.

**Tecnologías:** JavaScript, HTML5, CSS3, React, Vite, Bootstrap, localStorage  
**Código:** [GitHub](https://github.com/GabrielHaurane/blog-recetas-front) · **Demo:** [las-recetas-de-haurane.netlify.app](https://las-recetas-de-haurane.netlify.app)  
**Estado:** inactivo (en migración)

## Experiencia

### SwaplyAr — Desarrollador Frontend (6 semanas)

- Desarrollé la página de reembolso, donde los usuarios pueden solicitar un reembolso o cancelar una transacción.
- Trabajé en la edición de solicitudes: búsqueda por número de transacción, verificación de datos y carga del comprobante correcto si había un error.

**Tecnologías:** TypeScript, Next.js, React, Tailwind CSS  
**Sitio:** [swaplyar.com](https://www.swaplyar.com/es/como-usar-swaplyar)

## Tecnologías que conozco

JavaScript · TypeScript · Python · HTML · CSS · React · Next.js · Bootstrap · Tailwind CSS · Node.js · MongoDB · MySQL · .NET · C# · Vite

## Stack de este portafolio

- **Vite 7** + **React 19** (JavaScript/JSX)
- **React Router 7** para las rutas (`/`, `/proyectos`, `/contacto`, `/tecnologias`)
- **Bootstrap 5** + **react-bootstrap** + **bootstrap-icons**
- **i18next** / **react-i18next** para español e inglés
- **react-hook-form** + **EmailJS** para el formulario de contacto

## Cómo correrlo

```bash
git clone https://github.com/GabrielHaurane/Portafolio.git
cd Portafolio
npm install
npm run dev
```

Para que el formulario de contacto envíe mails, creá un archivo `.env` en la raíz con tus credenciales de EmailJS:

```env
VITE_SERVICE_ID=tu_service_id
VITE_TEMPLATE_ID=tu_template_id
VITE_PUBLIC_KEY=tu_public_key
```

### Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Sirve el build localmente |
| `npm run lint` | Corre ESLint |

## Contacto

- Email: [gabrielhaurane@gmail.com](mailto:gabrielhaurane@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/gabriel-haurane-b117a627b)
- [GitHub](https://github.com/GabrielHaurane)
