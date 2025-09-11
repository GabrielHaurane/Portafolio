import React from "react";
import { useTranslation } from "react-i18next";

function ProjectCard({
  img,
  title,
  featuresTitle,
  features,
  githubLink,
  liveLink,
}) {
  const { t } = useTranslation();
  return (
    <div
      className="card text-white shadow flex-lg-row flex-column h-100"
      style={{
        backgroundColor: "#1e082c",
        borderBottom: "5px solid #5f307c",
      }}
    >
      {/* Imagen a la izquierda en pantallas medianas en adelante */}
      <div className="card-img-left d-flex justify-content-center align-items-center col-lg-5 col-xl-4 col-12">
        <img
          src={img}
          className="img-fluid w-100 h-100 rounded-start"
          alt={title}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      {/* Contenido a la derecha */}
      <div className="card-body d-flex flex-column justify-content-center col-xl-8 col-lg-7 col-12">
        <h2 className="card-title fw-bold">{title}</h2>
        <h4>{featuresTitle}:</h4>
        <ul className="card-text fs-5">
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
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
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-violet"
            >
              <i className="bi bi-box-arrow-up-right me-1"></i>
              {t("button_live")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
