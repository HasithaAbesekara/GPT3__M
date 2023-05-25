/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login_Reg_css/login.css';
import { L1, logo } from '../assets/index_img';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post('http://localhost:8089/api/v1/employee/login', {
          email,
          password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message === 'Email not exits') {
              alert('Email not exits');
            } else if (res.data.message === 'Login Success') {
              navigate('/navbar');
            } else {
              alert('Incorrect Email and Password not match');
            }
          },
          (fail) => {
            console.error(fail); // Error!
          },
        );
      alert('Customer Registation Successfully');
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="food_log">
      <div className="food_log_navbar-links_logo">
        <img src={logo} />
        <p className="food_log_navbar-links_logo_p">UOVEAT</p>
      </div>

      <div className="log_container">
        <div className="log_img_hedar" style={{ width: '50%', float: 'left' }}>
          <img src={L1} alt="" style={{ width: '80%', borderRadius: '15px' }} />
        </div>

        <div
          className="log_form_contaner"
          style={{ width: '50%', float: 'right' }}
        >
          <h1>Customer Login</h1>
          <div className="row">
            <hr />
          </div>

          <div className="row">
            <div className="col-sm-6">
              <form>
                <div className="form-group">
                  <label htmlFor="email" className="mb-2">
                    Username or Email{' '}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="mb-2">
                    Password{' '}
                  </label>
                  <input
                    type="password"
                    className="form-control mb-2"
                    id="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <button type="submit" className="button" onClick={login}>
                  <Link to="/">Sign In</Link>;
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
