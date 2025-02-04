import React from "react";
import "../styles/Legal.css"; // Shared styles for legal pages

const PrivacyPolicy = () => {
  return (
    <div className="legal-container">
      <h1>Privacy Policy</h1>
      <p>Effective Date: {new Date().toLocaleDateString()}</p>

      <h2>1. Introduction</h2>
      <p>
        Climate Co ("we", "our", "us") is committed to protecting your privacy. 
        This Privacy Policy outlines how we collect, use, and safeguard your personal information 
        in accordance with the **Privacy Act 1988 (Cth)** and the **Australian Privacy Principles (APPs)**.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect personal information including, but not limited to:</p>
      <ul>
        <li>Name, phone number, and email address</li>
        <li>Billing and payment information</li>
        <li>Address for service appointments</li>
        <li>Technical data related to heating and cooling systems</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your personal data for:</p>
      <ul>
        <li>Providing and managing heating & cooling services</li>
        <li>Processing payments and invoices</li>
        <li>Responding to inquiries and customer support</li>
        <li>Sending service reminders and promotional offers</li>
      </ul>

      <h2>4. Sharing & Disclosure</h2>
      <p>We do not sell your personal data. We may share it with:</p>
      <ul>
        <li>Third-party service providers (e.g., payment processors)</li>
        <li>Government agencies when required by law</li>
        <li>Insurance providers when necessary</li>
      </ul>

      <h2>5. Security of Your Information</h2>
      <p>
        We implement security measures to protect your data from unauthorized access, loss, or misuse.
      </p>

      <h2>6. Your Rights & Choices</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access, correct, or delete your personal data</li>
        <li>Opt out of marketing communications</li>
      </ul>

      <h2>7. Contact Us</h2>
      <p>If you have any privacy-related concerns, contact us at:</p>
      <p>
        📍 Climate Co, PO 2021 Ocean Grove VIC 3226<br />
        📞 <a href="tel:0430831199">0430 831 199</a><br />
        ✉️ <a href="mailto:info@climateco.au">info@climateco.au</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
