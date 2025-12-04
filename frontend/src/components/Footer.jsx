import { logo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="bg-white text-green-800 py-16 px-4 sm:px-6 lg:px-8 border-t border-green-200">
      <div className="max-w-7xl mx-auto">
        {/* Decorative Line */}
        <div className="flex justify-center mb-12">
          <div className="w-32 h-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src={logo} alt="Ghar Ka Shop" className="h-12" />
              <span className="ml-3 text-3xl font-serif tracking-wider text-green-700">
                Ghar Ka Shop
              </span>
            </div>

            <p className="text-green-600 mb-6 italic font-light">
              "Pure. Organic. Handpicked essentials for a healthier lifestyle."
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6">
              {["facebook", "instagram", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-green-700 hover:text-green-500 transition-transform hover:scale-110">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-green-700 border-b border-green-600 pb-2">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Organic Products",
                "Healthy Living",
                "Eco-Friendly Packs",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-green-600 transition flex items-center">
                    <svg
                      className="h-3 w-3 mr-2 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-green-700 border-b border-green-600 pb-2">
              Customer Care
            </h4>
            <ul className="space-y-3">
              {[
                "Support",
                "Delivery Info",
                "Refund Policy",
                "Health & Safety",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-green-600 transition flex items-center">
                    <svg
                      className="h-3 w-3 mr-2 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 text-green-700 border-b border-green-600 pb-2">
              Contact Us
            </h4>
            <address className="not-italic space-y-4 text-green-800">
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 mt-1 mr-3 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  21 Green Valley Road,
                  <br />
                  Dehradun, Uttarakhand 248001
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  className="h-5 w-5 mr-3 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 98765 43210
              </div>

              <div className="flex items-center">
                <svg
                  className="h-5 w-5 mr-3 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                support@gharkashop.in
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-200 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-green-700">
            <p className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Ghar Ka Shop. Pure & Organic
              Essentials.
            </p>

            <div className="flex space-x-6">
              <a href="#" className="hover:text-green-600 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-600 text-sm">
                Terms of Service
              </a>
              <a href="#" className="hover:text-green-600 text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
