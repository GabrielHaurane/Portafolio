import { useForm } from 'react-hook-form';
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';

const FormularioPosible = () => {
  const { t } = useTranslation();
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
          <label htmlFor="name" className="form-label">{t("form.name")}</label>
          <input
            id="name"
            type="text"
            className="form-control"
            {...register("name", { 
              required: "form.validation.required",
              minLength: { value: 2, message: "form.validation.name_min" }
            })}
            disabled={isSubmitting}
          />
          {errors.name && <small className="text-danger">{t(errors.name.message)}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">{t("form.email")}</label>
          <input
            id="email"
            type="email"
            className="form-control"
            {...register("email", { 
              required: "form.validation.required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "form.validation.email_invalid"
              }
            })}
            disabled={isSubmitting}
          />
          {errors.email && <small className="text-danger">{t(errors.email.message)}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">{t("form.message")}</label>
          <textarea
            id="message"
            rows="4"
            className="form-control"
            {...register("message", { 
              required: "form.validation.required",
              minLength: { value: 10, message: "form.validation.message_min" }
            })}
            disabled={isSubmitting}
          />
          {errors.message && <small className="text-danger">{t(errors.message.message)}</small>}
        </div>

        <div className="d-flex justify-content-center">
          <button 
            type="submit" 
            className="btn btn-outline-violet"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("form.sending") : t("form.button")}
          </button>
        </div>
      </form>

      <Modal show={showModal && modalType === "success"} onHide={handleCloseModal} centered>
        <Modal.Header closeButton style={{ backgroundColor: "var(--color-success)", color: "white" }}>
          <Modal.Title>✅ {t("form.success")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">{t("form.success_body")}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModal}>
            {t("form.close")}
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal && modalType === "error"} onHide={handleCloseModal} centered>
        <Modal.Header closeButton style={{ backgroundColor: "var(--color-error)", color: "white" }}>
          <Modal.Title>❌ {t("form.error")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{t("form.error_body")}</p>
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
              📧 {t("form.send_email")}
            </Button>
            <Button
              variant="outline-success"
              onClick={() =>
                window.open("https://wa.me/543816970612", "_blank")
              }
            >
              💬 {t("form.send_whatsapp")}
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            {t("form.close")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormularioPosible;
