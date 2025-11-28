import React from "react";
import { motion } from "framer-motion";
import {
  MapPinned,
  BarChart3,
  Store,
  Building,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function RealEstateAnalysis() {
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
            Real Estate &amp; Location Analysis
          </h1>
          <p className="text-gray-700 text-lg">
            Before you sign a lease or block inventory, we help you understand
            who your customers are, how they move, and what the site can
            realistically deliver in terms of business.
          </p>
        </motion.div>

        {/* Highlight */}
        <motion.div
          {...fadeUp(0.1)}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="rounded-3xl bg-white border border-gray-100 shadow-md p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="inline-flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-2xl border border-blue-100">
                <MapPinned className="h-8 w-8 text-blue-700" />
                <div>
                  <p className="text-sm font-semibold text-blue-800">
                    Catchment-led decisions
                  </p>
                  <p className="text-xs text-blue-700">
                    From maps to business assumptions
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 text-gray-700 text-sm md:text-base">
              <p>
                Many decisions on &quot;good locations&quot; are still taken
                from instinct or hearsay. We add simple structure – who lives or
                works around you, what else they see, and how that translates
                into expected demand and realistic sales potential.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Three columns */}
        <motion.div
          {...fadeUp(0.2)}
          className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <Store className="h-8 w-8 mb-3 text-blue-700" />
            <h2 className="text-xl font-semibold mb-2">Catchment Profiling</h2>
            <p className="text-gray-700 text-sm">
              Demographic and income snapshots, competitor presence, and demand
              pockets – so you know who you&apos;re really planning for.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <Building className="h-8 w-8 mb-3 text-blue-700" />
            <h2 className="text-xl font-semibold mb-2">
              Site &amp; Micro-Location Study
            </h2>
            <p className="text-gray-700 text-sm">
              Access, visibility, frontage, adjacencies, movement paths, and
              bottlenecks – giving your design and fitout the right canvas.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <BarChart3 className="h-8 w-8 mb-3 text-blue-700" />
            <h2 className="text-xl font-semibold mb-2">
              Feasibility &amp; Business Lens
            </h2>
            <p className="text-gray-700 text-sm">
              Simple metrics linking rentals, capex, expected sales, and payback
              periods to help with go / no-go decisions.
            </p>
          </div>
        </motion.div>

        {/* When it helps */}
        <motion.div
          {...fadeUp(0.3)}
          className="max-w-4xl mx-auto mt-10"
        >
          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              When does this help the most?
            </h2>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 mt-1 text-blue-700" />
                <span>
                  New city or corridor expansion for a retail, F&amp;B, or
                  services brand.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 mt-1 text-blue-700" />
                <span>
                  Comparing alternate sites and wanting something more robust
                  than &quot;gut feel&quot;.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 mt-1 text-blue-700" />
                <span>
                  Developers or landlords planning concept positioning for a new
                  asset or redevelopment.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CTA and tie back to Fitout */}
        <motion.div
          {...fadeUp(0.4)}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <div className="bg-blue-600 text-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-3">
              Still debating between 2–3 locations?
            </h2>
            <p className="mb-6 text-sm md:text-base opacity-90">
              Share your options and basic business model. We can help you
              structure the thinking with catchment, rent, and payback lenses –
              and then carry that into{" "}
              <Link
                to="/growth/fitout"
                className="underline font-semibold"
              >
                Fitout &amp; Turnkey Execution
              </Link>{" "}
              if you choose to go ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start a Conversation
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
