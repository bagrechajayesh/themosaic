import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  ClipboardList,
  HardHat,
  MapPinned,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Fitout() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Heading */}
        <motion.div
          {...fadeUp(0)}
          className="max-w-4xl mx-auto mb-8 text-center"
        >
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            Growth Services
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
            Fitout &amp; Turnkey Execution
          </h1>
          <p className="text-gray-700 text-lg">
            Support for retail, office, and commercial spaces – from bare shell
            to handover. We sit on your side of the table to make sure design,
            cost, and timelines stay under control.
          </p>
        </motion.div>

        {/* Hero highlight */}
        <motion.div
          {...fadeUp(0.1)}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="rounded-3xl bg-white border border-gray-100 shadow-md p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="inline-flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-2xl border border-blue-100">
                <HardHat className="h-8 w-8 text-blue-700" />
                <div>
                  <p className="text-sm font-semibold text-blue-800">
                    Real estate + execution
                  </p>
                  <p className="text-xs text-blue-700">
                    Blending development, design &amp; operations
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 text-gray-700 text-sm md:text-base">
              <p>
                We work with founders, occupiers, and owners to convert
                potential into usable space. Layout, BOQ, vendor discussions,
                and on-site checks – we help you ask the right questions and
                keep the project grounded in business logic, not just decor.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Three core pillars */}
        <motion.div
          {...fadeUp(0.2)}
          className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <Building2 className="h-8 w-8 mb-3 text-blue-700" />
            <h2 className="text-xl font-semibold mb-2">
              Space Planning &amp; Layout
            </h2>
            <p className="text-gray-700 text-sm">
              Concept layouts, zoning, circulation, and basic design intent that
              balances aesthetics, functionality, and compliance with realistic
              budgets.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <ClipboardList className="h-8 w-8 mb-3 text-blue-700" />
            <h2 className="text-xl font-semibold mb-2">
              BOQ, Costing &amp; Vendors
            </h2>
            <p className="text-gray-700 text-sm">
              Bills of quantities, simple specs, vendor shortlisting, and
              comparative summaries so your decisions are based on clear
              numbers, not guesswork.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <CheckCircle2 className="h-8 w-8 mb-3 text-blue-700" />
            <h2 className="text-xl font-semibold mb-2">
              On-Site Execution Support
            </h2>
            <p className="text-gray-700 text-sm">
              Periodic site visits, milestone checklists, punch-lists, and
              watching for deviations between plan and execution, so things
              don&apos;t drift quietly.
            </p>
          </div>
        </motion.div>

        {/* Link to Real Estate Analysis */}
        <motion.div
          {...fadeUp(0.3)}
          className="max-w-4xl mx-auto mt-10"
        >
          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-start gap-4">
            <div className="flex-shrink-0">
              <MapPinned className="h-8 w-8 text-blue-700" />
            </div>
            <div className="flex-1 text-sm md:text-base text-gray-700">
              <h2 className="text-xl font-semibold mb-2">
                Tied closely to Real Estate &amp; Location Decisions
              </h2>
              <p className="mb-3">
                Fitout budgets and design choices make the most sense when the
                underlying location is right. For high-stakes sites, we pair
                this service with catchment and location analysis.
              </p>
              <p>
                You can read more about that under{" "}
                <Link
                  to="/growth/realestate-analysis"
                  className="text-blue-700 font-semibold underline"
                >
                  Real Estate Analysis
                </Link>
                .
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeUp(0.4)}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <div className="bg-blue-600 text-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-3">
              Planning a new store or office?
            </h2>
            <p className="mb-6 text-sm md:text-base opacity-90">
              Share your city, approximate size, and timeline – we can have a
              structured first call to see if we&apos;re the right fitout
              partner for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Talk to Us
              </Link>
              <a
                href="https://wa.me/917276789555"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
