import React from "react";
import "./Services.css";

const WhyChoose = () => {
  return (
    <section className="why-choose-section">
      <h2 className="section-title">Why Choose Incell Build & Design?</h2>
      <p className="package-description">
        At <strong style={{color: "var(--primary-color)"}}>Incell Build & Design</strong>, we combine expertise with a commitment
        to delivering high-quality services that ensure safety and compliance.
        Our team works closely with clients to understand their unique
        requirements and deliver tailored solutions. Here’s why our clients
        trust us:
      </p>
      <ul className="why-choose-list">
        <li data-aos="fade-up">
          <strong style={{color: "var(--primary-color)"}}>Qualified Professionals:</strong> Our assessors, designers,
          and coordinators are fully accredited and experienced.
        </li>
        <li data-aos="fade-up">
          <strong style={{color: "var(--primary-color)"}}>Compliance Guaranteed:</strong> All services meet the highest
          UK regulatory standards, ensuring full compliance.
        </li>
        <li data-aos="fade-up">
          <strong style={{color: "var(--primary-color)"}}>Customised Solutions:</strong> We tailor our services to meet
          the specific needs of our clients, offering flexible and effective
          solutions.
        </li>
        <li data-aos="fade-up">
          <strong style={{color: "var(--primary-color)"}}>Advanced Technology:</strong> We use state-of-the-art tools
          and techniques to ensure accurate assessments and efficient project
          management.
        </li>
      </ul>
    </section>
  );
};

export default WhyChoose;
