import React from "react";
import "./Services.css";

const BuildingSurveying = () => {
  return (
    <div className="incell-bs-container">
      {/* Hero Section */}
      <section className="incell-bs-hero">
        <div className="incell-bs-hero-overlay">
          <h1 className="incell-bs-hero-title">Building Surveying</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="incell-bs-content-section">
        <h2 className="incell-bs-main-heading">
          Expert Building Surveying Solutions by Incell World
        </h2>
        <p className="incell-bs-main-description">
          Incell World provides expert building surveying services across the
          UK. Our RICS-certified surveyors offer in-depth property surveys,
          including RICS UK Home Buyers’ Reports for a range of clients such as
          estate agents, landlords, and property managers. We ensure unmatched
          turnaround times and competitive pricing.
        </p>
        <p className="incell-bs-secondary-description">
          Our comprehensive RICS Home Buyers Survey includes a thorough
          examination of the property’s condition, providing peace of mind and
          detailed insights into your investment. Each survey covers key areas
          of concern, culminating in a complete RICS-certified report.
        </p>

        {/* Steps Section */}
        <section className="incell-bs-steps-section">
          <h2 className="incell-bs-steps-title">
            Our 5-Step Surveying Process
          </h2>
          <div className="incell-bs-steps-container">
            <div className="incell-bs-step" data-aos="fade-up">
              <h3 className="incell-bs-step-title">1. Initial Consultation</h3>
              <p className="incell-bs-step-description">
                We assess your requirements, discuss your property concerns, and
                recommend the right survey based on your property type.
              </p>
            </div>
            <div className="incell-bs-step" data-aos="fade-up">
              <h3 className="incell-bs-step-title">2. Property Inspection</h3>
              <p className="incell-bs-step-description">
                Our RICS-certified surveyors conduct a thorough physical
                inspection to identify structural issues, defects, and potential
                risks.
              </p>
            </div>
            <div className="incell-bs-step" data-aos="fade-up">
              <h3 className="incell-bs-step-title">
                3. Data Collection & Analysis
              </h3>
              <p className="incell-bs-step-description">
                We gather detailed data, including property measurements,
                materials, and condition, followed by rigorous analysis to
                assess risk factors.
              </p>
            </div>
            <div className="incell-bs-step" data-aos="fade-up">
              <h3 className="incell-bs-step-title">4. Report Preparation</h3>
              <p className="incell-bs-step-description">
                A comprehensive report is prepared, highlighting findings,
                recommendations, and areas that require immediate attention.
              </p>
            </div>
            <div className="incell-bs-step" data-aos="fade-up">
              <h3 className="incell-bs-step-title">5. Review & Consultation</h3>
              <p className="incell-bs-step-description">
                We review the report with you, provide expert insights, and
                answer any questions to ensure you make an informed decision.
              </p>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <div className="incell-bs-btn-container">
          <a
            href="/contact"
            className="incell-bs-btn incell-bs-enquire-btn"
            data-aos="fade-right"
          >
            ENQUIRE NOW
          </a>
          <a
            href="tel:+441234567890"
            className="incell-bs-btn incell-bs-call-btn"
            data-aos="fade-up"
          >
            CALL US
          </a>
          <a
            href="https://wa.me/441234567890"
            className="incell-bs-btn incell-bs-whatsapp-btn"
            data-aos="fade-left"
          >
            WHATSAPP
          </a>
        </div>
      </section>
    </div>
  );
};

export default BuildingSurveying;
