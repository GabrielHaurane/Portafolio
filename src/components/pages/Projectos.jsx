import { useTranslation } from "react-i18next";
import hotelCodeImg from "./../../img/hotelCode.png";
import recetasHaurane from "./../../img/recetasHaurane.png";
import swaplyar from "../../img/swaplyar.png";
import ProjectCardTec from "./cuadroProyectos/ProjectCardTec";
import ProjectCardPas from "./cuadroProyectos/ProjectCardPas";
const Projectos = () => {
  const { t } = useTranslation();
  return (
    <div className=" d-flex align-content-start flex-column col-12 col-lg-9 col-xl-10 px-2 pt-3 pe-lg-3 pe-xl-4 ">
      <div className=" text-start">
        <h1>{t("title_projetcs")}</h1>
        <div className="container py-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="w-100 h-100">
              <ProjectCardTec
                img={hotelCodeImg}
                title={t("project1_title")}
                featuresTitle={t("project1_features_title")}
                features={t("project1_features", { returnObjects: true })}
                technologiesTitle={t("technologiesTitle")}
                githubLink="https://github.com/GabrielHaurane/Frontend-Proyecto-Final.git"
                liveLink="https://hotel-code.netlify.app"
              />
              
              <ProjectCardTec
                img={recetasHaurane}
                title={t("project2_title")}
                featuresTitle={t("project2_features_title")}
                features={t("project2_features", { returnObjects: true })}
                technologiesTitle={t("technologiesTitle")}
                githubLink="https://github.com/GabrielHaurane/blog-recetas-front.git"
                liveLink="https://las-recetas-de-haurane.netlify.app"
              />
              <h2 className="my-4">{t("experience.title")}</h2>
              <ProjectCardPas
              img={swaplyar}
                featuresTitle={t("experience.company")}
                duration={t("experience.duration")}
                role={t("experience.role")}
                features={t("experience.description", { returnObjects: true })}
                technologiesTitle={t("experience.technologies")}
                liveLink="https://www.swaplyar.com/es/como-usar-swaplyar"
                ></ProjectCardPas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectos;
