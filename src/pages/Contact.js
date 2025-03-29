import React from "react";
import "../styles/Contact.css"; // Updated CSS
import ContactForm from "../components/ContactForm";
import aboutImage from "../assets/thank you small.jpg"; // Your image path

const AboutContact = () => {
  return (
    <div className="about-contact-page">
      {/* About Us Section */}
      <section className="about-section">
        <div className="about-content">
          {/* Text Section */}
          <div className="about-text">
            <h1>About Climate Co</h1>
            <p>
              Climate Co is a <strong>family-owned business</strong> with <strong>16 years of experience</strong> in the heating and cooling industry.
              We provide expert installation, servicing, and repairs for residential and commercial customers.
            </p>
            <h2>Why Choose Us?</h2>
            <ul className="about-list">
              <li>Over 16 years of industry experience</li>
              <li>Family-owned and operated</li>
              <li>High-quality installations and servicing</li>
              <li>Energy-efficient solutions & government rebates</li>
              <li>Customer-focused with transparent pricing</li>
            </ul>
          </div>

          {/* Image */}
          <img src={aboutImage} alt="Team at Climate Co" className="about-image" />
        </div>
      </section>

  

      <section className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>📍 Ocean Grove, VIC</p>
          <p>📞 <a href="tel:0430831199">0430 831 199</a></p>
          <p>✉️ <a href="mailto:info@climateco.au">info@climateco.au</a></p>
           
        <iframe className="google-maps"
          title="Google Maps"
          src="https://maps.google.com/maps?q=Ocean+Grove+VIC&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      
        </div>

        <div className="contact-form-section">
          <ContactForm />
        </div>
      </section>
    </div>

  );
};

export default AboutContact;
