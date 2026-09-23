import { useTranslation } from "react-i18next";
import { experiences } from "../../../data/data.jsx";
import LoadingImage from "../../common/LoadingImage";
import TechChips from "./TechChips";

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section id="experiencia" className="home-section">
      <div className="container">
        <h2 className="fw-bold mb-4">{t("experience.title")}</h2>
        <div className="d-flex flex-column gap-4">
          {experiences.map((experience) => {
            const company = t(experience.companyKey);
            return (
              <article key={experience.id} className="content-card text-white shadow">
                <div className="row g-0">
                  <div className="col-lg-5">
                    <LoadingImage
                      src={experience.img}
                      alt={t("home_page.experience.screenshot_alt", { company })}
                      className="content-card-img-fill"
                      wrapperClassName="h-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-lg-7">
                    <div className="p-4 d-flex flex-column gap-3 h-100">
                      <div>
                        <h3 className="h4 fw-bold mb-1">{company}</h3>
                        <p className="mb-0 fw-semibold">{t(experience.roleKey)}</p>
                        <p className="mb-0 small">{t(experience.durationKey)}</p>
                      </div>
                      <ul className="mb-0">
                        {t(experience.descriptionKey, { returnObjects: true }).map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <TechChips technologies={experience.technologies} />
                      {experience.liveLink && (
                        <div className="mt-auto pt-2">
                          <a
                            href={experience.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-violet"
                          >
                            <i className="bi bi-box-arrow-up-right me-1"></i>
                            {t("button_live")}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
