import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-100 border-t py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid gap-6 md:grid-cols-3 text-sm text-gray-700">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">The Mosaic</h4>
          <p>Representing exceptional creative talent & professional services.</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
          <p>Email: <a className="underline" href="mailto:jayesh@themosaic.pro">jayesh@themosaic.pro</a></p>
          <p>Phone: <a className="underline" href="tel:+917276789555">+91 7276789555</a></p>
          <p>Location: Mumbai, Maharashtra, India</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a className="hover:underline" href="/entertainment">Entertainment</a></li>
            <li><a className="hover:underline" href="/growth">Growth</a></li>
            <li><a className="hover:underline" href="/legal">Legal</a></li>
            <li><a className="hover:underline" href="/about">About</a></li>
          </ul>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917276789555"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
      >
        <FaWhatsapp size={24} />
      </a>

      <p className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} The Mosaic. All rights reserved.
      </p>
    </footer>
  );
}
