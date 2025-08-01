
import { motion } from "framer-motion";

export default function Growth() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-10">Growth Services</h1>
        <p className="text-lg mb-6">
          We empower creative businesses, start-ups, and individuals by providing strategic guidance and ecosystem connections to fuel sustainable growth.
        </p>
        <ul className="grid gap-6 md:grid-cols-2 mt-8 text-lg">
          <li>📈 Business Strategy Consulting</li>
          <li>💡 Creative Incubation & Mentorship</li>
          <li>🤝 Investor & Partner Introductions</li>
          <li>🌍 Market Positioning & Expansion</li>
        </ul>
      </motion.div>
    </div>
  );
}
