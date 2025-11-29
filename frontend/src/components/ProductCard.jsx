import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Notification from "./Notification";

export default function ProductCard({ product }) {
  const [notification, setNotification] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    const whatsappNumber = "919897185634";
    let text = `🌟 *NEW ORDER - GHAR KA* 🌟\n\n`;
    text += `I want to buy:\n\n`;
    text += `🍯 *${product.name}*\n`;
    text += `Price: ₹${product.price}\n`;
    text += `${product.weight || ""}\n\n`;
    text += "Please confirm my order and provide delivery details. 🙏";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setNotification({
      message: `Redirecting to WhatsApp for ${product.name}...`,
      type: "success"
    });
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    
    // Simulate API call delay
    setTimeout(() => {
      addToCart(product);
      setIsAdding(false);
      setNotification({
        message: `${product.name} added to cart!`,
        type: "success"
      });
    }, 500);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      pickles: "🥭",
      ghee: "🧈",
      spices: "🌶️",
      pulses: "🫘",
      honey: "🍯"
    };
    return icons[category] || "📦";
  };

  return (
    <>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      <article className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center relative overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
              {getCategoryIcon(product.category)}
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-white/90 backdrop-blur-sm text-amber-700 text-xs px-3 py-1.5 rounded-full font-medium shadow-sm capitalize">
              {product.category}
            </span>
          </div>

          {/* Quick Actions Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <button
                onClick={handleBuyNow}
                className="bg-white text-green-600 p-3 rounded-full shadow-lg hover:bg-green-50 transition-colors"
                title="Buy Now"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Product Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Price and Weight */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-amber-600">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            <div className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded">
              {product.weight}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`flex-1 py-3 px-4 border-2 border-amber-600 text-amber-600 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-200 ${
                isAdding ? "opacity-50 cursor-not-allowed" : "hover:border-amber-700 hover:text-amber-700"
              }`}
            >
              {isAdding ? (
                <span className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-amber-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                  Adding...
                </span>
              ) : (
                "Add to Cart"
              )}
            </button>
            
            <button
              onClick={handleBuyNow}
              className="flex-1 py-3 px-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <span>🛒</span>
              <span>Buy Now</span>
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center space-x-1">
                <span>🚚</span>
                <span>Free delivery above ₹500</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>⭐</span>
                <span>4.8</span>
              </span>
            </div>
          </div>
        </div>

        {/* Special Badge */}
        {product.isBestSeller && (
          <div className="absolute top-4 left-4">
            <span className="bg-amber-500 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
              🏆 Best Seller
            </span>
          </div>
        )}

        {product.isNew && (
          <div className="absolute top-4 left-4">
            <span className="bg-green-500 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
              ✨ New
            </span>
          </div>
        )}
      </article>
    </>
  );
}