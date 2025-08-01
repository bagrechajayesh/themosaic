
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/entertainment/arvind-sivakumaran" element={<ArvindSivakumaran />} />
        <Route path="/entertainment/vinay-choudary" element={<VinayChoudary />} />
        <Route path="/entertainment/steven-hanulik" element={<StevenHanulik />} />
        <Route path="/" element={<Entertainment />} />
	<Route path="/growth" element={<Growth />} />
	<Route path="/legal" element={<Legal />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
