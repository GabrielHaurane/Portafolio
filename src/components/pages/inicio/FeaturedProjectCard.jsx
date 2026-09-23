import { useTranslation } from "react-i18next";
import LoadingImage from "../../common/LoadingImage";
import TechChips from "./TechChips";

// project: una entrada de featuredProjects (data.jsx)
// wide: tarjeta horizontal a todo el ancho (imagen a la izquierda desde lg)
const FeaturedProjectCard = ({ project, wide = false }) => {
  const { t } = useTranslation();
  const title = t(project.titleKey);

  const media = (
    <div className="position-relative">
      <LoadingImage
        src={project.img}
        alt={t("home_page.featured.screenshot_alt", { title })}
        className="content-card-img"
        loading="lazy"
      />
      {project.videoLink && (
        <a
          href={project.videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="play-overlay"
          aria-label={t("home_page.featured.play_video", { title })}
        >
          <span className="play-overlay-icon" aria-hidden="true">
            <i className="bi bi-play-fill"></i>
          </span>
        </a>
      )}
    </div>
  );

  const body = (
    <div className="p-4 d-flex flex-column flex-grow-1 gap-3 h-100">
      <h3 className="h4 fw-bold mb-0">
        {title}
        {project.badgeKey && <span className="version-badge ms-2">{t(project.badgeKey)}</span>}
      </h3>
      <p className="mb-0">{t(project.summaryKey)}</p>
      <TechChips technologies={project.technologies} />
      <div className="mt-auto pt-2 d-flex flex-wrap gap-2">
        {project.videoLink && (
          <a
            href={project.videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-violet"
          >
            <i className="bi bi-play-circle me-1"></i>
            {t("common.watch_video")}
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-violet"
          >
            <i className="bi bi-box-arrow-up-right me-1"></i>
            {t("button_live")}
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-light"
          >
            <i className="bi bi-github me-1"></i>
            {t("button_github")}
          </a>
        )}
      </div>
    </div>
  );

  if (wide) {
    return (
      <article className="content-card text-white shadow">
        <div className="row g-0 align-items-center">
          <div className="col-lg-7">{media}</div>
          <div className="col-lg-5 align-self-stretch">{body}</div>
        </div>
      </article>
    );
  }

  return (
    <article className="content-card h-100 d-flex flex-column text-white shadow">
      {media}
      {body}
    </article>
  );
};

export default FeaturedProjectCard;
