import React from 'react';

import './footer.css';

const Footer = () => (
  <div className="food_footer section__padding" id="AboutUs">
    <div className="food_footer-links">
      <div className="food_footer-links_div">
        <h4>About Us</h4>

        <p>
          we are dedicated to providing customers with a seamless, secure, and
          convenient online food ordering experience. Our team of experienced
          professionals is committed to delivering quality service and delicious
          meals that exceed customer expectations. We strive to make our
          ordering process simple, efficient, and enjoyable for all customers
        </p>
      </div>
      <div className="food_footer-links_div">
        <h4>Quick Links</h4>

        <ul>
          <li>Home</li>
          <li>Our kitche stagg</li>
          <li>Our Menu</li>
          <li>About US</li>
        </ul>
      </div>
      <div className="food_footer-links_div">
        <h4>Contact Us</h4>

        <p>Restaurant, to consequat ipsum nec sagittis sem.</p>
        <p>
          <i className="bi bi-geo-alt" />
          <span>&nbsp;</span>University Of Vavuniya Pampaimadu
        </p>
        <p>
          <i className="bi bi-telephone-fill" />
          <span>&nbsp;</span>0704866669
        </p>
        <p>
          <i className="bi bi-envelope-at" />
          <span>&nbsp;</span> UOV@gmail.com
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
