import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import VacancyPage from "./pages/VacancyPage";
import SinglePage from "./pages/SinglePage";
import "./i18n";
import SIngleNewPage from "./components/News/SIngleNewPage";
import { MainProvider } from "./context/mainProvider";

function App() {
  return (
    <div className="globalContainer pt-[90px]">
      <MainProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product" element={<ProductsPage />} />
            <Route path="/vacancy" element={<VacancyPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/single/:id" element={<SinglePage />} />
            <Route path="/single/:id/:slug" element={<SinglePage />} />
            <Route path="/news/:id" element={<SIngleNewPage />} />
            <Route path="/news/:id/:slug" element={<SIngleNewPage />} />
          </Routes>
        </BrowserRouter>
      </MainProvider>
    </div>
  );
}

export default App;
