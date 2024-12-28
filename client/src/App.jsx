import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Header from "./components/Header/Header";
import FooterCom from "./components/Footer/FooterCom";
import About from "./pages/About";
import Products from "./pages/Products";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import Projectdetail from "./pages/Projectdetail";
import PsylliumSeed from "./components/productItems/PsylliumSeed";
import PsylliumHusk from "./components/productItems/PsylliumHusk";
import AnimalFeed from "./components/productItems/AnimalFeed";
import CuminSeedPowder from "./components/productItems/CuminSeedPowder";
import GuarGumPowder from "./components/productItems/GuarGumPowder";
import AshwagandhaRoot from "./components/productItems/AshwagandhaRoot";
import FenugreekSeed from "./components/productItems/FenugreekSeed";
import SteviaPowder from "./components/productItems/SteviaPowder";
import SennaPowder from "./components/productItems/SennaPowder";
import CorianderPowder from "./components/productItems/CorianderPowder";
import MoringaPowder from "./components/productItems/MoringaPowder";
import PsylliumHuskPowder from "./components/productItems/PsylliumHuskPowder";
import { useEffect } from "react";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Header />
      <div style={{ marginTop: "1px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/psylliumSeed" element={<PsylliumSeed/>}/>
          <Route path="/products/psylliumHusk" element={<PsylliumHusk/>}/>
          <Route path="/products/psylliumHuskPowder" element={<PsylliumHuskPowder/>}/>
          <Route path="/products/animalFeed" element={<AnimalFeed/>}/>
          <Route path="/products/cuminSeedPowder" element={<CuminSeedPowder/>}/>
          <Route path="/products/guarGumPowder" element={<GuarGumPowder/>}/>
          <Route path="/products/ashwagandha" element={<AshwagandhaRoot/>}/>
          <Route path="/products/moringaPowder" element={<MoringaPowder/>}/>
          <Route path="/products/fenugreek" element={<FenugreekSeed/>}/>
          <Route path="/products/steviaPowder" element={<SteviaPowder/>}/>
          <Route path="/products/sennaPowder" element={<SennaPowder/>}/>
          <Route path="/products/coriander" element={<CorianderPowder/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/project/:projectId" element={<Projectdetail/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>

      <FooterCom />
    </BrowserRouter>
  );
}

export default App;
