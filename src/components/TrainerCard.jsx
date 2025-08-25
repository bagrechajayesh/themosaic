import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, PhoneCall, ChevronDown } from "lucide-react";

/**
 * Reusable TrainerCard
 *
 * Props:
 * - name (string) – required
 * - title (string)
 * - summary (string)
 * - highlights (string[]) – pill tags
 * - competency (string[]) – pill tags
 * - email (string) – mailto:
 * - phone (string) – tel:
 * - avatar (string | null) – image URL
 * - more (object) – { experience?: string[], certifications?: string[], education?: string[] }
 * - color ("indigo" | "rose" | "violet") – theme accent, defaults to "indigo"
 * - delay (number) – framer-motion delay
 * - startExpanded (boolean) – if true, details are open on first render
 */
export default function TrainerCard({
  name,
  title = "",
  summary = "",
  highlights = [],
  competency = [],
  email,
  phone,
  avatar = null,
  more = {},
  color = "indigo",
  delay = 0,
  startExpanded = false,
}) {
  const [open, setOpen] = useState(startExpanded);

  // Tailwind-safe themes (pre-listed classes so JIT includes them)
  const themes = {
    indigo: {
      chipBg: "bg-indigo-100",
      chipText: "text-indigo-700",
      avatarBg: "bg-indigo-200",
      avatarText: "text-indigo-800",
      border: "border-gray-100",
      cardFrom: "from-white",
      cardTo: "to-indigo-50/30",
      bullet: "text-indigo-700",
    },
    rose: {
      chipBg: "bg-rose-100",
      chipText: "text-rose-700",
      avatarBg: "bg-rose-200",
      avatarText: "text-rose-800",
      border: "border-gray-100",
      cardFrom: "from-white",
      cardTo: "to-rose-50/30",
      bullet: "text-rose-700",
    },
    violet: {
      chipBg: "bg-violet-100",
      chipText: "text-violet-700",
      avatarBg: "bg-violet-200",
      avatarText: "text-violet-800",
      border: "border-gray-100",
      cardFrom: "from-white",
      cardTo: "to-violet-50/30",
      bullet: "text-violet-700",
    },
  };
  const t = themes[color] || themes.indigo;

  const fadeUp = (d = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: d },
    viewport: { once: true, amount: 0.2 },
  });

  const slideDown = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1, transition: { duration: 0.35 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.25 } },
  };

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <motion.div
      {...fadeUp(delay)}
      className={`rounded-2xl p-8 border ${t.border} shadow-sm hover:shadow-md transition bg-gradient-to-br ${t.cardFrom} ${t.cardTo}`}
    >
      <div className="flex items-start gap-6">
        <div className={`w-16 h-16 rounded-2xl ${t.avatarBg} ${t.avatarText} flex items-center justify-center text-xl font-bold shrink-0 overflow-hidden`}>
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover rounded-2xl" />
          ) : (
            initials
          )}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold">{name}</h3>
          {title && <p className={`${t.chipText.replace("text-", "text-")} font-medium`}>{title}</p>}
          {summary && <p className="text-gray-700 mt-3">{summary}</p>}

          {highlights?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {highlights.map((h, idx) => (
                <span key={idx} className={`inline-block text-sm ${t.chipBg} ${t.chipText} px-3 py-1 rounded-full`}>
                  {h}
                </span>
              ))}
            </div>
          )}

          {competency?.length > 0 && (
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Core competencies</h4>
              <div className="flex flex-wrap gap-2">
                {competency.map((c, idx) => (
                  <span key={idx} className="inline-block text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(email || phone) && (
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-700">
              {email && (
                <a href={email} className="inline-flex items-center gap-2 hover:underline">
                  <Mail className="w-4 h-4" /> Email
                </a>
              )}
              {phone && (
                <a href={phone} className="inline-flex items-center gap-2 hover:underline">
                  <PhoneCall className="w-4 h-4" /> Call
                </a>
              )}
            </div>
          )}

          {/* Expand toggle (only if `more` has content) */}
          {(more?.experience?.length || more?.certifications?.length || more?.education?.length) ? (
            <>
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className={`mt-6 inline-flex items-center gap-2 ${t.chipText} hover:opacity-90 font-medium`}
              >
                {open ? "Hide details" : `More about ${name.split(" ")[0]}`}
                <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div {...slideDown} className="mt-4 overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-6">
                      {more.experience?.length ? (
                        <div>
                          <h5 className="font-semibold mb-2">Experience</h5>
                          <ul className={`list-disc list-inside text-sm text-gray-700 space-y-1`}>
                            {more.experience.map((e, idx) => <li key={idx}>{e}</li>)}
                          </ul>
                        </div>
                      ) : null}

                      {more.certifications?.length ? (
                        <div>
                          <h5 className="font-semibold mb-2">Certifications</h5>
                          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {more.certifications.map((c, idx) => <li key={idx}>{c}</li>)}
                          </ul>
                        </div>
                      ) : null}

                      {more.education?.length ? (
                        <div>
                          <h5 className="font-semibold mb-2">Education</h5>
                          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {more.education.map((ed, idx) => <li key={idx}>{ed}</li>)}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
