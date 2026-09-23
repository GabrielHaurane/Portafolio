import { useTranslation } from "react-i18next";
import miFoto from "../../assets/fotoDePerfil.jpg";
import LoadingImage from "../../common/LoadingImage";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="home-section hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-8 order-2 order-lg-1">
            <p className="hero-eyebrow mb-3">{t("home_page.hero.eyebrow")}</p>
            <h1 className="hero-title fw-bold mb-3">{t("home_page.hero.title")}</h1>
            <p className="fs-5 mb-4">{t("home_page.hero.subtitle")}</p>
            <div className="d-flex flex-wrap gap-2">
              <a href="#proyectos" className="btn btn-lg btn-outline-violet">
                {t("home_page.hero.cta_projects")}
              </a>
              <a
                href={t("menu.cv_url")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-outline-neutral"
              >
                <i className="bi bi-file-earmark-pdf me-1"></i>
                {t("menu.cv")}
              </a>
              <a href="#contacto" className="btn btn-lg btn-link-neutral">
                {t("home_page.hero.cta_contact")}
                <i className="bi bi-arrow-down ms-1"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 order-1 order-lg-2">
            <LoadingImage
              src={miFoto}
              alt={t("a11y.profile_photo")}
              className="hero-photo"
              wrapperClassName="hero-photo-frame mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
