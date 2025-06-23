import React, { useState } from 'react';
import { Users, TrendingUp, Scale, Phone, Mail, MapPin, ExternalLink, User, Home } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showFullBio, setShowFullBio] = useState({});
  const [expandedService, setExpandedService] = useState({});

  const toggleBio = (index) => {
    setShowFullBio(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleService = (index) => {
    setExpandedService(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const artists = [
    {
      name: 'Arvind Sivakumaran',
      avatar: '✍️',
      role: 'Filmmaker • Scholar • Writer',
      bio: 'Arvind graduated in Film Production from Victoria Motion Picture School, B.C., Canada in 2002. He also holds a degree in English Literature from St. Xaviers College, Mumbai. His screenplay "Middle of Nowhere" was shortlisted for the Nicholl Fellowship. He’s worked as a guest lecturer, writer, curator and senior executive in media organizations.'
    },
    {
      name: 'Vinay Choudary',
      avatar: '🎬',
      role: 'Writer • Director • Script Consultant',
      bio: 'Vinay is a versatile Indian screenwriter and director with 1000+ TV episodes, feature films, and a Prime Video web series. He’s known for his work on "Hip Hip Hurray", "Johnny Gaddaar" development, and is currently developing projects for India and South Africa.'
    },
    {
      name: 'Steven Hanulik',
      avatar: '🎥',
      role: 'Filmmaker • Copywriter',
      bio: 'Steven has 20 years of experience in film, broadcast, and ad marketing. Co-creator of Canada’s first 3D stop-motion short "Skeleton Girl", he’s won awards and written acclaimed screenplays like "Middle of Nowhere" and "Lily". He’s also a sought-after marketing copywriter and contributor to publications like Optimum.'
    }
  ];

  const entertainmentServices = [
    "Career Management",
    "Deal Negotiation",
    "Project Development",
    "Industry Connections",
    "Brand Building",
    "Opportunity Matching"
  ];

  const growthServices = [
    "Soft Skills Training",
    "Mental Health Seminars",
    "Professional Development",
    "Executive Coaching"
  ];

  const legalServices = [
    "MSME Advisory Services",
    "RERA Compliance",
    "Corporate Legal Support",
    "Entertainment Law"
  ];

  const renderSection = () => {
    switch (activeTab) {
      case 'home':
        return (
          <section className="text-center max-w-3xl mx-auto py-12">
            <h2 className="text-3xl font-bold mb-4">About Mosaic</h2>
            <p className="text-lg text-gray-700">
              Mosaic is a boutique talent platform focused on connecting independent creators with production houses, brands, and studios. We simplify the collaboration process and empower artistic storytelling.
            </p>
          </section>
        );
      case 'entertainment':
        return (
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-10">Our Artists</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {artists.map((artist, index) => (
                <div key={index} className="bg-white rounded-xl shadow p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-xl">{artist.avatar}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{artist.name}</h3>
                      <p className="text-sm text-gray-500">{artist.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700 text-sm">
                    {showFullBio[index]
                      ? artist.bio
                      : artist.bio.length > 180
                      ? artist.bio.slice(0, 180) + '...'
                      : artist.bio}
                  </p>
                  {artist.bio.length > 180 && (
                    <button
                      onClick={() => toggleBio(index)}
                      className="mt-2 text-sm text-blue-600 hover:underline"
                    >
                      {showFullBio[index] ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-center mt-16 mb-8">Entertainment Services</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {entertainmentServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow p-6">
                  <h3 className="font-semibold text-lg">{service}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {expandedService[service]
                      ? `Comprehensive support for ${service.toLowerCase()} including planning, outreach, and ongoing development.`
                      : `Strategic guidance on ${service.toLowerCase()}.`}
                  </p>
                  <button
                    onClick={() => toggleService(service)}
                    className="mt-2 text-sm text-blue-600 hover:underline"
                  >
                    {expandedService[service] ? 'Show Less' : 'Show More'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        );
      case 'growth':
        return (
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-10">Growth Services</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {growthServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow p-6">
                  <h3 className="font-semibold text-lg">{service}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {expandedService[service]
                      ? `In-depth programs and coaching for ${service.toLowerCase()}.`
                      : `Supportive training and advisory on ${service.toLowerCase()}.`}
                  </p>
                  <button
                    onClick={() => toggleService(service)}
                    className="mt-2 text-sm text-blue-600 hover:underline"
                  >
                    {expandedService[service] ? 'Show Less' : 'Show More'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        );
      case 'legal':
        return (
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-10">Legal Services</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {legalServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow p-6">
                  <h3 className="font-semibold text-lg">{service}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {expandedService[service]
                      ? `End-to-end legal guidance for ${service.toLowerCase()}, tailored to client needs.`
                      : `Consulting for ${service.toLowerCase()}.`}
                  </p>
                  <button
                    onClick={() => toggleService(service)}
                    className="mt-2 text-sm text-blue-600 hover:underline"
                  >
                    {expandedService[service] ? 'Show Less' : 'Show More'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        );
      case 'about':
        return (
          <section className="text-center max-w-3xl mx-auto py-12">
            <h2 className="text-3xl font-bold mb-4">About the Founder</h2>
            <img src="/images/founder.jpg" alt="Founder" className="w-32 h-32 mx-auto rounded-full shadow mb-4" />
            <h3 className="text-xl font-semibold">Jayesh Bagrecha</h3>
            <p className="text-gray-600 mt-2">
              Jayesh is a strategic business leader with experience in healthcare, legal, and digital transformation. His vision behind Mosaic is to bridge creativity with technology and provide a scalable platform for artists to thrive.
            </p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b shadow">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">The Mosaic</h1>
          <p className="text-gray-600">Representing Exceptional Creative Talent & Professional Services</p>
        </div>
      </header>

      {/* Navigation */}
