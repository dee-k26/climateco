import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Climate Co - Heating & Cooling Specialists</h1>
          <p>Reliable, affordable, and expert service for all your heating and cooling needs.</p>
          <a href="/contact" className="cta-button">Get a Free Quote</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <p>All services are competitively priced at <strong>$181.50 inc.</strong> This includes call-outs and diagnosis of faulty systems.</p>
        <p>
          Any systems that can be fixed without additional parts within <strong>45 minutes</strong> won't cost extra.
          If we can’t fix it, you'll receive a quote. If the system needs replacement, we credit the diagnosis fee toward the installation.
        </p>
      </section>

      {/* About Us Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>At Climate Co, we pride ourselves on delivering top-quality heating and cooling solutions with transparency and reliability.</p>
      </section>

      {/* Government Rebates Section */}
      <section className="rebates">
        <h2>Government Rebates</h2>
        <p>You may be eligible for government rebates on energy-efficient heating and cooling systems. Learn how you can save today!</p>
        <a href="/government-rebate" className="cta-button">Find Out More</a>
      </section>

      {/* Maintenance Importance Section */}
      <section className="maintenance">
        <h2>Why Heating & Cooling System Maintenance Matters</h2>
        <p>Regular maintenance extends the lifespan of your system, improves efficiency, and ensures safe operation. Book your service today.</p>
      </section>
    </div>
  );
};

export default Home;
