import "./About.css";
import aboutImg from "../../assets/banner1.webp";

const About = () => {
  return (
    <section className="about">
      <div className="about-content" data-aos="fade-right">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          At <strong style={{ color: "var(--primary-color)" }}>Incell Build and Design Ltd</strong>, we specialise in delivering
          end-to-end retrofit solutions that enhance energy efficiency and support the UK’s journey towards net-zero.
          Our team brings together certified professionals, innovative tools, and industry knowledge to provide high-quality,
          compliant services from initial assessment to final implementation.
        </p>
        <p className="about-description">
          Guided by the latest <strong style={{ color: "var(--primary-color)" }}>PAS2035:2023</strong> standards, we focus on creating
          comfortable, sustainable living spaces through thorough property evaluations, bespoke design packages,
          and coordinated project delivery. Our pre-installation checks, including PIBI, air leakage testing, and
          thermal bridging analysis, ensure every home we work on achieves long-term performance improvements.
        </p>
        <a href="/contact" className="btn btn-primary">
          Contact Us
        </a>
      </div>
      <div className="about-image" data-aos="fade-left">
        <img src={aboutImg} alt="About Us" />
      </div>
    </section>
  );
};

export default About;
