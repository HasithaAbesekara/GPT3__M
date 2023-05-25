import React from 'react';
import './article.css';

const Article = ({ imgUrl, name, price, description }) => (
  <div className="food_blog-container_article">
    <div
      className="food_blog-container_article-image"
      style={{ height: '200px' }}
    >
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div
      className="food_blog-container_article-content"
      style={{ height: '160px' }}
    >
      <div className="food_content_main">
        <div className="food_contaner_main_section">
          <div className="food_section_one">
            <h3>{name}</h3>
            <h5>{price}</h5>
          </div>
          {/* <div className="food_section_two">
            <button type="button">Order Now</button>
</div> */}
        </div>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default Article;
