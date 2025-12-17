// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Scale, ArrowRight, Users, Award, ShieldCheck } from 'lucide-react';

export default function Home() {
  const verticals = [
    {
      title: 'Growth',
      icon: TrendingUp,
      description:
        'Execution-led advisory for businesses planning expansion. We support location selection, real estate analysis, and fitout delivery so your growth decisions are grounded in data and timelines.',
      color: 'green',
      link: '/growth',
      stats: 'Fitout + Location',
      services: [
        'Fitout & Turnkey Execution',
        'Real Estate & Location Analysis',
        'Catchment and Feasibility',
        'Business Growth Advisory',
      ],
    },
    {
      title: 'Legal',
      icon: Scale,
      description:
        'Focused legal services around Real Estate Regulation. From RERA compliance to complaints, appeals and execution, we support both promoters and allottees with practical, forum-ready drafting and strategy.',
      color: 'amber',
      link: '/legal',
      stats: 'RERA Focus',
      services: [
        'RERA Advisory & Compliance',
        'Complaints, Replies, Rejoinders',
        'REAT Appeals',
        'Execution & Recovery',
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
        button: 'bg-green-600 hover:bg-green-700',
        icon: 'text-green-600',
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-700',
        button: 'bg-amber-600 hover:bg-amber-700',
        icon: 'text-amber-600',
      },
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
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
              <p className="text-green-400">📈 Growth</p>
              <p className="text-amber-400">⚖️ Legal (RERA)</p>
            </motion.div>

            <motion.p
              className="text-lg mb-12 max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Practical advisory and drafting support for businesses and real estate stakeholders, delivered with clarity, timelines, and execution in mind.
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
                Get in Touch
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

      {/* Quick trust markers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ShieldCheck className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Forum-ready</h3>
              <p className="text-gray-600">Drafting aligned to RERA and REAT workflows</p>
            </motion.div>

            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Execution-led</h3>
              <p className="text-gray-600">Location, fitout and business decisions with timelines</p>
            </motion.div>

            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mumbai</h3>
              <p className="text-gray-600">Based in India, serving clients across locations</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two focused verticals with clear outcomes: better execution decisions and stronger regulatory strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {verticals.map((vertical, index) => {
              const IconComponent = vertical.icon;
              const colors = getColorClasses(vertical.color);

              return (
                <motion.div
                  key={vertical.title}
                  className={`${colors.bg} rounded-2xl p-8 shadow-lg border ${colors.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    <span className={`px-3 py-1 ${colors.text} bg-white rounded-full text-sm font-semibold`}>
                      {vertical.stats}
                    </span>
                  </div>

                  <h3 className={`text-2xl font-bold ${colors.text} mb-4`}>{vertical.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{vertical.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key services:</h4>
                    <ul className="space-y-2">
                      {vertical.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className={`w-2 h-2 bg-white border-2 ${colors.border} rounded-full mr-3`}></div>
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

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let&apos;s Talk
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you need a location decision, fitout support, or RERA drafting and strategy, we can help.
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
              📧 Contact
            </Link>
            <a
              href="https://wa.me/917276789555"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
            >
              💬 WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
