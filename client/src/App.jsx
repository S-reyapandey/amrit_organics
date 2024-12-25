import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Header from "./components/Header/Header";
import FooterCom from "./components/Footer/FooterCom";
import About from "./pages/About";
import Products from "./pages/Products";
import Project from "./pages/Project";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ marginTop: "1px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </div>

      <FooterCom />
    </BrowserRouter>
  );
}

export default App;
