import React, { useState, useEffect } from "react";
import ProductSection from "../components/ProductSection";
import productsData from "../data/products.json";
import filters from "../data/filters.json";

// Hook to detect mobile
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const isMobile = useIsMobile();
  const { categories, sortOptions } = filters;

  // Flatten all products
  const allProducts = Object.values(productsData).flat();

  // Apply category filter
  const filteredByCategory =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  // Apply search filter
  let filteredProducts = filteredByCategory.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Apply sorting
  if (sortBy === "price-low")
    filteredProducts.sort((a, b) => a.price - b.price);
  if (sortBy === "price-high")
    filteredProducts.sort((a, b) => b.price - a.price);

  return (
    <main className="min-h-screen mt-15 bg-[#F9FFF6]">
      {/* ---------------- HERO + SEARCH ---------------- */}{" "}
      <section className="py-10 md:py-14 border-b border-[#D5E8D2]">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}{" "}
          <nav className="text-sm text-green-600 mb-6">
            {" "}
            <a href="/" className="hover:text-green-700">
              Home
            </a>{" "}
            <span className="mx-2">·</span>{" "}
            <span className="text-green-900">Products</span>{" "}
          </nav>
          {/* Heading */}
          {!isMobile && (
            <div className="text-center mb-16 px-4  relative">
              <h1 className="text-5xl font-serif text-[#2F5D3A] mb-3 tracking-wider">
                Organic <span className="text-[#3D7A50]">Products</span>
              </h1>
              <div className="w-40 h-1 bg-gradient-to-r from-[#74A27A] via-[#A8D5A2] to-[#74A27A] mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-[#476B4B] max-w-3xl mx-auto font-light italic">
                Pure, natural, homemade & chemical-free traditional foods.
              </p>
            </div>
          )}
          {/* SEARCH */}
          <div className="relative flex-1 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search organic products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-[#B7D8B2] focus:outline-none focus:ring-2 focus:ring-[#3D7A50] text-[#2F5D3A] placeholder-[#7FA883]"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#7FA883]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {/* DESKTOP FILTER + SORT */}
          {!isMobile && (
            <div className="flex justify-between items-center mt-8 gap-6 bg-white p-6 rounded-xl shadow-sm border border-[#D7E8D5]">
              {/* Category */}
              <div className="flex items-center gap-3">
                <span className="text-[#3D5A40] font-medium">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent border-none focus:ring-2 focus:ring-[#3D7A50] rounded-full text-[#2F5D3A]">
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-3">
                <span className="text-[#3D5A40] font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none focus:ring-2 focus:ring-[#3D7A50] rounded-full text-[#2F5D3A]">
                  {sortOptions.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* ---------------- MOBILE FILTER/SORT BUTTONS ---------------- */}
      {isMobile && (
        <div className="w-full flex items-center justify-between border-y border-gray-200 py-3 bg-white">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 w-1/2 justify-center py-2 border-r text-green-700">
            <svg className="h-5 w-5" fill="none" stroke="currentColor">
              <path strokeWidth="2" d="M3 4h18M6 8h12M10 12h4" />
            </svg>
            Filters
          </button>
          <button
            onClick={() => setIsSortOpen(true)}
            className="flex items-center gap-2 w-1/2 justify-center py-2 text-green-700">
            <svg className="h-5 w-5" fill="none" stroke="currentColor">
              <path strokeWidth="2" d="M4 6h16M4 12h10M4 18h7" />
            </svg>
            Sort
          </button>
        </div>
      )}
      {/* ---------------- MOBILE FILTER POPUP ---------------- */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="absolute top-0 left-0 w-72 h-full bg-white shadow-xl p-5 animate-slideInLeft">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setIsFilterOpen(false);
                }}
                className={`block w-full px-4 py-2 rounded-md mb-2 ${
                  selectedCategory === cat.value
                    ? "bg-green-100"
                    : "bg-gray-100"
                }`}>
                {cat.label}
              </button>
            ))}
            <button
              onClick={() => setIsFilterOpen(false)}
              className="mt-5 w-full bg-green-600 text-white py-2 rounded-md">
              Close
            </button>
          </div>
        </div>
      )}
      {/* ---------------- MOBILE SORT POPUP ---------------- */}
      {isSortOpen && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="absolute top-0 left-0 w-72 h-full bg-white shadow-xl p-5 animate-slideInRight">
            <h2 className="text-lg font-semibold mb-4">Sort By</h2>
            {sortOptions.map((op) => (
              <button
                key={op.value}
                onClick={() => {
                  setSortBy(op.value);
                  setIsSortOpen(false);
                }}
                className={`block w-full px-4 py-2 rounded-md mb-2 ${
                  sortBy === op.value ? "bg-green-100" : "bg-gray-100"
                }`}>
                {op.label}
              </button>
            ))}
            <button
              onClick={() => setIsSortOpen(false)}
              className="mt-5 w-full bg-green-600 text-white py-2 rounded-md">
              Close
            </button>
          </div>
        </div>
      )}
      {/* ---------------- PRODUCTS ---------------- */}
      <div className="animate-fadeIn">
        <ProductSection
          id="all"
          title="All Organic Products"
          description="Explore natural and chemical-free homemade items"
          products={filteredProducts}
          sortBy={sortBy}
        />
      </div>
      {/* ---------------- EMPTY STATE ---------------- */}
      {filteredProducts.length === 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="text-green-300 text-7xl mb-4">🌿</div>
          <h3 className="text-2xl font-semibold text-green-900 mb-2">
            No products found
          </h3>
          <p className="text-green-700">
            Try adjusting your filters or search.
          </p>
        </div>
      )}
    </main>
  );
}
