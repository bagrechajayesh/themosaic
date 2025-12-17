// src/pages/Growth.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGrowth, useServices } from "../hooks/useStaticData";

function Meta({ title, description, url }) {
  useEffect(() => {
    if (title) document.title = title;

    const upsert = (name, value) => {
      if (!value) return;
      let el = document.head.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    upsert("description", description);

    if (url) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", url);
    }
  }, [title, description, url]);

  return null;
}

export default function Growth() {
  const { data: growthData, loading: growthLoading, error: growthError } = useGrowth();
  const { data: servicesData, loading: servicesLoading } = useServices();

  const services =
    growthData?.programs ||
    servicesData?.growth?.services || [
      {
        id: "fitout",
        title: "Fitout & Turnkey Execution",
        blurb: "BOQ, vendors, timelines, and on-site checks for retail and commercial fitouts.",
        emoji: "🏗️",
      },
      {
        id: "realestate-analysis",
        title: "Real Estate & Location Analysis",
        blurb: "Catchment, feasibility, and site selection support for expansion decisions.",
        emoji: "📍",
      },
    ];

  if (growthLoading || servicesLoading) {
    return (
      <div className="min-h-screen bg-white text-gray-900 px-6 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading growth services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <Meta
        title="Growth Services | The Mosaic"
        description="Execution-led advisory for expansion: fitout delivery, real estate analysis, and location decisions grounded in feasibility."
        url="https://themosaic.pro/growth"
      />

      {(growthError || !growthData) && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded mb-8 max-w-6xl mx-auto">
          <p className="text-sm">
            <strong>Note:</strong> Using cached service data. Latest updates may not be reflected.
          </p>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">Growth Services</h1>

        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700">
          We support growth decisions that touch real estate and execution. If you are expanding, choosing a site, or planning a fitout, we help you structure the plan and deliver it cleanly.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mt-10">
          {Object.entries(services).map(([key, service], i) => {
            const serviceData = service.id ? service : { id: key, ...service };
            return (
              <Link
                key={serviceData.id || key}
                to={`/growth/${serviceData.id || key}`}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-3xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="h-full rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-lg p-6"
                >
                  <div className="text-4xl mb-3">{serviceData.emoji || "📈"}</div>
                  <h3 className="text-xl font-semibold">{serviceData.title}</h3>
                  <p className="text-gray-600 mt-2">
                    {serviceData.blurb || serviceData.description || "Growth support"}
                  </p>
                  <span className="text-blue-600 font-medium inline-block mt-4">Learn More →</span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-bold mb-4">What you can expect</h2>
          <ul className="grid gap-3 md:grid-cols-2 text-base leading-7 text-gray-700">
            <li>📍 Clear location and catchment thinking</li>
            <li>🏗️ Fitout coordination with milestone tracking</li>
            <li>📊 Feasibility lens on rent, capex, and timelines</li>
            <li>✅ Practical output, not generic slides</li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">Need a structured plan?</h3>
            <p className="text-lg opacity-90 mb-6">
              Share the city, expected size, and timeline. We will propose a sensible approach and deliverables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
      </motion.div>
    </div>
  );
}
