import React from "react";

export default function OrderSummary({ cartItems, total, onPlaceOrder }) {
  const deliveryCharge = total > 500 ? 0 : 50;
  const finalTotal = total + deliveryCharge;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Summary</h2>
      
      {/* Order Details */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({cartItems.length} items)</span>
          <span>₹{total}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Delivery</span>
          <span className={deliveryCharge === 0 ? "text-green-600" : ""}>
            {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
          </span>
        </div>

        {deliveryCharge > 0 && (
          <div className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
            Add ₹{500 - total} more for free delivery!
          </div>
        )}

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between text-lg font-semibold text-gray-900">
            <span>Total</span>
            <span>₹{finalTotal}</span>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={onPlaceOrder}
        className="w-full bg-amber-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-amber-700 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2"
      >
        <span>📱</span>
        <span>Place Order via WhatsApp</span>
      </button>

      {/* Trust Badges */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="text-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-green-600 text-sm">🔒</span>
            </div>
            <span className="text-xs text-gray-600">Secure Order</span>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-blue-600 text-sm">🚚</span>
            </div>
            <span className="text-xs text-gray-600">Fast Delivery</span>
          </div>
        </div>
      </div>

      {/* Support Info */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          Need help?{" "}
          <a href="https://wa.me/919897185634" className="text-amber-600 hover:text-amber-700 font-medium">
            Chat with us
          </a>
        </p>
      </div>
    </div>
  );
}