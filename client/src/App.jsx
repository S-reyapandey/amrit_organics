import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
const Home = lazy(() => import("./pages/Home"));
import "./App.css";
import Header from "./components/Header/Header";
import FooterCom from "./components/Footer/FooterCom";
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Blog = lazy(() => import("./pages/Blog"));
const PsylliumSeed = lazy(() =>
  import("./components/productItems/PsylliumSeed")
);
const PsylliumHusk = lazy(() =>
  import("./components/productItems/PsylliumHusk")
);
const AnimalFeed = lazy(() => import("./components/productItems/AnimalFeed"));
const CuminSeedPowder = lazy(() =>
  import("./components/productItems/CuminSeedPowder")
);
const GuarGumPowder = lazy(() =>
  import("./components/productItems/GuarGumPowder")
);
const AshwagandhaRoot = lazy(() =>
  import("./components/productItems/AshwagandhaRoot")
);
const FenugreekSeed = lazy(() =>
  import("./components/productItems/FenugreekSeed")
);
const SteviaPowder = lazy(() =>
  import("./components/productItems/SteviaPowder")
);
const SennaPowder = lazy(() => import("./components/productItems/SennaPowder"));
const CorianderPowder = lazy(() =>
  import("./components/productItems/CorianderPowder")
);
const MoringaPowder = lazy(() =>
  import("./components/productItems/MoringaPowder")
);
const PsylliumHuskPowder = lazy(() =>
  import("./components/productItems/PsylliumHuskPowder")
);
const Contact = lazy(() => import("./pages/Contact"));
const Blogdetail = lazy(() => import("./pages/Blogdetail"));
const Pagenotfound = lazy(() => import("./pages/Pagenotfound"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const CreatePost = lazy(() => import("./pages/CreatePost"));
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";
import { LoadingSpinner } from "./components/Loading/LoadingSpinner";
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const PsylliumBenefit = lazy(() => import("./pages/PsylliumBenefit"));

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
          <Suspense fallback={<LoadingSpinner/>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/terms&condition" element={<TermsOfUse />} />
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
              <Route
                path="/products/guarGumPowder"
                element={<GuarGumPowder />}
              />
              <Route
                path="/products/ashwagandha"
                element={<AshwagandhaRoot />}
              />
              <Route
                path="/products/moringaPowder"
                element={<MoringaPowder />}
              />
              <Route path="/products/fenugreek" element={<FenugreekSeed />} />
              <Route path="/products/steviaPowder" element={<SteviaPowder />} />
              <Route path="/products/sennaPowder" element={<SennaPowder />} />
              <Route path="/products/coriander" element={<CorianderPowder />} />
              <Route path="/psylliumBenefit" element={<PsylliumBenefit />} />
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
          </Suspense>
        </div>

        <FooterCom />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
