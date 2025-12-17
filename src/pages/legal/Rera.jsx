// src/pages/legal/Rera.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Gavel, ShieldCheck, ClipboardList } from "lucide-react";

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

export default function Rera() {
  const sections = [
    {
      icon: ClipboardList,
      title: "RERA Advisory & Compliance",
      points: [
        "Registration support, project disclosures, and compliance checklists",
        "Extension planning, timelines, documentation and representations",
        "Allotment, agreements, demand communication and documentation review",
      ],
    },
    {
      icon: FileText,
      title: "RERA Authority Proceedings",
      points: [
        "Complaints, replies, rejoinders and written submissions",
        "Evidence planning, annexures, chronology and issue framing",
        "Hearing strategy and coordination for timely filings",
      ],
    },
    {
      icon: Gavel,
      title: "REAT Appeals",
      points: [
        "Appeal drafting and grounds strategy",
        "Pre-deposit planning and stay applications",
        "Paper-book preparation and compliance management",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Execution & Recovery",
      points: [
        "Execution petitions, recovery certificates and compliance follow-up",
        "Settlement documentation and structured compliance timelines",
        "Practical steps to close execution with minimal friction",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <Meta
        title="RERA Services | The Mosaic"
        description="RERA-focused legal services: compliance, RERA proceedings, REAT appeals, execution and recovery."
        url="https://themosaic.pro/legal/rera"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            RERA Services
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide forum-ready drafting and practical strategy across the RERA lifecycle, from compliance to disputes and execution.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 mt-10">
          {sections.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-md p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="h-6 w-6 text-amber-700" />
                  <h2 className="text-xl font-semibold">{s.title}</h2>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-amber-600 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Discuss a matter</h3>
            <p className="text-gray-700 mb-6">
              Share the project name, registration number (if any), current stage, and the relief you are pursuing. We will suggest the most efficient next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-amber-700 text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors"
              >
                Contact
              </Link>
              <a
                href="https://wa.me/917276789555"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
