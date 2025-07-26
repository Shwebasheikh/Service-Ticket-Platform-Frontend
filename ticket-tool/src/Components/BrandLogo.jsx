// old logo

// import React from "react";
// import { Navbar } from "react-bootstrap";
// import "../Styles/CustomNavbar.css"; 

// const BrandLogo = () => {
//   return (
//     <Navbar.Brand
//       href="/"
//       className="d-flex align-items-center text-white fw-bold"
//     >
//       <span className="logo-icon me-2">🎟️</span>
//       <span className="text-gradient-blue" >ServiceAI</span>
//       <small className="ms-2 tagline">Smart Support Platform</small>
//     </Navbar.Brand>
//   );
// };

// export default BrandLogo;  


// -----------------------------new logo 


import React from "react";
import { Navbar, Image } from "react-bootstrap";
import "../Styles/BrandLogo.css";

const BrandLogo = () => {
  return (
    <Navbar.Brand href="/" className="d-flex align-items-center brand-logo">
   <img src="/logo.png" alt="ServiceHub Logo" className="brand-logo-icon me-2" />


      <span className="brand-name">ServiceHub</span>
    </Navbar.Brand>
  );
};

export default BrandLogo;
