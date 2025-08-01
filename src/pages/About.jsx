
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg mb-6">
          The Mosaic is a collective of storytellers, artists, strategists, and legal experts working at the intersection of creativity and business. We empower talent and ideas through tailored services across entertainment, legal, and growth domains.
        </p>
        <div className="bg-gray-100 rounded-xl p-6 shadow-md mt-10 flex flex-col items-center text-center">
          <div className="w-32 h-32 bg-gray-300 rounded-full mb-4" />
          <h2 className="text-2xl font-semibold">Founder Name</h2>
          <p className="text-gray-600">Creative Strategist • Visionary Leader</p>
          <p className="mt-4 text-md leading-relaxed">
            The founder of The Mosaic brings cross-disciplinary experience in media, law, and entrepreneurship. Passionate about bridging ideas with execution, they lead the team in curating meaningful collaborations and breakthrough projects.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
