// Import required modules
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./TestimonialSlider.css";

// Testimonial data
const testimonials = [
  {
    name: "John Smith",
    role: "Managing Director, FutureTech",
    feedback:
      "The professionalism and expertise of this team are outstanding. They truly understand the industry and provided us with solutions that exceeded our expectations.",
  },
  {
    name: "Lisa Reynolds",
    role: "Operations Manager",
    feedback:
      "Working with them has been a game-changer for our business. Their insights and commitment to delivering quality work are unmatched.",
  },
  {
    name: "Mark Thompson",
    role: "Senior Architect",
    feedback:
      "Highly recommend! They transformed our project with innovative solutions and a seamless execution process. Their attention to detail is commendable.",
  },
  {
    name: "Samantha Green",
    role: "Founder, EcoSolutions",
    feedback:
      "From start to finish, the process was smooth and transparent. They kept us informed at every stage and delivered exactly what was promised.",
  },
  {
    name: "James Anderson",
    role: "Head of Business Development",
    feedback:
      "The dedication and expertise they bring to the table are remarkable. Their work has significantly improved our operational efficiency.",
  },
];

const TestimonialSlider = () => {
  // Ref for Swiper instance
  const swiperRef = useRef(null);

  // Attach custom buttons to swiper after component mounts
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      document
        .querySelector(".custom-prev-btn")
        .addEventListener("click", () => {
          swiperInstance.slidePrev();
        });
      document
        .querySelector(".custom-next-btn")
        .addEventListener("click", () => {
          swiperInstance.slideNext();
        });
    }
  }, []);

  return (
    <div className="testimonial-container">
      <h2 data-aos="fade-up">What Our Clients Say</h2>

      <Swiper
        ref={swiperRef}
        className="custom-swiper"
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card" data-aos="fade-up">
              <h3>{testimonial.name}</h3>
              <p className="role">{testimonial.role}</p>
              <p className="feedback">"{testimonial.feedback}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="custom-prev-btn">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="custom-next-btn">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default TestimonialSlider;
