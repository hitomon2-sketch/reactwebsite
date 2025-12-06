import React from "react";
import { useNavigate } from "react-router-dom";

import filters from "../data/filters.json";
export default function CategorySection() {
  const { categories } = filters;

  const navigate = useNavigate();

  const goToCategory = (cat) => {
    navigate(`/products?category=${cat}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {" "}
      <h2 className="text-xl sm:text-3xl font-bold text-green-800 mb-6 text-center">
        Shop By Category{" "}
      </h2>
      <div className=" grid grid-cols-3 md:grid-cols-8   gap-6 overflow-x-auto no-scrollbar pb-4">
        {categories.map((cat) => (
          <div
            key={cat.value}
            onClick={() => goToCategory(cat.value)}
            className="flex flex-col items-center cursor-pointer group min-w-[80px] sm:min-w-[100px]">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-green-600 shadow-md group-hover:scale-105 transition-transform duration-300">
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm sm:text-base mt-2 text-gray-700 font-medium text-center">
              {cat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
