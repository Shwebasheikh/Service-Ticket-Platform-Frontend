import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light-purple text-dark py-5" style={{ backgroundColor: 'rgb(17 24 39/var(--tw-bg-opacity,1))' }}>
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h3 className="fw-bold" style={{ color: '#ffffffff' }}>ServiceAI</h3>
            <h5 className="mb-3" style={{ color: '#ffffffff' }}>Next-Gen Support</h5>
            <p className="text-secondary">
              Revolutionizing service management with AI-powered automation, real-time tracking, 
              and intelligent insights for the future of customer support.
            </p>
            <div className="text-secondary">
              <div>Support@serviceai.com</div>
              <div>+1 (353) 123-4567</div>
              <div>San Francisco, CA</div>
            </div>
          </Col>

          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3" style={{ color: '#ffffffff' }}>Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Dashboard</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">My Tickets</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">New Ticket</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Services</a></li>
            </ul>
          </Col>

          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3" style={{ color: '#ffffffff' }}>Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">About</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Contact</a></li>
            </ul>
          </Col>

          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3" style={{ color: '#ffffffff' }}>Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Help Center</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Status</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Security</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Privacy</a></li>
            </ul>
          </Col>
        </Row>
         <div className="mt-4 pt-3 text-center text-muted small border-top" style={{ color: 'white' }}>
          <p style={{ color: 'white' }}>Service Ticket System v1.0.0 - © 2023 Company Name. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;