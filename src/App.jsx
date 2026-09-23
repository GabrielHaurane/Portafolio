import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";
import Proyectos from "./components/pages/Proyectos";
import Contacto from "./components/pages/Contacto";
import Tecnologias from "./components/pages/Tecnologias";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const { pathname } = useLocation();

  // Con el Home largo, al cambiar de página se vuelve arriba (las anclas #… no cambian el pathname).
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Menu />
      <main className="flex-grow-1 mainColor">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
