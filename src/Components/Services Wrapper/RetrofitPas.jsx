import React from "react";
import "./Services.css";
import ButtonThree from "./ButtonThree";

import EPC from "../../assets/Services/EPC.png";
import DEC from "../../assets/Services/DEC.webp";
import ECO4 from "../../assets/coordination.jpg";
import EPC2 from "../../assets/Services/EPC2.webp";
import WhyChoose from "./WhyChoose";

// Data for Retrofit PAS Process
const retrofitData = [
  {
    title: "1. Initial Assessment",
    description:
      "Our TrustMark-approved Retrofit Assessors begin by evaluating your property to identify areas that need improvement. This process helps us determine where upgrades can be made to enhance energy efficiency and comply with PAS 2035 standards.",
    img: EPC,
  },
  {
    title: "2. Design & Planning",
    description:
      "Our expert Retrofit Designers create detailed plans tailored to your property’s needs. These designs incorporate insulation, heating measures, and renewable energy options, ensuring maximum efficiency and compliance.",
    img: DEC,
  },
  {
    title: "3. Coordination & Oversight",
    description:
      "Our highly experienced Retrofit Coordinators manage the entire project, ensuring smooth execution from start to finish. They communicate with clients and contractors to maintain quality and compliance at every stage.",
    img: ECO4,
  },
  {
    title: "4. Implementation & Compliance",
    description:
      "The retrofit work is carried out by qualified professionals following a ‘Whole House’ approach. Every step is monitored to ensure the project aligns with PAS 2035 requirements and achieves full compliance.",
    img: EPC2,
  },
  {
    title: "5. Final Evaluation",
    description:
      "Our independent Retrofit Evaluators perform a thorough assessment after project completion to ensure that all improvements meet the desired standards and have delivered the expected energy efficiency outcomes.",
    img: DEC,
  },
];

const RetrofitPas = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="incell-ss-hero">
        <div className="incell-bs-hero-overlay">
          <h1 className="incell-ss-hero-title">Retrofit PAS</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="package-intro">
        <p className="package-description">
          <strong>Incell World</strong> is a leading provider of fully compliant
          Retrofit services under <strong>PAS 2035</strong>. Our team of
          qualified Retrofit Assessors, Designers, and Coordinators work
          seamlessly to ensure that every project meets the highest industry
          standards.
        </p>
        <p className="package-description">
          Our services are designed to improve the energy efficiency of
          properties through a ‘Whole House’ approach. We work closely with
          clients, including housing associations, local authorities, and
          construction firms, to ensure that every project achieves its energy
          efficiency goals while remaining compliant with PAS 2035.
        </p>
        <p className="package-description">
          From the initial assessment to the final evaluation, our experts
          ensure that each phase of the process is carefully monitored and
          executed to guarantee long-term sustainability and performance.
        </p>
        <section className="btn-section">
          <ButtonThree />
        </section>
      </section>

      {/* Steps/Retrofit Process Section */}
      <section className="sustainability-container">
        {retrofitData.map((item, index) => (
          <div
            className={`banner ${
              index % 2 === 0 ? "content-left" : "content-right"
            }`}
            key={index}
            data-aos="fade-up"
          >
            <div className="banner-content"  >
              <h3 className="banner-title">{item.title}</h3>
              <p className="banner-description">{item.description}</p>
            </div>
            <div className="banner-image">
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
      </section>
      <WhyChoose/>
    </>
  );
};

export default RetrofitPas;
