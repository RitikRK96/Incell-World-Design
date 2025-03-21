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

        {/* Hamburger Button for Mobile */}
        <button className="navbar-hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <NavItem to="/" text="Home" location={location} />
          <ServicesDropdown location={location} />
          <NavItem to="/about" text="About" location={location} />
          <NavItem to="/contact" text="Contact" location={location} />
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isOpen ? "open" : "closed"}`}>
        <ul>
          <NavItem
            to="/"
            text="Home"
            location={location}
            onClick={() => setIsOpen(false)}
          />
          <ServicesDropdown
            location={location}
            isMobile
            onClick={() => setIsOpen(false)}
          />
          <NavItem
            to="/about"
            text="About"
            location={location}
            onClick={() => setIsOpen(false)}
          />
          <NavItem
            to="/contact"
            text="Contact"
            location={location}
            onClick={() => setIsOpen(false)}
          />
        </ul>
      </div>
    </nav>
  );
};

/* Individual Nav Item */
const NavItem = ({ to, text, location, onClick }) => {
  const isActive = location.pathname === to;

  return (
    <li>
      <Link
        to={to}
        className={`navbar-item ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {text}
      </Link>
    </li>
  );
};

/* Services Dropdown */
const ServicesDropdown = ({ location, isMobile, onClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle Dropdown for Mobile
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <li
      className={`navbar-item-wrapper dropdown ${dropdownOpen ? "open" : ""}`}
      onMouseEnter={() => !isMobile && setDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setDropdownOpen(false)}
      onClick={() => isMobile && toggleDropdown()} // ✅ Toggle for Mobile
    >
      {/* Dropdown Toggle */}
      <span
        className={`navbar-item ${
          location.pathname.includes("/services") ? "active" : ""
        }`}
      >
        Services ▾
      </span>

      {/* Dropdown Menu */}
      <ul
        className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}
        style={{ display: dropdownOpen ? "block" : "none" }}
      >
        <DropdownItem to="/services/service1" text="Service 1" onClick={onClick} />
        <DropdownItem to="/services/service2" text="Service 2" onClick={onClick} />
        <DropdownItem to="/services/service3" text="Service 3" onClick={onClick} />
        <DropdownItem to="/services/service4" text="Service 4" onClick={onClick} />
      </ul>
    </li>
  );
};

/* Dropdown Item */
const DropdownItem = ({ to, text, onClick }) => (
  <li>
    <Link to={to} className="dropdown-item" onClick={onClick}>
      {text}
    </Link>
  </li>
);

export default Navbar;
