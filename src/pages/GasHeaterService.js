import React from "react";
import "../styles/Services.css";
import ContactForm from "../components/ContactForm";
import heaterServiceImage from "../assets/gas heater small.jpg"

const GasHeaterService = () => {
  return (
    <div className="service-page">
      

      <section className="service-header">
        <h1>Gas Heater Service & Repairs</h1>
        <p>Keep your home safe and warm with professional heater servicing.</p>
      </section>

      <section className="service-content">
        {/* ✅ Image Positioned to the Left */}
        <div className="service-content-wrapper">
          <img src={heaterServiceImage} alt="Gas Heater Service" className="service-image" />
          <div className="service-text">
            <h2>Why Regular Gas Heater Servicing is Essential</h2>
            <p>Regular heater servicing prevents carbon monoxide leaks, ensures safety, and improves energy efficiency.</p>
            <ul>
              <li> Ensure your heater is operating safely</li>
              <li> Detect and prevent gas leaks</li>
              <li> Improve heating efficiency and reduce energy bills</li>
              <li> Extend the lifespan of your heating system</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Book Your Heater Service Today</h2>
        <p>Ensure your gas heater is safe and running efficiently.</p>
        <ContactForm />
      </section>
    </div>
  );
};

export default GasHeaterService;
