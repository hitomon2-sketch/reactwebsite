import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">GK</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">GHAR KA</h3>
                <p className="text-amber-200 text-sm">Pure. Homemade. Authentic.</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Bringing the warmth of homemade Indian food to your kitchen with 
              traditional recipes, natural ingredients, and lots of love.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { name: 'Instagram', icon: '📷', url: 'https://instagram.com/ghar.ka' },
                { name: 'Facebook', icon: '👥', url: 'https://facebook.com/gharka' },
                { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/919897185634' },
                { name: 'YouTube', icon: '🎥', url: 'https://youtube.com/@gharka' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-100">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'All Products', href: '/products' },
                { name: 'Pickles', href: '/products#pickles' },
                { name: 'Ghee', href: '/products#ghee' },
                { name: 'Spices', href: '/products#spices' },
                { name: 'About Us', href: '/about' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-100">Categories</h4>
            <ul className="space-y-3">
              {[
                { name: 'Achar (Pickles)', count: '12+' },
                { name: 'Ghee & Oils', count: '8+' },
                { name: 'Masale (Spices)', count: '15+' },
                { name: 'Dals & Pulses', count: '10+' },
                { name: 'Honey & Sweets', count: '6+' },
                { name: 'Ready Mixes', count: '5+' }
              ].map((category) => (
                <li key={category.name} className="flex justify-between items-center">
                  <a
                    href={`/products#${category.name.toLowerCase().split(' ')[0]}`}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {category.name}
                  </a>
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded-full text-amber-200">
                    {category.count}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-100">Stay Updated</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 text-amber-400">📞</span>
                <a
                  href="tel:+919897185634"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  +91 98971 85634
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 text-amber-400">✉️</span>
                <a
                  href="mailto:hello@gharka.in"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  hello@gharka.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 text-amber-400">🕒</span>
                <span className="text-gray-300 text-sm">10AM - 7PM, Mon-Sat</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-amber-100 text-sm font-medium mb-2">Get recipes & offers</p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-2 rounded text-sm font-medium hover:bg-amber-700 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: '🌱', text: '100% Natural' },
              { icon: '👵', text: 'Family Recipes' },
              { icon: '🚚', text: 'Free Shipping*' },
              { icon: '💝', text: 'Made with Love' }
            ].map((badge) => (
              <div key={badge.text} className="flex flex-col items-center">
                <span className="text-2xl mb-2">{badge.icon}</span>
                <span className="text-amber-200 text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} GHAR KA. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Shipping Policy', href: '/shipping' },
                { name: 'Refund Policy', href: '/refunds' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm mr-2">We accept:</span>
              <div className="flex space-x-1">
                {['💳', '📱', '🏦', '🔗'].map((method, index) => (
                  <span key={index} className="text-lg">{method}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}