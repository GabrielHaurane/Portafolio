import { useTranslation } from "react-i18next";
import TechnologyGrid from "./tecnologias/TechnologyGrid";

const Tecnologias = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex align-content-start flex-column col-12 col-lg-9 col-xl-10 px-2 pt-3 pe-lg-3 pe-xl-4">
      <h1>{t("technologies_page.title")}</h1>
      <p className="fs-5">{t("technologies_page.description")}</p>
      <TechnologyGrid />
    </div>
  );
};

export default Tecnologias;
