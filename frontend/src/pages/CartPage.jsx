import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Notification from "../components/Notification";
import EmptyCart from "../components/EmptyCart";
import CartItem from "../components/CartItem";
import OrderSummary from "..//components/OrderSummary";

export default function CartPage() {
  const { cartItems, clearCart, getCartTotal } = useCart();
  const [notification, setNotification] = useState(null);
  console.log(cartItems)

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      setNotification({
        message: "Your cart is empty!",
        type: "error"
      });
      return;
    }

    const whatsappNumber = "919897185634";
    let text = "🌟 *NEW ORDER - GHAR KA* 🌟\n\n";
    text += "Here's my order:\n\n";

    cartItems.forEach((item, index) => {
      text += `🍯 *${item.name}*\n`;
      text += `   Quantity: ${item.quantity}\n`;
      text += `   Price: ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
      text += `   ${item.weight || ''}\n\n`;
    });

    const total = getCartTotal();
    text += `💰 *Total Amount: ₹${total}*\n\n`;
    text += "Please confirm my order and provide delivery details. Thank you! 🙏";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setNotification({
      message: "Order placed! Redirecting to WhatsApp...",
      type: "success"
    });
    
    // Clear cart after a delay
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Shopping Cart
          </h1>
          <p className="text-lg text-gray-600">
            Review your items and proceed to checkout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Cart Items ({cartItems.length})
                </h2>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center space-x-1 transition-colors"
                >
                  <span>🗑️</span>
                  <span>Clear All</span>
                </button>
              </div>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6 mt-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 text-xl">🚚</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Free Delivery
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Enjoy free delivery on all orders above ₹500. Orders are typically delivered within 2-5 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary 
              cartItems={cartItems} 
              total={getCartTotal()} 
              onPlaceOrder={handlePlaceOrder} 
            />
          </div>
        </div>
      </div>
    </main>
  );
}