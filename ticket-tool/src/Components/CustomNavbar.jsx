// src/Components/CustomNavbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CustomNavbar = ({ sticky }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className={`navbar navbar-expand-lg ${sticky ? 'sticky' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="brand-primary">Service</span><span className="brand-secondary">Hub</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/solutions">Solutions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link to="/login" className="btn btn-outline-primary me-2">Sign In</Link>
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;