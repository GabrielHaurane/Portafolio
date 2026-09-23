import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { evidenceSources, stackEvidence, techCatalog } from "../../../data/data.jsx";

const StackEvidence = () => {
  const { t } = useTranslation();

  return (
    <section id="stack" className="home-section home-section-alt">
      <div className="container">
        <h2 className="fw-bold">{t("home_page.stack.title")}</h2>
        <p className="fs-5 section-lead mb-4">{t("home_page.stack.subtitle")}</p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
          {stackEvidence
            .filter((item) => techCatalog[item.tech])
            .map((item) => {
              const { Icon, title } = techCatalog[item.tech];
              return (
                <div className="col" key={item.tech}>
                  <div className="content-card h-100 p-3">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="stack-icon">
                        <Icon size={24} aria-hidden="true" />
                      </span>
                      <h3 className="h5 mb-0">{title}</h3>
                    </div>
                    <p className="small mb-1">{t("home_page.stack.used_in")}</p>
                    <ul className="list-unstyled d-flex flex-wrap gap-1 mb-0">
                      {item.usedIn
                        .filter((source) => evidenceSources[source])
                        .map((source) => (
                          <li key={source} className="evidence-tag">
                            {t(evidenceSources[source])}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="text-center mt-5">
          <Link to="/tecnologias" className="btn btn-outline-neutral">
            {t("home_page.stack.see_all")}
            <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StackEvidence;
