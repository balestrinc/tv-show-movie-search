import React from 'react';
import { Link } from "react-router-dom";
import logo from './../../assets/images/logo.svg';
import './Home.css';


export default () => (
  <Link to="/search" className="searchLink">
    <header id="homeHeader" className="homeHeader">
      <img src={logo} className="appLogo" alt="logo" />
      TV Show Search
    </header>
  </Link>
);
