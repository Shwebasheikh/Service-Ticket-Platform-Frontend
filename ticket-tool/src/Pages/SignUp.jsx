import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col, Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../Styles/SignUp.css'; // Optional if you have custom styles

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    department: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = 'https://perpetual-liberation-service-ticket.up.railway.app/api/save';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Client-side validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(API_URL, {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phoneNumber,
        department: formData.department,
        password: formData.password,
        role: 'USER' // or 'ADMIN' if needed
      });

      const { token, user } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(user));

      window.location.href = '/dashboard'; // or use navigate()
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="signup-container">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={6} lg={5}>
          <Card className="signup-card">
            <Card.Body>
              <h2 className="text-center mb-4">Create Account</h2>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Department</Form.Label>
                  <Form.Select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select department</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Support">Support</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    minLength={6}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    required
                  />
                </Form.Group>

                {error && (
                  <Alert variant="danger" className="text-center py-2">
                    {error}
                  </Alert>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-100"
                  disabled={isLoading}
                >
                  {isLoading ? <Spinner animation="border" size="sm" /> : 'Create Account'}
                </Button>

                <div className="text-center mt-3">
                  <small>
                    Already have an account? <a href="/login">Sign in</a>
                  </small>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
