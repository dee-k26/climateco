
import React, { useState } from "react";
import "../styles/ContactForm.css";
import { useNavigate } from "react-router-dom";

const ContactFormQuote = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        address: "",
        description: "",
    });

    const [existingSwitchImage, setExistingSwitchImage] = useState(null);
    const [switchBoardImage, setSwitchBoardImage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e, setter) => {
        setter(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formPayload = new FormData();
        for (const key in formData) {
            formPayload.append(key, formData[key]);
        }
        formPayload.append("jobType", "Quote");
        if (existingSwitchImage) {
            formPayload.append("existingSwitchImage", existingSwitchImage);
        }
        if (switchBoardImage) {
            formPayload.append("switchBoardImage", switchBoardImage);
        }

        try {
            const response = await fetch("http://localhost:5000/api/send-inquiry", {
                method: "POST",
                body: formPayload,
            });

            if (!response.ok)
                throw new Error(`HTTP error! Status: ${response.status}`);

            const responseData = await response.json();
            console.log("✅ Success:", responseData);
            navigate("/thank-you");
            alert("Your request has been sent to ServiceM8 Inbox!");

            setFormData({
                firstName: "",
                lastName: "",
                mobile: "",
                email: "",
                address: "",
                description: "",
            });
            setExistingSwitchImage(null);
            setSwitchBoardImage(null);
        } catch (error) {
            console.error("❌ Error submitting form:", error);
            alert(`Failed to submit. Error: ${error.message}`);
        }
    };

    return (
        <div className="contact-form-container">
            <h2>Send Enquiry</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
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

                <label>
                    Upload photo of existing system:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, setExistingSwitchImage)}
                    />
                </label>

                <label>
                    Upload photo of electrical switch board:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, setSwitchBoardImage)}
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactFormQuote;
