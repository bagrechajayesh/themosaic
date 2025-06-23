import React, { useState } from 'react';
import {
  Users,
  TrendingUp,
  Scale,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  User,
  Home,
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showFullBio, setShowFullBio] = useState({});
  const [expandedService, setExpandedService] = useState({});

  const toggleBio = (index) => {
    setShowFullBio((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleService = (key) => {
    setExpandedService((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const artists = [
    {
      name: 'Arvind Sivakumaran',
      avatar: '✍️',
      role: 'Filmmaker • Scholar • Writer',
      bio:
        'Arvind graduated in Film Production from Victoria Motion Picture School, B.C., Canada in 2002. He also holds a degree in English Literature from St. Xaviers College, Mumbai...'
    },
    {
      name: 'Vinay Choudary',
      avatar: '🎬',
      role: 'Writer • Director • Script Consultant',
      bio:
        'Vinay is a versatile Indian screenwriter and director with 1000+ TV episodes, feature films, and a Prime Video web series...'
    },
    {
      name: 'Steven Hanulik',
      avatar: '🎥',
      role: 'Filmmaker • Copywriter',
      bio:
        'Steven has 20 years of experience in film, broadcast, and ad marketing. Co-creator of Canada’s first 3D stop-motion short "Skeleton Girl", and writer of "Middle of Nowhere" and "Lily"...'
    },
  ];

  const entertainmentServices = [
    'Career Management',
    'Deal Negotiation',
    'Project Development',
    'Industry Connections',
    'Brand Building',
    'Opportunity Matching',
  ];

  const growthServices = [
    'Soft Skills Training',
    'Mental Health Seminars',
    'Professional Development',
    'Executive Coaching',
  ];

  const legalServices = [
    'MSME Advisory Services',
    'RERA Compliance',
    'Corporate Legal Support',
    'Entertainment Law',
  ];

  const renderServices = (services) => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, idx) => (
        <div key={service} className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-lg">{service}</h3>
          <p className="text-sm text-gray-600 mt-2">
            {expandedService[service]
              ? `Comprehensive support and expertise in ${service.toLowerCase()}.`
              : `Consulting and guidance on ${service.toLowerCase()}.`}
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
  );

  const renderSection = () => {
    switch (activeTab) {
      case 'home':
        return (
          <section className="text-center max-w-3xl mx-auto py-12">
            <h2 className="text-3xl font-bold mb-4">About Mosaic</h2>
            <p className="text-lg text-gray-700">
  Mosaic is a boutique platform dedicated to enabling exceptional talent and empowering purposeful growth across three key verticals:
  <br /><br />
  <strong>Entertainment</strong> – Representing independent creators including filmmakers, writers, and performers by connecting them to production houses and studios.
  <br />
  <strong>Growth</strong> – Providing leadership coaching, wellness programs, and development services for professionals and organizations.
  <br />
  <strong>Legal</strong> – Offering legal and compliance services tailored for creatives, startups, and businesses in evolving industries.
</p>
          </section>
        );
      case 'entertainment':
        return (
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-10">Our Artists</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {artists.map((artist, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-xl">{artist.avatar}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{artist.name}</h3>
                      <p className="text-sm text-gray-500">{artist.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700 text-sm">
                    {showFullBio[i] ? artist.bio : artist.bio.slice(0, 180) + '...'}
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
            <h2 className="text-3xl font-bold text-center mt-16 mb-8">Entertainment Services</h2>
            {renderServices(entertainmentServices)}
          </section>
        );
      case 'growth':
        return (
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-10">Growth Services</h2>
            {renderServices(growthServices)}
          </section>
        );
      case 'legal':
        return (
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-10">Legal Services</h2>
            {renderServices(legalServices)}
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
      <header className="bg-white border-b shadow">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">The Mosaic</h1>
          <p className="text-gray-600">Representing Exceptional Creative Talent & Professional Services</p>
        </div>
      </header>

      <nav className="bg-white sticky top-0 z-10 shadow">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-4">
          {[
            { id: 'home', label: 'Home', icon: Home },
            { id: 'entertainment', label: 'Entertainment', icon: Users },
            { id: 'growth', label: 'Growth', icon: TrendingUp },
            { id: 'legal', label: 'Legal', icon: Scale },
            { id: 'about', label: 'About Us', icon: User },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
              setActiveTab(tab.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{renderSection()}</main>
<a
  href="https://wa.me/917276789555"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2"
  title="Chat with us on WhatsApp"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21l1.5-5.25a9 9 0 1115.75-5.75A9 9 0 013 21z" />
  </svg>
  Let’s Talk
</a>


      <section className="bg-white mt-20 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-10">Ready to take your career to the next level? We'd love to hear from you.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p>jayesh@themosaic.pro</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="flex justify-center items-center gap-2">
                +91 7276789555
                <a href="https://wa.me/917276789555" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p>Mumbai, Maharashtra<br />India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

