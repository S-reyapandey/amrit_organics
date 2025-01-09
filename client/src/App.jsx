import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Header from "./components/Header/Header";
import FooterCom from "./components/Footer/FooterCom";
import About from "./pages/About";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
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
import Blogdetail from "./pages/Blogdetail";
import Pagenotfound from "./pages/Pagenotfound";
import AdminLogin from "./pages/AdminLogin";
import CreatePost from "./pages/CreatePost";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import PsylliumBenefit from "./pages/PsylliumBenefit";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <div style={{ marginTop: "1px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy/>}/>
            <Route path="/terms&condition" element={<TermsOfUse/>}/>
            <Route path="/products/psylliumSeed" element={<PsylliumSeed />} />
            <Route path="/products/psylliumHusk" element={<PsylliumHusk />} />
            <Route
              path="/products/psylliumHuskPowder"
              element={<PsylliumHuskPowder />}
            />
            <Route path="/products/animalFeed" element={<AnimalFeed />} />
            <Route
              path="/products/cuminSeedPowder"
              element={<CuminSeedPowder />}
            />
            <Route path="/products/guarGumPowder" element={<GuarGumPowder />} />
            <Route path="/products/ashwagandha" element={<AshwagandhaRoot />} />
            <Route path="/products/moringaPowder" element={<MoringaPowder />} />
            <Route path="/products/fenugreek" element={<FenugreekSeed />} />
            <Route path="/products/steviaPowder" element={<SteviaPowder />} />
            <Route path="/products/sennaPowder" element={<SennaPowder />} />
            <Route path="/products/coriander" element={<CorianderPowder />} />
            <Route path="/psylliumBenefit" element={<PsylliumBenefit/>}/>
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:id" element={<Blogdetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Pagenotfound />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/create-post"
              element={<ProtectedRoute element={<CreatePost />} />}
            />
          </Routes>
        </div>

        <FooterCom />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
