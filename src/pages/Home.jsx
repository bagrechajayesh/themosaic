import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div className="bg-darkbg text-white min-h-screen p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <h1 className="text-4xl font-bold mb-4">We build identities.</h1>
      <p className="text-lg">From legal structures to brand structures, we help businesses define, refine, and grow.</p>
    </motion.div>
  );
}

export default Home;