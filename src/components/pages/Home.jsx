import React from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "./cuadroProyectos/ProjectCard";
import hotelCodeImg from "./../../img/hotelCode.png";
import recetasHaurane from "./../../img/recetasHaurane.png";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div className=" d-flex align-content-start flex-column w-75 ps-5 pt-3 ">
      <div className=" text-start">
        <h2>{t("greeting")}</h2>
        <h1>{t("name")}</h1>
        <h3>{t("title")}</h3>
        <p>{t("description")}</p>
        <p>{t("description2")}</p>
        <h2>{t("projects_intro")}</h2>
        <div className="container py-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="w-100">
              <ProjectCard
                img={hotelCodeImg}
                title={t("project1_title")}
                featuresTitle={t("project1_features_title")}
                features={t("project1_features", { returnObjects: true })}
                githubLink="https://hotel-code.netlify.app"
                liveLink="https://github.com/GabrielHaurane/Frontend-Proyecto-Final.git"
              />
              <ProjectCard
                img={recetasHaurane}
                title={t("project2_title")}
                featuresTitle={t("project2_features_title")}
                features={t("project2_features", { returnObjects: true })}
                githubLink="https://github.com/GabrielHaurane/blog-recetas-front.git"
                liveLink="https://las-recetas-de-haurane.netlify.app"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
