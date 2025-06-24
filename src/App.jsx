import React, { useState, useEffect } from 'react';
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
  Sparkles,
  Target,
  Shield,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showFullBio, setShowFullBio] = useState({});
  const [expandedService, setExpandedService] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Smooth scroll to bottom
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

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
        'Steven has 20 years of experience in film, broadcast, and ad marketing. Co-creator of Canada\'s first 3D stop-motion short "Skeleton Girl", and writer of "Middle of Nowhere" and "Lily"...'
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
        <div 
          key={service} 
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 p-6 opacity-0 animate-fadeInUp"
          style={{
            animationDelay: `${idx * 100}ms`,
            animationFillMode: 'forwards'
          }}
        >
          <h3 className="font-semibold text-lg">{service}</h3>
          <p className="text-sm text-gray-600 mt-2 transition-all duration-300">
            {expandedService[service]
              ? `Comprehensive support and expertise in ${service.toLowerCase()}.`
              : `Consulting and guidance on ${service.toLowerCase()}.`}
          </p>
          <button
            onClick={() => toggleService(service)}
            className="mt-2 text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
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
          <section className="max-w-6xl mx-auto py-16 px-4">
            {/* Hero Section */}
            <div className="text-center mb-16 opacity-0 animate-fadeInUp" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                Welcome to Mosaic
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                A boutique platform dedicated to enabling exceptional talent and empowering purposeful growth across three key verticals
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div 
                onClick={() => {
                  setActiveTab('entertainment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 p-8 text-center group opacity-0 animate-fadeInUp cursor-pointer" 
                style={{animationDelay: '400ms', animationFillMode: 'forwards'}}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Entertainment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Representing independent creators including filmmakers, writers, and performers by connecting them to production houses and studios.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-purple-600">Creative • Innovative • Connected</span>
                </div>
              </div>

              <div 
                onClick={() => {
                  setActiveTab('growth');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 p-8 text-center group opacity-0 animate-fadeInUp cursor-pointer" 
                style={{animationDelay: '600ms', animationFillMode: 'forwards'}}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  Providing leadership coaching, wellness programs, and development services for professionals and organizations.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-blue-600">Strategic • Empowering • Transformative</span>
                </div>
              </div>

              <div 
                onClick={() => {
                  setActiveTab('legal');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 p-8 text-center group opacity-0 animate-fadeInUp cursor-pointer" 
                style={{animationDelay: '800ms', animationFillMode: 'forwards'}}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>  
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Legal</h3>
                <p className="text-gray-600 leading-relaxed">
                  Offering legal and compliance services tailored for creatives, startups, and businesses in evolving industries.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-green-600">Compliant • Reliable • Expert</span>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white opacity-0 animate-fadeInUp" style={{animationDelay: '1000ms', animationFillMode: 'forwards'}}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
                To bridge creativity with technology and provide a scalable platform where exceptional talent can thrive, 
                grow, and make meaningful impact across industries.
              </p>
            </div>
          </section>
        );
      case 'entertainment':
        return (
          <section className="py-12 transition-all duration-500 ease-in-out">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Entertainment</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Representing independent creators including filmmakers, writers, and performers by connecting them to production houses and studios.
              </p>
            </div>
            <h3 className="text-2xl font-bold text-center mb-10">Our Artists</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {artists.map((artist, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-xl">{artist.avatar}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{artist.name}</h3>
                      <p className="text-sm text-gray-500">{artist.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700 text-sm transition-all duration-300">
                    {showFullBio[i] ? artist.bio : artist.bio.slice(0, 180) + '...'}
                  </p>
                  <button
                    onClick={() => toggleBio(i)}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
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
          <section className="py-12 transition-all duration-500 ease-in-out">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Growth</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Providing leadership coaching, wellness programs, and development services for professionals and organizations.
              </p>
            </div>
            <h3 className="text-2xl font-bold text-center mb-10">Growth Services</h3>
            {renderServices(growthServices)}
          </section>
        );
      case 'legal':
        return (
          <section className="py-12 transition-all duration-500 ease-in-out">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Legal</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Offering legal and compliance services tailored for creatives, startups, and businesses in evolving industries.
              </p>
            </div>
            <h3 className="text-2xl font-bold text-center mb-10">Legal Services</h3>
            {renderServices(legalServices)}
          </section>
        );
      case 'about':
        return (
          <section className="text-center max-w-3xl mx-auto py-12 transition-all duration-500 ease-in-out">
            <h2 className="text-3xl font-bold mb-4">About the Founder</h2>
            <div className="w-32 h-32 mx-auto rounded-full shadow-lg mb-6 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Jayesh Bagrecha</h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
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
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #ec4899);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #db2777);
        }
      `}</style>
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">The Mosaic</h1>
          <p className="text-gray-600 mt-2">Representing Exceptional Creative Talent & Professional Services</p>
        </div>
      </header>

      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-10 shadow-md transition-all duration-300" style={{
        boxShadow: scrollY > 50 ? '0 10px 25px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.1)'
      }}>
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
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out">
        {renderSection()}
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 left-6 z-50 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 opacity-0 animate-fadeIn"
          style={{animationFillMode: 'forwards'}}
          title="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Scroll to Bottom Button */}
      <button
        onClick={scrollToBottom}
        className="fixed bottom-6 left-6 z-50 bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        title="Scroll to bottom"
      >
        <ChevronDown className="w-5 h-5" />
      </button>

      <a
        href="https://wa.me/917276789555"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
        title="Chat with us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21l1.5-5.25a9 9 0 1115.75-5.75A9 9 0 013 21z" />
        </svg>
        Let's Talk
      </a>

      <section className="bg-white mt-20 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-10">Ready to take your career to the next level? We'd love to hear from you.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p>jayesh@themosaic.pro</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="flex justify-center items-center gap-2">
                +91 7276789555
                <a href="https://wa.me/917276789555" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 hover:scale-110 transition-transform duration-200" />
                </a>
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
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