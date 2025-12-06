import storyProduct from "../data/storyProducts.json";

export default function Story() {
  return (
    <section
      id="about"
      className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Story Content */}
          <div className="space-y-6 sm:space-y-8 relative">
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs sm:text-sm font-semibold rounded-full mb-4 shadow-md">
              Our Story
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              From our home
              <span className="block text-amber-600">to yours</span>
            </h2>

            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">GHAR KA</span>{" "}
              started with a simple desire – to put the warmth of ghar ka khana
              back onto busy tables.
            </p>

            <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
              Every jar is crafted in small batches using traditional slow
              cooking methods.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-amber-100">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-amber-600">
                  100%
                </div>
                <div className="text-xs text-gray-600">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-amber-600">
                  0%
                </div>
                <div className="text-xs text-gray-600">Preservatives</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-amber-600">
                  ❤️
                </div>
                <div className="text-xs text-gray-600">Made with Love</div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="relative mt-8 lg:mt-0 w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl -rotate-2 scale-105"></div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6 relative w-full">
              {storyProduct.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl sm:rounded-3xl shadow-lg border border-amber-100 hover:border-amber-200 transform hover:-translate-y-1 transition-all duration-500 overflow-hidden w-full">
                  <div className="relative overflow-hidden aspect-square sm:aspect-4/3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-3 sm:p-6">
                    <h4 className="text-sm sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {item.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-snug">
                      {item.description}
                    </p>

                    <button className="w-full py-2 sm:py-3 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 font-semibold rounded-lg sm:rounded-xl border border-amber-200 hover:bg-amber-100 transition-all">
                      View Recipe
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-6 -right-6 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-amber-100">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-base sm:text-xl text-gray-800 italic leading-relaxed">
              "Bringing the taste of home, one jar at a time."
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  Traditional Indian Kitchen
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Est. 2023
                </div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
