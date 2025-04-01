import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroCarousel.css"; 

import Banner1 from "../../assets/b1.jpg";
import Banner3 from "../../assets/b2.png";
import Banner2 from "../../assets/banner1Grok.jpg";

// Slide Data
const slides = [
  {
    image: Banner2,
    title: "Retrofit PAS 2035 Compliance",
    description:
      "Ensure compliance with Retrofit PAS 2035 standards for safe and sustainable property upgrades. Our expert solutions guarantee quality and efficiency.",
    buttons: ["Learn More", "Request Consultation", "Contact Us"],
    link: "/services/retrofit", 
  },
  {
    image: Banner3,
    title: "Visual Property Marketing",
    description:
      "Enhance property appeal with high-quality visuals, virtual tours, and 3D renderings. Our marketing solutions help attract buyers and showcase properties effectively.",
    buttons: ["Learn More", "Request Consultation", "Contact Us"],
    link: "/services/marketing", 
  },
  {
    image: Banner1,
    title: "Sustainability for a Greener Future",
    description:
      "Adopt eco-friendly solutions to reduce your carbon footprint. Our sustainability services focus on energy efficiency, responsible construction, and renewable energy integration.",
    buttons: ["Learn More", "Request Consultation", "Contact Us"],
    link: "/services/sustainability",
  },
];

const HeroCarousel = () => {
  const navigate = useNavigate(); 

  const handleButtonClick = (action, link) => {
    switch (action) {
      case "Learn More":
        navigate(link); 
        break;
      case "Request Consultation":
      case "Contact Us":
        navigate("/contact"); 
        break;
      default:
        console.log("Button Clicked: ", action);
    }
  };

  return (
    <div className="hero-carousel">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        speed={1000}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-slide">
              {/* Background Image */}
              <img src={slide.image} alt={slide.title} className="slide-image" />

              {/* Overlay with Text */}
              <div className="carousel-overlay" data-aos="fade-up">
                <div className="carousel-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>

                  {/* Buttons */}
                  <div className="carousel-buttons">
                    {slide.buttons.map((btn, i) => (
                      <button
                        key={i}
                        className="carousel-btn"
                        onClick={() => handleButtonClick(btn, slide.link)} 
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
