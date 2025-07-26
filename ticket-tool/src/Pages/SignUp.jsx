
import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col, Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/SignUp.css'; // Assuming you have a CSS file for styling
import axios from 'axios';

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

// import React, { useState } from 'react';
// import { Container, Form, Button, Card, Row, Col, Alert, Spinner } from 'react-bootstrap';
// import { motion, AnimatePresence } from 'framer-motion';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Styles/SignUp.css';
// import axios from 'axios';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     department: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const API_URL = 'https://perpetual-liberation-service-ticket.up.railway.app/api/save';

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords don't match");
//       return;


//     setIsLoading(true);
    
//     try {
//       const response = await axios.post(API_URL, {
//         name: formData.fullName,
//         email: formData.email,
//         phone: formData.phoneNumber,
//         department: formData.department,
//         password: formData.password,
//         role: 'User'
//       }, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

      // Handle success
      const { token, user } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(user));
      window.location.href = '/dashboard';

//       setSuccess(true);
//       setTimeout(() => {
//         const { token, user } = response.data;
//         localStorage.setItem('authToken', token);
//         localStorage.setItem('userData', JSON.stringify(user));
//         window.location.href = '/dashboard';
//       }, 1500);

      
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

  return (
    <Container className="signup-container">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={6} lg={5}>
          <Card className="signup-card">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h2 className="fw-bold mb-2">Create Account</h2>
                <p className="text-muted">Join our platform today</p>
              </div>
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="fullName"
                    placeholder="Enter your full name" 
                    value={formData.fullName}
                    onChange={handleChange}
                    className="signup-input"
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="jim@company.com" 
                    value={formData.email}
                    onChange={handleChange}
                    className="signup-input"
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control 
                    type="tel" 
                    name="phoneNumber"
                    placeholder="Enter your phone number" 
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="signup-input"
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Department</Form.Label>
                  <Form.Select 
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="signup-input"
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Operations">Operations</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    name="password"
                    placeholder="••••••••" 
                    value={formData.password}
                    onChange={handleChange}
                    className="signup-input"
                    required
                    minLength={6}
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    name="confirmPassword"
                    placeholder="Confirm your password" 
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="signup-input"
                    required
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
                  className="w-100 py-2 signup-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Spinner as="span" animation="border" size="sm" role="status" />
                  ) : (
                    'Create Account'
                  )}
                </Button>
                
                <div className="text-center mt-3">
                  <p className="text-muted small mb-0">
                    Already have an account? <a href="/login" className="text-primary">Sign In</a>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         when: "beforeChildren"
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10
//       }
//     }
//   };

//   const cardVariants = {
//     initial: { scale: 0.95, opacity: 0 },
//     animate: { 
//       scale: 1, 
//       opacity: 1,
//       transition: { 
//         type: "spring", 
//         stiffness: 100,
//         damping: 10
//       }
//     },
//     hover: { 
//       y: -5,
//       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//     }
//   };

//   const successVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: { 
//       scale: 1, 
//       opacity: 1,
//       transition: { 
//         type: "spring", 
//         stiffness: 100 
//       }
//     },
//     exit: { 
//       scale: 0.8, 
//       opacity: 0,
//       transition: { 
//         ease: "easeIn" 
//       }
//     }
//   };

//   if (success) {
//     return (
//       <Container className="signup-container d-flex justify-content-center align-items-center min-vh-100">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           variants={successVariants}
//           className="text-center"
//         >
//           <div className="mb-4">
//             <motion.svg
//               animate={{ scale: [1, 1.1, 1] }}
//               transition={{ duration: 1, repeat: Infinity }}
//               width="80"
//               height="80"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="#4BB543"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <motion.path
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{ duration: 0.5 }}
//                 d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
//               />
//               <motion.polyline
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 points="22 4 12 14.01 9 11.01"
//               />
//             </motion.svg>
//           </div>
//           <motion.h2 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="mb-3"
//           >
//             Registration Successful!
//           </motion.h2>
//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-muted"
//           >
//             Redirecting to your dashboard...
//           </motion.p>
//         </motion.div>
//       </Container>
//     );
//   }

//   return (
//     <Container className="signup-container">
//       <Row className="justify-content-center align-items-center min-vh-100">
//         <Col md={6} lg={5}>
//           <motion.div
//             initial="initial"
//             animate="animate"
//             whileHover="hover"
//             variants={cardVariants}
//           >
//             <Card className="signup-card">
//               <Card.Body className="p-4">
//                 <motion.div 
//                   variants={containerVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="text-center mb-4"
//                 >
//                   <motion.h2 variants={itemVariants} className="fw-bold mb-2">
//                     Create Account
//                   </motion.h2>
//                   <motion.p variants={itemVariants} className="text-muted">
//                     Join our platform today
//                   </motion.p>
//                 </motion.div>
                
//                 <Form onSubmit={handleSubmit}>
//                   <motion.div variants={containerVariants}>
//                     <motion.div variants={itemVariants}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Full Name</Form.Label>
//                         <Form.Control 
//                           type="text" 
//                           name="fullName"
//                           placeholder="Enter your full name" 
//                           value={formData.fullName}
//                           onChange={handleChange}
//                           className="signup-input"
//                           required
//                         />
//                       </Form.Group>
//                     </motion.div>
                    
//                     <motion.div variants={itemVariants}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Email Address</Form.Label>
//                         <Form.Control 
//                           type="email" 
//                           name="email"
//                           placeholder="jim@company.com" 
//                           value={formData.email}
//                           onChange={handleChange}
//                           className="signup-input"
//                           required
//                         />
//                       </Form.Group>
//                     </motion.div>
                    
//                     <motion.div variants={itemVariants}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Phone Number</Form.Label>
//                         <Form.Control 
//                           type="tel" 
//                           name="phoneNumber"
//                           placeholder="Enter your phone number" 
//                           value={formData.phoneNumber}
//                           onChange={handleChange}
//                           className="signup-input"
//                         />
//                       </Form.Group>
//                     </motion.div>
                    
//                     <motion.div variants={itemVariants}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Department</Form.Label>
//                         <Form.Select 
//                           name="department"
//                           value={formData.department}
//                           onChange={handleChange}
//                           className="signup-input"
//                           required
//                         >
//                           <option value="">Select Department</option>
//                           <option value="IT">IT</option>
//                           <option value="HR">HR</option>
//                           <option value="Finance">Finance</option>
//                           <option value="Operations">Operations</option>
//                         </Form.Select>
//                       </Form.Group>
//                     </motion.div>
                    
//                     <motion.div variants={itemVariants}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control 
//                           type="password" 
//                           name="password"
//                           placeholder="••••••••" 
//                           value={formData.password}
//                           onChange={handleChange}
//                           className="signup-input"
//                           required
//                           minLength={6}
//                         />
//                       </Form.Group>
//                     </motion.div>
                    
//                     <motion.div variants={itemVariants}>
//                       <Form.Group className="mb-4">
//                         <Form.Label>Confirm Password</Form.Label>
//                         <Form.Control 
//                           type="password" 
//                           name="confirmPassword"
//                           placeholder="Confirm your password" 
//                           value={formData.confirmPassword}
//                           onChange={handleChange}
//                           className="signup-input"
//                           required
//                         />
//                       </Form.Group>
//                     </motion.div>
//                   </motion.div>
                  
//                   <AnimatePresence>
//                     {error && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <Alert variant="danger" className="text-center py-2 mb-3">
//                           <small>{error}</small>
//                         </Alert>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
                  
//                   <motion.div
//                     whileTap={{ scale: 0.98 }}
//                     whileHover={{ scale: 1.02 }}
//                   >
//                     <Button 
//                       variant="primary" 
//                       type="submit" 
//                       className="w-100 py-2 signup-btn"
//                       disabled={isLoading}
//                     >
//                       {isLoading ? (
//                         <Spinner 
//                           as="span" 
//                           animation="border" 
//                           size="sm" 
//                           role="status" 
//                           aria-hidden="true"
//                         />
//                       ) : (
//                         <span>Create Account</span>
//                       )}
//                     </Button>
//                   </motion.div>
                  
//                   <motion.div 
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.5 }}
//                     className="text-center mt-3"
//                   >
//                     <p className="text-muted small mb-0">
//                       Already have an account? <a href="/login" className="text-primary">Sign In</a>
//                     </p>
//                   </motion.div>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </motion.div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SignUp;



// //new code for SignUp.jsx



// Updated Sign Up Component with improved left side design
import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/SignUp.css'
import RegisterImage from "../Images/1.png";
const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post('https://perpetual-liberation-service-ticket.up.railway.app/api/save', {
        fullName,
        email,
        phoneNumber,
        department,
        password,
        role: 'User',
      });
      localStorage.setItem('user', JSON.stringify(response.data));
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row className="m-0 vh-100">
{/* ------------------------------Left Side-------------------------------- */}
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
{/* ------------------------------Right Side-------------------------------- */}
      <Col md={6} className="d-flex align-items-center justify-content-center bg-light">
        <Card className="p-4 shadow w-100" style={{ maxWidth: '500px', border: 'none' }}>
          <h2 className="text-center fw-bold">Create Account</h2>
          <p className="text-center text-muted">Join our platform today</p>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fullName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your full name" required />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jim@company.com" required />
            </Form.Group>

            <Form.Group controlId="phoneNumber" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your phone number" required />
            </Form.Group>

            <Form.Group controlId="department" className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Select value={department} onChange={(e) => setDepartment(e.target.value)} required>
                <option value="">Select Department</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Marketing">Marketing</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
            </Form.Group>

            <Form.Group controlId="confirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" required />
            </Form.Group>

            <Button type="submit" className="w-100 mt-2" style={{ backgroundColor: '#f97316', border: 'none' }} disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Create Account'}
            </Button>
          </Form>

          <p className="text-center mt-3 text-muted">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </Card>
      </Col>
    </Row>

  );
};

export default SignUp;
