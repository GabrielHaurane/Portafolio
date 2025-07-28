import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import miFoto from "./../assets/fotoDePerfil.jpg";
import LanguageSwitcher from "../LanguageSwitcher";

const Menu = () => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between p-3 text-white"
      style={{ height: "100vh" }}
    >
      <div>
        <img src={miFoto} alt="Tu Foto" className="sidebar-img mb-4" />

        <Nav className="flex-column">
          <NavLink to="/" className="nav-link text-white" >
            Inicio
          </NavLink>
          <NavLink to="/proyectos" className="nav-link text-white" >
            Proyectos
          </NavLink>
          <a
            href="https://drive.google.com/file/d/1njvBKiIo-DlJG2Tt9a25EvQ_y815qdZy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            <i className="bi bi-file-earmark-pdf me-1"></i>
            Ver CV
          </a>
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
