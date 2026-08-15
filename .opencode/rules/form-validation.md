# Formulario De Contacto

Aplicar solo al flujo activo `src/components/pages/formulario/FormularioPosible.jsx`, montado desde `src/components/pages/Contacto.jsx:48-55`.

## Implementación permitida

- Registrar campos con `useForm`, `handleSubmit`, `reset` y `formState.errors`, igual que `FormularioPosible.jsx:11-16`.
- Mantener reglas explícitas por campo. El contrato actual exige nombre (`required`, mínimo 2), email (`required`, patrón) y mensaje (`required`, mínimo 10), en `FormularioPosible.jsx:67-103`.
- Enviar únicamente después de `handleSubmit` y construir parámetros explícitos (`from_name`, `from_email`, `message`, `to_name`), como en `FormularioPosible.jsx:18-27`.
- Leer credenciales públicas solo desde `import.meta.env.VITE_*`, como en `FormularioPosible.jsx:29-34`. No registrar valores de entorno, contenido del formulario o respuestas completas.
- Usar `isSubmitting` para deshabilitar inputs y submit (`FormularioPosible.jsx:69-72,89-90,104-115`), y restaurarlo en `finally` (`:45-47`).
- Mostrar un estado de éxito o error y ofrecer el fallback de correo/WhatsApp existente (`FormularioPosible.jsx:37-44,120-167`).

## Prohibido

```jsx
// Prohibido: envío fuera de la validación y sin estado de bloqueo.
onClick={() => emailjs.send(service, template, formData)}
```

```jsx
// Prohibido: secreto embebido en el bundle.
emailjs.send('private-service-token', templateId, data, privateKey)
```

- No activar `src/components/pages/formulario/Form.jsx`: es una implementación paralela no montada, usa `emailjs-com` y tiene un contrato de variables distinto (`Form.jsx:1,10-26`).
- No reemplazar los mensajes localizados recibidos por props en `Contacto.jsx:48-55` con texto nuevo de un solo idioma; si cambia copy, actualizar ambos archivos de `src/locales/`.
- No resetear el formulario antes de un envío exitoso; el reset actual ocurre dentro de `try` después de `emailjs.send` (`FormularioPosible.jsx:29-39`).
