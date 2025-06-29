import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faDownload, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'construction', name: 'Construction' },
    { id: 'paints', name: 'Paints & Coatings' },
    { id: 'textile', name: 'Textile' },
    { id: 'ceramic', name: 'Ceramic' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'specialty', name: 'Specialty Chemicals' }
  ];

  const products = [
    {
      id: 'ribi-gold',
      name: 'Ribi Gold',
      category: 'construction',
      description: 'Premium tile adhesive with superior bonding strength for heavy-duty applications',
      image: '/images/ribi-gold.jpg',
      features: ['Water resistant', 'High bonding strength', 'Easy application', 'Durable finish']
    },
    {
      id: 'ribi-silver',
      name: 'Ribi Silver',
      category: 'construction',
      description: 'High-performance construction chemical for structural applications',
      image: '/images/ribi-silver.jpg',
      features: ['Fast setting', 'Weather resistant', 'Non-toxic', 'Cost effective']
    },
    {
      id: 'ribibond',
      name: 'Ribibond',
      category: 'specialty',
      description: 'Advanced bonding agent for multiple industrial applications',
      image: '/images/ribibond.jpg',
      features: ['Multi-purpose', 'Strong adhesion', 'Chemical resistant', 'Long lasting']
    },
    {
      id: 'paint-additive-1',
      name: 'Paint Enhancer Pro',
      category: 'paints',
      description: 'Professional-grade paint additive for enhanced performance',
      image: '/images/paint-additive.jpg',
      features: ['Color stability', 'UV protection', 'Scratch resistance', 'Easy mixing']
    },
    {
      id: 'textile-binder',
      name: 'Textile Binder Plus',
      category: 'textile',
      description: 'Advanced binder for textile printing and finishing processes',
      image: '/images/textile-binder.jpg',
      features: ['Wash fastness', 'Soft hand feel', 'Eco-friendly', 'High yield']
    },
    {
      id: 'ceramic-glaze',
      name: 'Ceramic Glaze Master',
      category: 'ceramic',
      description: 'Premium ceramic glaze for superior finish and durability',
      image: '/images/ceramic-glaze.jpg',
      features: ['High gloss', 'Thermal shock resistant', 'Lead-free', 'Consistent quality']
    },
    {
      id: 'agri-solution',
      name: 'AgriChem Solution',
      category: 'agriculture',
      description: 'Sustainable agricultural chemical for crop protection',
      image: '/images/agri-solution.jpg',
      features: ['Biodegradable', 'Crop safe', 'Effective coverage', 'Weather stable']
    },
    {
      id: 'specialty-polymer',
      name: 'PolyMax Specialty',
      category: 'specialty',
      description: 'Specialized polymer for industrial manufacturing processes',
      image: '/images/specialty-polymer.jpg',
      features: ['High temperature stable', 'Chemical inert', 'Flexible formulation', 'Quality assured']
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const openLightbox = (product) => {
    setSelectedImage(product);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section position-relative">
        <div className="hero-bg" style={{ backgroundImage: 'url(/images/portfolio-hero.jpg)' }}>
          <div className="hero-overlay"></div>
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={8}>
                <h1 className="hero-title text-white mb-4">Our Product Portfolio</h1>
                <p className="hero-subtitle text-white mb-4">
                  Comprehensive range of premium chemical solutions for diverse industrial applications
                </p>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/" className="text-white">Home</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Portfolio</li>
                  </ol>
                </nav>
              </Col>
              <Col lg={4} className="text-lg-end">
                <Button as={Link} to="/contact" variant="light" size="lg" className="me-3">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  Contact Expert
                </Button>
                <Button as={Link} to="/contact" variant="outline-light" size="lg">
                  <FontAwesomeIcon icon={faDownload} className="me-2" />
                  Download Catalog
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">Our Products</span>
            <h2 className="display-6 fw-bold mb-3">Chemical Solutions by Category</h2>
            <p className="lead">Explore our comprehensive range of premium chemical products</p>
          </div>

          {/* Category Tabs */}
          <div className="portfolio-tabs mb-5">
            {categories.map(category => (
              <button
                key={category.id}
                className={`portfolio-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <Row className="portfolio-grid">
            {filteredProducts.map(product => (
              <Col lg={4} md={6} key={product.id} className="mb-4">
                <Card className="portfolio-item h-100">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={product.image} 
                      alt={product.name}
                      style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                      onClick={() => openLightbox(product)}
                    />
                    <div className="position-absolute top-0 end-0 m-2">
                      <Button 
                        variant="light" 
                        size="sm"
                        onClick={() => openLightbox(product)}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </Button>
                    </div>
                  </div>
                  <Card.Body className="portfolio-item-content">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    
                    <div className="mb-3">
                      <h6>Key Features:</h6>
                      <ul className="list-unstyled">
                        {product.features.map((feature, index) => (
                          <li key={index} className="small text-muted">• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="d-flex gap-2">
                      <Button 
                        as={Link} 
                        to={`/product/${product.id}`} 
                        variant="primary" 
                        size="sm"
                      >
                        View Details
                      </Button>
                      <Button 
                        as={Link} 
                        to="/contact" 
                        variant="outline-primary" 
                        size="sm"
                      >
                        Inquire
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h3 className="mb-3">Need Custom Chemical Solutions?</h3>
              <p className="lead mb-0">
                Our expert team can develop customized formulations tailored to your specific requirements. 
                Contact us to discuss your unique chemical solution needs.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Button as={Link} to="/contact" variant="light" size="lg">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                Get Custom Quote
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <Modal show={showLightbox} onHide={closeLightbox} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedImage && (
            <div>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.name}
                className="img-fluid rounded mb-3"
              />
              <p className="lead">{selectedImage.description}</p>
              <div className="text-start">
                <h6>Key Features:</h6>
                <ul>
                  {selectedImage.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeLightbox}>
            Close
          </Button>
          <Button 
            as={Link} 
            to={`/product/${selectedImage?.id}`} 
            variant="primary"
            onClick={closeLightbox}
          >
            View Full Details
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Portfolio;