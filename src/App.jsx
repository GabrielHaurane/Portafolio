import { useState, useEffect } from "react";
import Menu from "./components/common/menu";
import Home from "./components/pages/Home";
import Projectos from "./components/pages/Projectos";
import Contacto from "./components/pages/Contacto";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/common/Footer";
function App() {
    const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
   useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) setMenuOpen(false); // Cierra menú si se pasa a desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="d-flex flex-column min-vh-100">
     {/* Botón hamburguesa móvil */}
        {isMobile && (
          <button
            className="menu-toggle-btn"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </button>
        )}

        {/* Contenedor menú con clase que controla la visibilidad */}
        <div className={menuOpen ? "sidebar open" : "sidebar"}>
          <Menu />
        </div>
    <main className="flex-grow-1 mainColor" style={{height: "100%"}} >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/proyectos" element={<Projectos />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
    </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
