import React from "react";
import { motion } from "framer-motion";
import { Users, Mic2, MessageSquare, BookOpen, Award, PhoneCall, Mail, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = (d = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d }, viewport: { once: true, amount: 0.2 } });

/**
 * Trainer data is intentionally flexible. Add more trainers by pushing into `trainers`.
 * Seeded with Dr. Meenakshi Oswal (from the attached resume).
 */
const trainers = [
  {
    name: "Dr. Meenakshi Oswal",
    title: "Image Consultant • Soft Skills & Communication Trainer",
    summary:
      "Result‑driven facilitator with 20+ years’ experience across MNCs/BPOs/IT. Specializes in Soft Skills, Business English, Voice & Accent, Executive Communication, and Professional Presence.",
    highlights: [
      "Master Trainer (Soft Skills), POSH Trainer",
      "Corporate workshops for Infosys, Cognizant, SPI, Comat",
      "50+ SMART GIRLS workshops; 1000+ women impacted",
      "IELTS / TOEFL / CELTA certifications",
    ],
    competency: ["Public Speaking", "Voice & Accent", "Business English", "Interview Readiness", "Executive Presence", "Personal Branding"],
    email: "mailto:meenakshi.oswal0310@gmail.com",
    phone: "tel:+919764867272",
    location: "Khopoli, India",
    avatar: null, // supply a URL if you have a headshot; otherwise initials will show
  },
  // Add more trainers like { name, title, summary, highlights:[], competency:[], email, phone, location, avatar }
];

const programs = [
  { icon: Mic2, title: "Public Speaking Intensive", text: "Structure, storytelling, delivery and stage confidence with video feedback." },
  { icon: MessageSquare, title: "Business Communication", text: "Concise email writing, stakeholder updates, meeting etiquette and cross‑cultural clarity." },
  { icon: BookOpen, title: "Voice & Accent", text: "Pronunciation, intonation, clarity and pace for global conversations." },
  { icon: Users, title: "Executive Presence", text: "Gravitas, clarity, influence—designed for managers and leaders." },
];

export default function Communication() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-blue-700 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.h1 {...fadeUp()} className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Effective Communication Skills
          </motion.h1>
          <motion.p {...fadeUp(0.15)} className="mt-6 max-w-3xl text-lg/8 opacity-90">
            High‑impact programs that transform how your teams write, present and influence—delivered by seasoned trainers and coaches.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap gap-3">
            <a href="#programs" className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition">Explore Programs</a>
            <Link to="/growth" className="border border-white/40 px-6 py-3 rounded-xl hover:bg-white/10">Back to Growth</Link>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp()} className="text-3xl md:text-4xl font-bold mb-10">Signature programs</motion.h2>
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

      {/* Trainers */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fadeUp()} className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Meet the trainers</h2>
            <button className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900">
              <Plus className="w-5 h-5" /> Add more (via CMS / JSON)
            </button>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainers.map((t, i) => (
              <motion.div key={i} {...fadeUp(0.05 * i)} className="rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition bg-gradient-to-br from-white to-indigo-50/30">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-200 text-indigo-800 flex items-center justify-center text-xl font-bold shrink-0">
                    {t.avatar ? <img src={t.avatar} alt={t.name} className="w-full h-full object-cover rounded-2xl" /> : t.name.split(" ").map(w => w[0]).slice(0,2).join("")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{t.name}</h3>
                    <p className="text-indigo-800 font-medium">{t.title}</p>
                    <p className="text-gray-700 mt-3">{t.summary}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {t.highlights.map((h, idx) => (
                        <span key={idx} className="inline-block text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{h}</span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">Core competencies</h4>
                      <div className="flex flex-wrap gap-2">
                        {t.competency.map((c, idx) => (
                          <span key={idx} className="inline-block text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{c}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-700">
                      {t.email && <a href={t.email} className="inline-flex items-center gap-2 hover:underline"><Mail className="w-4 h-4" /> Email</a>}
                      {t.phone && <a href={t.phone} className="inline-flex items-center gap-2 hover:underline"><PhoneCall className="w-4 h-4" /> Call</a>}
                      {t.location && <span className="opacity-70">{t.location}</span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div {...fadeUp()} className="bg-indigo-700 text-white rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Outcomes you can expect</h3>
            <ul className="mt-3 text-indigo-100 space-y-1">
              <li>• Sharper, concise writing and email etiquette</li>
              <li>• Confident presentations & client conversations</li>
              <li>• Improved cross‑functional collaboration</li>
              <li>• Leadership presence and influence</li>
            </ul>
          </div>
          <a href="mailto:hello@themosaic.pro?subject=Communication%20Skills%20Workshop" className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition">Book a workshop</a>
        </motion.div>
      </section>
    </div>
  );
}
