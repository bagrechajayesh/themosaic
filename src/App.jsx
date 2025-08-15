import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// Page components
import Home from './pages/Home';
import Services from './pages/Services';
import Entertainment from './pages/Entertainment';
import Growth from './pages/Growth';
import Legal from './pages/Legal';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Header / Navbar */}
        <Header />

        {/* Page content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/growth" element={<Growth />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Optional catch-all route */}
            {/* <Route path="*" element={<Home />} /> */}
          </Routes>
        </main>

        {/* Footer (optional) */}
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}
