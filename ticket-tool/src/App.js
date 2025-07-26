import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ServiceRequestForm from "./Pages/ServiceRequestForm";
import Dashboard from "./Pages/Dashboard";
import EmployeePortal from "./Pages/EmployeePortal";
import RequestTracking from "./Pages/RequestTracking";
function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/newticket" element={<ServiceRequestForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee-portal" element={<EmployeePortal />} />
          <Route path="/track" element={<RequestTracking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


