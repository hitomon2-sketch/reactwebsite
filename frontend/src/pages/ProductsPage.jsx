import React, { useState } from "react";
import ProductSection from "../components/ProductSection";
// import ProductCard from "./ProductCard";

// Mock product data (replace with your actual data source)
const productsData = {
  pickles: [
    {
      id: "mango-pickle",
      name: "Mango Pickle",
      description: "Classic aam ka achar in mustard oil",
      price: 249,
      weight: "400g",
      image: "https://scontent-bom5-1.xx.fbcdn.net/v/t39.30808-6/484178848_1198075045219300_3568020059589605176_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=O3Gg9p0sjWAQ7kNvwGNq75a&_nc_oc=AdmpYFksRkRz5J5dcLFYqzLkSKc5P4zIOEPo6giIDAE8pqXhaHtOQUoUIhDLGHSL1W8&_nc_zt=23&_nc_ht=scontent-bom5-1.xx&_nc_gid=rqTCnGAb-7U4RpOuy0DHdw&oh=00_AfgB1EZ1aybqdCGBKpC2wlwIYu8lg_gqXSP0gqZ5Z5eB4A&oe=693056A2",
      category: "pickles"
    },
    {
      id: "mixed-veg-pickle",
      name: "Mixed Veg Pickle",
      description: "Carrot, chilli, lemon and more",
      price: 239,
      weight: "400g",
      image: "/images/mixed-veg-pickle.jpg",
      category: "pickles"
    }
  ],
  ghee: [
    {
      id: "bilona-ghee",
      name: "Bilona Cow Ghee",
      description: "Slow-churned, rich and aromatic",
      price: 649,
      weight: "500ml",
      image: "/images/bilona-ghee.jpg",
      category: "ghee"
    }
  ],
  spices: [
    {
      id: "garam-masala",
      name: "Garam Masala",
      description: "Hand-roasted, robust flavour",
      price: 199,
      weight: "100g",
      image: "/images/garam-masala.jpg",
      category: "spices"
    }
  ],
  pulses: [
    {
      id: "comfort-dal",
      name: "Comfort Dal Mix",
      description: "A homely mix for everyday dal",
      price: 149,
      weight: "500g",
      image: "/images/comfort-dal.jpg",
      category: "pulses"
    }
  ],
  honey: [
    {
      id: "raw-honey",
      name: "Raw Forest Honey",
      description: "Slow-filtered, floral and rich",
      price: 299,
      weight: "350g",
      image: "/images/raw-honey.jpg",
      category: "honey"
    }
  ]
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const categories = [
    { value: "all", label: "All categories" },
    { value: "pickles", label: "Pickles" },
    { value: "ghee", label: "Ghee" },
    { value: "spices", label: "Spices" },
    { value: "pulses", label: "Pulses" },
    { value: "honey", label: "Honey" }
  ];

  const sortOptions = [
    { value: "featured", label: "Sort by: Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-8 md:py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-amber-600 transition-colors">Home</a>
            <span className="mx-2">·</span>
            <span className="text-gray-900">Products</span>
          </nav>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop GHAR KA goodness
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pickles, ghee, masale, dals, honey and more.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      {selectedCategory === "all" || selectedCategory === "pickles" ? (
        <ProductSection
          id="pickles"
          title="Pickles (Achar)"
          description="Traditional sun-cured pickles in cold-pressed oils"
          products={productsData.pickles}
        />
      ) : null}

      {selectedCategory === "all" || selectedCategory === "ghee" ? (
        <ProductSection
          id="ghee"
          title="Ghee"
          description="Golden, aromatic ghee for your kitchen"
          products={productsData.ghee}
        />
      ) : null}

      {selectedCategory === "all" || selectedCategory === "spices" ? (
        <ProductSection
          id="spices"
          title="Spices (Masale)"
          description="Freshly ground spices for authentic flavors"
          products={productsData.spices}
        />
      ) : null}

      {selectedCategory === "all" || selectedCategory === "pulses" ? (
        <ProductSection
          id="pulses"
          title="Pulses & Dals"
          description="Comforting dals for homely meals"
          products={productsData.pulses}
        />
      ) : null}

      {selectedCategory === "all" || selectedCategory === "honey" ? (
        <ProductSection
          id="honey"
          title="Honey"
          description="Pure, natural honey from trusted sources"
          products={productsData.honey}
        />
      ) : null}

      {/* Empty State */}
      {selectedCategory !== "all" && 
       !productsData[selectedCategory]?.length && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="text-gray-400 text-6xl mb-4">🍯</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No products found
          </h3>
          <p className="text-gray-600">
            We're working on adding more products to this category.
          </p>
        </div>
      )}
    </main>
  );
}