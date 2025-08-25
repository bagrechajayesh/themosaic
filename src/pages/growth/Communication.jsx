import React from "react";
import { motion } from "framer-motion";
import { Users, Mic2, MessageSquare, BookOpen, Plus } from "lucide-react";
import { Link } from "react-router-dom";

import Breadcrumbs from "../../components/Breadcrumbs";
import Meta from "../../components/Meta";
import TrainerCard from "../../components/TrainerCard";
import { communicationTrainers as trainers } from "../../data/trainers.communication";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d },
  viewport: { once: true, amount: 0.2 },
});

const programs = [
  { icon: Mic2, title: "Public Speaking Intensive", text: "Structure, storytelling, delivery and stage confidence with video feedback." },
  { icon: MessageSquare, title: "Business Communication", text: "Concise writing, stakeholder updates, meeting etiquette and cross-cultural clarity." },
  { icon: BookOpen, title: "Voice & Accent", text: "Pronunciation, intonation, clarity and pace for global conversations." },
  { icon: Users, title: "Executive Presence", text: "Gravitas, clarity, influence—designed for managers and leaders." },
];

export default function Communication() {
  const title = "Effective Communication Skills | The Mosaic";
  const description =
    "Public speaking, business writing, voice & accent, executive presence — high-impact corporate training by seasoned facilitators.";
  const url = "https://themosaic.pro/growth/communication";

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Effective Communication Skills",
    provider: { "@type": "Organization", name: "The Mosaic" },
    areaServed: "IN",
    description,
    url,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Communication Programs",
      itemListElement: programs.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Course", name: p.title, description: p.text },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Meta title={title} description={description} url={url} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-blue-700 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <Breadcrumbs />
          <div className="py-10">
            <motion.h1 {...fadeUp()} className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Effective Communication Skills
            </motion.h1>
            <motion.p {...fadeUp(0.15)} className="mt-6 max-w-3xl text-lg/8 opacity-90">
              High-impact programs that transform how your teams write, present and influence—delivered by seasoned trainers and coaches.
            </motion.p>
            <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap gap-3">
              <a href="#programs" className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition">
                Explore Programs
              </a>
              <Link to="/growth" className="border border-white/40 px-6 py-3 rounded-xl hover:bg-white/10">
                Back to Growth
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp()} className="text-3xl md:text-4xl font-bold mb-10">
          Signature programs
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <motion.div key={i} {...fadeUp(0.05 * i)} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trainers (reusable TrainerCard + external data) */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fadeUp()} className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Meet the trainers</h2>
            <button className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900">
              <Plus className="w-5 h-5" /> Add more (via data file)
            </button>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainers.map((t, i) => (
              <TrainerCard key={i} {...t} color="indigo" delay={0.05 * i} />
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          {...fadeUp()}
          className="bg-indigo-700 text-white rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-bold">Outcomes you can expect</h3>
            <ul className="mt-3 text-indigo-100 space-y-1">
              <li>• Sharper, concise writing and email etiquette</li>
              <li>• Confident presentations & client conversations</li>
              <li>• Improved cross-functional collaboration</li>
              <li>• Leadership presence and influence</li>
            </ul>
          </div>
          {/* CTA → Contact page */}
          <Link to="/contact" className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition">
            Book a workshop
          </Link>
        </motion.div>
      </section>

      {/* JSON-LD Service schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
    </div>
  );
}
