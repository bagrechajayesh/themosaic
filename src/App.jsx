import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Growth from './pages/Growth';
import Legal from './pages/Legal';
import Rera from './pages/legal/Rera';
import About from './pages/About';
import Contact from './pages/Contact';

// Growth detail pages
import Fitout from './pages/growth/Fitout';
import RealEstateAnalysis from './pages/growth/RealEstateAnalysis';

// Analytics
import usePageTracking from './usePageTracking';

export default function App() {
  return (
    <BrowserRouter>
      <PageTracker />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />

            {/* Growth */}
            <Route path="/growth" element={<Growth />} />
            <Route path="/growth/fitout" element={<Fitout />} />
            <Route path="/growth/realestate-analysis" element={<RealEstateAnalysis />} />

            {/* Legal */}
            <Route path="/legal" element={<Legal />} />
            <Route path="/legal/rera" element={<Rera />} />

            {/* Info */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

function PageTracker() {
  usePageTracking();
  return null;
}
