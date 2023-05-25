import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="food_features-container__feature">
    <div className="food_features-container__feature-title">
      <div />
      <h1 style={{ fontSize: '20px', letterSpacing: '1px' }}>{title}</h1>
    </div>
    <div className="food_features-container_feature-text">
      <p style={{ fontSize: '15px' }}>{text}</p>
    </div>
  </div>
);

export default Feature;
