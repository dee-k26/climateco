import React from "react";
import "../styles/Services.css";
import ContactForm from "../components/ContactForm";
import airconServiceImage from "../assets/aircon-repair.jpg";

const AirconService = () => {
  return (
    <div className="service-page">


      <section className="service-header">
        <h1>Air Conditioning Service & Repairs</h1>
        <p>Stay cool with our expert aircon servicing, repairs, and maintenance.</p>
        <a href="/contact" className="cta-button">
          Book Now
        </a>
      </section>

      <div className="service-content-wrapper">
        <img src={airconServiceImage} alt="Aircon Service" className="service-image" />

        <div className="service-content">
          <h2>Why Regular Aircon Servicing is Important</h2>
          <p>Regular maintenance keeps your air conditioner running efficiently, improves air quality, and extends the lifespan of your unit.</p>
          <ul>
            <li> Improve cooling efficiency</li>
            <li> Prevent costly breakdowns</li>
            <li> Enhance air quality & remove allergens</li>
            <li> Increase the lifespan of your AC unit</li>
          </ul>
        </div>
      </div>

      <section className="cta-section">
        <h2>Book Your Aircon Service Today</h2>
        <p>Ensure your air conditioner is running at peak performance.</p>
        <ContactForm />
      </section>
    </div>
  );
};

export default AirconService;
