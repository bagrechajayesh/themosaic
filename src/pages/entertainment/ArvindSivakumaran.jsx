
import { motion } from "framer-motion";

export default function ArvindSivakumaran() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8"
      >
        <div className="text-5xl mb-4 text-center">✍️</div>
        <h1 className="text-3xl font-bold text-center mb-2">Arvind Sivakumaran</h1>
        <h2 className="text-xl text-center text-gray-600 mb-6">Filmmaker • Scholar • Writer</h2>
        <p className="text-md leading-relaxed">
          Arvind graduated in Film Production from Victoria Motion Picture School, B.C., Canada in 2002.
          He also holds a degree in English Literature from St. Xavier's College, Mumbai.
        </p>
      </motion.div>
    </div>
  );
}
