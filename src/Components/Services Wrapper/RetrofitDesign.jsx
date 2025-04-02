import React from "react";
import "./Services.css";
import ButtonThree from "./ButtonThree";
import WhyChoose from "./WhyChoose";

import placeholderImage1 from "../../assets/banner1Grok.jpg";
import placeholderImage2 from "../../assets/banner2.jpg";
import placeholderImage3 from "../../assets/consult.jpg";
import placeholderImage4 from "../../assets/Services/audit.jpg";
import placeholderImage5 from "../../assets/retrofit-design1.webp";
import placeholderImage6 from "../../assets/retrofit-design2.jpg";

const retrofitDesignContent = [
  {
    title: "An Approach to Retrofit Design",
    description:
      "In the United Kingdom, retrofit design focuses on enhancing energy efficiency while preserving the architectural integrity of buildings. Our team conducts thorough property assessments to identify tailored solutions that align with PAS 2035 and UK building regulations.",
    img: placeholderImage1,
  },
  {
    title: "Bespoke Energy-Efficient Solutions",
    description:
      "Each retrofit project is designed with customised solutions, incorporating advanced insulation techniques, efficient heating systems, and smart ventilation strategies to ensure maximum energy savings and comfort.",
    img: placeholderImage2,
  },
  {
    title: "Ensuring Compliance and Quality",
    description:
      "We adhere to rigorous compliance checks, ensuring all retrofit measures meet UK government regulations. Digital modelling and simulation tools help validate expected performance before implementation, guaranteeing efficiency and cost-effectiveness.",
    img: placeholderImage3,
  },
  {
    title: "Sustainable Material Selection",
    description:
      "We prioritise sustainable, high-quality materials that enhance the longevity and effectiveness of retrofit installations. Our approach ensures environmental responsibility while meeting strict industry standards.",
    img: placeholderImage4,
  },
  {
    title: "Smart Energy Monitoring & Automation",
    description:
      "Post-retrofit, we integrate smart energy monitoring systems that allow homeowners and businesses to track their energy usage in real-time, optimising performance and reducing costs over the long term.",
    img: placeholderImage5,
  },
  {
    title: "Long-Term Performance & Maintenance",
    description:
      "Our commitment extends beyond project completion. We offer long-term performance monitoring and maintenance services, ensuring retrofit measures continue to deliver high energy efficiency and sustainability benefits.",
    img: placeholderImage6,
  },
];

const RetrofitDesign = () => {
  return (
    <>
      <section className="incell-ss-hero">
        <div className="incell-bs-hero-overlay">
          <h1 className="incell-ss-hero-title">Retrofit Design</h1>
        </div>
      </section>
      <br /><br />
      <section className="package-intro">
        <p className="package-description">
          <strong style={{color: "var(--primary-color)"}}>Incell Build & Design</strong> delivers high-quality retrofit designs
          that prioritise energy efficiency, sustainability, and compliance with
          UK regulations. Our tailored solutions ensure properties achieve
          maximum energy performance while reducing carbon emissions.
        </p>
        <p className="package-description">
          Our approach is centred on careful planning, sustainable material
          selection, and innovative techniques that guarantee long-lasting
          energy savings. We collaborate with property owners, contractors, and
          regulatory bodies to create smooth and effective retrofit
          implementations.
        </p>
        <p className="package-description">
          Whether you are retrofitting a residential home or a large-scale
          commercial property, our expertise ensures cost-effective and
          high-quality energy efficiency improvements.
        </p>
      </section>

      <section className="sustainability-container">
        {retrofitDesignContent.map((item, index) => (
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
      <section className="btn-section">
        <ButtonThree />
      </section>
    </>
  );
};

export default RetrofitDesign;