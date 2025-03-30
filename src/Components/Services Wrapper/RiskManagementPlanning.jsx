import React from "react";
import "./Services.css";
import ButtonThree from "./ButtonThree";
import EPC from "../../assets/Services/EPC.png";
import DEC from "../../assets/Services/DEC.webp";
import ECO4 from "../../assets/Services/eco4.webp";
import EPC2 from "../../assets/Services/EPC2.webp";
import AUDIT from "../../assets/Services/audit.jpg";

// Data for Risk, Management, and Planning Services
const riskManagementData = [
  {
    title: "1. Legionella Risk Assessment",
    description:
      "Our confidential risk assessments are conducted by highly trained experts, ensuring that your organisation achieves regulatory compliance efficiently and cost-effectively. Our reports are clear, easy to understand, and fully compliant with the UK’s latest health and safety regulations and codes of practice, meeting the standards set by the Health & Safety Executive and Care Quality Commission.",
    details:
      "Legionella Risk Assessments are essential for identifying and mitigating risks associated with Legionella bacteria, which thrive in water systems. Our thorough evaluation includes assessing hot and cold water systems, cooling towers, and other water storage facilities. Our certified assessors provide actionable recommendations to prevent bacterial growth and protect tenants and staff from Legionnaires' disease.",
    img: EPC,
  },
  {
    title: "2. Fire Risk Assessment",
    description:
      "Fire risk assessments (FRAs) identify and mitigate potential fire hazards to ensure occupant safety. Required by The Regulatory Reform (Fire Safety) Order 2005, these assessments are mandatory for all non-domestic premises. Our assessments not only evaluate existing fire risks but also provide corrective actions and recommendations to meet UK compliance standards.",
    details:
      "Our fire risk assessments involve a systematic review of the building to identify potential sources of ignition, combustible materials, and fire hazards. We assess escape routes, fire detection systems, and emergency procedures. Once the assessment is completed, we provide a detailed action plan that highlights corrective measures, ensuring compliance with The Regulatory Reform (Fire Safety) Order 2005 and enhancing occupant safety.",
    img: DEC,
  },
  {
    title: "3. CAD & Rendering Services",
    description:
      "We offer high-quality CAD design and drafting services that meet industry standards and client-specific requirements. Our services include detailed CAD designs, 3D rendering, and BIM modelling, ensuring your projects are delivered accurately and efficiently. With a team of skilled professionals and cutting-edge technology, we guarantee cost-effective solutions with quick turnaround times.",
    details:
      "Our CAD & rendering services include the creation of 2D drafts and 3D models, providing a visual representation of construction projects before implementation. Our team is experienced in using the latest CAD software and adhering to UK building regulations. Whether you require designs for planning applications, technical drawings, or visualisations, we ensure your projects are optimised for accuracy and efficiency.",
    img: ECO4,
  },
  {
    title: "4. Comprehensive Risk Management",
    description:
      "We provide a holistic approach to risk management that includes identifying, analysing, and mitigating potential risks across a range of projects. Our strategies ensure that safety, compliance, and operational efficiency are maintained at all times.",
    details:
      "Our risk management services include a detailed analysis of potential hazards and vulnerabilities within your organisation or property. We work closely with clients to develop and implement tailored risk management plans, including contingency measures and ongoing monitoring. By integrating best practices and advanced risk assessment techniques, we ensure long-term resilience and safety.",
    img: EPC2,
  },
  {
    title: "5. Compliance & Quality Assurance",
    description:
      "We ensure that all processes adhere to relevant UK regulations and quality standards. Our compliance experts conduct thorough audits and evaluations to maintain the highest level of safety and operational efficiency.",
    details:
      "Our compliance and quality assurance services involve regular audits, documentation checks, and operational assessments to identify gaps in compliance. We ensure adherence to regulatory standards, including health and safety regulations, environmental compliance, and industry best practices. Our approach minimises risk exposure while enhancing overall operational efficiency.",
    img: AUDIT,
  },
];

// Risk Management Component
const RiskManagementPlanning = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="incell-ss-hero">
        <div className="incell-bs-hero-overlay">
          <h1 className="incell-ss-hero-title">Risk, Management & Planning</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="package-intro">
        <p className="package-description">
          <strong>Incell World</strong> provides comprehensive risk management
          solutions designed to ensure safety, compliance, and operational
          efficiency. Our services are designed to help organisations and
          property owners manage potential hazards effectively, comply with UK
          regulations, and maintain high-quality standards.
        </p>
        <p className="package-description">
          Our dedicated team of experts includes qualified risk assessors, fire
          safety specialists, and CAD designers who offer reliable solutions to
          mitigate risks and ensure compliance with industry standards. We
          provide tailored solutions across various industries, helping clients
          stay prepared and protected in a constantly evolving environment.
        </p>
        <p className="package-description">
          Whether you require assessments for Legionella, fire safety, or
          high-quality CAD designs, we ensure all services are delivered with
          precision and professionalism. Our solutions are designed to meet the
          diverse needs of property owners, businesses, and developers, making
          risk management seamless and efficient.
        </p>
        <section className="btn-section">
          <ButtonThree />
        </section>
      </section>

      {/* Process/Steps Section */}
      <section className="sustainability-container">
        {riskManagementData.map((item, index) => (
          <div
            className={`banner ${
              index % 2 === 0 ? "content-left" : "content-right"
            }`}
            key={index}
          >
            <div className="banner-content">
              <h3 className="banner-title">{item.title}</h3>
              <p className="banner-description">{item.description}</p>
              <p className="banner-details">{item.details}</p>
            </div>
            <div className="banner-image">
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <h2 className="section-title">Why Choose Incell World?</h2>
        <p className="package-description">
          At <strong>Incell World</strong>, we combine expertise with a
          commitment to delivering high-quality services that ensure safety and
          compliance. Our team works closely with clients to understand their
          unique requirements and deliver tailored solutions. Here’s why our
          clients trust us:
        </p>
        <ul className="why-choose-list">
          <li>
            <strong>Qualified Professionals:</strong> Our assessors, designers,
            and coordinators are fully accredited and experienced.
          </li>
          <li>
            <strong>Compliance Guaranteed:</strong> All services meet the
            highest UK regulatory standards, ensuring full compliance.
          </li>
          <li>
            <strong>Customised Solutions:</strong> We tailor our services to
            meet the specific needs of our clients, offering flexible and
            effective solutions.
          </li>
          <li>
            <strong>Advanced Technology:</strong> We use state-of-the-art tools
            and techniques to ensure accurate assessments and efficient project
            management.
          </li>
        </ul>
      </section>

      {/* Button Section */}
      <section className="btn-section">
        <ButtonThree />
      </section>
    </>
  );
};

export default RiskManagementPlanning;
