/* eslint-disable no-alert */
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login_Reg_css/register.css';

import { logo, ks1 } from '../assets/index_img';

function RegisterForm() {
  const [customername, setCustumername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8089/api/v1/customer/save', {
        customername,
        email,
        password,
        phonenumber,
        address,
      });
      alert('Customer Registation Successfully');
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="food_reg">
      <div className="food_navbar-links_logo">
        <img src={logo} />
        <p className="food_navbar-links_logo_p">UOVEAT</p>
      </div>

      <div className="container ">
        <div className="card" style={{ opacity: '0.5' }}>
          <h1>Customer Registation</h1>
          <form>
            <div className="form-group mt-2">
              <input
                type="text"
                className="form-control"
                id="employeename"
                placeholder="Enter Name"
                value={customername}
                onChange={(event) => {
                  setCustumername(event.target.value);
                }}
              />
            </div>
            <div className="form-group mt-2">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group mt-2">
              <input
                type="text"
                className="form-control"
                id="pnumber"
                placeholder="Enter Phone Number"
                value={phonenumber}
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
              />
            </div>
            <div className="form-group mt-2">
              <input
                type="address"
                className="form-control"
                id="address"
                placeholder="Enter Address"
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
            </div>

            <div className="form-group mt-2">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-4"
              onClick={save}
            >
              <Link to="/">Sign Up</Link>
            </button>
          </form>
        </div>
        <div className="food_reg_img">
          <img src={ks1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
