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
import Artist from './pages/Artist.jsx';
import Posh from "./pages/legal/Posh";
import Communication from "./pages/growth/Communication";
import Creative from "./pages/growth/Creative";

// Specific artist components
import VinayChoudary from './pages/entertainment/VinayChoudary';
import ArvindSivakumaran from './pages/entertainment/ArvindSivakumaran';
import StevenHanulik from './pages/entertainment/StevenHanulik';

// ✅ Import the GA tracking hook
import usePageTracking from "./usePageTracking";

export default function App() {
  return (
    <BrowserRouter>
      {/* ✅ Place hook INSIDE the BrowserRouter */}
      <PageTracker />

      <div className="flex flex-col min-h-screen">
        {/* Header / Navbar */}
        <Header />

        {/* Page content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/entertainment" element={<Entertainment />} />

            {/* Specific artist routes */}
            <Route path="/entertainment/vinay-choudary" element={<VinayChoudary />} />
            <Route path="/entertainment/arvind-sivakumaran" element={<ArvindSivakumaran />} />
            <Route path="/entertainment/steven-hanulik" element={<StevenHanulik />} />

            {/* Generic artist route as fallback */}
            <Route path="/entertainment/:slug" element={<Artist />} />

            <Route path="/growth" element={<Growth />} />
            <Route path="/growth/communication" element={<Communication />} />
            <Route path="/growth/creative" element={<Creative />} />

            <Route path="/legal" element={<Legal />} />
            <Route path="/legal/posh" element={<Posh />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Optional catch-all route */}
            {/* <Route path="*" element={<Home />} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

// ✅ Wrapper component that calls the hook inside Router context
function PageTracker() {
  usePageTracking();
  return null;
}
