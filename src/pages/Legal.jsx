// src/pages/Legal.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useServices } from "../hooks/useStaticData";
import { Scale, FileText, Shield, Users, Building, Gavel, CheckCircle2, ArrowRight } from "lucide-react";

export default function Legal() {
  const { data: servicesData, loading, error } = useServices();

  // Fallback legal services if data loading fails
  const legalServices = servicesData?.legal?.services || [
    "Entertainment Law & Contracts",
    "Business Contract Drafting", 
    "Intellectual Property Protection",
    "Corporate Law & Compliance",
    "Litigation Support & Representation",
    "Legal Consulting & Advisory"
  ];

  const legalAreas = [
    {
      icon: FileText,
      title: "Contract Drafting & Negotiation",
      description: "Comprehensive contract services for entertainment, business, and creative industries.",
      services: ["Entertainment Contracts", "Business Agreements", "Licensing Deals", "Employment Contracts"]
    },
    {
      icon: Shield,
      title: "Intellectual Property Rights",
      description: "Protect your creative works, trademarks, and business innovations.",
      services: ["Copyright Registration", "Trademark Protection", "Patent Applications", "IP Strategy"]
    },
    {
      icon: Scale,
      title: "Regulatory & Compliance Advisory",
      description: "Navigate complex regulations and maintain compliance across industries.",
      services: ["Industry Compliance", "Regulatory Filings", "Policy Development", "Risk Assessment"]
    },
    {
      icon: Building,
      title: "Corporate Law Services",
      description: "Legal support for business formation, governance, and transactions.",
      services: ["Company Formation", "Corporate Governance", "M&A Support", "Board Advisory"]
    }
  ];

  const industries = [
    { name: "Entertainment & Media", description: "Film, TV, music, digital content" },
    { name: "Creative Industries", description: "Art, design, publishing, gaming" },
    { name: "Technology Startups", description: "SaaS, apps, digital platforms" },
    { name: "Small & Medium Business", description: "General business legal needs" }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-gray-900 px-6 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading legal services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Error banner if data loading failed */}
          {error && (
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded mb-8">
              <p className="text-sm">
                <strong>Note:</strong> Using cached service data. Latest updates may not be reflected.
              </p>
            </div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Legal Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Comprehensive legal support tailored for creative industries, growing businesses, 
              and entertainment professionals.
            </p>
            <p className="text-lg mb-8 max-w-4xl mx-auto opacity-80">
              Our legal advisory wing supports artists, creators, startups, and businesses in navigating 
              the complex landscape of intellectual property, contracts, and regulatory compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-amber-600 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Scale className="w-5 h-5 mr-2" />
                Legal Consultation
              </Link>
              <a
                href="https://wa.me/917276789555"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-colors inline-flex items-center justify-center"
              >
                Quick Questions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Legal Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized legal services designed for the unique needs of creative professionals and growing businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {legalAreas.map((area, index) => {
              const IconComponent = area.icon;
              
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{area.description}</p>
                  
                  <div className="space-y-2">
                    {area.services.map((service, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Services List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Legal Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From contract negotiation to IP protection, we cover all your legal needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-center">
                  <Gavel className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized knowledge across key sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Need Legal Support?</h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're launching a creative project, scaling your business, or need contract review, 
              our legal team is here to protect your interests and guide your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-amber-600 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/917276789555"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-colors inline-flex items-center justify-center"
              >
                Quick Legal Question
              </a>
            </div>
            <p className="text-sm opacity-75 mt-6">
              📍 Based in Mumbai, Maharashtra, India | 📧 jayesh@themosaic.pro | 📞 +91 7276789555
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}