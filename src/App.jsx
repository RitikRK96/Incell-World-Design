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

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration (1 second)
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="pt-20"> 
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
