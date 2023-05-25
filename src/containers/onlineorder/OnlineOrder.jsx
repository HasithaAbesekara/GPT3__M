/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './onlineorder.css';

import ks1 from '../../assets/ks1.jpg';

function OnlineOrder() {
  const [customername, setCustemername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [foodcatgory, setfoodcatgory] = useState('');
  const [details, setdetails] = useState('');

  async function order(event) {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8089/api/v1/orders/order', {
        customername,
        email,
        phonenumber,
        address,
        foodcatgory,
        details,
      });
      alert('Order has been successfully');
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="food_online_order" id="OnlineOrder">
      <div className="food_online-heading">
        <h1 className="ourkitchestaff">Online Order</h1>
      </div>
      <hr className="heading_space" />
      <div className="food_online_menu_content">
        <div className="food_online-container">
          <Form className="">
            <Row className="mb-3 ">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control
                  type="name"
                  placeholder="Enter Name"
                  id="employeename"
                  value={customername}
                  onChange={(event) => {
                    setCustemername(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="Email"
                  placeholder="Enter Email"
                  id="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                  type="phone"
                  placeholder="Enter phone Number"
                  id="phonenumber"
                  value={phonenumber}
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Select
                  defaultValue="Choose..."
                  id="foodcatgory"
                  value={foodcatgory}
                  onChange={(event) => {
                    setfoodcatgory(event.target.value);
                  }}
                >
                  <option>Food Catgory...</option>
                  <option>Milk Rice</option>
                  <option>paratha</option>
                  <option>Rolls</option>
                  <option>String hoppers</option>
                  <option>Nasi goreng</option>
                  <option>Rice and curry</option>
                  <option>Fried Rice</option>
                  <option>Parippu vade</option>
                  <option>Milk Rice</option>
                  <option>Hoppers</option>
                  <option>Fruits juice</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Control
                placeholder="Address"
                id="address"
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                placeholder="Details"
                rows={5}
                id="details"
                value={details}
                onChange={(event) => {
                  setdetails(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{
                borderRadius: '15px',
                backgroundColor: '#F25A05',
                border: 'none',
              }}
              onClick={order}
            >
              PLACE ORDER
            </Button>
          </Form>
        </div>
        <div className="food_onilne_img" style={{ width: '10%' }}>
          <img src={ks1} alt="" />
        </div>
      </div>
    </div>
  );
}
export default OnlineOrder;
