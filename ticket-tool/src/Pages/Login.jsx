import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  Alert,
  Spinner,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/LoginPage.css";
import axios from "axios";
import BrandLogo from "../Components/BrandLogo";
import RegisterImage from "../Images/1.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_URL =
    "https://perpetual-liberation-service-ticket.up.railway.app/api/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        API_URL,
        { email, password, role },
        { headers: { "Content-Type": "application/json" } }
      );

      const { token, userData } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("userData", JSON.stringify(userData));
      window.location.href =
        role === "User" ? "/dashboard" : "/employee-portal";
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page-container d-flex flex-column flex-md-row min-vh-100">
      {/* Left Side Info Section */}

      <Col
        md={6}
        className="d-flex align-items-center justify-content-center bg-text-gradient-blue text-white flex-column p-5 left-sidebar"
      >
        <div className="text-center">
          <img
            src={RegisterImage}
            alt="Help Desk Illustration"
            className="img-fluid mb-4 sidebar-image"
            style={{ maxWidth: "250px" }}
          />

          <h2 className="fw-bold mb-3">The Best Help Desk Software</h2>
          <p>Unlimited agents, fantastic support, easy to use!</p>

          <a href="/" className="btn btn-outline-light mt-4">
            ← Back to Home
          </a>
        </div>
      </Col>

      {/* Right Side Login Form */}
      <div className="login-form-panel d-flex align-items-center justify-content-center p-4 bg-white w-100">
        <div style={{ maxWidth: "400px", width: "100%" }}>
          <Card className="login-card">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h2 className="fw-bold mb-2">Welcome Back</h2>
                <p className="text-muted">Sign in to your account</p>
              </div>

              {/* Role Selection */}
              <div className="role-selection mb-4">
                <h6 className="mb-3 text-center">I am a</h6>
                <div className="d-flex gap-3 justify-content-center">
                  <Button
                    variant={role === "User" ? "primary" : "outline-primary"}
                    onClick={() => setRole("User")}
                    className={`role-btn ${role === "User" ? "active" : ""}`}
                    disabled={isLoading}
                  >
                    User
                  </Button>
                  <Button
                    variant={
                      role === "Employee" ? "primary" : "outline-primary"
                    }
                    onClick={() => setRole("Employee")}
                    className={`role-btn ${
                      role === "Employee" ? "active" : ""
                    }`}
                    disabled={isLoading}
                  >
                    Employee
                  </Button>
                </div>
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                    disabled={isLoading}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                    disabled={isLoading}
                  />
                </Form.Group>

                {error && (
                  <Alert variant="danger" className="text-center py-2 mb-3">
                    <small>{error}</small>
                  </Alert>
                )}

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 mb-3 login-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                    />
                  ) : (
                    "Sign In"
                  )}
                </Button>

                <div className="text-center">
                  <p className="text-muted small mb-0">
                    Don't have an account?{" "}
                    <a href="/SignUp" className="text-primary">
                      Sign Up
                    </a>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
