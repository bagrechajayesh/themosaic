
import { motion } from "framer-motion";

export default function VinayChoudary() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8"
      >
        <div className="text-5xl mb-4 text-center">🎬</div>
        <h1 className="text-3xl font-bold text-center mb-2">Vinay Choudary</h1>
        <h2 className="text-xl text-center text-gray-600 mb-6">Writer • Director • Script Consultant</h2>
        <p className="text-md leading-relaxed">
          Vinay is a versatile Indian screenwriter and director with 1000+ TV episodes, feature films, and a Prime Video web series.
        </p>
      </motion.div>
    </div>
  );
}
