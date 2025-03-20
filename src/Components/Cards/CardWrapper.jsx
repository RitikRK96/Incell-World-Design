import React from "react";
import "./card.css";
import Card from "./Card";

const cardData = [
  {
    image: "https://via.placeholder.com/300",
    title: "Building Surveying",
    description:
      "Expert assessments for property safety, risk management, and compliance checks.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Sustainability",
    description:
      "Promoting eco-friendly construction with energy-efficient solutions.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Retrofit PAS",
    description:
      "Specialists in retrofit assessments for improving energy efficiency.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Risk Management, Planning",
    description:
      "Comprehensive strategies to identify, evaluate, and mitigate risks.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Visual Property Marketing",
    description:
      "High-quality visuals, virtual tours, and 3D renderings to enhance property appeal.",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Packages",
    description:
      "Customised service packages to meet individual property needs.",
  },
];

const CardWrapper = () => {
  return (
    <div className="cardWrapper">
      <h1 data-aos="fade-up">What We Do</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardWrapper;
