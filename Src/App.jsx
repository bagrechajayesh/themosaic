import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, Scale, ChevronRight, Star, Award, Briefcase, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('entertainment');
  const [expandedArtist, setExpandedArtist] = useState(null);

  // Real data from your existing website
  const artistsData = [
    {
      id: 'arvind',
      name: "Arvind Sivakumaran",
      role: "Film maker • Scholar • Writer",
      avatar: "✍️",
      bio: "Arvind graduated in Film Production from Victoria Motion Picture School, B.C., Canada in 2002. He also holds a degree in English Literature from St. Xaviers College, Mumbai. His screenplay \"Middle of Nowhere\" was shortlisted for the Quarter-finals of the Nicholl Fellowship...",
      fullBio: {
        education: [
          "Film Production graduate, Victoria Motion Picture School, B.C., Canada (2002)",
          "Degree in English Literature, St. Xaviers College, Mumbai"
        ],
        achievements: [
          "Screenplay \"Middle of Nowhere\" shortlisted for Nicholl Fellowship Quarter-finals (368 selected from 7,197 entries)",
          "Short film \"J'aurais Toujous Paris\" featured at IFFI 2016 Viewing Room",
          "Won \"Best Film Noir Short\" at TOP SHORTS 2017",
          "Nominated for Best Editing at International Horror Movie Awards 2016",
          "Original noir play \"My Funny Valentine\" won Best Play at Thespo 2000"
        ],
        experience: [
          "Guest Lecturer in Film, St. Xaviers College Mumbai (2004-05)",
          "Guest Lecturer, M.E.T. Mumbai Educational Trust (2011-16)",
          "Film Curator, Sunaparanta Center for the Arts, Goa (2016-19)",
          "Senior Development Executive & Writer, Culture Machine Studios (2020-21)"
        ]
      }
    },
    {
      id: 'vinay',
      name: "Vinay Choudary",
      role: "Writer • Director • Script Consultant",
      avatar: "🎬",
      bio: "Vinay Choudary is a versatile and accomplished Indian screenwriter, director, and script consultant with a dynamic body of work across television, film, and digital platforms. With over 1,000 episodes of television, two feature films, and a web series for Amazon Prime Video...",
      fullBio: {
        highlights: [
          "Over 1,000 episodes of television content",
          "Two feature films",
          "Web series for Amazon Prime Video",
          "Story development for cult thriller \"Johnny Gaddaar\" (2007)"
        ],
        tvSeries: [
          "Hip Hip Hurray (1998-1999) - Iconic youth drama",
          "Jassi Jaisi Koi Nahin",
          "Left Right Left",
          "12/24 Karol Bagh",
          "Jugni Chali Jalandhar",
          "Khotey Sikkey"
        ],
        currentProjects: [
          "Creator and writer of drama series \"Ma KaSum\" (in production)",
          "Two television sitcoms for South African broadcaster MNet",
          "Young adult web series for Amazon Prime Video"
        ],
        education: [
          "Master's in Screenwriting, Victoria University of Wellington, New Zealand",
          "MFA in Film Production, University of Ohio, USA",
          "Embassy David Carson-Parker Award for Scriptwriting (2012) - \"The Bloody Mulligans\"",
          "Former Head of Development, Culture Machine Studios"
        ]
      }
    }
  ];

  const growthServices = [
    {
      name: "Soft Skills Training",
      expertise: "Comprehensive leadership development programs focusing on communication, team building, emotional intelligence, and interpersonal skills for professional excellence."
    },
    {
      name: "Mental Health Seminars",
      expertise: "Workplace wellness workshops, stress management training, mindfulness sessions, and mental health awareness programs to promote psychological well-being."
    },
    {
      name: "Professional Development",
      expertise: "Career coaching, skill assessment, personal branding strategies, and continuous learning programs to accelerate professional growth."
    },
    {
      name: "Executive Coaching",
      expertise: "One-on-one coaching for executives and senior professionals focusing on leadership effectiveness, strategic thinking, and organizational impact."
    }
  ];

  const legalServices = [
    {
      name: "MSME Advisory Services",
      role: "Complete guidance for micro, small and medium enterprises including registration, compliance, funding assistance, and growth strategies."
    },
    {
      name: "RERA Compliance",
      role: "Real Estate Regulatory Authority compliance, project registration, documentation, legal advisory, and dispute resolution services."
    },
    {
      name: "Corporate Legal Support",
      role: "Business incorporation, contract drafting, legal documentation, compliance management, and ongoing legal consultation services."
    },
    {
      name: "Entertainment Law",
      role: "Specialized legal services for entertainment industry including contract negotiations, intellectual property protection, and talent representation agreements."
    }
  ];

  const entertainmentServices = [
    {
      name: "Career Management",
      description: "Strategic career planning, project selection, and long-term brand development tailored to each artist's unique vision."
    },
    {
      name: "Deal Negotiation",
      description: "Expert contract negotiation ensuring fair compensation and favorable terms for film, TV, publishing, and digital media projects."
    },
    {
      name: "Project Development",
      description: "Collaborative development of original content, from initial concept through production, connecting artists with the right partners."
    },
    {
      name: "Industry Connections",
      description: "Leveraging our extensive network of producers, publishers, and executives to create meaningful professional relationships."
    },
    {
      name: "Brand Building",
      description: "Strategic public relations and marketing support to build and maintain a strong professional presence in the industry."
    },
    {
      name: "Opportunity Matching",
      description: "Identifying and securing opportunities that align with artistic goals and career trajectory across multiple platforms."
    }
  ];

  const verticals = [
    {
      id: 'entertainment',
      title: 'Entertainment',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      description: 'Representing exceptional creative talent in film, television, and digital media',
      data: { artists: artistsData, services: entertainmentServices },
      type: 'entertainment'
    },
    {
      id: 'growth',
      title: 'Growth',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      description: 'Professional development, wellness, and skill enhancement services',
      data: growthServices,
      type: 'growth'
    },
    {
      id: 'legal',
      title: 'Legal',
      icon: Scale,
      color: 'from-green-500 to-emerald-500',
      description: 'Comprehensive legal advisory and compliance services',
      data: legalServices,
      type: 'legal'
    }
  ];

  const toggleArtistBio = (artistId) => {
    setExpandedArtist(expandedArtist === artistId ? null : artistId);
  };

  const ArtistCard = ({ artist }) => {
    const isExpanded = expandedArtist === artist.id;
    
    return (
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
            {artist.avatar}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
            <p className="text-purple-100 text-sm font-medium">{artist.role}</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <p className="text-purple-50 text-sm leading-relaxed">{artist.bio}</p>
          
          {isExpanded && (
            <div className="space-y-4 pt-4 border-t border-white border-opacity-20">
              {artist.fullBio.education && (
                <div>
                  <h4 className="font-semibold text-white mb-2">Education & Background</h4>
                  <ul className="space-y-1 text-sm text-purple-50">
                    {artist.fullBio.education.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {artist.fullBio.achievements && (
                <div>
                  <h4 className="font-semibold text-white mb-2">Notable Achievements</h4>
                  <ul className="space-y-1 text-sm text-purple-50">
                    {artist.fullBio.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {artist.fullBio.highlights && (
                <div>
                  <h4 className="font-semibold text-white mb-2">Career Highlights</h4>
                  <ul className="space-y-1 text-sm text-purple-50">
                    {artist.fullBio.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {artist.fullBio.experience && (
                <div>
                  <h4 className="font-semibold text-white mb-2">Professional Experience</h4>
                  <ul className="space-y-1 text-sm text-purple-50">
                    {artist.fullBio.experience.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          
          <button
            onClick={() => toggleArtistBio(artist.id)}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-sm px-4 py-2 rounded-full transition-all duration-200 border border-white border-opacity-30"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    );
  };

  const ServiceCard = ({ item, type }) => {
    const getIcon = () => {
      switch(type) {
        case 'entertainment': return <Star className="w-5 h-5" />;
        case 'growth': return <Award className="w-5 h-5" />;
        case 'legal': return <Briefcase className="w-5 h-5" />;
        default: return <ChevronRight className="w-5 h-5" />;
      }
    };

    const getContent = () => {
      switch(type) {
        case 'entertainment':
          return (
            <>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </>
          );
        case 'growth':
          return (
            <>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.expertise}</p>
            </>
          );
        case 'legal':
          return (
            <>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.role}</p>
            </>
          );
        default:
          return null;
      }
    };

    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 mt-1 text-blue-500">
            {getIcon()}
          </div>
          <div className="flex-1">
            {getContent()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
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

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
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
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {verticals.map((vertical) => {
          if (activeSection !== vertical.id) return null;
          
          return (
            <div key={vertical.id} className="space-y-8">
              {/* Section Header */}
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${vertical.color} text-white mb-4`}>
                  <vertical.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {vertical.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {vertical.description}
                </p>
              </div>

              {/* Content based on section */}
              {vertical.type === 'entertainment' && (
                <>
                  {/* Artists Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 text-center">Our Artists</h3>
                    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                      {vertical.data.artists.map((artist) => (
                        <ArtistCard key={artist.id} artist={artist} />
                      ))}
                    </div>
                  </div>

                  {/* Entertainment Services */}
                  <div className="space-y-6 pt-8">
                    <h3 className="text-2xl font-bold text-gray-800 text-center">Our Services</h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {vertical.data.services.map((service, index) => (
                        <ServiceCard 
                          key={index} 
                          item={service} 
                          type={vertical.type}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}

              {vertical.type !== 'entertainment' && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                  {vertical.data.map((item, index) => (
                    <ServiceCard 
                      key={index} 
                      item={item} 
                      type={vertical.type}
                    />
                  ))}
                </div>
              )}

              {/* Call to Action */}
              <div className="text-center pt-8">
                <button className={`inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r ${vertical.color} text-white font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105`}>
                  <span>Learn More About {vertical.title}</span>
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          );
        })}
      </main>

      {/* Contact Section */}
      <section className="bg-white mt-20 py-16">
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
              <p className="text-blue-100">+91 7276789555</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-green-100">Mumbai, Maharashtra<br />India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-2">
                  M
                </div>
                <span className="text-xl font-bold">The Mosaic</span>
              </div>
              <p className="text-gray-400">Connecting talent with opportunity across entertainment, growth, and legal services.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Entertainment</h3>
              <p className="text-gray-400 text-sm">Artist representation and career management</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Growth</h3>
              <p className="text-gray-400 text-sm">Professional development and wellness solutions</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <p className="text-gray-400 text-sm">Comprehensive legal advisory services</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 The Mosaic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;