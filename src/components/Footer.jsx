import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="font-bold text-xl mb-4 text-white">THE MOSAIC</h4>
            <p className="text-gray-300 mb-4">
              Representing exceptional creative talent & comprehensive professional services across three dynamic verticals.
            </p>
            <div className="text-gray-300">
              <p className="mb-1">📍 Mumbai, Maharashtra, India</p>
            </div>
          </div>

          {/* Entertainment Vertical */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-purple-400">🎬 Entertainment</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/entertainment" className="hover:text-purple-400 transition-colors">Our Artists</Link></li>
              <li><Link to="/entertainment" className="hover:text-purple-400 transition-colors">Script Consulting</Link></li>
              <li><Link to="/entertainment" className="hover:text-purple-400 transition-colors">Screenplay Writing</Link></li>
              <li><Link to="/entertainment" className="hover:text-purple-400 transition-colors">Talent Representation</Link></li>
              <li><Link to="/entertainment" className="hover:text-purple-400 transition-colors">Project Development</Link></li>
            </ul>
          </div>

          {/* Growth Vertical */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-green-400">📈 Growth</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/growth" className="hover:text-green-400 transition-colors">Business Development</Link></li>
              <li><Link to="/growth" className="hover:text-green-400 transition-colors">Strategic Planning</Link></li>
              <li><Link to="/growth" className="hover:text-green-400 transition-colors">Market Analysis</Link></li>
              <li><Link to="/growth" className="hover:text-green-400 transition-colors">Scaling Solutions</Link></li>
              <li><Link to="/growth" className="hover:text-green-400 transition-colors">Partnership Development</Link></li>
            </ul>
          </div>

          {/* Legal Vertical */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-400">⚖️ Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/legal" className="hover:text-amber-400 transition-colors">Entertainment Law</Link></li>
              <li><Link to="/legal" className="hover:text-amber-400 transition-colors">Business Contracts</Link></li>
              <li><Link to="/legal" className="hover:text-amber-400 transition-colors">Intellectual Property</Link></li>
              <li><Link to="/legal" className="hover:text-amber-400 transition-colors">Corporate Law</Link></li>
              <li><Link to="/legal" className="hover:text-amber-400 transition-colors">Litigation Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid gap-6 md:grid-cols-3 text-gray-300">
            <div>
              <h4 className="font-semibold text-white mb-2">📧 Contact</h4>
              <p>Email: <a className="text-blue-400 hover:text-blue-300" href="mailto:jayesh@themosaic.pro">jayesh@themosaic.pro</a></p>
              <p>Phone: <a className="text-blue-400 hover:text-blue-300" href="tel:+917276789555">+91 7276789555</a></p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">🔗 Quick Links</h4>
              <ul className="space-y-1">
                <li><Link className="hover:text-blue-400 transition-colors" to="/about">About</Link></li>
                <li><Link className="hover:text-blue-400 transition-colors" to="/services">Services</Link></li>
                <li><Link className="hover:text-blue-400 transition-colors" to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">🌐 Connect</h4>
              <p className="text-sm">Ready to explore opportunities across our three verticals?</p>
              <div className="mt-2 flex space-x-3">
                <a href="mailto:jayesh@themosaic.pro" className="text-blue-400 hover:text-blue-300">📧 Email</a>
                <a href="https://wa.me/917276789555" className="text-green-400 hover:text-green-300">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
          <p>© {new Date().getFullYear()} THE MOSAIC. All rights reserved. | Entertainment • Growth • Legal</p>
        </div>
      </div>

      {/* Keep your existing WhatsApp Button */}
      <a
        href="https://wa.me/917276789555"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
}