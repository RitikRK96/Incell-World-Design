import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css"; 
import logo from "../../assets/incell-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="incell-logo" />
        </Link>

        <button className="navbar-hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="navbar-menu">
          <NavItem to="/" text="Home" location={location} />
          <NavItem to="/services" text="Services" location={location} />
          <NavItem to="/about" text="About" location={location} />
          <NavItem to="/contact" text="Contact" location={location} />
        </ul>
      </div>

      <div className={`navbar-mobile-menu ${isOpen ? "open" : "closed"}`}>
        <ul>
          <NavItem to="/" text="Home" location={location} onClick={() => setIsOpen(false)} />
          <NavItem to="/services" text="Services" location={location} onClick={() => setIsOpen(false)} />
          <NavItem to="/about" text="About" location={location} onClick={() => setIsOpen(false)} />
          <NavItem to="/contact" text="Contact" location={location} onClick={() => setIsOpen(false)} />
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, text, location, onClick }) => {
  const isActive = location.pathname === to;

  return (
    <li>
      <Link
        to={to}
        className={`navbar-item navbar-mobile-item ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {text}
      </Link>
    </li>
  );
};

export default Navbar;
