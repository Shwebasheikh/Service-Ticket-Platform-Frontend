// src/Pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaRobot, FaChartLine, FaUsers, FaLightbulb, 
  FaTools, FaShieldAlt, FaChevronLeft, FaChevronRight,
  FaQuoteLeft, FaStar
} from 'react-icons/fa';
import CustomNavbar from '../Components/CustomNavbar';
import '../Styles/HomePage.css';

export default function HomePage() {
  // State for testimonial slider
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  
  // State for platform features slider
  const [platformIndex, setPlatformIndex] = useState(0);
  
  // State for trusted logos slider
  const [logoIndex, setLogoIndex] = useState(0);
  
  // State for sticky navbar
  const [isSticky, setIsSticky] = useState(false);
  
  // Testimonial data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Director, TechCorp",
      content: "ServiceHub has transformed our support operations. We've reduced resolution times by 60% and improved customer satisfaction scores significantly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Manager, InnovateX",
      content: "The AI capabilities are game-changing. Our team can now focus on complex issues while routine requests are handled automatically.",
      rating: 4
    },
    {
      name: "Emma Rodriguez",
      role: "Customer Support Lead, Global Solutions",
      content: "The analytics dashboard provides insights we never had before. We're making data-driven decisions that have improved our efficiency by 45%.",
      rating: 5
    }
  ];
  
  // Platform features data
  const platformFeatures = [
    {
      icon: <FaTools className="feature-icon" />,
      title: "Intelligent Ticketing",
      desc: "Automated routing and prioritization of service requests",
      color: "primary"
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Actionable Insights",
      desc: "Real-time analytics and performance dashboards",
      color: "secondary"
    },
    {
      icon: <FaUsers className="feature-icon" />,
      title: "Seamless Collaboration",
      desc: "Unified workspace for your entire team",
      color: "accent"
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Enterprise Security",
      desc: "End-to-end encryption and compliance standards",
      color: "primary"
    },
    {
      icon: <FaLightbulb className="feature-icon" />,
      title: "AI Predictions",
      desc: "Proactive issue resolution with predictive analytics",
      color: "secondary"
    }
  ];
  
  // Trusted companies
  const trustedCompanies = [
    { name: "Microsoft", logo: "M" },
    { name: "Spotify", logo: "S" },
    { name: "Airbnb", logo: "A" },
    { name: "Slack", logo: "S" },
    { name: "Shopify", logo: "S" },
    { name: "Netflix", logo: "N" },
    { name: "Salesforce", logo: "S" },
    { name: "Adobe", logo: "A" }
  ];
  
  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Navigation functions
  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const nextPlatform = () => {
    setPlatformIndex((prev) => (prev === platformFeatures.length - 3 ? 0 : prev + 1));
  };
  
  const prevPlatform = () => {
    setPlatformIndex((prev) => (prev === 0 ? platformFeatures.length - 3 : prev - 1));
  };
  
  const nextLogo = () => {
    setLogoIndex((prev) => (prev === trustedCompanies.length - 1 ? 0 : prev + 1));
  };
  
  const prevLogo = () => {
    setLogoIndex((prev) => (prev === 0 ? trustedCompanies.length - 1 : prev - 1));
  };
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <CustomNavbar sticky={isSticky} />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <h1 className="hero-title">
                <span className="text-gradient-primary">Modern</span> Service Management<br />
                <span className="text-gradient-secondary">Powered</span> by AI<br />
                <span className="text-gradient-accent">Optimized</span> for Teams
              </h1>
              <p className="hero-subtitle">
                Streamline your support operations with our intelligent platform that combines automation, analytics, and collaboration.
              </p>
              <div className="hero-cta">
                <Link to="/demo" className="btn btn-primary btn-lg me-3">
                  Request Demo
                </Link>
                <Link to="/signup" className="btn btn-outline-primary btn-lg">
                  Start Free Trial
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
              <div className="hero-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Service management dashboard" 
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section with slider */}
      <section className="trusted-section py-5">
        <div className="container">
          <div className="text-center mb-4">
            <p className="trusted-text mb-0">
              Trusted by innovative teams worldwide
            </p>
          </div>
          
          <div className="trusted-logos-container">
            <button className="slider-nav prev" onClick={prevLogo}>
              <FaChevronLeft />
            </button>
            
            <div className="trusted-logos-slider">
              {trustedCompanies.map((company, index) => (
                <div 
                  key={index} 
                  className={`trusted-logo-item ${index === logoIndex ? 'active' : ''}`}
                >
                  <div className="logo-circle">{company.logo}</div>
                  <span>{company.name}</span>
                </div>
              ))}
            </div>
            
            <button className="slider-nav next" onClick={nextLogo}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Platform Overview with slider */}
      <section className="platform-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Comprehensive Service Platform
          </h2>
          
          <div className="platform-slider-container">
            <button className="slider-nav prev" onClick={prevPlatform}>
              <FaChevronLeft />
            </button>
            
            <div className="row platform-slider">
              {platformFeatures.slice(platformIndex, platformIndex + 3).map((feature, index) => (
                <div className="col-md-4" key={index}>
                  <div className="platform-card">
                    <div className={`platform-icon bg-${feature.color}`}>
                      {feature.icon}
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                    <Link to={`/features/${feature.title.toLowerCase().replace(' ', '-')}`} className="platform-link">
                      Learn more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="slider-nav next" onClick={nextPlatform}>
              <FaChevronRight />
            </button>
          </div>
          
          <div className="platform-dots text-center mt-4">
            {Array.from({ length: platformFeatures.length - 2 }).map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === platformIndex ? 'active' : ''}`}
                onClick={() => setPlatformIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="ai-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="section-title">
                AI-Powered Service Automation
              </h2>
              <p className="mb-4">
                Our intelligent agents handle routine inquiries, freeing your team to focus on complex issues and strategic initiatives.
              </p>
              <div className="ai-features">
                {[
                  "Resolves 50% of common tickets automatically",
                  "Learns from your team's responses",
                  "Available 24/7 in multiple languages",
                  "Integrates with all major platforms",
                  "Continuously improves through machine learning"
                ].map((feature, index) => (
                  <div className="ai-feature" key={index}>
                    <FaLightbulb className="feature-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/ai" className="btn btn-outline-primary mt-3">
                Explore AI Features
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="ai-demo-card p-4">
                <div className="ai-conversation">
                  <div className="ai-message ai-agent">
                    <div className="message-header">
                      <span className="agent-name">ServiceBot</span>
                      <span className="timestamp">10:02 AM</span>
                    </div>
                    <div className="message-content">
                      Hello! I'm your virtual support agent. How can I help you today?
                    </div>
                  </div>
                  <div className="ai-message ai-user">
                    <div className="message-header">
                      <span className="user-name">You</span>
                      <span className="timestamp">10:03 AM</span>
                    </div>
                    <div className="message-content">
                      My account access isn't working after the system update
                    </div>
                  </div>
                  <div className="ai-message ai-agent">
                    <div className="message-header">
                      <span className="agent-name">ServiceBot</span>
                      <span className="timestamp">10:03 AM</span>
                    </div>
                    <div className="message-content">
                      I can help with that. I've identified a permissions issue with your account. I can fix this for you right now. Would you like me to proceed?
                    </div>
                  </div>
                  <div className="ai-message ai-user">
                    <div className="message-header">
                      <span className="user-name">You</span>
                      <span className="timestamp">10:04 AM</span>
                    </div>
                    <div className="message-content">
                      Yes, please fix it
                    </div>
                  </div>
                  <div className="ai-message ai-agent">
                    <div className="message-header">
                      <span className="agent-name">ServiceBot</span>
                      <span className="timestamp">10:04 AM</span>
                    </div>
                    <div className="message-content">
                      Done! Your access has been restored. You may need to refresh your browser. Let me know if you need anything else.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section py-5 bg-light">
        <div className="container text-center">
          <h2 className="section-title mb-5">
            Proven Business Impact
          </h2>
          <div className="row justify-content-center">
            {[
              { value: "114%", label: "Faster resolution times" },
              { value: "55%", label: "Reduced ticket volume" },
              { value: "43%", label: "Higher CSAT scores" },
              { value: "27%", label: "Cost savings" }
            ].map((result, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="result-card">
                  <div className="result-value">{result.value}</div>
                  <div className="result-label">{result.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="testimonials-section py-5 bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            What Our Customers Say
          </h2>
          
          <div className="testimonial-slider-container">
            <button className="slider-nav prev" onClick={prevTestimonial}>
              <FaChevronLeft />
            </button>
            
            <div className="testimonial-slide">
              <div className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-content">
                  {testimonials[testimonialIndex].content}
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonials[testimonialIndex].name}</h4>
                    <p>{testimonials[testimonialIndex].role}</p>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <button className="slider-nav next" onClick={nextTestimonial}>
              <FaChevronRight />
            </button>
          </div>
          
          <div className="testimonial-dots text-center mt-4">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === testimonialIndex ? 'active' : ''}`}
                onClick={() => setTestimonialIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <div className="container text-center">
          <h2 className="cta-title mb-4">Ready to transform your service operations?</h2>
          <div className="cta-buttons">
            <Link to="/demo" className="btn btn-primary btn-lg me-3">
              Schedule Demo
            </Link>
            <Link to="/signup" className="btn btn-outline-primary btn-lg">
              Start Free Trial
            </Link>
          </div>
          <p className="cta-subtext mt-3">
            No credit card required. Get started in minutes.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h5 className="footer-heading">ServiceHub</h5>
              <p className="footer-text">
                The modern service management platform for teams that deliver exceptional customer experiences.
              </p>
            </div>
            <div className="col-lg-2 mb-4">
              <h6>Product</h6>
              <ul className="footer-links">
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/integrations">Integrations</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 mb-4">
              <h6>Resources</h6>
              <ul className="footer-links">
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/guides">Guides</Link></li>
                <li><Link to="/webinars">Webinars</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 mb-4">
              <h6>Company</h6>
              <ul className="footer-links">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 mb-4">
              <h6>Legal</h6>
              <ul className="footer-links">
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/terms">Terms</Link></li>
                <li><Link to="/security">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom mt-4 pt-4">
            <div className="copyright">
              © {new Date().getFullYear()} ServiceHub. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}