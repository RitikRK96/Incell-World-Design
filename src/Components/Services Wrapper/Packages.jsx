import React from "react";
import "./Services.css"; // Importing CSS for styling
import EPC from "../../assets/estate1.avif";
import DEC from "../../assets/VG.jpeg";
import ECO4 from "../../assets/risk3.jpeg";
import EPC2 from "../../assets/Services/EPC2.webp";
import ButtonThree from "./ButtonThree";



// Package Data
const packageData = [
  {
    title: "Estate Agency Package",
    description:
      "Our professional photographers are trained assessors who can carry out all of these services in one site visit. This cost-effective and time-saving package means that you can concentrate on the rest of your property marketing without the hassle of arranging multiple suppliers.",
    img: EPC,
  },
  {
    title: "Photography Package",
    description:
      "Visual marketing services carried out in one site visit by our team of professional photographers and videographers. Capturing still and moving images during one site visit ensures uniformity to your images and film as footage is captured under the same conditions.",
    img: DEC,
  },
  {
    title: "Risk Management Package",
    description:
      "Our team of highly experienced surveyors is also qualified to carry out a variety of compliance surveys, which can all be done during one site visit. Results are returned from as little as 24 hours after the site visit, depending on the survey.",
    img: ECO4,
  },
  {
    title: "Retrofit PAS2035 Package",
    description:
      "We have a team of Retrofit specialists and can provide a package that includes a Retrofit Advisor, Assessor, Designer, Coordinator, and Evaluator. All services comply with PAS 2035 requirements, ensuring a complete retrofit solution.",
    img: EPC2,
  },
];

const Packages = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="incell-ss-hero">
        <div className="incell-bs-hero-overlay">
          <h1 className="incell-ss-hero-title">Our Service Packages</h1>
        </div>
      </section>

      {/* Package Intro Section */}
      <section className="package-intro">
        <p className="package-description">
          For ease and convenience, we have combined our most popular services into four packages where all services can be carried out in one site visit. We can also offer bespoke packages, contact us to discuss your requirements.
        </p>
        <div className="btn-container">
          <a href="/contact" className="incell-bs-btn incell-bs-enquire-btn">
            CONTACT US NOW
          </a>
        </div>
      </section>

      {/* Package Section */}
      <section className="sustainability-container">
        {packageData.map((item, index) => (
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
        <ButtonThree/>
      </section>
    </>
  );
};

export default Packages;
