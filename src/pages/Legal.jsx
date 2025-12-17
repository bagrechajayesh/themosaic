// src/pages/Legal.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scale, FileText, Gavel, ShieldCheck } from "lucide-react";

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

export default function Legal() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <Meta
        title="Legal Services | The Mosaic"
        description="RERA-focused legal services: compliance, complaints, replies, REAT appeals, and execution strategy."
        url="https://themosaic.pro/legal"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-5">
            <Scale className="h-4 w-4 text-amber-700" />
            <span className="text-sm font-semibold text-amber-800">Legal (RERA)</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Legal Services</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We focus on Real Estate Regulatory work. Practical drafting, precise strategy, and forum-ready execution for both promoters and allottees.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-6 md:grid-cols-3 mt-10"
        >
          <div className="rounded-3xl bg-white border border-gray-100 shadow-md p-6">
            <FileText className="h-7 w-7 text-amber-700 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Compliance & Advisory</h3>
            <p className="text-gray-700 text-sm">
              Registration, extensions, disclosures, timelines, and practical advisory around obligations and risk.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-gray-100 shadow-md p-6">
            <Gavel className="h-7 w-7 text-amber-700 mb-3" />
            <h3 className="text-xl font-semibold mb-2">RERA Proceedings</h3>
            <p className="text-gray-700 text-sm">
              Complaints, replies, rejoinders, evidence planning, arguments, and hearing strategy aligned to RERA practice.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-gray-100 shadow-md p-6">
            <ShieldCheck className="h-7 w-7 text-amber-700 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Appeals & Execution</h3>
            <p className="text-gray-700 text-sm">
              REAT appeals, pre-deposit strategy, stay planning, execution petitions, recovery, and compliance steps.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 rounded-3xl bg-amber-50 border border-amber-200 p-6 md:p-8"
        >
          <h2 className="text-2xl font-bold mb-3">RERA Services</h2>
          <p className="text-gray-800 mb-5">
            For a full view of our RERA scope and typical deliverables, visit the RERA page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/legal/rera"
              className="px-6 py-3 bg-amber-700 text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors text-center"
            >
              View RERA Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-amber-800 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
            >
              Discuss a Matter
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
