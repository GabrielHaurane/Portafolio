import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { featuredProjects } from "../../../data/data.jsx";
import FeaturedProjectCard from "./FeaturedProjectCard";

// En el Home solo van los proyectos con featured: true (el resto vive en /proyectos).
// Los que tienen highlight van primero, a todo el ancho; el resto en grilla.
const homeProjects = featuredProjects.filter((project) => project.featured);
const highlightedProjects = homeProjects.filter((project) => project.highlight);
const gridProjects = homeProjects.filter((project) => !project.highlight);

const FeaturedProjects = () => {
  const { t } = useTranslation();

  return (
    <section id="proyectos" className="home-section home-section-alt">
      <div className="container">
        <h2 className="fw-bold">{t("home_page.featured.title")}</h2>
        <p className="fs-5 section-lead mb-4">{t("home_page.featured.subtitle")}</p>
        {highlightedProjects.map((project) => (
          <div className="mb-4" key={project.id}>
            <FeaturedProjectCard project={project} wide />
          </div>
        ))}
        {gridProjects.length > 0 && (
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            {gridProjects.map((project) => (
              <div className="col" key={project.id}>
                <FeaturedProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-5">
          <Link to="/proyectos" className="btn btn-outline-neutral">
            {t("home_page.featured.see_all")}
            <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
