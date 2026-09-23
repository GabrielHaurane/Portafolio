import { useTranslation } from "react-i18next";
import AppTechnologyIcons from "../tecnologias/AppTechnologyIcons";
import LoadingIframe from "../../common/LoadingIframe";
import { techCatalog } from "../../../data/data.jsx";

const DEFAULT_VIDEO_SRC = "https://www.loom.com/embed/ea776b1232bc45fc9f535fce52f77298";

// sections: [{ title, items: [string] }] — se recorre en orden.
// technologies: claves de techCatalog (opcional; sin ella, el stack de GHProgrammingApp).
const ProjectCardApp = ({
  title,
  sections = [],
  githubLink,
  videoLink,
  videoSrc = DEFAULT_VIDEO_SRC,
  technologies,
}) => {
  const { t } = useTranslation();
  const techItems = technologies
    ?.filter((key) => techCatalog[key])
    .map((key) => {
      const { Icon, title: techTitle } = techCatalog[key];
      return { icon: <Icon size={30} />, title: techTitle };
    });

  return (
    <div className="card shadow mb-4" style={{ backgroundColor: "var(--color-card)", borderRadius: "40px" }}>
      <LoadingIframe
        src={videoSrc}
        title={title}
        frameBorder="0"
        allow="fullscreen; picture-in-picture; encrypted-media; clipboard-write"
        referrerPolicy="strict-origin-when-cross-origin"
        loading="lazy"
        allowFullScreen
      />
      <div className="card-body d-flex flex-column">
        <h2 className="card-title fw-bold">{title}</h2>
        {sections.map((section) => (
          <div key={section.title}>
            <h4>{section.title}:</h4>
            <ul className="card-text fs-5">
              {section.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
        <h4>{t("project_tech_title")}:</h4>
        {techItems ? <AppTechnologyIcons items={techItems} /> : <AppTechnologyIcons />}
        <div className="mt-3 d-flex flex-wrap gap-2 justify-content-center">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-neutral">
            <i className="bi bi-github me-1"></i>
            {t("button_github")}
          </a>
          {videoLink && (
            <a href={videoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-violet">
              <i className="bi bi-play-circle me-1"></i>
              {t("common.watch_video")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardApp;
