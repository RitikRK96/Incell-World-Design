import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Import all service components
import Sustainability from "./Components/Services Wrapper/Sustainability";
import Marketing from "./Components/Services Wrapper/Marketing";
import RiskManagementPlanning from "./Components/Services Wrapper/RiskManagementPlanning";
import RetrofitPas from "./Components/Services Wrapper/RetrofitPas";
import Packages from "./Components/Services Wrapper/Packages";
import BuildingSurveying from "./Components/Services Wrapper/BuildingSurveying";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 200, // Animation duration (1 second)
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="pt-17">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Pages Routes */}
          <Route path="/services/building-surveying" element={<BuildingSurveying/>} />
          <Route path="/services/sustainability" element={<Sustainability />} />
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/risk-management-planning" element={<RiskManagementPlanning />} />
          <Route path="/services/retrofit" element={<RetrofitPas />} />
          <Route path="/services/packages" element={<Packages />} />
        </Routes>
      </div>
      <Footer />
      
    </Router>
  );
};

export default App;
