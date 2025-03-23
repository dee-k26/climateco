import React from "react";
import "../styles/Services.css";
import ContactForm from "../components/ContactForm";
import airconInstallImage from "../assets/aircon-install.png"

const AirconInstallation = () => {
    return (
        <div className="service-page">
        

            <section className="service-header">
                <h1>Air Conditioning Installation</h1>
                <p>Professional installation for split systems, ducted aircon, and multi-head units.</p>
            </section>

            <section className="service-content">
                {/* ✅ Image Positioned to the Left */}
                <div className="service-content-wrapper">
                    <img src={airconInstallImage} alt="Aircon Installation" className="service-image" />
                    <div className="service-text">
                        <h2>Why Choose Climate Co for Your Aircon Installation?</h2>
                        <p>We provide expert installation services tailored to your home or business needs, ensuring energy efficiency and long-term performance.</p>
                        <ul>
                            <li> Professional split system & ducted aircon installation</li>
                            <li> High-quality workmanship with a satisfaction guarantee</li>
                            <li> Energy-efficient systems to lower your power bills</li>
                            <li> Government rebates available on eligible installations</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Book Your Aircon Installation Today</h2>
                <p>Get expert installation with fast service and competitive pricing.</p>
                <ContactForm />
            </section>
        </div>
    );
};

export default AirconInstallation;
