import React from "react";

export default function EmptyCart() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-32 h-32 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-5xl">🛒</span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your cart is empty
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Looks like you haven't added any homemade goodness to your cart yet. Let's fix that!
        </p>

        <div className="space-y-4">
          <a
            href="/products"
            className="inline-block bg-amber-600 text-white py-3 px-8 rounded-xl font-semibold hover:bg-amber-700 transition-colors duration-200"
          >
            Explore Products
          </a>
          
          <div className="text-sm text-gray-500">
            or{" "}
            <a href="/" className="text-amber-600 hover:text-amber-700 font-medium">
              continue shopping
            </a>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md mx-auto">
          {[
            { icon: "🥭", name: "Pickles", href: "/products#pickles" },
            { icon: "🧈", name: "Ghee", href: "/products#ghee" },
            { icon: "🌶️", name: "Spices", href: "/products#spices" }
          ].map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="bg-white p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-200 group"
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-amber-600">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}