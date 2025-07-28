import React from 'react';
import { useTranslation } from "react-i18next";
import PasIcons from '../tecnologias/PasIcons';
const ProjectCardPas = ({ img, title, featuresTitle, features, githubLink, liveLink, technologiesTitle, role, duration  }) => {
     const { t } = useTranslation();
        return (
             <div
          className="card text-white shadow flex-md-row flex-md-wrap flex-column h-50 mb-4"
          style={{
            backgroundColor: "#1e082c",
            borderRadius: '40px'
          }}
        >
          <div className="card-img-left d-flex justify-content-center align-items-center col-md-4 col-12 w-100" >
            <img
              src={img}
              className="img-fluid w-100 h-100"
              alt={title}
              style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: '40px 40px 0px 0px' }}
            />
          </div>
          <div className="card-body d-flex flex-column justify-content-center col-md-8">
            <h2 className="card-title fw-bold">{title}</h2>
            <h5>{role}</h5>
            <h6>{duration}</h6>
            <h4>{featuresTitle}:</h4>
            <ul className="card-text fs-5">
              {features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {technologiesTitle && <h4>{t("project_tech_title")}:</h4>}
            <div className='w-100'>
              <PasIcons />
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
};

export default ProjectCardPas;