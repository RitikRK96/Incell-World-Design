// Import required modules
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PartnerCarousel.css";

// Import images
import attma from "../../assets/logos_company/ATTMA.jpg";
import bab from "../../assets/logos_company/BAB.png";
import ciob from "../../assets/logos_company/CIOB.png";
import ecmk from "../../assets/logos_company/ecmk.jpeg";
import pas from "../../assets/logos_company/PAS.jpeg";
import trustmark from "../../assets/logos_company/trustmark.png";
import CoreLogic from "../../assets/logos_company/CoreLogic.webp";
import Eon from "../../assets/logos_company/eon.jpg";
import IAACs from "../../assets/logos_company/IAACs.png";
import Elmhurst from "../../assets/logos_company/Elmhurst.jpg";

// Partner logo data
const partners = [
  { id: 1, src: attma, alt: "AATMA" },
  { id: 2, src: bab, alt: "BAB" },
  { id: 3, src: ciob, alt: "CIOB" },
  { id: 4, src: ecmk, alt: "ECMK" },
  { id: 5, src: pas, alt: "PAS" },
  { id: 6, src: trustmark, alt: "Trustmark" },
  { id: 7, src: CoreLogic, alt: "CoreLogic" },
  { id: 8, src: Eon, alt: "Eon" },
  { id: 9, src: IAACs, alt: "IAACs" },
  { id: 10, src: Elmhurst, alt: "Elmhurst" },
];

// Custom Previous Arrow
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} partner-carousel-custom-prev`} onClick={onClick}>
      ❮
    </div>
  );
};

// Custom Next Arrow
const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} partner-carousel-custom-next`} onClick={onClick}>
      ❯
    </div>
  );
};

const PartnerCarousel = () => {
  // Slider settings
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // ✅ Center the slides
    centerPadding: "10px", // ✅ Add padding to avoid overflow
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false, // Disable center mode for mobile
        },
      },
    ],
  };

  return (
    <div className="partner-carousel-section">
      {/* Section Heading */}
      <h2 className="partner-carousel-heading">Our Partners</h2>

      {/* Slick Carousel */}
      <Slider {...settings}>
        {partners.map((partner) => (
          <div key={partner.id} className="partner-carousel-slide">
            <img
              src={partner.src}
              alt={partner.alt}
              loading="lazy"
              className="partner-carousel-logo"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerCarousel;
