import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Lightbulb, ArrowRight, Target, BookOpen, Award } from 'lucide-react';

const Growth = () => {
  const services = [
    {
      id: 'posh',
      title: 'POSH Compliance Guidance',
      icon: Shield,
      description: 'Comprehensive workplace harassment prevention training and compliance solutions delivered in partnership with Yellow Spark.',
      image: '/api/placeholder/400/300',
      color: 'from-red-500 to-pink-600',
      bgColor: 'from-red-50 to-pink-50',
      features: [
        'Policy Development & Implementation',
        'Internal Committee Formation & Training',
        'Employee Awareness Programs',
        'Legal Compliance Audit'
      ]
    },
    {
      id: 'communication',
      title: 'Effective Communication Skills',
      icon: Users,
      description: 'Professional communication training programs designed to enhance workplace effectiveness and leadership presence.',
      image: '/api/placeholder/400/300',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      features: [
        'Business English Mastery',
        'Voice & Accent Training',
        'Public Speaking Confidence',
        'Executive Communication'
      ]
    },
    {
      id: 'creative',
      title: 'Creative Thinking Workshop',
      icon: Lightbulb,
      description: 'Innovative workshops to unlock creative potential and transform problem-solving capabilities for teams and leaders.',
      image: '/api/placeholder/400/300',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50',
      features: [
        'Design Thinking Methodology',
        'Innovation Leadership',
        'Problem-Solving Techniques',
        'Team Collaboration Enhancement'
      ]
    }
  ];

  const handleServiceClick = (serviceId) => {
    // This function will be used to navigate to individual service pages
    console.log(`Navigate to ${serviceId} page`);
    // You can implement routing logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6"
          >
            Growth Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            We empower creative businesses, start-ups, and individuals by providing strategic guidance and 
            ecosystem connections to fuel sustainable growth through specialized training and consultation services.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => handleServiceClick(service.id)}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-gray-500 text-sm">Learn More</span>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Hover Animation Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Growth Services?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our comprehensive approach combines expertise, innovation, and personalized solutions to drive measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Strategic Guidance',
                description: 'Tailored strategies for sustainable growth and competitive advantage',
                color: 'bg-blue-500'
              },
              {
                icon: Users,
                title: 'Expert Trainers',
                description: 'Certified professionals with 20+ years of proven track records',
                color: 'bg-green-500'
              },
              {
                icon: BookOpen,
                title: 'Customized Content',
                description: 'Training programs designed specifically for your organizational needs',
                color: 'bg-purple-500'
              },
              {
                icon: Award,
                title: 'Proven Results',
                description: 'Track record of successful implementations across diverse industries',
                color: 'bg-orange-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl text-white p-12 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black bg-opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
              backgroundSize: '50px 50px',
              opacity: 0.1
            }}></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Growth?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Partner with us to unlock your organization's potential through our comprehensive growth services and expert training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid md:grid-cols-4 gap-8 mt-16 text-center"
        >
          {[
            { number: '1000+', label: 'Professionals Trained' },
            { number: '50+', label: 'Workshops Conducted' },
            { number: '20+', label: 'Years of Experience' },
            { number: '95%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Growth;