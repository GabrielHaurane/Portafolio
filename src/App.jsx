import Menu from "./components/common/Menu";
import Home from "./components/pages/Home";
import Proyectos from "./components/pages/Proyectos";
import Contacto from "./components/pages/Contacto";
import Tecnologias from "./components/pages/Tecnologias";
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/common/Footer";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
    <Menu></Menu>
    <main className="flex-grow-1 mainColor" style={{height: "100%"}} >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/proyectos" element={<Proyectos />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/tecnologias" element={<Tecnologias />} />
      </Routes>
    </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
