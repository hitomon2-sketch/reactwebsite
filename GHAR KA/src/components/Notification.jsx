import React, { useEffect } from "react";

export default function Notification({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // auto-close after 2s
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-gray-500";

  return (
    <div
      className={`fixed top-5 right-5 z-50 ${bgColor} text-white px-4 py-2 rounded-lg shadow-lg transition-all`}
    >
      {message}
    </div>
  );
}
