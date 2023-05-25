import React from 'react';
import { Link } from 'react-router-dom';
import Feature from '../../components/feature/Feature';

import './header.css';

const Header = () => (
  <div className="food_header " id="home">
    <div className="food_header-content">
      <h1 className="gradient__text">
        Yes We Have <br /> The Best Breakfast
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        <br /> sed diam nonummy nibh euismod.
      </p>

      <div className="food_header-content__input">
        <button type="button" onClick="OnlineOrder">
          <Link
            to="/register-form"
            style={{ textDecoration: 'none', color: 'orange' }}
          >
            Get Started
          </Link>
        </button>
      </div>
      <div className="food_section-container ">
        <Feature
          title="Breakfast"
          text="Duis autem vel eum iriure dolor in hendrerit"
        />
        <Feature
          title="lunch"
          text="Duis autem vel eum iriure dolor in hendrerit"
        />
        <Feature
          title="Diner"
          text="Duis autem vel eum iriure dolor in hendrerit"
        />
      </div>
    </div>
  </div>
);

export default Header;
