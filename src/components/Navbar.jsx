// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For hamburger icon

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo + Brand Name */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="The Mosaic Logo"
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl text-gray-800">The Mosaic</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/entertainment" className="hover:text-amber-600">Entertainment</Link>
          <Link to="/growth" className="hover:text-amber-600">Growth</Link>
          <Link to="/legal" className="hover:text-amber-600">Legal</Link>
          <Link to="/about" className="hover:text-amber-600">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden text-gray-700 font-medium">
          <Link to="/entertainment" onClick={() => setMenuOpen(false)}>Entertainment</Link>
          <Link to="/growth" onClick={() => setMenuOpen(false)}>Growth</Link>
          <Link to="/legal" onClick={() => setMenuOpen(false)}>Legal</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  );
}
