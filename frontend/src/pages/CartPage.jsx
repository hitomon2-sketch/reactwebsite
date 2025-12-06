import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Notification } from "../components/Notification";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { items, total, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const [notification, setNotification] = useState({
    message: "",
    type: "success",
  });

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: "", type }), 2200);
  };

  const DELIVERY_FEE = 50;
  const grandTotal = total + DELIVERY_FEE;

  const buildWhatsAppMessage = () => {
    if (items.length === 0) return "";

    const itemsText = items
      .map(
        (item) =>
          `*${item.name}* (${item.variantLabel})\n` +
          `   ├ Qty: ${item.quantity} × ₹${item.unitPrice}\n` +
          `   └ *Total: ₹${item.unitPrice * item.quantity}*`
      )
      .join("\n\n");

    const message = [
      "✨ Ghar Ka Organic ✨",
      "",
      "📝 ORDER SUMMARY",
      "▬▬▬▬▬▬▬▬▬▬▬▬",
      "",
      itemsText,
      "",
      "▬▬▬▬▬▬▬▬▬▬▬▬",
      "",
      "💰 ORDER VALUE",
      `├ Subtotal: ₹${total}`,
      `├ Delivery: ₹${DELIVERY_FEE}`,
      `└ *GRAND TOTAL: ₹${grandTotal}*`,
      "",
      
    
      "Thank you! ❤️",
      "We'll confirm your order shortly",
    ].join("\n");

    return encodeURIComponent(message);
  };

  const businessNumber = "9897447525";
  const whatsappLink = `https://wa.me/${businessNumber}?text=${buildWhatsAppMessage()}`;

  const handleWhatsAppClick = () => {
    setIsProcessing(true);
    showNotification("Opening WhatsApp…");
    setTimeout(() => setIsProcessing(false), 1800);
  };

  // Empty Cart
  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] mt-28 flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full text-center bg-[#FFF9ED] border border-[#E8DCC2] rounded-xl p-8 shadow-md">
          <img
            src="https://organicindia.com/cdn/shop/files/elements.png?v=1667824817"
            alt="Empty Cart Illustration"
            className="w-20 h-20 mx-auto mb-6 opacity-90"
          />

          <h2 className="text-2xl font-serif mb-3 text-[#4A2E1A]">
            Your cart is empty
          </h2>
          <p className="text-[#7A6042] mb-6">
            Looks like you haven't added any sweets yet.
          </p>

          <Link
            to="/products"
            className="inline-block px-6 py-3 bg-[#5C3A21] text-white font-serif rounded-lg shadow hover:bg-[#4A2E1A] transition">
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] mt-20  md:px-6 md:py-10 bg-[#FFF9ED]">
      <Notification message={notification.message} type={notification.type} />

      <div className="max-w-4xl mx-auto bg-[#FFFCF5]  overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FFF4E8] to-[#FAEEDC] p-6 border-b border-[#E8DCC2]">
          <h2 className="text-3xl font-serif text-[#4A2E1A]">
            Items in your cart
          </h2>
          <p className="text-[#7A6042] mt-1 text-sm">
            {items.reduce((s, i) => s + i.quantity, 0)} items
          </p>
        </div>

        {/* Items */}
        <div className="bg-white">
          {items.map((item) => (
            <div
              key={`${item.id}-${item.variantLabel}`}
              className="p-6 flex flex-col sm:flex-row justify-between items-start">
              {/* Left section */}
              <div className="flex items-start gap-4 w-full sm:w-auto mb-4 sm:mb-0">
                <div className="w-16 h-16  overflow-hidden bg-white shadow-inner flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-[#D4AF37] text-xl">🍬</span>
                  )}
                </div>

                <div>
                  <div className="font-serif text-lg text-[#4A2E1A] font-semibold">
                    {item.name}
                  </div>
                  <div className="text-sm text-[#7A6042]">
                    {item.variantLabel} • ₹{item.unitPrice}
                  </div>
                </div>
              </div>

              {/* Right section */}
              <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-normal">
                {/* Quantity */}
                <div className="flex items-center border border-[#E8DCC2] rounded-full overflow-hidden">
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.variantLabel,
                        item.quantity - 1
                      )
                    }
                    disabled={item.quantity <= 1}
                    className="px-3 py-1 text-[#4A2E1A] disabled:opacity-40">
                    −
                  </button>
                  <div className="px-4 text-[#4A2E1A]">{item.quantity}</div>
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.variantLabel,
                        item.quantity + 1
                      )
                    }
                    className="px-3 py-1 text-[#4A2E1A]">
                    +
                  </button>
                </div>

                <div className="font-bold text-[#4A2E1A] min-w-[5rem] text-right">
                  ₹{item.unitPrice * item.quantity}
                </div>

                <button
                  onClick={() => {
                    removeFromCart(item.id, item.variantLabel);
                    showNotification(`${item.name} removed`);
                  }}
                  className="text-[#7A6042] hover:text-red-500 text-lg">
                  🗑
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="p-6 bg-[#FAF3E7] border-t border-[#E8DCC2]">
          <div className="space-y-3">
            <div className="flex justify-between text-[#5C4D3D]">
              <span>Subtotal</span>
              <span className="font-medium">₹{total}</span>
            </div>

            <div className="flex justify-between text-[#5C4D3D]">
              <span>Delivery</span>
              <span className="font-medium">₹{DELIVERY_FEE}</span>
            </div>

            <div className="border-t border-[#E8DCC2] pt-3 flex justify-between text-xl font-bold text-[#4A2E1A]">
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow hover:bg-green-700 transition">
              {isProcessing ? "Preparing..." : "Confirm on WhatsApp"}
            </a>

            <button
              onClick={() => {
                clearCart();
                showNotification("Cart cleared");
              }}
              className="flex-1 px-6 py-3 border border-[#DCC9A9] text-[#4A2E1A] rounded-lg bg-white hover:bg-[#FBF5EA] transition shadow-sm">
              Clear Sweet Box
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
