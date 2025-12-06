import React, { useState } from "react";
import contactInfo from "../data/contactInfo.json";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "Order query",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const whatsappNumber = "919897185634"; // Your number without + or 0
  const text = 
    `*New Contact Form Message*\n\n` +
    `*Name:* ${formData.name}\n` +
    `*Phone:* ${formData.phone}\n` +
    `*Subject:* ${formData.subject}\n` +
    `*Message:* ${formData.message}`;

  // Open WhatsApp in new tab
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");

  // Optional: reset the form
  setFormData({
    name: "",
    phone: "",
    subject: "Order query",
    message: ""
  });
};


  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <nav className="text-sm text-gray-500 mb-4">
              <a href="/" className="hover:text-amber-600 transition-colors">Home</a>
              <span className="mx-2">·</span>
              <span className="text-gray-900">Contact</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We'd love to hear from you
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              For orders, bulk enquiries or feedback, just say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact details</h2>
                
             <div className="space-y-6">
  {Object.keys(contactInfo).map((key) => {
    const info = contactInfo[key];
    return (
      <div key={key} className="flex items-start space-x-4">
        <div className={`w-12 h-12 ${info.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <span className={`${info.text} text-xl`}>{info.icon}</span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{info.label}</h3>
          {info.link ? (
            <a
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-700 transition-colors text-lg font-medium"
            >
              {info.number || info.handle}
            </a>
          ) : (
            <p className="text-gray-900 text-lg">{info.address}</p>
          )}
          <p className="text-sm text-gray-500 mt-1">{info.note}</p>
        </div>
      </div>
    );
  })}
</div>

              </div>

              {/* Quick Info */}
              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Quick responses guaranteed</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>Order queries: Within 2 hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>Bulk orders: Same day response</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span>Feedback: We read every message</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white"
                  >
                    <option value="Order query">Order query</option>
                    <option value="Bulk / wholesale">Bulk / wholesale</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                    placeholder="Share how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors transform hover:-translate-y-0.5 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  Send Message
                </button>

                <p className="text-center text-sm text-gray-500">
                  We typically respond within 2-4 hours during business hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What's your delivery time?</h3>
                <p className="text-gray-600 text-sm">We ship within 24 hours and delivery takes 2-5 business days across India.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Do you offer bulk discounts?</h3>
                <p className="text-gray-600 text-sm">Yes! Contact us for corporate gifting and bulk orders.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Are your products preservative-free?</h3>
                <p className="text-gray-600 text-sm">Absolutely! All our products are 100% natural with no preservatives.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Can I customize my order?</h3>
                <p className="text-gray-600 text-sm">Yes, we offer custom spice blends and pickle combinations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}