
import { motion } from "framer-motion";

export default function Legal() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-10">Legal Services</h1>
        <p className="text-lg mb-6">
          Our legal advisory wing supports artists, creators, startups, and businesses in navigating the complex landscape of intellectual property, contracts, and regulatory compliance.
        </p>
        <ul className="grid gap-6 md:grid-cols-2 mt-8 text-lg">
          <li>⚖️ Contract Drafting & Negotiation</li>
          <li>📜 Intellectual Property Rights</li>
          <li>🔍 Regulatory & Compliance Advisory</li>
          <li>🧾 Documentation for Creative Projects</li>
        </ul>
      </motion.div>
    </div>
  );
}
