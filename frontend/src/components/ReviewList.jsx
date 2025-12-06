import reviews from "../data/reviews.json";
import { ReviewCard } from "./ReviewCard";

export const ReviewsList = () => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          What Our Customers Say
        </h2>

        <div className="w-full overflow-x-auto">
          <div className="flex space-x-4 pb-4">
            {reviews.map((item, index) => (
              <div key={index} className="min-w-[250px] md:min-w-[300px]">
                <ReviewCard review={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
