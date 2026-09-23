import { Button} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import FormularioPosible from "./formulario/FormularioPosible";
import { contactLinks } from "../../data/data.jsx";
const Contacto = () => {
  const { t } = useTranslation();
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-center w-100 mb-3">
        <h1 className="col-8 col-md-10">{t("information.title")}</h1>
      </div>
      <div className="d-flex justify-content-center w-100 pt-3 mb-4">
        <div className=" border p-4 rounded shadow d-flex flex-column gap-3 col-8 col-md-11 col-xl-8">
          <div>
            <span className="me-2 fw-bold fs-5">{t("information.email")}:</span>
            <Button
              className="btn-outline-violet me-2 col-12 col-md-4 col-xl-4 mb-2 mb-md-0"
              size="md"
              onClick={() => window.open(contactLinks.emailCompose, "_blank")}
            >
              {t("information.sendmail")}
            </Button>
          </div>

          <div>
            <span className="me-2 fw-bold fs-5">{t("information.phone")}:</span>
            <Button
              className="btn-outline-violet me-2 col-12 col-md-3 mb-2 mb-md-0 col-xl-4"
              size="md"
              onClick={() => window.open(contactLinks.whatsapp, "_blank")}
            >
              {t("information.sendWhatsApp")}
            </Button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center mb-3">
        <div className="d-flex justify-content-center">
          <h4 className="d-flex justify-content-center col-11">{t("information.description")}</h4>
        </div>
        <div className="d-flex justify-content-center w-100 pt-3">
        <FormularioPosible />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
