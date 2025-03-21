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
    name: "John Doe",
    role: "CEO, Tech Solutions",
    feedback:
      "Incell World helped us streamline our processes and optimise efficiency. Their expertise and dedication made a huge impact on our business!",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    feedback:
      "The team at Incell World went above and beyond to ensure we achieved our sustainability goals. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Michael Lee",
    role: "Director, GreenTech",
    feedback:
      "Professional, reliable, and highly skilled. Incell World delivered exceptional results for our project.",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004",
  },
  {
    name: "Emily Davis",
    role: "COO, Green Innovators",
    feedback:
      "Their approach to sustainability and technological solutions was exactly what our company needed. A pleasure to work with!",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
  },
  {
    name: "David Wilson",
    role: "Head of Operations",
    feedback:
      "Impressed by their attention to detail and commitment to excellence. They delivered beyond expectations!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
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
              <img src={testimonial.image} alt={testimonial.name} />
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
