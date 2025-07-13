import React from "react";
import { NavLink, Nav } from "react-bootstrap";
import miFoto from "./../assets/fotoDePerfil.jpg";
import LanguageSwitcher from "../LanguageSwitcher";

const Menu = () => {
  return (
    <div className="sidebar d-flex flex-column justify-content-between p-3 text-white" style={{ height: "100vh" }}>
      <div>
        <img src={miFoto} alt="Tu Foto" className="sidebar-img mb-4" />

        <Nav className="flex-column">
          <NavLink
            
            className="nav-link text-white"
            to="/"
          >
            Inicio
          </NavLink>
          <NavLink
            
            className="nav-link text-white"
            to="/proyectos"
          >
            Proyectos
          </NavLink>
          <NavLink
            
            className="nav-link text-white"
            to="/cv"
          >
            CV
          </NavLink>
        </Nav>
      </div>

      <div className="d-flex flex-column align-items-center gap-3">
        {/* Botón de idioma */}
        <LanguageSwitcher />

        {/* Redes sociales */}
        <div className="socialIcons d-flex gap-3">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="fs-4 text-white"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="fs-4 text-white"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
