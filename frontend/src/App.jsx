import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// Pages
import Home from "./pages/Home";
import Products from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      {/* Navbar appears on all pages */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />

        {/* 404 fallback */}
        <Route
          path="*"
          element={<h1 style={{ padding: 40 }}>404 — Page Not Found</h1>}
        />
      </Routes>
      <Footer />
    </Router>
  );
}