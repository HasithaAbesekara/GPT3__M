/* eslint-disable import/named */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Footer,
  Blog,
  Features,
  Header,
  StatusBar,
  OurKitcheStaff,
  OnlineOrder,
} from './containers';
import { Navbar } from './components';

import './App.css';
import RegisterForm from './components/RegisterForm';
import Login from './components/Login';

// import RegisterForm from './components/RegisterForm';
// import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register-form" element={<RegisterForm />} />
        <Route path="/login-form" element={<Login />} />
        <Route path="/" element={<Navbar />} />
      </Routes>
      <Header />
      <Features />
      <Blog />
      <StatusBar />
      <OurKitcheStaff />
      <OnlineOrder />
      <Footer />
    </div>
  );
}

export default App;
