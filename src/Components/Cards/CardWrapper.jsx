import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import Card from "./Card";

import Card1Image from '../../assets/Services/EPC.png';
import Card2Image from '../../assets/Services/DEC.webp';
import Card3Image from '../../assets/Services/eco4.webp';
import Card4Image from '../../assets/Services/EPC2.webp';
import Card5Image from '../../assets/retrofit-design2.jpg';
import Card6Image from '../../assets/banner1Grok.jpg';

const cardData = [
  { 
    image: Card5Image, 
    title: "Retrofit Design", 
    description: "Comprehensive retrofit planning and design for energy-efficient properties.", 
    link: "/services/RetrofitDesign" 
  },
  { 
    image: Card1Image, 
    title: "Retrofit PAS", 
    description: "Specialists in retrofit assessments for improving energy efficiency.", 
    link: "/services/retrofit" 
  },
  { 
    image: Card2Image, 
    title: "Building Surveying", 
    description: "Expert assessments for property safety, risk management, and compliance checks.", 
    link: "/services/building-surveying" 
  },
  { 
    image: Card3Image, 
    title: "Sustainability", 
    description: "Promoting eco-friendly construction with energy-efficient solutions.", 
    link: "/services/sustainability" 
  },
  { 
    image: Card4Image, 
    title: "Risk Management Planning", 
    description: "Comprehensive strategies to identify, evaluate, and mitigate risks.", 
    link: "/services/risk-management-planning" 
  },
  { 
    image: Card6Image, 
    title: "Packages", 
    description: "Customised service packages to meet individual property needs.", 
    link: "/services/packages" 
  },
];


const CardWrapper = () => {
  return (
    <div className="cardWrapper">
      <div className="decorative-line"></div>
      <h1 data-aos="fade-up">What We Do</h1>
      <div className="decorative-line"></div>

      <div className="card-container">
        {cardData.map((card, index) => (
          <Link to={card.link} key={index} className="card-link">
            <Card image={card.image} title={card.title} description={card.description} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardWrapper;
