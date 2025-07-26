import React from "react";
import CustomNavbar from "../Components/CustomNavbar";
import Footer from "../Components/Footer";  
import SideNav from "../Components/SideNav";
export default function Dashboard() {
  return (
    <>
    {/* <SideNav /> */}
      <CustomNavbar />
      <h1>Welcome to the Employee Portal</h1>
      <Footer />
    </>
  );
}
