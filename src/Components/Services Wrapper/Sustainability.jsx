import React from "react";
import "./Services.css";
import EPC from "../../assets/Services/EPC.png";
import DEC from "../../assets/Display-energy-Certificate.jpg";
import ECO4 from "../../assets/Services/eco4.webp";
import EPC2 from "../../assets/Services/EPC2.webp";
import AUDIT from "../../assets/Energy-Audit-Scheme.jpg";
import WhyChoose from "./WhyChoose";
import PartnerCarousel from "../PartnerCarousel/PartnerCarousel";
import ButtonThree from "./ButtonThree";

const sustainabilityData = [
  {
    title: "Energy Performance Certificate (EPC)",
    description:
      "An EPC provides a detailed assessment of a building’s energy efficiency, helping property owners identify areas for improvement. By encouraging energy-saving upgrades, EPCs play a vital role in reducing carbon emissions, promoting sustainable living, and lowering energy costs.",
    img: EPC,
  },
  {
    title: "Display Energy Certificate (DEC)",
    description:
      "DECs measure the actual energy usage of public buildings, highlighting their environmental impact. These certificates raise awareness about energy consumption and encourage property managers to adopt energy-efficient practices, contributing to a greener future.",
    img: DEC,
  },
  {
    title: "ECO4",
    description:
      "ECO4 is a government-backed scheme aimed at improving the energy efficiency of homes, particularly for low-income households. By providing insulation, heating upgrades, and other energy-saving measures, ECO4 reduces energy waste, decreases carbon footprints, and enhances overall sustainability.",
    img: ECO4,
  },
  {
    title: "Minimum Energy Efficiency Standard (MEES)",
    description:
      "MEES sets a minimum energy performance threshold for rented properties, encouraging landlords to improve their properties’ efficiency. Compliance with MEES not only ensures lower energy consumption but also supports a sustainable housing sector by reducing environmental impact.",
    img: EPC2,
  },
  {
    title: "Energy Auditing",
    description:
      "An energy audit evaluates a building’s energy usage to identify areas for optimisation. By implementing the recommendations from energy audits, businesses and homeowners can significantly cut energy waste, reduce costs, and contribute to a more sustainable future.",
    img: AUDIT,
  },
];

const Sustainability = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="incell-ss-hero">
        <div className="incell-bs-hero-overlay">
          <h1 className="incell-ss-hero-title">
            Sustainability in Energy Efficiency
          </h1>
        </div>
      </section>
<br /><br />
      {/* Introduction Section */}
      <section className="package-intro">
        <p className="package-description">
          <strong style={{ color: "var(--primary-color)" }}>
            Incell Build & Design
          </strong>{" "}
          is dedicated to promoting energy-efficient solutions that contribute
          to a more sustainable future. Our services help businesses and
          homeowners{" "}
          <strong>
            reduce energy consumption, lower costs, and meet industry standards
          </strong>
          .
        </p>
        <p className="package-description">
          By integrating modern energy-saving techniques, we assist in creating
          a greener environment while ensuring regulatory compliance.
        </p>
      </section>

      {/* Sustainability Cards (Aligned with Retrofit PAS Design) */}
      <section className="sustainability-container">
        {sustainabilityData.map((item, index) => (
          <div
            className={`banner ${
              index % 2 === 0 ? "content-left" : "content-right"
            }`}
            key={index}
            data-aos="fade-up"
          >
            <div className="banner-content">
              <h3 className="banner-title">{item.title}</h3>
              <p className="banner-description">{item.description}</p>
            </div>
            <div className="banner-image">
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
      </section>

      {/* Additional Information Section */}
      <section className="package-intro">
        <h2 className="package-title">
          The Importance of Sustainable Energy Practices
        </h2>
        <p className="package-description">
          As energy demands continue to rise, the need for sustainable solutions
          has never been greater. Implementing energy-efficient practices not
          only reduces <strong>carbon footprints</strong> but also enhances{" "}
          <strong>long-term savings</strong>.
        </p>

        <h3 className="package-subtitle">Key Benefits of Energy Efficiency</h3>
        <ul className="package-list">
          <li>
            <strong>Environmental Impact:</strong> Reduces carbon emissions and
            promotes a cleaner environment.
          </li>
          <li>
            <strong>Financial Savings:</strong> Lower energy bills through
            improved efficiency measures.
          </li>
          <li>
            <strong>Regulatory Compliance:</strong> Meets UK government energy
            efficiency standards.
          </li>
          <li>
            <strong>Property Value Enhancement:</strong> Increases the
            desirability and resale value of properties.
          </li>
          <li>
            <strong>Improved Living Conditions:</strong> Ensures better
            insulation, ventilation, and indoor air quality.
          </li>
        </ul>

        <h3 className="package-subtitle">
          Our Commitment to a Sustainable Future
        </h3>
        <p className="package-description">
          At <strong style={{color: "var(--primary-color)"}}>Incell Build & Design</strong>, we believe in{" "}
          <strong>creating lasting, energy-efficient solutions</strong> that
          benefit both individuals and the planet. Our approach ensures that
          properties meet the highest energy standards while maintaining{" "}
          <strong>cost-effectiveness and reliability</strong>.
        </p>

        <h3 className="package-subtitle">Join Us in Making a Difference</h3>
        <p className="package-description">
          Whether you're a homeowner looking to improve efficiency or a business
          striving for sustainability, we're here to help. Together, we can
          build a greener, more energy-conscious future.
        </p>


      </section>

      <WhyChoose /> 
      <ButtonThree/>
      <PartnerCarousel/>
    </>
  );
};

export default Sustainability;
