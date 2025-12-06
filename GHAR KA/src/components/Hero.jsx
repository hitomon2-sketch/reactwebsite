import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Kicker */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
              Indian homemade goodness
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Pure.{" "}
              <span className="text-amber-600">Homemade.</span>{" "}
              Authentic.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              GHAR KA brings you pickles, ghee, spices, pulses, honey and more,
              made the way families cook at home – slow, patient, and full of love.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-md"
              >
                Shop all products
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/products#pickles"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-amber-600 text-amber-600 font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore pickles
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
              <span className="inline-flex items-center px-3 py-1.5 bg-white rounded-full text-sm text-gray-700 shadow-sm border border-gray-100">
                <span className="w-4 h-4 text-green-500 mr-1.5">✓</span>
                No preservatives
              </span>
              <span className="inline-flex items-center px-3 py-1.5 bg-white rounded-full text-sm text-gray-700 shadow-sm border border-gray-100">
                <span className="mr-1.5">🍯</span>
                Small-batch, homemade
              </span>
              <span className="inline-flex items-center px-3 py-1.5 bg-white rounded-full text-sm text-gray-700 shadow-sm border border-gray-100">
                <span className="mr-1.5">🇮🇳</span>
                Made in India
              </span>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform hover:scale-[1.02] transition-transform duration-300">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Achar", "Ghee", "Masale", "Dals", "Honey"].map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Product Jars */}
              <div className="space-y-4 mb-6">
                {[
                  {
                    name: "Mango Pickle",
                    description: "Tangy, spicy and sun-kissed.",
                    color: "from-yellow-100 to-amber-100"
                  },
                  {
                    name: "Bilona Ghee",
                    description: "Slow-churned from rich milk.",
                    color: "from-amber-50 to-orange-50"
                  },
                  {
                    name: "Garam Masala",
                    description: "Hand-roasted whole spices.",
                    color: "from-red-50 to-orange-50"
                  }
                ].map((product, index) => (
                  <div
                    key={product.name}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Product Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center shadow-inner">
                      <span className="text-amber-700 text-lg">
                        {index === 0 && "🥭"}
                        {index === 1 && "🧈"}
                        {index === 2 && "🌶️"}
                      </span>
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1">
                      <strong className="text-gray-900 font-semibold block">
                        {product.name}
                      </strong>
                      <span className="text-gray-600 text-sm">
                        {product.description}
                      </span>
                    </div>
                    
                    {/* Price Tag */}
                    <div className="text-amber-600 font-bold text-sm">
                      {index === 0 && "₹249"}
                      {index === 1 && "₹649"}
                      {index === 2 && "₹199"}
                    </div>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="text-center">
                <small className="text-gray-400 text-xs">
                  Replace these with your product photos
                </small>
              </div>

              {/* Stamp */}
              <div className="absolute -top-4 -right-4">
                <div className="relative">
                  <div className="w-24 h-24 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-center text-sm leading-tight shadow-lg transform rotate-12">
                    Real taste<br />of home
                  </div>
                  <div className="absolute inset-0 border-2 border-amber-400 rounded-full animate-ping opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-200 rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}