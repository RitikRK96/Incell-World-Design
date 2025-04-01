import React from "react";
import "./card.css";
import Card from "./Card";
import Card1Image from '../../assets/Services/EPC.png';
import Card2Image from '../../assets/Services/DEC.webp';
import Card3Image from '../../assets/Services/eco4.webp';
import Card4Image from '../../assets/Services/EPC2.webp';
import Card5Image from '../../assets/b2.png';
import Card6Image from '../../assets/banner1Grok.jpg';

const cardData = [
  {
    image: Card1Image,
    title: "Retrofit PAS",
    description:
      "Specialists in retrofit assessments for improving energy efficiency.",
  },
  {
    image: Card2Image,
    title: "Building Surveying",
    description:
      "Expert assessments for property safety, risk management, and compliance checks.",
  },
  {
    image: Card3Image,
    title: "Sustainability",
    description:
      "Promoting eco-friendly construction with energy-efficient solutions.",
  },
  
  {
    image: Card4Image,
    title: "Risk Management, Planning",
    description:
      "Comprehensive strategies to identify, evaluate, and mitigate risks.",
  },
  {
    image: Card5Image,
    title: "Visual Property Marketing",
    description:
      "High-quality visuals, virtual tours, and 3D renderings to enhance property appeal.",
  },
  {
    image: Card6Image,
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
