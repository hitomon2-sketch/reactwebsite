import { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

export const Notification = ({
  message,
  type = "success",
  duration = 4000,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!message || !visible) return null;

  return (
    <div className="fixed top-6 right-6 z-50">
      <div
        className={`
          flex items-center space-x-3 max-w-[90vw] sm:max-w-sm md:max-w-md px-5 py-3
          rounded-full shadow-lg text-white text-sm md:text-base font-medium
          animate-slideDown animate-fadeIn
          ${type === "success" ? "bg-green-600" : "bg-red-600"}
        `}>
        {type === "success" ? (
          <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <XCircle className="w-5 h-5 md:w-6 md:h-6" />
        )}
        <span className="flex-1">{message}</span>
      </div>
    </div>
  );
};
