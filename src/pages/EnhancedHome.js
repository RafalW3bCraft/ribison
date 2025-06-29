import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faLeaf, faCog, faArrowRight, faCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import NewsletterSignup from '../components/NewsletterSignup';
import { FEATURED_PRODUCTS, PRODUCT_CATEGORIES } from '../utils/constants';

const EnhancedHome = () => {
  const industries = [
    {
      icon: faIndustry,
      title: 'Construction',
      description: 'High-performance chemicals for construction industry',
      color: 'primary'
    },
    {
      icon: faFlask,
      title: 'Paints & Coatings',
      description: 'Specialized additives for paint formulations',
      color: 'success'
    },
    {
      icon: faLeaf,
      title: 'Agriculture',
      description: 'Eco-friendly solutions for agricultural applications',
      color: 'warning'
    },
    {
      icon: faCog,
      title: 'Textile',
      description: 'Advanced chemical solutions for textile processing',
      color: 'info'
    }
  ];

  const features = [
    'ISO 9001:2015 Certified Quality',
    'Environmentally Sustainable Solutions',
    'Expert Technical Support',
    'Custom Formulation Services',
    'Global Supply Chain',
    'Research & Development Excellence'
  ];

  return (
    <div className="home-page">
      <HeroSection />

      {/* Industries Section */}
      <section className="industries-section py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Industries We Serve</h2>
              <p className="lead text-muted">
                Delivering specialized chemical solutions across multiple industry sectors
              </p>
            </Col>
          </Row>
          <Row>
            {industries.map((industry, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className="h-100 text-center border-0 shadow-sm hover-shadow">
                  <Card.Body className="p-4">
                    <div className={`text-${industry.color} mb-3`}>
                      <FontAwesomeIcon icon={industry.icon} size="3x" />
                    </div>
                    <Card.Title className="h5">{industry.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {industry.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-5 bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Featured Products</h2>
              <p className="lead text-muted">
                Discover our premium chemical solutions designed for superior performance
              </p>
            </Col>
          </Row>
          <Row>
            {FEATURED_PRODUCTS.map((product, index) => (
              <Col md={4} key={product.id} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="text-center mt-4">
              <Link to="/portfolio" className="btn btn-primary btn-lg">
                View All Products
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="features-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="display-5 fw-bold mb-4">Why Choose Ribison Chemicals?</h2>
              <p className="lead mb-4">
                With over 15 years of experience in the chemical industry, we deliver 
                innovative solutions that meet the highest standards of quality and performance.
              </p>
              <Row>
                {features.map((feature, index) => (
                  <Col md={6} key={index} className="mb-3">
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon 
                        icon={faCheck} 
                        className="text-success me-3" 
                      />
                      <span>{feature}</span>
                    </div>
                  </Col>
                ))}
              </Row>
              <div className="mt-4">
                <Link to="/about" className="btn btn-outline-primary btn-lg me-3">
                  Learn More About Us
                </Link>
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get Started Today
                </Link>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <img 
                src="/images/aboutus.jpg" 
                alt="About Ribison Chemicals" 
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Stats */}
      <section className="stats-section py-5 bg-primary text-white">
        <Container>
          <Row className="text-center">
            <Col md={3} className="mb-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold">15+</h3>
                <p className="lead">Years Experience</p>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold">500+</h3>
                <p className="lead">Satisfied Clients</p>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold">100+</h3>
                <p className="lead">Chemical Products</p>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="stat-item">
                <h3 className="display-4 fw-bold">6</h3>
                <p className="lead">Industry Sectors</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-5 bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">What Our Clients Say</h2>
              <p className="lead text-muted">
                Trusted by industry leaders worldwide
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon 
                        key={i} 
                        icon={faStar} 
                        className="text-warning" 
                      />
                    ))}
                  </div>
                  <blockquote className="mb-3">
                    "Ribison Chemicals has been our trusted partner for construction 
                    chemicals. Their quality and service are exceptional."
                  </blockquote>
                  <footer className="text-muted">
                    <strong>John Smith</strong><br />
                    Construction Manager, ABC Corp
                  </footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon 
                        key={i} 
                        icon={faStar} 
                        className="text-warning" 
                      />
                    ))}
                  </div>
                  <blockquote className="mb-3">
                    "The agricultural solutions from Ribison have significantly 
                    improved our crop yields while being environmentally friendly."
                  </blockquote>
                  <footer className="text-muted">
                    <strong>Sarah Johnson</strong><br />
                    Farm Owner, Green Fields
                  </footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon 
                        key={i} 
                        icon={faStar} 
                        className="text-warning" 
                      />
                    ))}
                  </div>
                  <blockquote className="mb-3">
                    "Outstanding technical support and custom formulations. 
                    Ribison truly understands our industry needs."
                  </blockquote>
                  <footer className="text-muted">
                    <strong>Michael Chen</strong><br />
                    R&D Director, PaintTech Solutions
                  </footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section py-5">
        <Container>
          <Row>
            <Col lg={6} className="mx-auto text-center">
              <h3 className="h2 mb-3">Stay Updated</h3>
              <p className="mb-4">
                Subscribe to our newsletter for the latest industry insights and product updates
              </p>
              <NewsletterSignup />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default EnhancedHome;