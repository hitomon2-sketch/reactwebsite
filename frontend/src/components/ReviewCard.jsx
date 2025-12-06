import { Star } from "lucide-react";

export const ReviewCard = ({ review }) => {
  return (
    <div
      className="
      bg-white border border-gray-200 
      rounded-2xl p-5 shadow-sm hover:shadow-md 
      transition-all duration-300 w-full
    ">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <img
          src={review.avatar || "https://i.pravatar.cc/50"}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover shadow-sm"
        />

        {/* User Details + Review */}
        <div className="flex flex-col w-full">
          {/* Name + Rating */}
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-900 text-sm md:text-base">
              {review.name}
            </h3>

            {/* Star Rating */}
            <div className="flex">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>
          </div>

          {/* Quote */}
          <p
            className="
            text-gray-700 text-sm mt-2 leading-snug italic 
            bg-gray-50 px-3 py-2 rounded-md border-l-4 border-green-500
          ">
            “{review.quote}”
          </p>

          {/* Product */}
          <span className="text-xs mt-3 text-gray-600">
            Reviewed:{" "}
            <strong className="text-gray-800">{review.product}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
