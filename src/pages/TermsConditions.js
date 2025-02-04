import React from "react";
import "../styles/Legal.css"; // Shared styles for legal pages

const TermsConditions = () => {
  return (
    <div className="legal-container">
      <h1>Terms & Conditions</h1>
      <p>Effective Date: {new Date().toLocaleDateString()}</p>

      <h2>1. Introduction</h2>
      <p>
        These Terms & Conditions ("Terms") govern the use of Climate Co's heating and cooling services.
        By engaging with our services, you agree to these Terms.
      </p>

      <h2>2. Services</h2>
      <p>Climate Co provides heating and cooling installation, servicing, and repairs.</p>

      <h2>3. Pricing & Payments</h2>
      <ul>
        <li>All service callouts and diagnostic inspections are charged at $181.50 inc. GST.</li>
        <li>Payments must be made in full upon completion of service.</li>
        <li>Quotes provided are valid for 30 days unless stated otherwise.</li>
      </ul>

      <h2>4. Cancellations & Rescheduling</h2>
      <ul>
        <li>Cancellations within 24 hours of an appointment may incur a fee.</li>
        <li>We reserve the right to reschedule appointments due to unforeseen circumstances.</li>
      </ul>

      <h2>5. Warranties & Liability</h2>
      <p>
        We provide warranties on our workmanship in accordance with Australian Consumer Law.
        Manufacturer warranties apply to installed products.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        Climate Co is not liable for damages arising from customer misuse, failure to maintain 
        systems, or external issues beyond our control.
      </p>

      <h2>7. Privacy & Data Protection</h2>
      <p>
        All customer information is handled in accordance with our <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These Terms are governed by the laws of Victoria, Australia.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        📍 Climate Co, PO 2021 Ocean Grove VIC 3226<br />
        📞 <a href="tel:0430831199">0430 831 199</a><br />
        ✉️ <a href="mailto:info@climateco.au">info@climateco.au</a>
      </p>
    </div>
  );
};

export default TermsConditions;
