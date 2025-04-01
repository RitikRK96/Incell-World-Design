import React from "react";
import "./Services.css"; // Importing CSS for styling
import EPC from "../../assets/banner1.webp";
import DEC from "../../assets/drone.jpg";
import ECO4 from "../../assets/VG.jpeg";
import EPC2 from "../../assets/360.jpg";
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

export default Marketing;
