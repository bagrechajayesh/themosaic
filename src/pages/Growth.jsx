// src/pages/Growth.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGrowth, useServices } from "../hooks/useStaticData";

// --- Lightweight Meta helper (no extra deps) ---
function Meta({ title, description, url, image }) {
  useEffect(() => {
    const set = (selector, attr, value) => {
      if (!value) return;
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.startsWith('meta[name="')) {
          el.setAttribute(
            "name",
            selector.match(/meta\[name="([^"]+)"\]/)[1]
          );
        } else if (selector.startsWith('meta[property="')) {
          el.setAttribute(
            "property",
            selector.match(/meta\[property="([^"]+)"\]/)[1]
          );
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    if (title) document.title = title;

    set('meta[name="description"]', "content", description);
    set('meta[property="og:title"]', "content", title);
    set('meta[property="og:description"]', "content", description);
    set('meta[property="og:type"]', "content", "website");
    set('meta[property="og:url"]', "content", url);
    if (image) set('meta[property="og:image"]', "content", image);

    set(
      'meta[name="twitter:card"]',
      "content",
      image ? "summary_large_image" : "summary"
    );
    set('meta[name="twitter:title"]', "content", title);
    set('meta[name="twitter:description"]', "content", description);
    if (image) set('meta[name="twitter:image"]', "content", image);

    if (url) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", url);
    }

    // JSON-LD (basic WebPage)
    const ld = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      url,
      description,
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ld-growth";
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("ld-growth");
      if (s) s.remove();
    };
  }, [title, description, url, image]);

  return null;
}

export default function Growth() {
  const {
    data: growthData,
    loading: growthLoading,
    error: growthError,
  } = useGrowth();
  const { data: servicesData, loading: servicesLoading } = useServices();

  // Fallback services if data loading fails – now includes fitout + real estate analysis
  const services =
    growthData?.programs ||
    servicesData?.growth?.services || [
      {
        id: "communication",
        title: "Effective Communication Skills",
        blurb:
          "Public speaking, business writing, voice & accent, executive presence.",
        emoji: "🗣️",
      },
      {
        id: "creative",
        title: "Creative Thinking Workshop",
        blurb:
          "Open minds, break ruts, and solve real problems with practical tools.",
        emoji: "💡",
      },
      {
        id: "fitout",
        title: "Fitout & Turnkey Execution",
        blurb:
          "Retail and commercial fitouts, BOQ & costing, vendor coordination, and on-site execution.",
        emoji: "🏗️",
      },
      {
        id: "realestate-analysis",
        title: "Real Estate Analysis",
        blurb:
          "Catchment and location analysis, feasibility studies, and site-selection strategy for projects.",
        emoji: "📍",
      },
    ];

  const pageMeta = {
    title: "Growth Services | The Mosaic",
    description:
      "Unlock growth with communication skills, creative thinking, fitout support, and real estate analysis including catchment and location studies.",
    url: "https://themosaic.pro/growth",
    image: "",
  };

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
      <Meta {...pageMeta} />

      {(growthError || !growthData) && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded mb-8 max-w-6xl mx-auto">
          <p className="text-sm">
            <strong>Note:</strong> Using cached service data. Latest updates may
            not be reflected.
          </p>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          Growth Services
        </h1>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
          We empower creative businesses, start-ups, and individuals with
          strategic guidance, skills programs, and real-estate linked growth
          support to fuel sustainable expansion.
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 mt-10">
          {Object.entries(services).map(([key, service], i) => {
            const serviceData = service.id ? service : { id: key, ...service };
            return (
              <Link
                key={serviceData.id || key}
                to={`/growth/${serviceData.id || key}`}
                aria-label={`Open ${serviceData.title}`}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-3xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="h-full rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-lg p-6"
                >
                  <div className="text-4xl mb-3">
                    {serviceData.emoji || "📈"}
                  </div>
                  <h3 className="text-xl font-semibold">{serviceData.title}</h3>
                  <p className="text-gray-600 mt-2">
                    {serviceData.blurb ||
                      serviceData.description ||
                      "Strategic growth solution"}
                  </p>
                  <span className="text-blue-600 font-medium inline-block mt-4">
                    Learn More →
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Quick highlights (POSH reference removed) */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold mb-4">How we help</h2>
          <ul className="grid gap-3 md:grid-cols-2 text-base leading-7">
            <li>📈 Business strategy & positioning</li>
            <li>💬 Communication and executive presence</li>
            <li>💡 Creativity sprints for problem-solving</li>
            <li>🧭 Real estate–linked growth, fitout and location thinking</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to Accelerate Growth?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Connect with our growth specialists to explore communication,
              creative, fitout, and location analysis support for your next
              phase.
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
