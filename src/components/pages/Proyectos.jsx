import { useTranslation } from "react-i18next";
import hotelCodeImg from "./../../img/hotelCode.png";
import recetasHaurane from "./../../img/recetasHaurane.png";
import swaply from "../../img/swaply.png";
import ProjectCardTec from "./cuadroProyectos/ProjectCardTec";
import ProjectCardPas from "./cuadroProyectos/ProjectCardPas";
import ProjectCardApp from "./cuadroProyectos/ProjectCardApp";
import { featuredProjects } from "../../data/data.jsx";

const inventoryApp = featuredProjects.find((project) => project.id === "inventory_app");

const Proyectos = () => {
  const { t } = useTranslation();
  return (
    <div className="container py-4">
      <div className=" text-start">
        <h1>{t("title_projetcs")}</h1>
        <div className="container py-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="w-100 h-100">
              <ProjectCardApp
                title={t(inventoryApp.titleKey)}
                sections={[
                  { title: t("inventory_app.problem_title"), items: [t("inventory_app.problem")] },
                  { title: t("inventory_app.roles_title"), items: t("inventory_app.roles", { returnObjects: true }) },
                  { title: t("inventory_app.highlights_title"), items: t("inventory_app.highlights", { returnObjects: true }) },
                  { title: t("bool"), items: [t("inventory_app.status")] },
                ]}
                technologies={inventoryApp.technologies}
                videoSrc={inventoryApp.embedSrc}
                videoLink={inventoryApp.videoLink}
                githubLink={inventoryApp.githubLink}
              />
              <ProjectCardApp
                title={t("gh_app.title")}
                sections={[
                  { title: t("gh_app.features_title"), items: t("gh_app.features", { returnObjects: true }) },
                ]}
                githubLink="https://github.com/GabrielHaurane/GHProgramingApp"
              />
              <ProjectCardTec
                img={hotelCodeImg}
                title={t("project1_title")}
                bool={t("bool")}
                statusItem={t("status")}
                featuresTitle={t("project1_features_title")}
                features={t("project1_features", { returnObjects: true })}
                technologiesTitle={t("technologiesTitle")}
                githubLink="https://github.com/GabrielHaurane/Frontend-Proyecto-Final.git"
                liveLink="https://hotel-code.netlify.app"
              />

              <ProjectCardTec
                img={recetasHaurane}
                title={t("project2_title")}
                bool={t("bool")}
                statusItem={t("status")}
                featuresTitle={t("project2_features_title")}
                features={t("project2_features", { returnObjects: true })}
                technologiesTitle={t("technologiesTitle")}
                githubLink="https://github.com/GabrielHaurane/blog-recetas-front.git"
                liveLink="https://las-recetas-de-haurane.netlify.app"
              />
              <h2 className="my-4">{t("experience.title")}</h2>
              <ProjectCardPas
                img={swaply}
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

export default Proyectos;
