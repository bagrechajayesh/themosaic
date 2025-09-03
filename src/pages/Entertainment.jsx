// src/pages/Entertainment.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useArtists, useServices } from "../hooks/useStaticData";

// Reusable image component with jpg→png→placeholder fallback
function ArtistImage({ slug, name }) {
  const PLACEHOLDER = "/artists/placeholder.jpg";
  const [imgSrc, setImgSrc] = useState(`/artists/${slug}.jpg`);

  const handleError = () => {
    if (imgSrc.endsWith(".jpg")) setImgSrc(`/artists/${slug}.png`);
    else setImgSrc(PLACEHOLDER);
  };

  return (
    <img
      src={imgSrc}
      alt={name}
      onError={handleError}
      className="w-full h-40 object-cover rounded-lg mb-4"
    />
  );
}

export default function Entertainment() {
  const { data: artists, loading: artistsLoading, error: artistsError } = useArtists();
  const { data: services, loading: servicesLoading } = useServices();

  if (artistsLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 text-white px-6 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading our amazing artists...</p>
        </div>
      </div>
    );
  }

  // Use fallback artists if data load fails
  const displayArtists = artists || [
    {
      slug: "arvind-sivakumaran",
      name: "Arvind Sivakumaran",
      role: "Filmmaker • Scholar • Writer",
      bio: "Arvind graduated in Film Production from Victoria Motion Picture School, B.C., Canada in 2002. He also holds a degree in English Literature from St. Xaviers College, Mumbai.",
    },
    {
      slug: "vinay-choudary",
      name: "Vinay Choudary",
      role: "Writer • Director • Script Consultant",
      bio: "Vinay is a versatile Indian screenwriter and director with 1000+ TV episodes, feature films, and a Prime Video web series.",
    },
    {
      slug: "steven-hanulik",
      name: "Steven Hanulik",
      role: "Filmmaker • Copywriter",
      bio: "Steven has 20 years of experience in film, broadcast, and ad marketing. Co-creator of Canada's first 3D stop-motion short 'Skeleton Girl', and writer of 'Middle of Nowhere' and 'Lily'.",
    },
  ];

  const entertainmentServices = services?.entertainment?.services || [
    "Script Consulting & Analysis",
    "Screenplay Writing & Development",
    "Talent Representation & Management", 
    "Project Development & Packaging",
    "Industry Networking & Connections",
    "Creative Consulting & Strategy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Artists</h1>

      {/* Error banner if data loading failed */}
      {artistsError && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded mb-8 max-w-4xl mx-auto">
          <p className="text-sm">
            <strong>Note:</strong> Using cached artist data. Latest updates may not be reflected.
          </p>
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {displayArtists.map((artist, idx) => (
          <motion.div
            key={artist.slug}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl shadow-lg overflow-hidden bg-white text-gray-900"
          >
            <Link to={`/entertainment/${artist.slug}`} className="block p-6">
              {/* Image with fallback */}
              <ArtistImage slug={artist.slug} name={artist.name} />

              <h2 className="text-xl font-semibold text-center">{artist.name}</h2>
              <p className="text-sm text-center text-gray-500 mb-2">{artist.role}</p>
              <p className="text-sm text-gray-700 mt-4 line-clamp-3">{artist.bio}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Services section */}
      <div className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        
        {servicesLoading ? (
          <div className="text-center">
            <div className="animate-pulse grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="bg-gray-100 rounded-lg h-20"></div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {entertainmentServices.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-100 text-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-center">{service}</h3>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-lg opacity-90 mb-6">
            Connect with our talented artists and explore collaboration opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="https://wa.me/917276789555"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}