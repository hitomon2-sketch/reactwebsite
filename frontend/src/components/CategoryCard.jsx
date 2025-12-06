import React from "react";

const CategoryCard = ({ category, onClick }) => {
  return (
    <div
      onClick={() => onClick(category.value)}
      className="flex flex-col items-center cursor-pointer transition transform hover:scale-105">
      {/* Circular Image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-2 shadow-md border border-gray-200">
        <img
          src={category.image}
          alt={category.label}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Category Name */}
      <span className="text-sm sm:text-base font-semibold text-gray-800">
        {category.label}
      </span>
    </div>
  );
};

export default CategoryCard;
