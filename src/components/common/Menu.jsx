import { useTranslation } from "react-i18next";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { contactLinks } from "../../data/data.jsx";

// Para agregar una página: sumar su ruta en App.jsx y una entrada acá.
const navItems = [
  { to: "/", labelKey: "menu.home" },
  { to: "/proyectos", labelKey: "menu.projects" },
  { to: "/tecnologias", labelKey: "menu.technologies" },
  { to: "/contacto", labelKey: "menu.contact" },
];

const Menu = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <Navbar
      expand="lg"
      sticky="top"
      collapseOnSelect
      className="site-navbar"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          {t("menu.brand")}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" aria-label={t("menu.toggle")} />

        <Navbar.Collapse id="main-navbar">
          {/* activeKey sale de la URL: si no, Nav recuerda el último link clickeado
              y queda marcado aunque se navegue con un <Link> de otra parte. */}
          <Nav activeKey={pathname} className="ms-auto align-items-lg-center gap-lg-3">
            {navItems.map((item) => (
              <Nav.Link
                key={item.to}
                as={NavLink}
                to={item.to}
                end={item.to === "/"}
                eventKey={item.to}
              >
                {t(item.labelKey)}
              </Nav.Link>
            ))}
          </Nav>

          <div className="d-flex flex-wrap align-items-center gap-3 ms-lg-4 py-3 py-lg-0">
            <a
              href={t("menu.drive")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-violet"
            >
              <i className="bi bi-file-earmark-pdf me-1"></i>
              {t("menu.cv")}
            </a>
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="fs-5 nav-icon-link"
              aria-label={t("a11y.github_profile")}
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="fs-5 nav-icon-link"
              aria-label={t("a11y.linkedin_profile")}
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
