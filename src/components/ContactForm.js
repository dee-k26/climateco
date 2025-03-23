import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    address: "",
    description: "",
    jobType: "Quote",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const responseData = await response.json();
      console.log("✅ Success:", responseData);
      alert("Your request has been sent to ServiceM8 Inbox!");
      setFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        address: "",
        description: "",
        jobType: "quote",
      });
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert(`Failed to submit. Error: ${error.message}`);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Send Enquiry</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          required
          value={formData.mobile}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email (optional)"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          value={formData.address}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Describe your request"
          required
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <div className="contact-form-radio">
          <label>
            <input
              type="radio"
              name="jobType"
              value="Quote"
              checked={formData.jobType === "Quote"}
              onChange={handleChange}
            />{" "}
            Free Quote
          </label>
          <label>
            <input
              type="radio"
              name="jobType"
              value="Work Order"
              checked={formData.jobType === "Work Order"}
              onChange={handleChange}
            />{" "}
            Service/Diagnosis $181.50
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
