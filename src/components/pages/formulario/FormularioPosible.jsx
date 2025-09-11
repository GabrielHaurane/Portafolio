import { useForm } from 'react-hook-form';
import { useState } from "react";
const FormularioPosible = ({name, email, message, button, successMessage, errorMessage}) => {
     const [statusMessage, setStatusMessage] = useState("");
  const [error, setError] = useState(false);
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:5173/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatusMessage(successMessage || "Mensaje enviado con éxito");
        setError(false);
        reset();
      } else {
        setStatusMessage(errorMessage || "Error al enviar el mensaje");
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setStatusMessage(errorMessage || "Error de conexión");
      setError(true);
    }
  };
  return (
        <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 border rounded shadow col-11 col-xl-8 mt-3 "
      style={{ backgroundColor: "#5a297a" }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">{name}</label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name", { required: "Este campo es obligatorio" })}
        />
        {errors.name && <small className="text-danger">{errors.name.message}</small>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">{email}</label>
        <input
          id="email"
          type="email"
          className="form-control"
          {...register("email", { required: "Este campo es obligatorio" })}
        />
        {errors.email && <small className="text-danger">{errors.email.message}</small>}
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">{message}</label>
        <textarea
          id="message"
          rows="4"
          className="form-control"
          {...register("message", { required: "Este campo es obligatorio" })}
        />
        {errors.message && <small className="text-danger">{errors.message.message}</small>}
      </div>

      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-outline-violet">{button}</button>
      </div>

      {statusMessage && (
        <div className={`alert mt-3 ${error ? "alert-danger" : "alert-success"}`}>
          {statusMessage}
        </div>
      )}
    </form>
    );
};

export default FormularioPosible;
