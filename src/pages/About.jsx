// src/pages/About.jsx
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
        <p className="text-lg mb-6 text-center">
          The Mosaic is a collective of storytellers, artists, strategists, and legal experts
          working at the intersection of creativity and business. We empower talent and ideas
          through tailored services across entertainment, legal, and growth domains.
        </p>

        {/* Founder Section */}
        <div className="bg-gray-100 rounded-xl p-8 shadow-md mt-10 flex flex-col items-center text-center">
          <img
            src="/founders/jayesh-bagrecha.jpg"
            alt="Jayesh Bagrecha"
            className="w-32 h-32 object-cover rounded-full mb-4"
            onError={(e) => (e.currentTarget.src = "/founders/placeholder.jpg")}
          />
          <h2 className="text-2xl font-semibold">Jayesh Bagrecha</h2>
          <p className="text-gray-600">Founder • Strategic Business Leader</p>
          <p className="mt-4 text-md leading-relaxed">
            With over a decade of experience in strategic business leadership, operations, and
            transformation, Jayesh has worked across diverse industries most notably in media,
            retail, healthcare, and business consulting driving customer experience, operations,
            and service delivery. He has led high-impact projects, managed cross-functional teams,
            and partnered with senior leadership to solve complex challenges and deliver measurable
            outcomes.
          </p>
          <p className="mt-4 text-md leading-relaxed">
            As a certified PMP, Jayesh has successfully executed turnaround projects, introduced
            process excellence initiatives, and overseen digital transformation efforts. His
            background includes P&L ownership, team coaching, stakeholder management, and
            business alliances all led by a practical, mutual growth and customer-first mindset.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
