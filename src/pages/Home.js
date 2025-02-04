import React from "react";
import "../styles/Home.css";
import airconInstall from "../assets/aircon-install.jpg";
import airconRepair from "../assets/aircon-repair.jpg";
import gasHeater from "../assets/gas-heater.jpg";
import maintenance from "../assets/maintenance.jpg";
import rebate from "../assets/rebate.jpg";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Climate Co - Heating & Cooling Specialists</h1>
          <p>Reliable, affordable, and expert service for all your heating and cooling needs.</p>
          <a href="/contact" className="cta-button">Get a Free Quote</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <img src={airconInstall} alt="Aircon Installation" />
            <h3>Aircon Installation</h3>
            <p>Professional installation for split systems, ducted, and multi-head units.</p>
            <a href="/aircon-installation" className="learn-more">Learn More →</a>
          </div>
          <div className="service-card">
            <img src={airconRepair} alt="Aircon Service & Repair" />
            <h3>Aircon Service & Repair</h3>
            <p>Comprehensive servicing & repairs to keep your system running efficiently.</p>
            <a href="/aircon-service-repair" className="learn-more">Learn More →</a>
          </div>
          <div className="service-card">
            <img src={gasHeater} alt="Gas Heater Service & Repair" />
            <h3>Gas Heater Service & Repair</h3>
            <p>Stay safe & warm with regular servicing & expert repairs for gas heaters.</p>
            <a href="/gas-heater-service-repair" className="learn-more">Learn More →</a>
          </div>
        </div>
      </section>

      {/* Government Rebates Section */}
      <section className="rebates">
        <img src={rebate} alt="Government Rebates" className="rebate-img"/>
        <div className="rebate-content">
          <h2>Government Rebates</h2>
          <p>Save on installation costs with available government incentives for energy-efficient heating & cooling solutions.</p>
          <a href="/government-rebate" className="learn-more">Find Out More →</a>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="maintenance">
        <img src={maintenance} alt="Heating & Cooling Maintenance" />
        <div className="maintenance-content">
          <h2>The Importance of Regular Maintenance</h2>
          <p>
            Proper maintenance extends the lifespan of your heating & cooling system, improves efficiency, and ensures safe operation.
            Our servicing includes inspections, cleaning, and minor adjustments to keep your system running smoothly.
          </p>
          <a href="/contact" className="learn-more">Schedule a Service →</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
