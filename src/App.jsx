import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";
import Proyectos from "./components/pages/Proyectos";
import Contacto from "./components/pages/Contacto";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const { pathname, hash } = useLocation();

  // Al cambiar de página se vuelve arriba. Si la URL trae un ancla (/#stack, que
  // llega también por la redirección de /tecnologias), se baja hasta esa sección:
  // el navegador no lo hace solo porque la sección se renderiza después de cargar.
  // .home-section tiene scroll-margin-top, así que la navbar sticky no la tapa.
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Menu />
      <main className="flex-grow-1 mainColor">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* La página Tecnologías se fusionó con la sección Stack del Inicio (Fase 3.6) */}
          <Route path="/tecnologias" element={<Navigate to="/#stack" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
