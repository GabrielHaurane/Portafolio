import { useForm } from 'react-hook-form';
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';

const FormularioPosible = ({name, email, message, button, successMessage, errorMessage}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: "Gabriel",
      };

      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );

      console.log('Email enviado:', result.text);
      setModalType("success");
      setShowModal(true);
      reset();
      
    } catch (err) {
      console.error('Error al enviar email:', err);
      setModalType("error");
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 border rounded shadow col-11 col-xl-8 mt-3"
        style={{ backgroundColor: "var(--color-form)" }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">{name}</label>
          <input
            id="name"
            type="text"
            className="form-control"
            {...register("name", { 
              required: "Este campo es obligatorio",
              minLength: { value: 2, message: "El nombre debe tener al menos 2 caracteres" }
            })}
            disabled={isSubmitting}
          />
          {errors.name && <small className="text-danger">{errors.name.message}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">{email}</label>
          <input
            id="email"
            type="email"
            className="form-control"
            {...register("email", { 
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido"
              }
            })}
            disabled={isSubmitting}
          />
          {errors.email && <small className="text-danger">{errors.email.message}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">{message}</label>
          <textarea
            id="message"
            rows="4"
            className="form-control"
            {...register("message", { 
              required: "Este campo es obligatorio",
              minLength: { value: 10, message: "El mensaje debe tener al menos 10 caracteres" }
            })}
            disabled={isSubmitting}
          />
          {errors.message && <small className="text-danger">{errors.message.message}</small>}
        </div>

        <div className="d-flex justify-content-center">
          <button 
            type="submit" 
            className="btn btn-outline-violet"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : button}
          </button>
        </div>
      </form>

      <Modal show={showModal && modalType === "success"} onHide={handleCloseModal} centered>
        <Modal.Header closeButton style={{ backgroundColor: "var(--color-success)", color: "white" }}>
          <Modal.Title>✅ {successMessage || "¡Mensaje enviado con éxito!"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">Tu mensaje ha sido enviado correctamente. Te responderé lo antes posible.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal && modalType === "error"} onHide={handleCloseModal} centered>
        <Modal.Header closeButton style={{ backgroundColor: "var(--color-error)", color: "white" }}>
          <Modal.Title>❌ {errorMessage || "Error al enviar el mensaje"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>En caso de problemas para enviar el mensaje, contáctame directamente:</p>
          <div className="d-flex flex-column gap-2">
            <Button
              variant="outline-primary"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=gabrielhaurane@gmail.com",
                  "_blank"
                )
              }
            >
              📧 Enviar por correo electrónico
            </Button>
            <Button
              variant="outline-success"
              onClick={() =>
                window.open("https://wa.me/543816970612", "_blank")
              }
            >
              💬 Contactar por WhatsApp
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormularioPosible;
