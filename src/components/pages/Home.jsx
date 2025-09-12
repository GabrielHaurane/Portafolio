import { useTranslation } from "react-i18next";
import ProjectCard from "./cuadroProyectos/ProjectCard";
import hotelCodeImg from "./../../img/hotelCode.png";
import recetasHaurane from "./../../img/recetasHaurane.png";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="col-12 col-lg-8 col-xl-9 px-2 pt-3 pe-lg-0 pe-xl-1">
      <div className=" text-start ">
        <h2>{t("greeting")}</h2>
        <h1>{t("name")}</h1>
        <h3>{t("title")}</h3>
        <p className="fs-5">{t("description")}</p>
        <p className="fs-5">{t("description2")}</p>
        <h2>{t("projects_intro")}</h2>
        <div className="container py-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="w-100">
              <ProjectCard
                img={hotelCodeImg}
                title={t("project1_title")}
                featuresTitle={t("project1_features_title")}
                features={t("project1_features", { returnObjects: true })}
                githubLink="https://github.com/GabrielHaurane/Frontend-Proyecto-Final.git"
                liveLink="https://hotel-code.netlify.app"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
