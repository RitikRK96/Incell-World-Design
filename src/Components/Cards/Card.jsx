import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="card" data-aos="fade-up">
      <img src={image} alt={title} />
      <div className="line-between"></div>
      <div className="card-title">{title}</div>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
