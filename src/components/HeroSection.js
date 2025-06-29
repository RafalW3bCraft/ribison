import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFlask } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <section className="hero-section bg-primary text-white py-5">
      <Container>
        <Row className="align-items-center min-vh-75">
          <Col lg={6}>
            <div className="hero-content">
              <h1 className="display-4 fw-bold mb-4">
                Premium Chemical Solutions for Industry Excellence
              </h1>
              <p className="lead mb-4">
                Ribison Chemicals delivers innovative chemical products for agriculture, 
                construction, paints, ceramics, and specialty applications. Trust our 
                expertise for superior quality and performance.
              </p>
              <div className="hero-buttons">
                <LinkContainer to="/portfolio">
                  <Button variant="light" size="lg" className="me-3 mb-3">
                    <FontAwesomeIcon icon={faFlask} className="me-2" />
                    View Products
                  </Button>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Button variant="outline-light" size="lg" className="mb-3">
                    Get In Touch
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </Button>
                </LinkContainer>
              </div>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <div className="hero-image">
              <img 
                src="/images/main-banner.jpg" 
                alt="Chemical Laboratory" 
                className="img-fluid rounded shadow-lg"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;