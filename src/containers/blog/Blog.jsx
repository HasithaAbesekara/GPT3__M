import React from 'react';
import Article from '../../components/article/Article';
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
  blog06,
  blog07,
  blog08,
  blog09,
  blog10,
  blog11,
  blog12,
  blog13,
  blog14,
  blog15,
} from './imports';
import './blog.css';

const Blog = () => (
  <div className="food_blog section__padding" id="OurMenu">
    <div className="food_blog-heading">
      <h1 className="ourmenu">Our Menu</h1>
    </div>
    <hr className="heading_space" />
    <div className="food_blog-container">
      <div className="food_blog-container_groupB">
        <Article
          imgUrl={blog01}
          name="String hoppers"
          price="Rs.120.00"
          description="Generally, Idiyappam is a healthy and steaming delicious food which is good for our health. This dish can be useful for diabetic peoples. It contains vitamin E that is good for our skins."
        />
        <Article
          imgUrl={blog02}
          name="Roti"
          price="Rs.40.00"
          description="The roti is a traditional flatbread from the Indian subcontinent. It is normally eaten with cooked vegetables or curries; it can be called a carrier for them. It is made mostoften from wheat flour, cooked on a flat or slightly concave iron griddle called a tawa."
        />
        <Article
          imgUrl={blog03}
          name="Nasi goreng"
          price="Rs.200.00"
          description="Nasi goreng is a type of fried rice dish that hails from Indonesia .  It's usually made with leftover rice, vegetables and sometimes meat or prawns that caramelise as they cook. It gets most of its flavour from garlic, shallots and sweet soy sauce"
        />
        <Article
          imgUrl={blog04}
          name="Milk Rice"
          price="Rs.40.00"
          description="Kiribath aka Sri Lankan milk rice is Sri Lanka's national dish that we make for every celebration in Sri Lanka. And a classic breakfast that everyone loves. This consists of only two main ingredients: Coconut milk and Rice."
        />
        <Article
          imgUrl={blog05}
          name="Rice and curry"
          price="Rs.100.00"
          description="The roti is a traditional flatbread from the Indian subcontinent. It is normally eaten with cooked vegetables or curries; it can be called a carrier for them. It is made mostoften from wheat flour, cooked on a flat or slightly concave iron griddle called a tawa."
        />
        <Article
          imgUrl={blog06}
          name="Fried Rice"
          price="Rs.200.00"
          description="There are a few different seasonings that make fried rice taste just right. The most important sauces to add are soy sauce, oyster sauce, and fish sauce in fried rice."
        />
        <Article
          imgUrl={blog07}
          name="Hoppers"
          price="Rs.25.00"
          description="Hoppers are actually part of a family of similar foods from across South India and Sri Lanka called “appam”. All appam are essentially types of pancake made with fermented rice batter and coconut milk"
        />
        <Article
          imgUrl={blog08}
          name="Puttu"
          price="Rs.80.00"
          description="In Sri lanka , this puttu is mainly served as breakfast and in sometimes served as dinner also. Usually this pittu is served along with linu mirus or/and coconut milk or simply with sugar"
        />
        <Article
          imgUrl={blog09}
          name="Parippu vade"
          price="Rs.40.00"
          description="Parippu vade is a popular street food and tea time snack in Sri Lanka. It is an easy to make savoury snack, which is also vegan, vegatarian, gluten-free, and low-carb friendly. Vada is a savoury fried snack, with origins from India."
        />
        <Article
          imgUrl={blog10}
          name="Rolls"
          price="Rs.40.00"
          description=" Rolls can be served and eaten whole or are also commonly cut and filled.you can try and feel better."
        />
        <Article
          imgUrl={blog11}
          name="paratha"
          price="Rs.40.00"
          description="unleavened layered flatbreads made with whole wheat flour (atta), salt, water & ghee or oil. These traditional flatbreads are a staple in Indian subcontinent and are served for a breakfast"
        />
        <Article
          imgUrl={blog12}
          name="Ulundu wadei"
          price="Rs.50.00"
          description="Ulundu Vadai or Medhu Vadai or Urad dal Vada is a deep-fried savory recipe prepared with Urad dal / black lentils, spiced up with green chilies"
        />
        <Article
          imgUrl={blog13}
          name="Lavariya"
          price="Rs.30.00"
          description="Lavariya, a Srilankan sweet dumpling which is made from the sweet coconut stuffing wrapped by the lacey rice flour outer layer"
        />
        <Article
          imgUrl={blog14}
          name="koththu"
          price="Rs.150.00"
          description="A traditional Koththu is made from recycling day-old Godhamba rotis that are chopped up into small strips and mixed with an assortment of spices, fried vegetables, possibly egg or your choice of meat, and topped with a heavy helping of chillies and onions."
        />
        <Article
          imgUrl={blog15}
          name="Fruits juice"
          price="Rs.50.00"
          description="100% juice is fruit juice made from 100% 'liquid fruit', i.e. there are no added colourings, preservatives or sugar. However, fruit juice can be made in two different ways."
        />
      </div>
    </div>
  </div>
);

export default Blog;
