import React from "react";
import "./card.css";
import Card from "./Card";

const cardData = [
  { image: "https://via.placeholder.com/300", title: "Building Surveying" },
  { image: "https://via.placeholder.com/300", title: "Sustainability" },
  { image: "https://via.placeholder.com/300", title: "Retrofit PAS"},
  { image: "https://via.placeholder.com/300", title: "Risk Management, Planning" },
  { image: "https://via.placeholder.com/300", title: "Visual Property Marketing" },
  { image: "https://via.placeholder.com/300", title: "Packages" },
];

const CardWrapper = () => {
  return (
    <div className="cardWrapper">
      <h1 data-aos="fade-up">What We Do</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default CardWrapper;
