import React from "react";
import "../styles/GovernmentRebate.css";
import rebateImage from "../assets/rebate.jpg";
import ContactForm from "../components/ContactForm";

const GovernmentRebate = () => {
  return (
    <div className="rebate-page">
      <section className="rebate-header">
        <h1>Government Rebates</h1>
        <p>Save money with available rebates on energy-efficient heating & cooling systems.</p>
      </section>

      <section className="rebate-image-info">
        <div className="rebate-image">
          <img src={rebateImage} alt="Government Rebate Information" />
        </div>

        <div className="rebate-info">
          <h2>What Rebates Are Available?</h2>
          <p>Government rebates are available for the installation of energy-efficient air conditioners, gas heaters, and other sustainable solutions.</p>
          <ul>
            <li> Energy-efficient air conditioning systems</li>
            <li> High-performance gas heaters</li>
            <li> Solar-powered heating and cooling units</li>
            <li> Upgrades to reduce energy consumption</li>
          </ul>
        </div>
      </section>


      <section className="rebate-contact">
        <h2>Need Assistance?</h2>
        <p>We can guide you through the rebate process. Contact us today!</p>
        <ContactForm />
      </section>
    </div>
  );
};

export default GovernmentRebate;
