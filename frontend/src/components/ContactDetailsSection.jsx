// src/components/ContactDetailsSection.jsx
import ContactInfo from "./ContactInfo";

export default function ContactDetailsSection() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Contact details
        </h2>

        <ContactInfo />
      </div>

      {/* Quick Responses */}
      <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-3">
          Quick responses guaranteed
        </h3>

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
  );
}
