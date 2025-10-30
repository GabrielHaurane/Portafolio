import { useTranslation } from "react-i18next";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import miFoto from "./../assets/fotoDePerfil.jpg";
import LanguageSwitcher from "../LanguageSwitcher";

const Menu = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Sidebar fijo - escritorio */}
      <div className="sidebar d-none d-lg-flex flex-column justify-content-between p-3 text-white position-fixed" style={{ width: "250px", height: "100vh" }}>
        <div>
          <img src={miFoto} alt="Tu Foto" className="sidebar-img mb-4" />

          <Nav className="flex-column">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link text-white ${isActive ? "active" : ""}`}
            >
              {t("menu.home")}
            </NavLink>
            <NavLink
              to="/proyectos"
              className={({ isActive }) => `nav-link text-white ${isActive ? "active" : ""}`}
            >
              {t("menu.projects")}
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) => `nav-link text-white ${isActive ? "active" : ""}`}
            >
              {t("menu.contact")}
            </NavLink>
            <a
              href={t("menu.drive")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light mt-3"
            >
              <i className="bi bi-file-earmark-pdf me-1"></i>
              {t("menu.cv")}
            </a>
          </Nav>
        </div>

        <div className="d-flex flex-column align-items-center gap-3">
          <LanguageSwitcher />
          <div className="socialIcons d-flex gap-3">
            <a href="https://github.com/GabrielHaurane" target="_blank" rel="noopener noreferrer" className="fs-4 text-white">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/gabriel-haurane-b117a627b/" target="_blank" rel="noopener noreferrer" className="fs-4 text-white">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Botón hamburguesa - móvil */}
      <button
        className="btn btn-light hamburger-btn d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasMenu"
        aria-controls="offcanvasMenu"
        style={{ position: "fixed", top: "1rem", right: "1rem", zIndex: 1050 }}
      >
        ☰
      </button>

      {/* Offcanvas menú - móvil */}
      <div
        className="offcanvas offcanvas-end menuFondoColor text-white"
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
      >
        <div className="offcanvas-body d-flex flex-column justify-content-between">
          <div>
            <img src={miFoto} alt="Tu Foto" className="sidebar-img mb-4" />

            <Nav className="flex-column">
              <NavLink to="/" className="nav-link text-white" >
              <div data-bs-dismiss="offcanvas">
                {t("menu.home")}
              </div>
              </NavLink>
              <NavLink to="/proyectos" className="nav-link text-white" >
              <div data-bs-dismiss="offcanvas">
                {t("menu.projects")}
              </div>
              </NavLink>
              <NavLink to="/contacto" className="nav-link text-white" >
              <div data-bs-dismiss="offcanvas">
                {t("menu.contact")}
              </div>
              </NavLink>
              <a
                href={t("menu.drive")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light mt-3"
              >
                <i className="bi bi-file-earmark-pdf me-1"></i>
                {t("menu.cv")}
              </a>
            </Nav>
          </div>

          <div className="d-flex flex-column align-items-center gap-3 mt-4">
            <LanguageSwitcher />
            <div className="socialIcons d-flex gap-3">
              <a href="https://github.com/GabrielHaurane" target="_blank" rel="noopener noreferrer" className="fs-4 text-white">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/gabriel-haurane-b117a627b/" target="_blank" rel="noopener noreferrer" className="fs-4 text-white">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
