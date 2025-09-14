import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function StevenHanulik() {
  const PLACEHOLDER = "/artists/placeholder.jpg";
  const [imgSrc, setImgSrc] = useState("/artists/steven-hanulik.jpg");

  const handleImgError = () => {
    if (imgSrc.endsWith(".jpg")) {
      setImgSrc("/artists/steven-hanulik.png");
    } else {
      setImgSrc(PLACEHOLDER);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/entertainment"
          className="inline-flex items-center gap-2 text-blue-700 hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Entertainment
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-3 mb-12"
        >
          {/* Image */}
          <div className="md:col-span-1">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <img
                src={imgSrc}
                alt="Steven Hanulik"
                onError={handleImgError}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Steven Hanulik
              </h1>
              <h2 className="text-xl text-gray-600 mb-6">
                Filmmaker • Professional Copywriter
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Steven Hanulik is a filmmaker and professional copywriter with nearly 20 
                  years of combined experience in the film, television, broadcast news, 
                  and ad marketing industries. He graduated With Distinction from the 
                  Victoria Motion Picture School in Victoria BC in 2002, and received his 
                  Bachelor of General Studies degree from Brandon University in 2001.
                </p>
                
                <p>
                  He co-directed, co-wrote, and co-animated Canada's first 3D stop-motion 
                  animated short film "Skeleton Girl" in 2012, which won Best First 3D 
                  Feature at the Be Film Underground Film Festival in New York City, and 
                  was an official selection at multiple prestigious festivals.
                </p>
                
                <p>
                  As a highly sought-after marketing copywriter and strategist, he has 
                  worked with clients across North America covering everything from 
                  lifestyle brands and business to industrial, agricultural, food and 
                  beverage, and educational campaigns.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Sections */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid gap-8 md:grid-cols-2 mb-12"
        >
          {/* Notable Works */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Notable Works</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">"Skeleton Girl" (2012)</p>
                  <p className="text-sm text-gray-600">Canada's first 3D stop-motion animated short film</p>
                  <p className="text-xs text-gray-500 mt-1">Won Best First 3D Feature at Be Film Underground Film Festival, NYC</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">"Middle of Nowhere" (2012)</p>
                  <p className="text-sm text-gray-600">Feature screenplay co-written with Arvind Sivakumaran</p>
                  <p className="text-xs text-gray-500 mt-1">Quarterfinalist - Academy Nicholl Screenwriting Competition</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">"Lily" (2018)</p>
                  <p className="text-sm text-gray-600">Original screenplay</p>
                  <p className="text-xs text-gray-500 mt-1">Quarterfinalist - PAGE Awards, Second Rounder - Austin Film Festival</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education & Experience</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Victoria Motion Picture School</p>
                  <p className="text-sm text-gray-600">Graduated With Distinction (2002)</p>
                  <p className="text-xs text-gray-500">Victoria, BC</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Brandon University</p>
                  <p className="text-sm text-gray-600">Bachelor of General Studies (2001)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Nearly 20 Years Experience</p>
                  <p className="text-sm text-gray-600">Film, television, broadcast news, and ad marketing</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Section for Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid gap-8 md:grid-cols-1 mb-12"
        >
          {/* Expertise */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Expertise</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Film & Animation</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "3D Stop-Motion Animation",
                    "Film Direction",
                    "Screenwriting",
                    "Co-Production"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Marketing & Strategy</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Professional Copywriting",
                    "Marketing Strategy",
                    "Lifestyle Brands",
                    "Industrial Campaigns",
                    "Food & Beverage",
                    "Educational Content"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}