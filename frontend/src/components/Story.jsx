
export default function Story() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                From our home to yours
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  GHAR KA started with a simple desire – to put the warmth of ghar ka khana
                  back onto busy tables, hostels, offices and homes across India.
                </p>
                <p>
                  Every jar is made in small batches, using family recipes and slow cooking.
                </p>
              </div>
            </div>
          </div>

          {/* Products List */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              What we make
            </h3>
            <ul className="space-y-3">
              {[
                { icon: "🥭", text: "Sun-cured pickles" },
                { icon: "🧈", text: "Hand-churned ghee" },
                { icon: "🌶️", text: "Freshly ground masale" },
                { icon: "🫘", text: "Pulses and dals" },
                { icon: "🍯", text: "Raw honey" }
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-700">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}