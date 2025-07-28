import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white shadow">
      <div className="font-bold text-lg">The Mosaic</div>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/entertainment" className="hover:underline">Entertainment</Link></li>
        <li><Link to="/growth" className="hover:underline">Growth</Link></li>
        <li><Link to="/legal" className="hover:underline">Legal</Link></li>
      </ul>
    </nav>
  );
}
