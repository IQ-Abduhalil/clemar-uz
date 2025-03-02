import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/about/About";
import { Categoryin } from "./pages/categoryInner/Categoryin";
import { Home } from "./pages/home/Home";
import { Layout } from "./pages/layout/Layout";
import { News } from "./pages/news/News";
import { Category } from "./pages/category/Category";
import { ProductsPage } from "./pages/productspage/Productspage";
import { Provider } from "react-redux";
import { Store } from "./redux/Store/Store";
import AOS from "aos";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/:dataId" element={<Categoryin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
