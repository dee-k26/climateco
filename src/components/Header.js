import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo192.png"; // Update with actual logo path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen width for mobile behavior
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown") &&
        !event.target.closest(".dropdown-button")
      ) {
        setServicesOpen(false);
      }
    };

    if (servicesOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [servicesOpen]);

  return (
    <header className="header">
      {/* Logo and Site Name */}
      <div className="logo-container">
        <img src={logo} alt="Climate Co Logo" className="logo" />
        <h1 className="site-name">Climate Co</h1>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="menu-button"
        onClick={() => {
          setMenuOpen(!menuOpen);
          setServicesOpen(false); // Close dropdown when closing menu
        }}
      >
        ☰
      </button>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className={`dropdown ${servicesOpen ? "hover-active" : ""}`}
            onMouseEnter={() => !isMobile && setServicesOpen(true)} // Show on hover for desktop
            onMouseLeave={() => !isMobile && setServicesOpen(false)} // Hide on hover out
          >
            <button
              className="dropdown-button"
              onClick={(e) => {
                e.stopPropagation();
                if (isMobile) setServicesOpen(!servicesOpen); // Toggle on click for mobile
              }}
            >
              Services
            </button>
            <ul className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>
              <li>
                <Link
                  to="/aircon-installation"
                  onClick={() => {
                    setServicesOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Aircon Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/aircon-service"
                  onClick={() => {
                    setServicesOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Aircon Service & Repair
                </Link>
              </li>
              <li>
                <Link
                  to="/gas-heater-service"
                  onClick={() => {
                    setServicesOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Gas Heater Service & Repair
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/government-rebate" onClick={() => setMenuOpen(false)}>
              Rebates
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
