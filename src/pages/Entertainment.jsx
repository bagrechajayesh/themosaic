// src/pages/Entertainment.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const artists = [
  {
    name: "Arvind Sivakumaran",
    avatar: "✍️",
    role: "Filmmaker • Scholar • Writer",
    bio: "Arvind graduated in Film Production from Victoria Motion Picture School, B.C., Canada in 2002. He also holds a degree in English Literature from St. Xaviers College, Mumbai.",
    link: "/entertainment/arvind-sivakumaran",
  },
  {
    name: "Vinay Choudary",
    avatar: "🎬",
    role: "Writer • Director • Script Consultant",
    bio: "Vinay is a versatile Indian screenwriter and director with 1000+ TV episodes, feature films, and a Prime Video web series.",
    link: "/entertainment/vinay-choudary",
  },
  {
    name: "Steven Hanulik",
    avatar: "🎥",
    role: "Filmmaker • Copywriter",
    bio: "Steven has 20 years of experience in film, broadcast, and ad marketing. Co-creator of Canada's first 3D stop-motion short 'Skeleton Girl', and writer of 'Middle of Nowhere' and 'Lily'.",
    link: "/entertainment/steven-hanulik",
  },
];

export default function Entertainment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Artists</h1>

      <div className="grid gap-8 md:grid-cols-3">
        {artists.map((artist, idx) => (
          <motion.div
            key={artist.link}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl shadow-lg overflow-hidden"
          >
            <Link
              to={artist.link}
              className="bg-white text-gray-900 block p-6 hover:shadow-xl transition"
            >
              <div className="text-5xl text-center mb-4">{artist.avatar}</div>
              <h2 className="text-xl font-semibold text-center">{artist.name}</h2>
              <p className="text-sm text-center text-gray-500 mb-2">{artist.role}</p>
              <p className="text-sm text-gray-700 mt-4">{artist.bio}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Career Management",
            "Deal Negotiation",
            "Project Development",
            "Industry Connections",
            "Brand Building",
            "Opportunity Matching",
            "Script Consulting",
          ].map((service, i) => (
            <motion.div
              key={service}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-100 text-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-center">{service}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
