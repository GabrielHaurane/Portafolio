import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { contactLinks } from "../../../data/data.jsx";

const ContactSection = () => {
  const { t } = useTranslation();

  const channels = [
    { href: contactLinks.emailCompose, icon: "bi-envelope", labelKey: "home_page.contact.email" },
    { href: contactLinks.whatsapp, icon: "bi-whatsapp", labelKey: "home_page.contact.whatsapp" },
    { href: contactLinks.linkedin, icon: "bi-linkedin", labelKey: "home_page.contact.linkedin" },
  ];

  return (
    <section id="contacto" className="home-section">
      <div className="container text-center">
        <h2 className="fw-bold">{t("home_page.contact.title")}</h2>
        <p className="fs-5 section-lead mx-auto mb-4">{t("home_page.contact.text")}</p>
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {channels.map((channel) => (
            <a
              key={channel.labelKey}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-violet"
            >
              <i className={`bi ${channel.icon} me-1`}></i>
              {t(channel.labelKey)}
            </a>
          ))}
        </div>
        <Link to="/contacto" className="btn btn-outline-light">
          {t("home_page.contact.cta_form")}
          <i className="bi bi-arrow-right ms-1"></i>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
