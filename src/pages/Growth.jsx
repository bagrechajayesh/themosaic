// src/pages/Growth.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// --- Lightweight Meta helper (no extra deps) ---
function Meta({
  title,
  description,
  url,
  image, // optional
}) {
  useEffect(() => {
    const set = (selector, attr, value) => {
      if (!value) return;
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.startsWith('meta[name="')) {
          el.setAttribute("name", selector.match(/meta\[name="([^"]+)"\]/)[1]);
        } else if (selector.startsWith('meta[property="')) {
          el.setAttribute("property", selector.match(/meta\[property="([^"]+)"\]/)[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // Title
    if (title) document.title = title;

    // Standard + OpenGraph + Twitter
    set('meta[name="description"]', "content", description);
    set('meta[property="og:title"]', "content", title);
    set('meta[property="og:description"]', "content", description);
    set('meta[property="og:type"]', "content", "website");
    set('meta[property="og:url"]', "content", url);
    if (image) set('meta[property="og:image"]', "content", image);

    set('meta[name="twitter:card"]', "content", image ? "summary_large_image" : "summary");
    set('meta[name="twitter:title"]', "content", title);
    set('meta[name="twitter:description"]', "content", description);
    if (image) set('meta[name="twitter:image"]', "content", image);

    // Canonical link
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
      // Clean up JSON-LD on unmount to avoid duplicates during client nav
      const s = document.getElementById("ld-growth");
      if (s) s.remove();
    };
  }, [title, description, url, image]);

  return null;
}

// --- Page ---
export default function Growth() {
  const services = [
    {
      id: "posh",
      title: "POSH Compliance Guidance",
      blurb: "Policies, IC setup, awareness & audits — delivered with Yellow Spark.",
      emoji: "🛡️",
    },
    {
      id: "communication",
      title: "Effective Communication Skills",
      blurb: "Public speaking, business writing, voice & accent, executive presence.",
      emoji: "🗣️",
    },
    {
      id: "creative",
      title: "Creative Thinking Workshop",
      blurb: "Open minds, break ruts, and solve real problems with practical tools.",
      emoji: "💡",
    },
  ];

  const pageMeta = {
    title: "Growth Services | The Mosaic",
    description:
      "Unlock growth with POSH compliance guidance (with Yellow Spark), effective communication skills, and creative thinking workshops. Click a service to learn more.",
    url: "https://themosaic.pro/growth",
    // Add an OG image later if you have one, e.g. "https://themosaic.pro/og/growth.jpg"
    image: "",
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <Meta {...pageMeta} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">Growth Services</h1>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
          We empower creative businesses, start-ups, and individuals with strategic guidance,
          skills programs, and mindset workshops to fuel sustainable growth.
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 mt-10">
          {services.map((s, i) => (
            <Link
              key={s.id}
              to={`/growth/${s.id}`}
              aria-label={`Open ${s.title}`}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="h-full rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-lg p-6"
              >
                <div className="text-4xl mb-3">{s.emoji}</div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.blurb}</p>
                <span className="text-blue-600 font-medium inline-block mt-4">
                  Open →
                </span>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Optional: quick highlights (kept from your earlier page) */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold mb-4">How we help</h2>
          <ul className="grid gap-3 md:grid-cols-2 text-base leading-7">
            <li>📈 Business strategy & positioning</li>
            <li>💬 Communication and executive presence</li>
            <li>🎯 Compliance & culture programs (POSH, etc.)</li>
            <li>💡 Creativity sprints for problem-solving</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
