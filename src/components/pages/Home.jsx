import { useTranslation } from "react-i18next";
import ProjectCardApp from "./cuadroProyectos/ProjectCardApp";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="col-12 col-lg-8 col-xl-9 px-2 pt-3 pe-lg-0 pe-xl-1">
      <div className=" text-start ">
        <h1>{t("greeting")}</h1>
        <h2>{t("name")}</h2>
        <p className="fs-5">{t("description")}</p>
        <p className="fs-5">{t("description2")}</p>
        <h2>{t("projects_intro")}</h2>
        <div className="container py-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="w-100">
              <ProjectCardApp
                title={t("gh_app.title")}
                featuresTitle={t("gh_app.features_title")}
                features={t("gh_app.features", { returnObjects: true })}
                githubLink="https://github.com/GabrielHaurane/GHProgramingApp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
