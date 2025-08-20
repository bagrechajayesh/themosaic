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
                Filmmaker • Copywriter
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Steven has 20 years of experience in film, broadcast, and ad marketing. 
                  Co-creator of Canada's first 3D stop-motion short "Skeleton Girl", and 
                  writer of "Middle of Nowhere" and "Lily".
                </p>
                
                <p>
                  His diverse experience spans creative storytelling and commercial marketing, 
                  making him a versatile professional who understands both the artistic and 
                  business sides of the entertainment industry.
                </p>
                
                <p>
                  Steven's pioneering work in 3D stop-motion animation demonstrates his 
                  commitment to pushing creative boundaries and exploring new storytelling 
                  techniques in film production.
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
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">"Skeleton Girl"</p>
                  <p className="text-sm text-gray-600">Canada's first 3D stop-motion short film</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">"Middle of Nowhere"</p>
                  <p className="text-sm text-gray-600">Feature film screenplay</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">"Lily"</p>
                  <p className="text-sm text-gray-600">Original screenplay</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "3D Stop-Motion",
                "Film Production",
                "Copywriting",
                "Ad Marketing",
                "Broadcast Media",
                "Creative Direction",
                "Screenwriting",
                "Animation"
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
        </motion.div>
      </div>
    </div>
  );
}