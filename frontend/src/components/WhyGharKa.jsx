import { useState } from "react";
import story from "../data/whyGharKaBlog.json";

export default function WhyGharKa() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-amber-100/20 to-emerald-100/20 -skew-y-2 transform -translate-y-16" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-emerald-100/20 to-amber-100/20 skew-y-2 transform translate-y-16" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center mr-3 shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-700 via-amber-800 to-emerald-800 bg-clip-text text-transparent leading-tight">
              {story.title}
            </h2>
          </div>

          {/* Introductory paragraph with animated underline */}
          <div className="relative max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 px-4">
              {story.intro}
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-500 rounded-full" />
          </div>
        </div>

        {/* Interactive timeline sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {story.sections.map((sec, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
              onClick={() =>
                setActiveSection(activeSection === index ? null : index)
              }>
              {/* Timeline connector for desktop */}
              {index < story.sections.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-amber-300 to-emerald-300 transform translate-x-full -translate-y-1/2 group-hover:w-12 transition-all duration-300" />
              )}

              {/* Section card */}
              <div
                className={`
                relative bg-white rounded-3xl p-8 shadow-xl
                border-2 border-transparent
                transition-all duration-500 ease-out
                ${
                  activeSection === index
                    ? "transform -translate-y-2 border-amber-200 shadow-2xl"
                    : "shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)]"
                }
              `}>
                {/* Section number with gradient */}
                <div
                  className={`
                  absolute -top-4 -left-4 w-12 h-12 rounded-2xl
                  flex items-center justify-center text-white font-bold text-xl
                  shadow-lg transition-all duration-300
                  ${
                    activeSection === index
                      ? "bg-gradient-to-br from-amber-500 to-amber-700 scale-110"
                      : "bg-gradient-to-br from-amber-400 to-amber-600"
                  }
                `}>
                  {index + 1}
                </div>

                {/* Animated highlight bar */}
                <div
                  className={`
                  absolute top-0 left-0 w-2 h-full rounded-l-3xl
                  transition-all duration-500
                  ${
                    activeSection === index
                      ? "bg-gradient-to-b from-amber-400 to-emerald-400"
                      : "bg-gradient-to-b from-amber-200 to-emerald-200"
                  }
                `}
                />

                {/* Section content */}
                <div className="relative pl-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    {sec.heading}
                    <svg
                      className={`
                      ml-2 w-6 h-6 transition-transform duration-300
                      ${
                        activeSection === index
                          ? "transform rotate-45 text-amber-600"
                          : "text-amber-400"
                      }
                    `}
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </h3>

                  <p
                    className={`
                    text-gray-700 leading-relaxed text-[16px]
                    transition-all duration-500
                    ${
                      activeSection === index
                        ? "text-gray-800 transform translate-x-1"
                        : ""
                    }
                  `}>
                    {sec.paragraph}
                  </p>

                  {/* Expandable details (optional) */}
                  {activeSection === index && (
                    <div className="mt-6 pt-4 border-t border-amber-100 animate-fadeIn">
                      <button className="inline-flex items-center text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors">
                        <span>Learn more about this</span>
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>

                {/* Floating icon on hover */}
                <div
                  className={`
                  absolute -bottom-3 -right-3 w-16 h-16
                  bg-gradient-to-br from-amber-100 to-emerald-100
                  rounded-2xl flex items-center justify-center
                  opacity-0 group-hover:opacity-100 transition-all duration-300
                  transform translate-y-4 group-hover:translate-y-0
                  shadow-lg
                `}>
                  <svg
                    className="w-8 h-8 text-amber-600"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inspirational closing quote with decorative elements */}
        <div className="relative max-w-4xl mx-auto">
          {/* Background decorative quote marks */}
          <div className="absolute -top-8 -left-8 text-amber-200/40 text-9xl font-serif leading-none">
            "
          </div>
          <div className="absolute -bottom-16 -right-8 text-emerald-200/40 text-9xl font-serif leading-none">
            "
          </div>

          <div className="relative bg-gradient-to-br from-amber-50 to-white rounded-3xl p-10 lg:p-12 shadow-2xl border border-amber-200">
            {/* Animated pulse dot */}
            <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 animate-pulse" />

            <div className="text-center relative">
              <svg
                className="w-12 h-12 text-amber-400/60 mx-auto mb-6"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>

              <blockquote className="mb-8">
                <p className="text-2xl lg:text-3xl italic text-gray-900 leading-relaxed font-serif px-4">
                  "{story.closingQuote}"
                </p>
              </blockquote>

              <div className="flex items-center justify-center">
                <div className="w-2 h-12 bg-gradient-to-b from-amber-400 to-emerald-400 rounded-full mr-4" />
                <div>
                  <div className="text-xl font-bold text-gray-900">
                    {story.closingAuthor}
                  </div>
                  <div className="text-amber-700 font-medium mt-1">
                    Founder, Ghar Ka
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -z-10 top-1/2 left-0 w-32 h-32 bg-gradient-to-r from-amber-200/30 to-emerald-200/30 rounded-full blur-2xl transform -translate-x-16 -translate-y-1/2" />
          <div className="absolute -z-10 top-1/2 right-0 w-32 h-32 bg-gradient-to-l from-amber-200/30 to-emerald-200/30 rounded-full blur-2xl transform translate-x-16 -translate-y-1/2" />
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 pt-8 border-t border-amber-100">
          <p className="text-gray-700 mb-6">
            Ready to experience authentic flavors?
          </p>
          <button className="group inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            <span>Explore Our Products</span>
            <svg
              className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
