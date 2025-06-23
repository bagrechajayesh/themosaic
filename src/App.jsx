
import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('entertainment');
  const [showFullBio, setShowFullBio] = useState({});
  const [expandedService, setExpandedService] = useState({});

  const toggleBio = (index) => {
    setShowFullBio((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleService = (index) => {
    setExpandedService((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const artists = [
    {
      name: 'Arvind Sivakumaran',
      avatar: '✍️',
      role: 'Filmmaker • Scholar • Writer',
      bio: 'Arvind graduated in Film Production from Victoria Motion Picture School, B.C., Canada in 2002...',
    },
    {
      name: 'Vinay Choudary',
      avatar: '🎬',
      role: 'Writer • Director • Script Consultant',
      bio: 'Vinay is a versatile Indian screenwriter and director with over 1,000 episodes of television, two feature films, and a web series for Amazon Prime Video...',
    },
    {
      name: 'Steven Hanulik',
      avatar: '🎥',
      role: 'Filmmaker • Copywriter',
      bio: 'Steven is a filmmaker and professional copywriter with nearly 20 years of experience in film, television, broadcast news, and ad marketing...',
    },
  ];

  const entertainmentServices = [
    "Career Management",
    "Deal Negotiation",
    "Project Development",
    "Industry Connections",
    "Brand Building",
    "Opportunity Matching",
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {activeSection === 'entertainment' && (
        <>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {artists.map((artist, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-xl font-bold">{artist.avatar}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{artist.name}</h3>
                    <p className="text-sm text-gray-500">{artist.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-sm">
                  {showFullBio[i]
                    ? artist.bio + ' (Full detailed bio continues here...)'
                    : artist.bio}
                </p>
                <button
                  onClick={() => toggleBio(i)}
                  className="mt-2 text-sm text-blue-600 hover:underline"
                >
                  {showFullBio[i] ? 'Read Less' : 'Read More'}
                </button>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {entertainmentServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg">{service}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {expandedService[index]
                    ? `Comprehensive support for ${service.toLowerCase()} including strategy, execution, and performance enhancement.`
                    : `Detailed support and strategy related to ${service.toLowerCase()}.`}
                </p>
                <button
                  onClick={() => toggleService(index)}
                  className="mt-2 text-sm text-blue-600 hover:underline"
                >
                  {expandedService[index] ? 'Show Less' : 'Show More'}
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default App;
