// src/pages/Artist.jsx
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useArtist } from '../hooks/useStaticData';

const PLACEHOLDER = '/artists/placeholder.jpg';

export default function Artist() {
  const { slug } = useParams();
  const { artist, loading, error } = useArtist(slug);
  
  // Image fallback logic
  const [imgSrc, setImgSrc] = useState(`/artists/${slug}.jpg`);

  const handleImgError = () => {
    if (imgSrc.endsWith('.jpg')) {
      setImgSrc(`/artists/${slug}.png`);
    } else {
      setImgSrc(PLACEHOLDER);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading artist profile...</p>
        </div>
      </div>
    );
  }

  if (error || !artist) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link
            to="/entertainment"
            className="inline-flex items-center gap-2 text-blue-700 hover:underline mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Entertainment
          </Link>
          
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Artist Not Found</h1>
            <p className="text-gray-600 mb-8">
              The artist profile you're looking for could not be found.
            </p>
            <Link
              to="/entertainment"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Artists
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/entertainment"
          className="inline-flex items-center gap-2 text-blue-700 hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Entertainment
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-3 mb-12"
        >
          {/* Image */}
          <div className="md:col-span-1">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <img
                src={imgSrc}
                alt={artist.name}
                onError={handleImgError}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {artist.name}
              </h1>
              <h2 className="text-xl text-gray-600 mb-6">
                {artist.role}
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{artist.bio}</p>
                
                {artist.additionalBio && artist.additionalBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Contact Information */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Sections - Conditional based on available data */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid gap-8 md:grid-cols-2 mb-12"
        >
          {/* Education */}
          {artist.education && (
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education</h3>
              <div className="space-y-3">
                {artist.education.map((edu, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">{edu.degree}</p>
                      <p className="text-sm text-gray-600">
                        {edu.institution} {edu.year && `(${edu.year})`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          {artist.experience && (
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h3>
              <div className="space-y-3">
                {artist.experience.map((exp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">{exp.type}</p>
                      <p className="text-sm text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notable Works */}
          {artist.notableWorks && (
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Notable Works</h3>
              <div className="space-y-3">
                {artist.notableWorks.map((work, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">"{work.title}"</p>
                      <p className="text-sm text-gray-600">{work.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Expertise - Always show if available */}
          {artist.expertise && (
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {artist.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}