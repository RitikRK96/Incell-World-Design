import React from "react";
import "./Services.css"; // Importing CSS for styling
import EPC from "../../assets/Services/EPC.png";
import DEC from "../../assets/Services/DEC.webp";
import ECO4 from "../../assets/Services/eco4.webp";
import EPC2 from "../../assets/Services/EPC2.webp";
import AUDIT from "../../assets/Services/audit.jpg";




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
        <section className="incell-ss-hero">
          <div className="incell-bs-hero-overlay">
            <h1 className="incell-ss-hero-title">Sustainability in Energy Efficiency</h1>
          </div>
        </section>
      <section className="sustainability-container">
        {sustainabilityData.map((item, index) => (
          <div
            className={`banner ${
              index % 2 === 0 ? "content-left" : "content-right"
            }`}
            key={index}
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
    </>
  );
};

export default Sustainability;
