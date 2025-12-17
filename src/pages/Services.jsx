// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, Scale, ArrowRight } from "lucide-react";

export default function Services() {
  const serviceVerticals = [
    {
      title: "Growth Services",
      icon: TrendingUp,
      description:
        "Execution-led advisory for expansion. We support location selection, fitout delivery, and real estate analysis so decisions are grounded in feasibility and timelines.",
      color: "green",
      link: "/growth",
      services: [
        "Fitout & Turnkey Execution",
        "Real Estate & Location Analysis",
        "Catchment and Feasibility Support",
        "Site Selection Guidance",
      ],
    },
    {
      title: "Legal Services",
      icon: Scale,
      description:
        "Focused legal support around Real Estate Regulation (RERA). From compliance to disputes, appeals, and execution, we handle forum-ready drafting and strategy.",
      color: "amber",
      link: "/legal",
      services: [
        "RERA Advisory and Compliance",
        "Complaints, Replies, Rejoinders",
        "REAT Appeals",
        "Execution and Recovery",
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: {
        borderTop: "border-green-500",
        button: "bg-green-600 hover:bg-green-700",
        gradient: "from-green-500 to-green-600",
      },
      amber: {
        borderTop: "border-amber-500",
        button: "bg-amber-600 hover:bg-amber-700",
        gradient: "from-amber-500 to-amber-600",
      },
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
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
            Two focused verticals with clear outcomes: stronger execution decisions and stronger regulatory strategy.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceVerticals.map((vertical, index) => {
              const Icon = vertical.icon;
              const colors = getColorClasses(vertical.color);

              return (
                <motion.div
                  key={vertical.title}
                  className={`bg-white rounded-2xl shadow-lg border-t-4 ${colors.borderTop} overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className={`bg-gradient-to-r ${colors.gradient} p-6 text-white`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{vertical.title}</h3>
                    </div>
                    <p className="opacity-95">{vertical.description}</p>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {vertical.services.map((service) => (
                        <li key={service} className="flex items-start">
                          <div className="w-2 h-2 bg-gray-200 rounded-full mt-2 mr-3 flex-shrink-0" />
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

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Want to discuss your case or expansion plan?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Share the context and we will suggest a clear next step.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>
    </div>
  );
}
