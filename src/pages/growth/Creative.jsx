import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Sparkles, Rocket, Target, BrainCircuit, FlaskConical, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = (d = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d }, viewport: { once: true, amount: 0.2 } });

export default function Creative() {
  const benefits = [
    { icon: BrainCircuit, title: "Break mental ruts", text: "Reframe challenges and see patterns others miss." },
    { icon: FlaskConical, title: "Experiment safely", text: "Rapid ideation, prototyping and evidence‑based testing." },
    { icon: Target, title: "Solve real problems", text: "Facilitated sprints that land on actionable solutions." },
    { icon: Rocket, title: "Build innovation muscle", text: "Habits, rituals and cadences that sustain creativity." },
  ];

  const agenda = [
    "Warm‑ups to switch on divergent thinking",
    "Reframing the brief—problem as a question",
    "Idea generation circuits (SCAMPER, worst‑possible idea, 6‑3‑5, etc.)",
    "Synthesis & clustering—turn chaos into themes",
    "Fast prototypes—storyboards, napkin sketches, demos",
    "Feedback loops—MAP (More/Add/Plus) critique method",
    "Prioritization—Impact vs Effort, risk lenses",
    "Action plan—owners, metrics, guardrails",
  ];

  const formats = [
    "½‑day inspiration lab",
    "1‑day problem‑solving sprint",
    "2‑day innovation accelerator",
    "4‑week cohort with weekly missions",
  ];

  const outcomes = [
    "Clear problem statements and decision criteria",
    "A portfolio of well‑formed ideas with quick tests",
    "Cross‑functional alignment & momentum",
    "Reusable toolkit for future challenges",
  ];

  const faqs = [
    { q: "Who is it for?", a: "Founders, product/marketing teams, HR/L&D, and any group tackling ambiguous problems." },
    { q: "Do we need design skills?", a: "No. We focus on thinking patterns and lightweight prototypes anyone can create." },
    { q: "Virtual options?", a: "Yes—Miro/FigJam friendly templates with breakout facilitation." },
    { q: "IP & confidentiality?", a: "All outputs belong to you; we sign NDAs on request." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-600 via-purple-700 to-fuchsia-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.h1 {...fadeUp()} className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Creative Thinking Workshop
          </motion.h1>
          <motion.p {...fadeUp(0.15)} className="mt-6 max-w-3xl text-lg/8 opacity-90">
            Unlock unconventional thinking to solve hard problems and spot new opportunities. Practical tools, energetic facilitation, and outcomes your team can ship.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap gap-3">
            <a href="#formats" className="bg-white text-violet-700 font-semibold px-6 py-3 rounded-xl hover:bg-violet-50 transition">See formats</a>
            <Link to="/growth" className="border border-white/40 px-6 py-3 rounded-xl hover:bg-white/10">Back to Growth</Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp()} className="text-3xl md:text-4xl font-bold mb-10">Why this workshop works</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div key={i} {...fadeUp(0.05 * i)} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Agenda */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.h2 {...fadeUp()} className="text-3xl md:text-4xl font-bold mb-6">A practical agenda</motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gray-600 max-w-3xl mb-8">
            We blend design‑thinking with creative warm‑ups and structured critique to move from fuzzy to focused—fast.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6">
            {agenda.map((item, i) => (
              <motion.div key={i} {...fadeUp(0.02 * i)} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-700 mt-1" />
                <p className="text-gray-800">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats & Outcomes */}
      <section id="formats" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div {...fadeUp()} className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Delivery formats</h3>
            <ul className="space-y-3 text-gray-700">
              {formats.map((f, i) => <li key={i}>• {f}</li>)}
            </ul>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Expected outcomes</h3>
            <ul className="space-y-3 text-gray-700">
              {outcomes.map((o, i) => <li key={i}>• {o}</li>)}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div {...fadeUp()} className="bg-gradient-to-r from-violet-600 to-fuchsia-700 text-white rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Bring a creativity sprint to your team</h3>
            <p className="opacity-90 mt-1">Share your goal and timeframe—we’ll propose a rapid, high‑impact plan.</p>
          </div>
          <a href="mailto:hello@themosaic.pro?subject=Creative%20Thinking%20Workshop" className="bg-white text-violet-700 px-6 py-3 rounded-xl font-semibold hover:bg-violet-50 transition inline-flex items-center">Get a plan <ArrowRight className="w-5 h-5 ml-2" /></a>
        </motion.div>
      </section>
    </div>
  );
}
