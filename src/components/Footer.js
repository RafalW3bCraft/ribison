import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-light py-5">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <h4>
                <FontAwesomeIcon icon={faFlask} className="me-2" />
                Ribison Chemicals
              </h4>
              <p>
                Leading manufacturer of premium chemical solutions for tile adhesives, 
                construction chemicals, and specialty industrial applications.
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=100084773440476&mibextid=ZbWKwL" 
                   className="social-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.linkedin.com/in/ribison-chemicals-company-608b0a33" 
                   className="social-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://twitter.com/RibisonChem?t=mD8pCjEwNK7AFjYVqs7lZQ&s=09" 
                   className="social-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://instagram.com/ribison_chemicals?igshid=ZDdkNTZiNTM=" 
                   className="social-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li><a href="/portfolio" className="text-light text-decoration-none">Construction</a></li>
              <li><a href="/portfolio" className="text-light text-decoration-none">Tile Adhesives</a></li>
              <li><a href="/portfolio" className="text-light text-decoration-none">Paints & Coatings</a></li>
              <li><a href="/portfolio" className="text-light text-decoration-none">Textiles</a></li>
              <li><a href="/portfolio" className="text-light text-decoration-none">Agriculture</a></li>
            </ul>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/blog" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <h5>Contact Info</h5>
            <div className="contact-info">
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                75, Star Plaza Complex, 27NH<br />
                Wankaner, Morbi, India-363621
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <a href="tel:+917777942233" className="text-light text-decoration-none">
                  +91 7777942233
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <a href="mailto:info@ribison.com" className="text-light text-decoration-none">
                  info@ribison.com
                </a>
              </p>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col md={6}>
            <p>&copy; 2025 Ribison Chemicals. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>Designed and developed with precision for chemical excellence.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;