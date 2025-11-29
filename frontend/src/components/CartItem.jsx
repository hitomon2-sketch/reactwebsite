import React from "react";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  const increment = () => handleQuantityChange(item.quantity + 1);
  const decrement = () => handleQuantityChange(item.quantity - 1);

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-amber-300 transition-colors group">
      {/* Product Image */}
      <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-2xl">
          {item.category === "pickles" && "🥭"}
          {item.category === "ghee" && "🧈"}
          {item.category === "spices" && "🌶️"}
          {item.category === "pulses" && "🫘"}
          {item.category === "honey" && "🍯"}
        </span>
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 text-lg mb-1 truncate">
          {item.name}
        </h3>
        <p className="text-gray-500 text-sm mb-2">
          {item.weight} • ₹{item.price} each
        </p>
        
        {/* Quantity Controls */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <button
              onClick={decrement}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
            >
              -
            </button>
            <span className="w-8 text-center font-semibold text-gray-900">
              {item.quantity}
            </span>
            <button
              onClick={increment}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
            >
              +
            </button>
          </div>
          
          <span className="text-amber-600 font-bold">
            ₹{item.price * item.quantity}
          </span>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
        title="Remove item"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}