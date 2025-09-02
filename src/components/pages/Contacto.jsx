import { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import Form from "./formulario/Form";
import { useTranslation } from "react-i18next";
import FormularioPosible from "./formulario/FormularioPosible";
const Contacto = () => {
  const [copied, setCopied] = useState("");
  const { t } = useTranslation();

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(""), 2000);
    });
  };
  return (
    <>
      <div className="d-flex justify-content-center w-75 mb-3">
        <h1 className="ms-5">{t("information.title")}</h1>
      </div>
      <div className="d-flex justify-content-center w-75">
        <div className="ms-5 border p-4 rounded shadow w-50 d-flex flex-column gap-3">
          <div>
            <span className="me-2 fw-bold fs-5">{t("information.email")}:</span>
            <Button
              className="btn-outline-violet me-2"
              size="md"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=gabrielhaurane@gmail.com",
                  "_blank"
                )
              }
            >
              {t("information.sendmail")}
            </Button>
            <Button
              className="btn-outline-violet"
              size="md"
              onClick={() =>
                handleCopy(
                  "gabrielhaurane@gmail.com",
                  t("information.copEmail")
                )
              }
            >
              {t("information.copyEmail")}
            </Button>
          </div>

          <div>
            <span className="me-2 fw-bold fs-5">{t("information.phone")}:</span>
            <Button
              className="btn-outline-violet me-2"
              size="md"
              onClick={() =>
                window.open("https://wa.me/543816970612", "_blank")
              }
            >
              {t("information.sendWhatsApp")}
            </Button>
            <Button
              className="btn-outline-violet"
              size="md"
              onClick={() =>
                handleCopy("+54 381 6970612", t("information.copPhone"))
              }
            >
              {t("information.copyPhone")}
            </Button>
          </div>
          {copied && (
            <Alert style={{ background: "#ebdafa" }} className="mt-3 p-2">
              {copied} 📋
            </Alert>
          )}
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center w-75 mb-3">
        <div className="d-flex justify-content-center">
          <h4 className="ms-5 mt-5 w-75">{t("information.description")}</h4>
        </div>
        <FormularioPosible
          name={t("form.name")}
          email={t("form.email")}
          message={t("form.message")}
          button={t("form.button")}
          successMessage={t("form.success")}
          errorMessage={t("form.error")}
        />
      </div>
    </>
  );
};

export default Contacto;
