import React from "react";
import "./Services.css"; // Importing CSS for styling
import EPC from "../../assets/Services/EPC.png";
import DEC from "../../assets/Services/DEC.webp";
import ECO4 from "../../assets/Services/eco4.webp";
import EPC2 from "../../assets/Services/EPC2.webp";
import AUDIT from "../../assets/Services/audit.jpg";
import ButtonThree from "./ButtonThree";

const marketingData = [
  {
    title: "Property & Architectural Photography",
    description:
      "We specialise in ground and aerial photography, using the latest equipment and techniques to highlight the best features of your property. Our C.A.A approved drone photographers capture unique angles, providing a bird’s-eye view to showcase the property and its surroundings.",
    img: EPC,
  },
  {
    title: "Aerial Photography & Drone Footage",
    description:
      "Aerial photography provides a dynamic perspective, giving buyers a comprehensive view of your property and its surroundings. Our C.A.A. approved drone captures offer stunning bird’s eye views, ideal for showcasing larger properties or estates.",
    img: DEC,
  },
  {
    title: "Professional Videography Services",
    description:
      "Our videographers create high-resolution 1-2 minute property videos that showcase the key highlights of your property. These videos can include aerial footage and branded elements, making them ideal for social media and online listings.",
    img: ECO4,
  },
  {
    title: "360° Virtual Tours",
    description:
      "Our 360° virtual tours provide an immersive experience that allows prospective buyers to explore your property remotely. High resolution and fully hosted, these tours offer buyers a realistic walkthrough experience before a live viewing.",
    img: EPC2,
  },
  {
    title: "Photo Editing & Enhancement",
    description:
      "Our in-house editing team ensures high-quality and realistic photo retouching. We enhance images with colour correction, blue sky replacement, and branded logo additions, ensuring your property stands out in listings.",
    img: AUDIT,
  },
];

const Marketing = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="incell-ss-hero">
        <div className="incell-bs-hero-overlay">
          <h1 className="incell-ss-hero-title">Property Marketing Services</h1>
        </div>
      </section>

      {/* Marketing Services Section */}
      <section className="sustainability-container">
        {marketingData.map((item, index) => (
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
      <ButtonThree/>
      </section>
    </>
  );
};

export default Marketing;
