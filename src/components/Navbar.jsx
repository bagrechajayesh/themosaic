// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="The Mosaic Logo" className="h-10 w-auto" />
        <span className="font-bold text-xl text-gray-800">The Mosaic</span>
      </Link>
      
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/entertainment" className="hover:text-amber-600">Entertainment</Link>
        <Link to="/growth" className="hover:text-amber-600">Growth</Link>
        <Link to="/legal" className="hover:text-amber-600">Legal</Link>
        <Link to="/about" className="hover:text-amber-600">About</Link>
      </div>
    </nav>
  );
}
