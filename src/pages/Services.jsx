import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  { name: 'Brand Strategy', slug: 'brand-strategy', description: 'Clarify your identity and positioning.' },
  { name: 'Legal Advisory', slug: 'legal-advisory', description: 'Get expert legal guidance on structure and compliance.' },
  { name: 'Policy Drafting', slug: 'policy-drafting', description: 'Draft meaningful, readable policies for internal or public use.' }
];

function Services() {
  return (
    <div className="bg-background text-primary min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <motion.div key={service.slug} className="p-4 bg-white rounded shadow hover:shadow-md"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
            <h2 className="text-xl font-bold mb-2">{service.name}</h2>
            <p className="text-sm mb-2">{service.description}</p>
            <Link to={`/services/${service.slug}`} className="text-accent hover:underline">Read more →</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;