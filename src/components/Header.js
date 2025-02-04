import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo192.png"; // Update with actual logo path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown") && !event.target.closest(".dropdown-button")) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      {/* Logo and Site Name */}
      <div className="logo-container">
        <img src={logo} alt="Climate Co Logo" className="logo" />
        <h1 className="site-name">Climate Co</h1>
      </div>

      {/* Menu Button (Mobile) */}
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* Services Dropdown */}
          <li className="dropdown">
            <button className="dropdown-button" onClick={() => setServicesOpen(!servicesOpen)}>
              Services
            </button>
            <ul className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>
              <li><Link to="/aircon-installation">Aircon Installation</Link></li>
              <li><Link to="/aircon-service-repair">Aircon Service & Repair</Link></li>
              <li><Link to="/gas-heater-installation">Gas Heater Installation</Link></li>
              <li><Link to="/gas-heater-service-repair">Gas Heater Service & Repair</Link></li>
              <li><Link to="/wood-fireplace-installation">Wood Fireplace Installation</Link></li>
            </ul>
          </li>
          <li><Link to="/government-rebate">Rebates</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
