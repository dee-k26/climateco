import React from "react";
import "../styles/GovernmentRebate.css";
import rebateImage from "../assets/rebate.jpg";
import ContactFormQuote from "../components/ContactFormQuote";

const GovernmentRebate = () => {
  return (
    <div className="rebate-page">

      <section className="rebate-header">
        <h1>Government Rebates</h1>
        <p>Find out if you qualify for up to $8,000 in rebates for energy-efficient upgrades.</p>
        <a href="/contact" className="cta-button">
          Get a Free Quote
        </a>
      </section>

      <section className="rebate-savings">
        <div className="rebate-flex-container">
          <img src={rebateImage} alt="Rebate Promotion" className="rebate-hero-image" />

          <div className="rebate-content">
            <h2>Rebate Tiers</h2>
            <ul className="rebate-list">
              <li>Remove Gas Ducted Heater + Add Cooling + Install Ducted Split: <strong>Up to $8,000</strong></li>
              <li>Remove Gas Ducted Heater + Install Ducted Split: <strong>Up to $6,000</strong></li>
              <li>Remove Gas Space Heater + Install Wall Split: <strong>$1,200</strong></li>
              <li>Replace Old Split with New: <strong>Up to $1,200</strong></li>
              <li>New Install (Nothing Removed): <strong>Up to $500</strong></li>
            </ul>
          </div>
        </div>
      </section>


      <section className="rebate-contact">
        <h2>Need Assistance?</h2>
        <p>We’ll guide you through your rebate options.</p>
        <ContactFormQuote />
      </section>
    </div>
  );
};

export default GovernmentRebate;
