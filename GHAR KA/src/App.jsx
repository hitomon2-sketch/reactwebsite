import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Products from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
// import Products from "./pages/Products";
// import Blog from "./pages/Blog";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Products Page */}
        <Route path="/products" element={<Products />} />


        {/* Blog Page */}
        {/* <Route path="/blog" element={<Blog />} /> */}

        {/* 404 (optional) */}
        <Route path="*" element={<h1 style={{ padding: 40 }}>404 — Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}
