import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-amber-600">GHAR KA</span>
              <span className="ml-2 text-xs text-gray-500 hidden sm:block">
                Pure. Homemade. Authentic.
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-amber-500"
            >
              Home
            </a>
            <a
              href="/products"
              className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-amber-500"
            >
              Products
            </a>
            <a
              href="/#about"
              className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-amber-500"
            >
              Our Story
            </a>
            <a
              href="/blog"
              className="text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-amber-500"
            >
              Blog
            </a>
          </nav>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors duration-200 group">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a
                href="/"
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium transition-colors duration-200 border-l-4 border-transparent hover:border-amber-500 hover:bg-amber-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/products"
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium transition-colors duration-200 border-l-4 border-transparent hover:border-amber-500 hover:bg-amber-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="/#about"
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium transition-colors duration-200 border-l-4 border-transparent hover:border-amber-500 hover:bg-amber-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </a>
              <a
                href="/blog"
                className="text-amber-600 block px-3 py-2 text-base font-medium transition-colors duration-200 border-l-4 border-amber-500 bg-amber-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}