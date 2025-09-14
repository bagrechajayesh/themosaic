// src/pages/legal/Posh.jsx
import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, Users, Scale, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Meta from "../../components/Meta"; // tiny SEO helper

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d },
  viewport: { once: true, amount: 0.2 },
});

export default function Posh() {
  const title = "POSH Compliance Guidance | The Mosaic";
  const description =
    "End-to-end POSH programs by The Mosaic: policy drafting, IC setup & certification, awareness sessions, and compliance audits.";
  const url = "https://themosaic.pro/legal/posh"; // moved under Legal

  // JSON-LD
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "POSH Compliance Guidance",
    provider: { "@type": "Organization", name: "The Mosaic" },
    areaServed: "IN",
    description,
    url,
    serviceType: "Compliance Training",
    offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
  };

  const highlights = [
    { icon: Shield, title: "Policy & Governance", text: "Drafting, review and implementation of POSH policy aligned to law and your culture." },
    { icon: Users, title: "IC Formation & Training", text: "Set up Internal Committee; certify members with case-based simulations and documentation drills." },
    { icon: BookOpen, title: "Employee Awareness", text: "Role-wise awareness sessions for managers, HR, and employees; multilingual options." },
    { icon: Scale, title: "Compliance & Audit", text: "End-to-end legal compliance checks, annual report prep, and evidence-ready processes." },
  ];

  const modules = [
    "Understanding the POSH Act: scope, definitions, duties",
    "What constitutes sexual harassment: examples & grey areas",
    "IC constitution, roles, powers, timelines and due process",
    "Receiving and recording complaints: intake to closure",
    "Inquiry best practices: notices, hearings, neutrality, PoE",
    "Interim reliefs, confidentiality & anti-retaliation",
    "Reporting obligations (Annual Report/Board), record-keeping",
    "Creating a respectful workplace: prevention over policing",
  ];

  const faqs = [
    { q: "Who should attend?", a: "Leaders, HR, IC members, functional managers and all employees. We provide separate tracks for IC and employees." },
    { q: "Do you provide certificates?", a: "Yes. Participants completing IC certification receive a digital certificate and reference templates." },
    { q: "Languages supported?", a: "English + Hindi by default. Regional languages available on request." },
    { q: "Delivery formats?", a: "On-site workshops (½ day to 2 days), live virtual cohorts, and micro-learning modules." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Meta title={title} description={description} url={url} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.h1 {...fadeUp()} className="text-4xl md:text-6xl font-extrabold tracking-tight">
            POSH Compliance Guidance
          </motion.h1>

          <motion.p {...fadeUp(0.15)} className="mt-6 max-w-3xl text-lg/8 opacity-90">
            Comprehensive, action-oriented POSH programs — delivered by The Mosaic{" "}
            <span className="opacity-80">in partnership with</span>{" "}
            <span className="font-semibold">Yellow Spark</span>, a specialist in workplace harassment prevention.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="bg-white text-rose-700 font-semibold px-6 py-3 rounded-xl hover:bg-rose-50 transition inline-flex items-center"
            >
              Contact us <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/legal" className="border border-white/40 px-6 py-3 rounded-xl hover:bg-white/10">
              Back to Legal
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp()} className="text-3xl md:text-4xl font-bold mb-10">What we deliver</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div key={i} {...fadeUp(0.05 * i)} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                <h.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.h2 {...fadeUp()} className="text-3xl md:text-4xl font-bold mb-6">Program modules</motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gray-600 max-w-3xl mb-8">
            Role-based tracks for Employees, Managers and IC members. Real cases, role-plays, templates and checklists included.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((m, i) => (
              <motion.div key={i} {...fadeUp(0.02 * i)} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-600 mt-1" />
                <p className="text-gray-700">{m}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats & Outcomes */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div {...fadeUp()} className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Delivery formats</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• 2-hour primers, ½-day intensives, 1–2 day certifications</li>
              <li>• Live virtual cohorts (Zoom/Meet) with breakout activities</li>
              <li>• Train-the-Trainer for in-house L&D & HR</li>
              <li>• Ongoing compliance retainer & annual refreshers</li>
            </ul>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Tangible outcomes</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Legally compliant POSH policy & records</li>
              <li>• Certified IC with inquiry readiness</li>
              <li>• Measurable awareness across the workforce</li>
              <li>• Reduced risk and stronger workplace culture</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.h2 {...fadeUp()} className="text-3xl md:text-4xl font-bold mb-8">FAQs</motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((f, i) => (
              <motion.div key={i} {...fadeUp(0.05 * i)} className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="font-semibold mb-2">{f.q}</h4>
                <p className="text-gray-700">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact block */}
      <section id="contact" className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          {...fadeUp()}
          className="bg-gradient-to-r from-rose-600 to-fuchsia-700 text-white p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-bold">Ready to make your workplace safer?</h3>
            <p className="opacity-90 mt-1">Tell us your locations, employee count and timeline—we’ll share a tailored plan.</p>
          </div>
          <Link
            to="/contact"
            className="bg-white text-rose-700 px-6 py-3 rounded-xl font-semibold hover:bg-rose-50 transition"
          >
            Contact us
          </Link>
        </motion.div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
    </div>
  );
}
