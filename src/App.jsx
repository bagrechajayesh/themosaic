import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'; // New header component
import Navbar from "./components/Navbar"; // Your existing navbar (you can remove this if replacing with Header)
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Entertainment from "./pages/Entertainment";
import ArvindSivakumaran from "./pages/entertainment/ArvindSivakumaran";
import VinayChoudary from "./pages/entertainment/VinayChoudary";
import StevenHanulik from "./pages/entertainment/StevenHanulik";
import Growth from "./pages/Growth";
import Legal from "./pages/Legal";
import './App.css';

function App() {
  return (
    <Router>
      {/* Use the new Header component */}
      <Header />
      
      {/* Comment out or remove the old Navbar if you're replacing it */}
      {/* <Navbar /> */}
      
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />
        
        {/* Entertainment routes */}
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/entertainment/arvind-sivakumaran" element={<ArvindSivakumaran />} />
        <Route path="/entertainment/vinay-choudary" element={<VinayChoudary />} />
        <Route path="/entertainment/steven-hanulik" element={<StevenHanulik />} />
        
        {/* Other verticals */}
        <Route path="/growth" element={<Growth />} />
        <Route path="/legal" element={<Legal />} />
        
        {/* Services route for the new header navigation */}
        <Route path="/services" element={<Entertainment />} /> {/* Redirect to Entertainment for now */}
        <Route path="/about" element={<Home />} /> {/* Redirect to Home for now - create About page later */}
        <Route path="/contact" element={<Home />} /> {/* Redirect to Home for now - create Contact page later */}
        
        {/* Catch-all route */}
        <Route path="*" element={<Entertainment />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;