import React from "react";
import "../styles/Legal.css"; // You can change this or add a new ThankYou.css if needed
import thankYouImage from "../assets/thank you small.jpg"; // Make sure the path matches your assets folder

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <div className="thank-you-content">
      <h1>Thanks for Reaching Out!</h1>
        <img
          src={thankYouImage}
          alt="Thank you from Climate Co"
          className="thank-you-image"
        />
        <div className="thank-you-text">
          <p>
            We've received your enquiry and the Climate Co team will be in touch shortly. 
            If it's urgent, give us a text on <a href="sms:0430831199">0430 831 199</a>.
          </p>
          <p>We appreciate your interest and look forward to helping you stay comfortable all year round.</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
