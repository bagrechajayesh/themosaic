// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Film, TrendingUp, Scale, ArrowRight } from 'lucide-react';

export default function Services() {
  const serviceVerticals = [
    {
      title: 'Entertainment Services',
      icon: Film,
      description:
        'Comprehensive creative services for writers, directors, and entertainment professionals',
      color: 'purple',
      link: '/entertainment',
      services: [
        'Script Consulting & Analysis',
        'Screenplay Writing & Development',
        'Talent Representation & Management',
        'Project Development & Packaging',
        'Industry Networking & Connections',
        'Creative Consulting & Strategy',
      ],
    },
    {
      title: 'Growth Services',
      icon: TrendingUp,
      description:
        'Strategic business development, capability building, fitout support, and real estate analysis for growing companies',
      color: 'green',
      link: '/growth',
      services: [
        'Business Development Strategy',
        'Strategic Planning & Execution',
        'Market Analysis & Research',
        'Scaling Solutions & Implementation',
        'Partnership Development',
        'Fitout & Turnkey Execution',
        'Real Estate & Location / Catchment Analysis',
        'Growth Consulting & Advisory',
      ],
    },
    {
      title: 'Legal Services',
      icon: Scale,
      description:
        'Comprehensive legal support for creative industries and business needs',
      color: 'amber',
      link: '/legal',
      services: [
        'Entertainment Law & Contracts',
        'Business Contract Drafting',
        'Intellectual Property Protection',
        'Corporate Law & Compliance',
        'Litigation Support & Representation',
        'Legal Consulting & Advisory',
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
        gradient: 'from-purple-500 to-purple-600',
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        icon: 'text-green-500',
        gradient: 'from-green-500 to-green-600',
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-600',
        button: 'bg-amber-600 hover:bg-amber-700',
        icon: 'text-amber-500',
        gradient: 'from-amber-500 to-amber-600',
      },
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive professional services across Entertainment, Growth, and Legal
            verticals, delivered from Mumbai with global expertise.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceVerticals.map((vertical, index) => {
              const IconComponent = vertical.icon;
              const colors = getColorClasses(vertical.color);

              return (
                <motion.div
                  key={vertical.title}
                  className={`bg-white rounded-2xl shadow-lg border-t-4 ${colors.border} overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${colors.gradient} p-6 text-white`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{vertical.title}</h3>
                    </div>
                    <p className="opacity-90">{vertical.description}</p>
                  </div>

                  {/* Services List */}
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {vertical.services.map((service, idx) => (
                        <li key={idx} className="flex items-start">
                          <div
                            className={`w-2 h-2 ${colors.bg} border-2 ${colors.border} rounded-full mt-2 mr-3 flex-shrink-0`}
                          ></div>
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={vertical.link}
                      className={`inline-flex items-center w-full justify-center px-6 py-3 ${colors.button} text-white rounded-lg font-semibold transition-all duration-200 group`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose The Mosaic?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based in Mumbai, India&apos;s entertainment capital, we bring local expertise with
              global perspective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Entertainment Expertise
              </h3>
              <p className="text-gray-600">
                Deep industry knowledge and connections in India&apos;s entertainment hub
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Strategic Growth
              </h3>
              <p className="text-gray-600">
                Business, fitout, and real estate-linked strategies for competitive markets
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Legal Excellence
              </h3>
              <p className="text-gray-600">
                Comprehensive legal support tailored to creative and business needs
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Personal Approach
              </h3>
              <p className="text-gray-600">
                Dedicated attention and customized solutions for every client
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Work Together?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let&apos;s discuss how our services can help you achieve your goals across
            entertainment, growth, or legal needs.
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
              💬 WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
