import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="bg-primary text-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-10 w-10 rounded" />
        <span className="text-xl font-bold">The Mosaic</span>
      </div>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-accent">Home</Link></li>
        <li><Link to="/about" className="hover:text-accent">About</Link></li>
        <li><Link to="/services" className="hover:text-accent">Services</Link></li>
        <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;