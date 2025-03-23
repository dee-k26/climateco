import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-info">
          <h3>Climate Co</h3>
          <p>Reliable Heating & Cooling Solutions</p>
          <p>📍 Ocean Grove, VIC</p>
          <p>
            📞 <a href="tel:0430831199">0430 831 199</a>
          </p>
          <p>
            ✉️ <a href="mailto:info@climateco.au">info@climateco.au</a>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/aircon-installation">Aircon Installation</Link>
            </li>
            <li>
              <Link to="/aircon-service-repair">Service & Repair</Link>
            </li>
            <li>
              <Link to="/government-rebate">Rebates</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Legal & Social */}
        <div className="footer-legal">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </li>
          </ul>
          <h4>Socials</h4>
          <ul>
            <li>
              <a
                href="https://maps.app.goo.gl/HpjDqFj2St8ubJn79"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Google Review
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Climate Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
