import { useTranslation } from "react-i18next";
import AppTechnologyIcons from "../tecnologias/AppTechnologyIcons";
import LoadingIframe from "../../common/LoadingIframe";

const ProjectCardApp = ({ title, featuresTitle, features, githubLink }) => {
  const { t } = useTranslation();

  return (
    <div className="card text-white shadow mb-4" style={{ backgroundColor: "var(--color-card)", borderRadius: "40px" }}>
      <LoadingIframe
        src="https://www.loom.com/embed/ea776b1232bc45fc9f535fce52f77298"
        title={title}
        frameBorder="0"
        allow="fullscreen"
        allowFullScreen
      />
      <div className="card-body d-flex flex-column">
        <h2 className="card-title fw-bold">{title}</h2>
        <h4>{featuresTitle}:</h4>
        <ul className="card-text fs-5">
          {features.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <h4>{t("project_tech_title")}:</h4>
        <AppTechnologyIcons />
        <div className="mt-3 d-flex justify-content-center">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
            <i className="bi bi-github me-1"></i>
            {t("button_github")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardApp;
