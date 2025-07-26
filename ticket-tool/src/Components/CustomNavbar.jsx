
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

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Dropdown,
  Image,
  Container,
} from "react-bootstrap";
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import "../Styles/CustomNavbar.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm" sticky="top">
      <Container
        fluid
        className="px-4 d-flex align-items-center justify-content-between"
      >
        {/* Logo Section */}
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center text-white fw-bold"
        >
          <span className="logo-icon me-2">🎟️</span>
          <span className="text-gradient-blue">ServiceAI</span>
          <small className="ms-2 tagline">Smart Support Platform</small>
        </Navbar.Brand>

        {/* Search Bar (centered) */}
        <Form className="d-none d-lg-flex search-wrapper">
          <FormControl
            type="search"
            placeholder="Search tickets or employees..."
            className="search-input"
            aria-label="Search"
          />
        </Form>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="navbar-content" className="bg-light" />

        {/* Right Nav Section */}
        <Navbar.Collapse id="navbar-content">
          <Nav className="ms-auto align-items-center gap-3 text-white">
            <Nav.Link href="/dashboard" className="nav-link-custom">
              Dashboard
            </Nav.Link>
            <Nav.Link href="/employee-portal" className="nav-link-custom">
              My Tickets
            </Nav.Link>
            <Nav.Link href="/newticket" className="nav-link-custom">
              {" "}
              <FaPlus className="me-1" /> New Ticket
            </Nav.Link>
            <Nav.Link href="/track" className="nav-link-custom">
              Track
            </Nav.Link>
            {/* Notification Bell */}
            <Nav.Link
              href="#notifications"
              className="position-relative nav-link-custom"
            >
              <FaBell />
              <span className="notification-badge">2</span>
            </Nav.Link>

            {/* Profile Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="dark"
                className="profile-dropdown d-flex align-items-center"
              >
                <Image
                  src="https://via.placeholder.com/30"
                  roundedCircle
                  className="me-2"
                />
                <span className="d-none d-lg-inline text-white">Jane</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#profile">Profile</Dropdown.Item>
                <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                <Dropdown.Item href="/login">Logout</Dropdown.Item>
                <Dropdown.Item href="/SignUp">SignUp</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default CustomNavbar;