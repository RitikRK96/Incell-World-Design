import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroCarousel.css"; // Custom Hero section styles
import Banner1 from "../../assets/banner1.webp";
import Banner3 from "../../assets/banner3.jpg";
import Banner2 from "../../assets/banner2.jpg";



const slides = [
  {
    image: Banner1,
    title: "Expert Building Surveys for Safe Properties",
    description:
      "Get reliable assessments and compliance checks to ensure property safety.",
    buttons: ["Learn More", "Request Survey", "Contact Us"],
  },
  
  {
    image: Banner2,
    title: "Sustainability for a Greener Future",
    description:
      "Adopt eco-friendly solutions to reduce your carbon footprint. Our sustainability services focus on energy efficiency, responsible construction, and renewable energy integration.",
    buttons: ["Learn More", "Explore Solutions", "Contact Us"],
  },
  {
    image: Banner3,
    title: "Visual Property Marketing",
    description:
      "Enhance property appeal with high-quality visuals, virtual tours, and 3D renderings. Our marketing solutions help attract buyers and showcase properties effectively.",
    buttons: ["Learn More", "View Portfolio", "Contact Us"],
  },
];



const HeroCarousel = () => {
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
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image" 
              />

              {/* Overlay with Text */}
              <div className="carousel-overlay" data-aos = "fade-up">
                <div className="carousel-content" >
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>

                  {/* Buttons */}
                  <div className="carousel-buttons">
                    {slide.buttons.map((btn, i) => (
                      <button key={i} className="carousel-btn">
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
