import { useTranslation } from "react-i18next";
import TecIcons from "../tecnologias/TecIcons";
import LoadingImage from "../../common/LoadingImage";
const ProjectCardTec = ({
  img,
  title,
  featuresTitle,
  statusItem,
  bool,
  features,
  githubLink,
  liveLink,
  technologiesTitle,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className="card text-white shadow flex-md-row flex-md-wrap flex-column h-50 mb-4"
      style={{
        backgroundColor: "var(--color-card)",
        borderRadius: "40px",
      }}
    >
      {/* Imagen a la izquierda en pantallas medianas en adelante */}
      <div className="rounded-top-1 card-img-left d-flex justify-content-center align-items-center col-md-4 col-12 w-100">
        <LoadingImage
          src={img}
          className="img-fluid w-100 h-100 rounded-top-5 border-top border-black"
          alt={title}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Contenido a la derecha */}
      <div className="card-body d-flex flex-column justify-content-center col-md-8">
        <h2 className="card-title fw-bold">{title}</h2>
        <h4>{bool}: {statusItem}</h4>
        <h4>{featuresTitle}:</h4>
        <ul className="card-text fs-5">
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {technologiesTitle && <h4>{t("project_tech_title")}:</h4>}
        <div className="w-100">
          <TecIcons />
        </div>
        <div className="mt-3 d-flex gap-2 d-flex justify-content-center">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light "
            >
              <i className="bi bi-github me-1"></i>
              {t("button_github")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardTec;
