import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faCog, faShippingFast, faHeadset, faClipboardCheck, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: faFlask,
      title: 'Custom Formulation',
      description: 'Develop specialized chemical formulations tailored to your specific requirements and applications.',
      features: ['Bespoke chemistry solutions', 'Application-specific development', 'Performance optimization', 'Cost-effective alternatives']
    },
    {
      icon: faCog,
      title: 'Technical Consulting',
      description: 'Expert technical guidance and consultation for chemical selection and application processes.',
      features: ['Product selection assistance', 'Application guidance', 'Process optimization', 'Troubleshooting support']
    },
    {
      icon: faShippingFast,
      title: 'Logistics & Distribution',
      description: 'Efficient supply chain management and timely delivery across India and international markets.',
      features: ['Pan-India delivery', 'International shipping', 'Bulk order handling', 'Inventory management']
    },
    {
      icon: faHeadset,
      title: 'Customer Support',
      description: '24/7 customer support and technical assistance for all your chemical solution needs.',
      features: ['Round-the-clock support', 'Technical helpdesk', 'Order tracking', 'After-sales service']
    },
    {
      icon: faClipboardCheck,
      title: 'Quality Assurance',
      description: 'Comprehensive quality testing and certification services to ensure product excellence.',
      features: ['Laboratory testing', 'Quality certificates', 'Batch tracking', 'Compliance verification']
    },
    {
      icon: faUsers,
      title: 'Training & Development',
      description: 'Professional training programs for optimal use of chemical products and safety protocols.',
      features: ['Product training', 'Safety protocols', 'Best practices', 'Certification programs']
    }
  ];

  const industries = [
    {
      name: 'Construction',
      description: 'Specialized chemicals for construction applications including tile adhesives, sealants, and structural compounds.',
      products: ['Tile Adhesives', 'Waterproofing Compounds', 'Structural Adhesives', 'Repair Mortars']
    },
    {
      name: 'Paints & Coatings',
      description: 'Advanced additives and binders for paint formulations and coating applications.',
      products: ['Paint Binders', 'Rheology Modifiers', 'Defoamers', 'Color Stabilizers']
    },
    {
      name: 'Textile Industry',
      description: 'Chemical solutions for textile processing, printing, and finishing operations.',
      products: ['Textile Binders', 'Printing Aids', 'Finishing Agents', 'Softening Compounds']
    },
    {
      name: 'Agriculture',
      description: 'Eco-friendly agricultural chemicals for crop protection and enhancement.',
      products: ['Crop Protection', 'Soil Conditioners', 'Fertilizer Additives', 'Bio-stimulants']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section position-relative">
        <div className="hero-bg" style={{ backgroundImage: 'url(/images/services-hero.jpg)' }}>
          <div className="hero-overlay"></div>
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={8}>
                <h1 className="hero-title text-white mb-4">Our Services</h1>
                <p className="hero-subtitle text-white mb-4">
                  Comprehensive chemical solutions and services designed to support your business success
                </p>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/" className="text-white">Home</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Services</li>
                  </ol>
                </nav>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">What We Offer</span>
            <h2 className="display-6 fw-bold mb-3">Complete Chemical Solutions</h2>
            <p className="lead">From custom formulation to technical support, we provide end-to-end services</p>
          </div>
          
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Body className="text-center">
                    <div className="mb-3">
                      <FontAwesomeIcon icon={service.icon} size="3x" className="text-primary" />
                    </div>
                    <Card.Title as="h5">{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <ul className="list-unstyled text-start">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="small text-muted mb-1">• {feature}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Industries We Serve */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">Industry Focus</span>
            <h2 className="display-6 fw-bold mb-3">Sectors We Serve</h2>
            <p className="lead">Specialized solutions for diverse industry requirements</p>
          </div>
          
          <Row>
            {industries.map((industry, index) => (
              <Col lg={6} key={index} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title as="h5" className="text-primary">{industry.name}</Card.Title>
                    <Card.Text>{industry.description}</Card.Text>
                    <div>
                      <h6>Key Products:</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {industry.products.map((product, idx) => (
                          <span key={idx} className="badge bg-light text-dark">{product}</span>
                        ))}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Service Process */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">Our Process</span>
            <h2 className="display-6 fw-bold mb-3">How We Work</h2>
            <p className="lead">Our systematic approach ensures optimal results for every project</p>
          </div>
          
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <span className="fw-bold">1</span>
                  </div>
                  <div>
                    <h5 className="mb-1">Consultation & Analysis</h5>
                    <p className="text-muted mb-0">Understanding your specific requirements and challenges</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <span className="fw-bold">2</span>
                  </div>
                  <div>
                    <h5 className="mb-1">Solution Development</h5>
                    <p className="text-muted mb-0">Formulating the optimal chemical solution for your needs</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <span className="fw-bold">3</span>
                  </div>
                  <div>
                    <h5 className="mb-1">Testing & Validation</h5>
                    <p className="text-muted mb-0">Rigorous testing to ensure product performance and quality</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <span className="fw-bold">4</span>
                  </div>
                  <div>
                    <h5 className="mb-1">Production & Delivery</h5>
                    <p className="text-muted mb-0">Manufacturing and timely delivery of your chemical solutions</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                    <span className="fw-bold">5</span>
                  </div>
                  <div>
                    <h5 className="mb-1">Support & Follow-up</h5>
                    <p className="text-muted mb-0">Ongoing technical support and customer service</p>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <img 
                src="/images/service-process.jpg" 
                alt="Service Process" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h3 className="mb-3">Ready to Start Your Project?</h3>
              <p className="lead mb-0">
                Contact our expert team today to discuss your chemical solution requirements 
                and discover how we can help achieve your business objectives.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Button as={Link} to="/contact" variant="light" size="lg">
                Get Started Today
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;