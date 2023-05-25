import React from 'react';
import './features.css';

import { s1, s2 } from './import';
import { OurSpecial } from '../../components';

const Features = () => (
  <div className="food_features section__padding" id="features">
    <div className="food_features-heading">
      <div className="food_features-hedline">
        <h1 className="spacial">Our Specialities</h1>
      </div>
      <hr className="heading_space" />
      <div className="food_features-container">
        <OurSpecial
          img={s2}
          title="Dinner & Dessert"
          text="you need a doctor for to consectetuer Lorem ipsum dolor, consectetur adipiscing onsectetur."
        />
        <OurSpecial
          img={s1}
          title="Breakfast"
          text="you need a doctor for to consectetuer Lorem ipsum dolor, consectetur adipiscing onsectetur."
        />
        <OurSpecial
          img={s2}
          title="Ice Shakes"
          text="you need a doctor for to consectetuer Lorem ipsum dolor, consectetur adipiscing onsectetur."
        />
      </div>
    </div>
  </div>
);

export default Features;
