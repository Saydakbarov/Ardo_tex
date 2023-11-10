import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import VacancyPage from "./pages/VacancyPage";
import SinglePage from "./pages/SinglePage";
import "./i18n"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {


  const {i18n, t} = useTranslation()
  useEffect(() => {
    if(localStorage.getItem("lang")) {
      i18n.changeLanguage(localStorage.getItem("lang"))
    }
  },[])

  return (
    <div className="globalContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/vacancy" element={<VacancyPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/single/:id" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
