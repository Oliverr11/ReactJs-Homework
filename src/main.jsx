import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./components/layout/MainLayout.jsx";
import About from "./components/pages/about.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import Login from "./components/pages/Login.jsx";
import Home from "./components/pages/home.jsx";
import ProductDetail from "./components/pages/product/ProductDetail.jsx";
import ProductFilter from "./components/pages/product/ProductFilter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<MainLayout />} errorElement={<NotFound />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<App />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products-filter" element={<ProductFilter />} />
          <Route path="/about-us" element={<About />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>{" "}
  </StrictMode>
);
