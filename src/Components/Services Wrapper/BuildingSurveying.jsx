import React from "react";
import "./Services.css";
import ButtonThree from "./ButtonThree";
import EPC from "../../assets/consult.jpg";
import DEC from "../../assets/Services/DEC.webp";
import ECO4 from "../../assets/data-collection.jpg";
import EPC2 from "../../assets/Services/EPC2.webp";
import AUDIT from "../../assets/Services/audit.jpg";
import WhyChoose from "./WhyChoose";
import PartnerCarousel from "../PartnerCarousel/PartnerCarousel";

const buildingSurveyingData = [
  {
    title: "1. Initial Consultation",
    description:
      "We start by understanding your unique requirements, property concerns, and project goals. Our experts guide you in choosing the most suitable survey, tailored to your property type and future plans.",
    img: EPC,
  },
  {
    title: "2. Property Inspection",
    description:
      "Our RICS-certified surveyors conduct a meticulous on-site inspection, identifying any structural issues, defects, and potential risks that may affect the property’s value and safety.",
    img: DEC,
  },
  {
    title: "3. Data Collection & Analysis",
    description:
      "We collect detailed property data, including measurements, materials used, and overall condition. This data is then thoroughly analysed to assess potential risks and ensure informed decision-making.",
    img: ECO4,
  },
  {
    title: "4. Report Preparation",
    description:
      "After the inspection and analysis, we prepare a comprehensive report detailing our findings. The report includes expert recommendations, highlighting critical areas that require immediate attention.",
    img: EPC2,
  },
  {
    title: "5. Review & Consultation",
    description:
      "Once the report is ready, we conduct a personalised review session to walk you through the findings. Our experts answer your questions and provide valuable insights to help you make an informed decision.",
    img: AUDIT,
  },
];

const BuildingSurveying = () => {
  return (
    <>
      <section className="incell-ss-hero mt-18">
        <div className="incell-bs-hero-overlay">
          <h1 className="incell-ss-hero-title">Building Surveying</h1>
        </div>
      </section>
      <br />
      <br />
      <section className="package-intro">
        <p className="package-description">
          At <strong style={{color: "var(--primary-color)"}}>Incell Build & Design</strong>, we provide expert building surveying
          solutions designed to give you a clear understanding of your
          property’s condition. Our RICS-certified surveyors offer a range of
          services that ensure property compliance, safety, and value
          assessment.
        </p>
        <p className="package-description">
          Our surveys cover everything from structural assessments to
          environmental compliance, enabling property owners, landlords, and
          investors to make well-informed decisions. With our efficient
          processes and advanced technology, we guarantee timely and
          comprehensive reports.
        </p>
        <p className="package-description">
          Whether you're purchasing, selling, or maintaining a property, we
          ensure transparency by providing complete insights into the property’s
          condition. Trust us for seamless, reliable, and expert guidance
          throughout the surveying process.
        </p>
        <section className="btn-section">
          <ButtonThree />
        </section>
      </section>

      <section className="sustainability-container">
        {buildingSurveyingData.map((item, index) => (
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

      <WhyChoose />
      <PartnerCarousel/>
    </>
  );
};

export default BuildingSurveying;
