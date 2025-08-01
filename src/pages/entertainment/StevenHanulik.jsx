
import { motion } from "framer-motion";

export default function StevenHanulik() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8"
      >
        <div className="text-5xl mb-4 text-center">🎥</div>
        <h1 className="text-3xl font-bold text-center mb-2">Steven Hanulik</h1>
        <h2 className="text-xl text-center text-gray-600 mb-6">Filmmaker • Copywriter</h2>
        <p className="text-md leading-relaxed">
          Steven has 20 years of experience in film, broadcast, and ad marketing. Co-creator of Canada's first 3D stop-motion short "Skeleton Girl", and writer of "Middle of Nowhere" and "Lily".
        </p>
      </motion.div>
    </div>
  );
}
