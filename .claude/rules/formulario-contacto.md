---
paths:
  - "src/components/pages/formulario/**"
  - "src/components/pages/Contacto.jsx"
---

# Formulario de contacto

Migrado desde `.opencode/rules/form-validation.md` (referencias re-verificadas contra el código actual) y completado.

Aplica solo al flujo activo `formulario/FormularioPosible.jsx`, montado en `Contacto.jsx:48-55`.

## Contrato actual (mantenerlo)

- `useForm` con `register`, `handleSubmit`, `reset`, `formState.errors` (`FormularioPosible.jsx:11-16`).
- Reglas por campo (`:67-106`): `name` required + minLength 2 · `email` required + pattern · `message` required + minLength 10. `id` del input = nombre del campo = `htmlFor` del label.
- Parámetros de EmailJS explícitos (`:22-27`): `from_name`, `from_email`, `message`, `to_name`. La plantilla de EmailJS depende de esos nombres: no renombrarlos.
- Credenciales solo `import.meta.env.VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`, `VITE_PUBLIC_KEY` (`:29-34`). Si agregás una variable, avisale al usuario: no hay `.env.example` (se borró en 2f69805) y hay que cargarla también en el hosting.
- `isSubmitting` propio con `useState` (`:9`) deshabilita inputs y botón (`:71,89,104,113`) y se restaura en `finally` (`:45-47`).
- `reset()` solo después de un envío exitoso, dentro del `try` (`:39`).
- Éxito y error → `Modal` de react-bootstrap (`:120-167`); el de error ofrece fallback por mail y WhatsApp.

## Prohibido

```jsx
// Enviar sin pasar por handleSubmit ni bloquear el form
onClick={() => emailjs.send(service, template, formData)}

// Credenciales literales o clave privada en el bundle
emailjs.send('service_xxx', 'template_xxx', data, 'PRIVATE_KEY')
```

- Importar o reactivar `Form.jsx`: usa `emailjs-com` (no instalado → rompe el build) y otras variables (`VITE_EMAILJS_*`, `Form.jsx:13-16`).
- Loguear datos del usuario o variables de entorno. El `console.log('Email enviado:', result.text)` (`:36`) es el máximo tolerado.
- Reemplazar los textos que llegan por props desde `Contacto.jsx:49-54` con strings de un solo idioma.

## Deuda conocida (no replicar)

Estos strings están hardcodeados en español y no cambian con el idioma: mensajes de validación (`:68-69,83,86,101-102`), `'Enviando...'` (`:115`), cuerpos y botones de los modales (`:125,129,139,150,158,164`). Si tocás cualquiera de ellos, movelo a `form.*` en ambos locales y pasalo por prop o `t()` en vez de sumar otro string fijo.
