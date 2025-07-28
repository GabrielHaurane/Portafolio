import { useState } from "react";
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
  const [count, setCount] = useState(0);
  return (
    <div className="d-flex flex-column min-vh-100">
    <Menu></Menu>
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
