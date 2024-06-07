import logo from './logo.svg';
import './App.css';
import { SignUp } from './signUp';
import{LoginScreen} from './login'
import{ClockIn}from './clockInHome'
import { BrowserRouter as Router, Route, Switch, Link,Routes } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function App() {
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    textDecoration: 'none',
    display: 'inline-block',
    margin: '10px',
    cursor: 'pointer',
    borderRadius: '4px',
  };

 return (
    <Router>
      <div>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ display: 'inline' }}>
              <Link to="/signUp" style={buttonStyle}>Sign Up</Link>
            </li>
            <li style={{ display: 'inline' }}>
              <Link to="/signIn" style={buttonStyle}>Sign In</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<LoginScreen />} />
          <Route path="/clockIn" element={<ClockIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

