import { useTranslation } from "react-i18next";
import TechnologyGrid from "./tecnologias/TechnologyGrid";

const Tecnologias = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-4">
      <h1>{t("technologies_page.title")}</h1>
      <p className="fs-5">{t("technologies_page.description")}</p>
      <TechnologyGrid />
    </div>
  );
};

export default Tecnologias;
