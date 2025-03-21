import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/incell-logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top">
          {/* ✅ Logo Section */}
          <div className="footer-section logo-section">
            <img src={logo} alt="Incell World Logo" className="footer-logo" />
            <p className="footer-text-incell">
              Since our inception, <strong>Incell World</strong> has been driven
              by a passion for delivering cutting-edge telecom solutions that
              empower seamless connectivity.
            </p>
          </div>

          {/* ✅ Opening Hours Section */}
          <div className="footer-section">
            <h3>Opening Hours</h3>
            <p>
              Monday to Friday
              <br />
              08:30 AM – 05:30 PM
            </p>
            <br />
            <p>
              Saturday
              <br />
              09:00 AM – 03:00 PM
            </p>
          </div>

          {/* ✅ Contact Section */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>
              164A Derby Road,
              <br />
              Stapleford, Nottingham, NG9 7AY
            </p>
            <br />
              <a href="tel:+441159227446" className="footer-email">
                01159 227 446
              </a> <br />
            <a href="mailto:admin@incell-world.com" className="footer-email">
              admin@incell-world.com
            </a>
          </div>

          {/* ✅ Quick Links Section */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ✅ Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Incell World. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
