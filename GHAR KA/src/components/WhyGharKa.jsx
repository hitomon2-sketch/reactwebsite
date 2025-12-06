import React from "react";

export default function WhyGharKa() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why GHAR KA?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Honest ingredients, homely recipes and a lot of patience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <strong className="text-xl font-semibold text-gray-800 block mb-3">100% homemade</strong>
            <p className="text-gray-600">Prepared in small home-style kitchens.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <strong className="text-xl font-semibold text-gray-800 block mb-3">No preservatives</strong>
            <p className="text-gray-600">Real food, no shortcuts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <strong className="text-xl font-semibold text-gray-800 block mb-3">Traditional recipes</strong>
            <p className="text-gray-600">Dadi-nani style flavours.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <strong className="text-xl font-semibold text-gray-800 block mb-3">Careful sourcing</strong>
            <p className="text-gray-600">Ingredients chosen from trusted farmers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}