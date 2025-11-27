// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Film, TrendingUp, Scale, ArrowRight, Star, Users, Award } from 'lucide-react';

export default function Home() {
  const verticals = [
    {
      title: 'Entertainment',
      icon: Film,
      description:
        'Representing exceptional creative talent including writers, directors, and visionary creators. From script consulting to screenplay writing, we nurture artistic vision while achieving commercial success.',
      color: 'purple',
      link: '/entertainment',
      stats: '25+ Artists',
      services: [
        'Script Consulting',
        'Screenplay Writing',
        'Talent Representation',
        'Project Development',
      ],
    },
    {
      title: 'Growth',
      icon: TrendingUp,
      description:
        'Strategic business development, capability building, fitout support, and real estate analysis for companies ready to take the next step.',
      color: 'green',
      link: '/growth',
      stats: 'Coming Soon',
      services: [
        'Business Development',
        'Strategic Planning',
        'Market Analysis',
        'Scaling Solutions',
        'Fitout & Turnkey Execution',
        'Real Estate & Location Analysis',
      ],
    },
    {
      title: 'Legal',
      icon: Scale,
      description:
        'Comprehensive legal services tailored to creative industries and growing businesses. From contracts to intellectual property protection, we safeguard your interests.',
      color: 'amber',
      link: '/legal',
      stats: 'Coming Soon',
      services: [
        'Entertainment Law',
        'Business Contracts',
        'IP Protection',
        'Corporate Law',
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        icon: 'text-purple-500',
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        icon: 'text-green-500',
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-600',
        button: 'bg-amber-600 hover:bg-amber-700',
        icon: 'text-amber-500',
      },
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              THE MOSAIC
            </motion.h1>
            <motion.div
              className="text-xl md:text-2xl mb-8 space-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-purple-400">🎬 Entertainment</p>
              <p className="text-green-400">📈 Growth</p>
              <p className="text-amber-400">⚖️ Legal</p>
            </motion.div>
            <motion.p
              className="text-lg mb-12 max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your comprehensive partner across three dynamic verticals, delivering excellence in
              creative representation, business growth, and legal services from Mumbai, India.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Get Started Today
              </Link>
              <a
                href="https://wa.me/917276789555"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-colors inline-flex items-center justify-center"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Star className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Creative Artists Represented</p>
            </motion.div>
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
              <p className="text-gray-600">Specialized Verticals</p>
            </motion.div>
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Award className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Mumbai</h3>
              <p className="text-gray-600">
                Based in India&apos;s Entertainment & Business Capital
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verticals Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Three Verticals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions across entertainment, growth, and legal services, tailored for
              the dynamic needs of creative professionals and growing businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {verticals.map((vertical, index) => {
              const IconComponent = vertical.icon;
              const colors = getColorClasses(vertical.color);

              return (
                <motion.div
                  key={vertical.title}
                  className={`${colors.bg} rounded-2xl p-8 shadow-lg border ${colors.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    <span
                      className={`px-3 py-1 ${colors.text} bg-white rounded-full text-sm font-semibold`}
                    >
                      {vertical.stats}
                    </span>
                  </div>

                  <h3 className={`text-2xl font-bold ${colors.text} mb-4`}>
                    {vertical.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {vertical.description}
                  </p>

                  {/* Services Preview */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {vertical.services.slice(0, 4).map((service, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div
                            className={`w-2 h-2 ${colors.bg} border-2 ${colors.border} rounded-full mr-3`}
                          ></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={vertical.link}
                    className={`inline-flex items-center px-6 py-3 ${colors.button} text-white rounded-full font-semibold transition-all duration-200 group w-full justify-center`}
                  >
                    Explore {vertical.title}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you&apos;re a creative professional, growing business, or need legal
            expertise, we&apos;re here to help you succeed from Mumbai to the world.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              📧 Get in Touch
            </Link>
            <a
              href="https://wa.me/917276789555"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
            >
              💬 WhatsApp Now
            </a>
          </motion.div>
          <motion.p
            className="text-sm text-gray-400 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            📍 Based in Mumbai, Maharashtra, India | 📧 jayesh@themosaic.pro | 📞 +91
            7276789555
          </motion.p>
        </div>
      </section>
    </div>
  );
}
