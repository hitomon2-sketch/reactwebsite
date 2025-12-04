import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

// Import image from assets folder
import { logo } from "../assets/images";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-black shadow-md fixed top-0 left-0 w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Brand logo */}
          <div className="flex items-center">
            <img className="h-12" src={logo} alt="Website Logo" />
            <span className="ml-2 text-xl font-serif tracking-wide text-gray-800">
              Ghar Ka Shop
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            <Link
              to="/"
              className="relative group text-gray-700 hover:text-black transition-colors duration-300 text-sm uppercase tracking-widest">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/products"
              className="relative group text-gray-700 hover:text-black transition-colors duration-300 text-sm uppercase tracking-widest">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <a
              href="/#about"
              className="relative group text-gray-700 hover:text-black transition-colors duration-300 text-sm uppercase tracking-widest">
              About
              <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>

            <Link
              to="/contact"
              className="relative group text-gray-700 hover:text-black transition-colors duration-300 text-sm uppercase tracking-widest">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Cart Icon for Desktop */}
            <Link
              to="/cart"
              className="relative group flex items-center space-x-2 ml-4">
              <div className="relative">
                <ShoppingCart
                  size={22}
                  className="text-gray-700 group-hover:text-black transition-colors duration-300"
                />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </div>
              <span className="text-sm uppercase tracking-widest text-gray-700 group-hover:text-black transition-colors duration-300">
                Cart
              </span>
            </Link>

            <Link
              to={"/cart"}
              className="ml-2 px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-gray-900 transition">
              Order Now
            </Link>
          </div>

          {/* Cart Icon for Mobile (outside menu) */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative"
              onClick={() => setIsOpen(false)}>
              <ShoppingCart size={24} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
              {isOpen ? (
                <X size={24} className="text-black" />
              ) : (
                <Menu size={24} className="text-black" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-300">
          <div className="px-3 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-md">
              Home
            </Link>

            <Link
              to="/products"
              onClick={toggleMenu}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-md">
              Products
            </Link>

            <Link
              to="/about"
              onClick={toggleMenu}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-md">
              About
            </Link>

            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-md">
              Contact
            </Link>

            {/* Cart item in mobile menu */}
            <Link
              to="/cart"
              onClick={toggleMenu}
              className="flex items-center justify-between px-3 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-md">
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            <Link
              to={"/cart"}
              className="block mt-2 px-4 py-3 bg-black text-white text-sm font-bold uppercase tracking-wider hover:bg-gray-900 rounded-md">
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
