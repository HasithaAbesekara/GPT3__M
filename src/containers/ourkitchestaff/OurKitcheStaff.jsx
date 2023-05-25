import React from 'react';
import { ks1, ks2, ks3 } from './import';
import './kitchnstaff.css';
import { Article } from '../../components';

const OurKitcheStaff = () => (
  <div className="food_blog section__padding" id="OurKitcheStaff">
    <div className="food_blog-heading">
      <h1 className="ourkitchestaff">Our Kitche Staff</h1>
    </div>
    <hr className="heading_space" />
    <div className="food_blog-container">
      <div
        className="food_blog-container_groupB"
        style={{ borderRadius: '0px' }}
      >
        <Article
          imgUrl={ks1}
          name="Stafeny Rose"
          price="Head Of Kitche"
          description="Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat"
        />
        <Article
          imgUrl={ks2}
          name="Michael Reues"
          price="Food Superviso"
          description="Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat."
        />
        <Article
          imgUrl={ks3}
          name="Angle Maria"
          price="Head Cook"
          description="Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat."
        />
      </div>
    </div>
  </div>
);

export default OurKitcheStaff;
