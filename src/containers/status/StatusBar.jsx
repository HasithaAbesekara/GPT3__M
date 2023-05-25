import React from 'react';
import './statusbar.css';

import { g1, g2, g3, g4 } from './import';
import { OurSpecial } from '../../components';

const StatusBar = () => (
  <div className="food_status_bar">
    <div className="food_features-heading">
      <div className="food_features-container" style={{ color: 'white' }}>
        <OurSpecial img={g1} title="4680" text="Happy Customers" />
        <OurSpecial img={g2} title="865" text="Dishes Served" />
        <OurSpecial img={g3} title="510" text="Total Beverages" />
        <OurSpecial img={g4} title="1350" text="Cup Of Coffees" />
      </div>
    </div>
  </div>
);

export default StatusBar;
