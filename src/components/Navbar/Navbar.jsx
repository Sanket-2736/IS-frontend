import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
          <Link to='/'><h2 className="title-navbar">SubsidyChain</h2></Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/user-dashboard">DashBoard</Link></li>
          <li><Link to="/view-schemes">View Schemes</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="auth-buttons">
          <Link to="/login" className="btn login-btn">Login</Link>
          <Link to="/signup" className="btn signup-btn">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
