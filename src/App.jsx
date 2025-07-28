import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Entertainment from './pages/Entertainment';
import Growth from './pages/Growth';
import Legal from './pages/Legal';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/growth" element={<Growth />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </Router>
  );
}
