import React from 'react';
import './ourspaecial.css';

const OurSpecial = ({ img, title, text }) => (
  <div className="food_spaecial-container__feature">
    <div className="food_spaecial-container__feature-title" style={{}}>
      <img src={img} alt="" />

      <div className="food_spaecial-container_feature-text-h1">
        <h1>{title}</h1>
      </div>
      <div className="food_spaecial-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default OurSpecial;
