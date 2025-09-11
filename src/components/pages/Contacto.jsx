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
      <div className="d-flex justify-content-center w-100 mb-3">
        <h1 className="col-8 col-md-10">{t("information.title")}</h1>
      </div>
      <div className="d-flex justify-content-center col-12 col-lg-9 col-xl-10 px-2 pt-3 pe-lg-3 pe-xl-4 mb-4">
        <div className=" border p-4 rounded shadow d-flex flex-column gap-3 col-8 col-md-11 col-xl-10">
          <div>
            <span className="me-2 fw-bold fs-5">{t("information.email")}:</span>
            <Button
              className="btn-outline-violet me-2 col-12 col-md-4 col-xl-3 mb-2 mb-md-0"
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
              className="btn-outline-violet col-12 col-md-4 col-xl-3"
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
              className="btn-outline-violet me-2 col-12 col-md-3 mb-2 mb-md-0 col-xl-2"
              size="md"
              onClick={() =>
                window.open("https://wa.me/543816970612", "_blank")
              }
            >
              {t("information.sendWhatsApp")}
            </Button>
            <Button
              className="btn-outline-violet col-12 col-md-3 col-xl-2"
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
      <div className="d-flex flex-column justify-content-center mb-3">
        <div className="d-flex col-11 col-lg-9 col-xl-10 justify-content-center ps-1 ps-lg-1 ps-xl-5">
          <h4 className="d-flex justify-content-center col-11">{t("information.description")}</h4>
        </div>
        <div className="d-flex justify-content-center col-12 col-lg-9 col-xl-10 pt-3">
        <FormularioPosible
          name={t("form.name")}
          email={t("form.email")}
          message={t("form.message")}
          button={t("form.button")}
          successMessage={t("form.success")}
          errorMessage={t("form.error")}
        />
        </div>
      </div>
    </>
  );
};

export default Contacto;
