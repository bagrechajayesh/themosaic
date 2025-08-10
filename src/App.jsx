import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // if you have it
import Entertainment from "./pages/Entertainment";
import ArvindSivakumaran from "./pages/entertainment/ArvindSivakumaran";
import VinayChoudary from "./pages/entertainment/VinayChoudary";
import StevenHanulik from "./pages/entertainment/StevenHanulik";
import Growth from "./pages/Growth";
import Legal from "./pages/Legal";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* landing */}
        <Route path="/" element={<Home />} /> {/* or <Entertainment /> if you prefer */}

        {/* entertainment */}
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/entertainment/arvind-sivakumaran" element={<ArvindSivakumaran />} />
        <Route path="/entertainment/vinay-choudary" element={<VinayChoudary />} />
        <Route path="/entertainment/steven-hanulik" element={<StevenHanulik />} />

        {/* other verticals */}
        <Route path="/growth" element={<Growth />} />
        <Route path="/legal" element={<Legal />} />

        {/* optional catch-all */}
        <Route path="*" element={<Entertainment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
