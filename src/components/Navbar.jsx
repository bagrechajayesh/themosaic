
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold">The Mosaic</Link>
        <div className="space-x-4">
          <Link to="/entertainment" className="hover:underline">Entertainment</Link>
          <Link to="/growth" className="hover:underline">Growth</Link>
          <Link to="/legal" className="hover:underline">Legal</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </div>
    </nav>
  );
}
