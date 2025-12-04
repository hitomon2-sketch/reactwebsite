import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Notification } from "./Notification";
import { Heart } from "lucide-react";

const normalizeVariants = (item) => {
  if (typeof item.price === "number") {
    return [
      {
        label: item.weight || "Default",
        unitPrice: item.price,
        weightLabel: item.weight || "",
      },
    ];
  }
  return Object.entries(item.price).map(([label, unitPrice]) => ({
    label,
    unitPrice,
    weightLabel: label,
  }));
};

const ProductCard = ({ item }) => {
  const { addToCart } = useCart();
  const variants = normalizeVariants(item);

  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [notification, setNotification] = useState({
    message: "",
    type: "success",
  });

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: "", type });
    }, 2000);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: item.id,
      name: item.name,
      variantLabel: selectedVariant.label,
      unitPrice: selectedVariant.unitPrice,
      weightLabel: selectedVariant.weightLabel,
      image: item.image,
    };

    addToCart(cartItem);
    showNotification(`${item.name} added to cart!`);
  };

  return (
    <>
      <Notification message={notification.message} type={notification.type} />

      <div className="group border border-white flex flex-col mb-10 cursor-pointer">
        <div className="relative">
          {/* SIMPLE IMAGE — NO SLIDER */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48  md:h-75 object-cover "
          />
        </div>

        {/* NAME */}
        <h3 className="mt-3 text-base font-[Poppins] text-center text-gray-800">
          {item.name}
        </h3>

        <div
          className={`flex items-center ${
            variants.length > 1 ? "justify-between pl-4 " : "justify-center"
          }`}>
          {/* PRICE */}
          <p className="text-sm font-semibold text-gray-900">
            ₹ {selectedVariant.unitPrice}
          </p>

          {/* VARIANT DROPDOWN */}
          {variants.length > 1 && (
            <select
              value={selectedVariant.label}
              onChange={(e) =>
                setSelectedVariant(
                  variants.find((v) => v.label === e.target.value)
                )
              }
              className="mt-2 w-16 sm:w-40 md:w-32 border rounded-lg md:px-3 py-1 text-sm sm:text-base text-gray-700
               focus:outline-none focus:ring-2 focus:ring-green-600 transition">
              {variants.map((v) => (
                <option key={v.label} value={v.label}>
                  {v.label} - ₹{v.unitPrice}
                </option>
              ))}
            </select>
          )}
        </div>

        <h3 className="mt-3 text-base font-[Poppins] text-center text-gray-800">
          {item.description}
        </h3>

        {/* ADD TO CART */}
        <button
          onClick={handleAddToCart}
          className="mt-3  text-green-600  border bg-white font-[Poppins]
                     text-sm font-semibold py-2 px-1 active:scale-95 transition">
          🛒 Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
