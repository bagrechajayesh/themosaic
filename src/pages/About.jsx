// src/pages/About.jsx
import { motion } from "framer-motion";
import { useAbout } from "../hooks/useStaticData";
import { Award, Users, Globe, Target } from "lucide-react";

export default function About() {
  const { data: aboutData, loading, error } = useAbout();

  // Fallback data if loading fails
  const fallbackData = {
    company: {
      name: "The Mosaic",
      tagline: "Where Talent Meets Opportunity",
      description: "The Mosaic is a collective of storytellers, artists, strategists, and legal experts working at the intersection of creativity and business. We empower talent and ideas through tailored services across entertainment, legal, and growth domains.",
      location: "Mumbai, Maharashtra, India"
    },
    founder: {
      name: "Jayesh Bagrecha",
      title: "Founder • Strategic Business Leader",
      image: "/founders/jayesh-bagrecha.jpg",
      bio: "With over a decade of experience in strategic business leadership, operations, and transformation, Jayesh has worked across diverse industries most notably in media, retail, healthcare, and business consulting driving customer experience, operations, and service delivery.",
      additionalBio: "As a certified PMP, Jayesh has successfully executed turnaround projects, introduced process excellence initiatives, and overseen digital transformation efforts. His background includes P&L ownership, team coaching, stakeholder management, and business alliances all led by a practical, mutual growth and customer-first mindset."
    }
  };

  const displayData = aboutData || fallbackData;

  const companyValues = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every project and partnership is guided by clear purpose and measurable impact."
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We believe in the power of collective creativity and cross-functional expertise."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Mumbai-based with international outlook, connecting local talent to global opportunities."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional results across all service verticals."
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-gray-900 px-6 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading about information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      {/* Error banner if data loading failed */}
      {error && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded mb-8 max-w-4xl mx-auto">
          <p className="text-sm">
            <strong>Note:</strong> Using cached company data. Latest updates may not be reflected.
          </p>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Company Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {displayData.company.name}
          </motion.h1>
          
          {displayData.company.tagline && (
            <motion.p 
              className="text-xl text-blue-600 font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {displayData.company.tagline}
            </motion.p>
          )}

          <motion.p 
            className="text-lg mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {displayData.company.description}
          </motion.p>

          {displayData.company.location && (
            <motion.p 
              className="text-gray-600 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Globe className="w-5 h-5 mr-2" />
              Based in {displayData.company.location}
            </motion.p>
          )}
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                  className="bg-gray-50 rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Founder Section */}
        {displayData.founder && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gray-100 rounded-xl p-8 shadow-md mt-10 flex flex-col items-center text-center"
          ></motion.div>