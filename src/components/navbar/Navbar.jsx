import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { logo } from './import';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="food_navbar" id="navbar">
      <div className="food_navbar-links">
        <div className="food_navbar-links_logo">
          <img src={logo} />
        </div>

        <p className="food_navbar-links_logo_p">UOVEAT</p>

        <div className="food_navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#OurKitcheStaff">Our Kitche Staff</a>
          </p>
          <p>
            <a href="#OurMenu">Our Menu</a>
          </p>
          <p>
            <a href="#AboutUs">About Us</a>
          </p>
        </div>
      </div>
      <div className="food_navbar-sign">
        <button type="button" className="food_navbar-sign_b1">
          <Link
            to="/register-form"
            style={{ textDecoration: 'none', color: 'orange' }}
          >
            Sign Up
          </Link>
        </button>

        <button type="button" className="food_navbar-sign_b2">
          <Link
            to="/login-form"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Sign In
          </Link>
        </button>
      </div>

      <div className="food_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="food_navbar-menu_container scale-up-center">
            <div className="food_navbar-links_container">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#OurKitcheStaff">Our Kitche Staff</a>
              </p>
              <p>
                <a href="#OurMenu">Our Menu</a>
              </p>
              <p>
                <a href="#AboutUs">About Us</a>
              </p>
            </div>
            <div className="food_navbar-menu_container-links-sign">
              <button type="button" className="food_navbar-sign_b1">
                Sign in
              </button>
              <button type="button" className="food_navbar-sign_b2">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
