import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, Scale, ChevronRight, Star, Award, Briefcase, Phone, Mail, MapPin, ExternalLink, User } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('entertainment');
  const [expandedArtist, setExpandedArtist] = useState(null);

  const founderProfile = {
    name: "Jayesh Bagrecha",
    role: "Founder & Strategic Leader",
    bio: "Jayesh is a strategic business leader with experience in healthcare, legal, and digital transformation. His vision behind Mosaic is to bridge creativity with technology and provide a scalable platform for artists to thrive.",
    image: "/images/founder.jpg"
  };

  const verticals = [
    {
      id: 'entertainment',
      title: 'Entertainment',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      description: 'Representing exceptional creative talent in film, television, and digital media'
    },
    {
      id: 'growth',
      title: 'Growth',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      description: 'Professional development, wellness, and skill enhancement services'
    },
    {
      id: 'legal',
      title: 'Legal',
      icon: Scale,
      color: 'from-green-500 to-emerald-500',
      description: 'Comprehensive legal advisory and compliance services'
    },
    {
      id: 'about',
      title: 'About Us',
      icon: User,
      color: 'from-yellow-500 to-orange-500',
      description: 'Meet our founder and the story behind Mosaic'
    }
  ];

  const renderAboutSection = () => (
    <div className="text-center max-w-3xl mx-auto">
      <img
        src={founderProfile.image}
        alt={founderProfile.name}
        className="w-32 h-32 mx-auto rounded-full shadow-lg mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">{founderProfile.name}</h3>
      <p className="text-gray-600 italic mb-4">{founderProfile.role}</p>
      <p className="text-lg text-gray-700 leading-relaxed">{founderProfile.bio}</p>
    </div>
  );

  const renderAboutMosaic = () => (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">About Mosaic</h2>
      <p className="text-xl text-gray-600">
        Mosaic is a boutique talent platform focused on connecting independent creators with production houses, brands, and studios. We simplify the collaboration process and empower artistic storytelling.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100">
      <header className="bg-gray-50 shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                M
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                The Mosaic
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              Representing Exceptional Creative Talent & Professional Services
            </p>
          </div>
        </div>
      </header>

      <nav className="bg-gray-50 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-1 py-4">
            {verticals.map((vertical) => {
              const IconComponent = vertical.icon;
              return (
                <button
                  key={vertical.id}
                  onClick={() => setActiveSection(vertical.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeSection === vertical.id
                      ? 'bg-gradient-to-r ' + vertical.color + ' text-white shadow-lg'
                      : 'text-gray-700 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{vertical.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeSection === 'about' ? (
          renderAboutSection()
        ) : (
          <>
            {renderAboutMosaic()}
            {/* ... existing vertical content rendering ... */}
          </>
        )}
      </main>

      <section className="bg-gray-50 mt-20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to take your career to the next level? We'd love to hear from you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-purple-100">jayesh@themosaic.pro</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-blue-100 flex items-center justify-center gap-2">
                +91 7276789555
                <a href="https://wa.me/917276789555" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-green-100">Mumbai, Maharashtra<br />India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
