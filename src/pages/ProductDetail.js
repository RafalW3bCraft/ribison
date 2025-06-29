import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Table, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faDownload, faCheckCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();

  const productData = {
    'ribi-gold': {
      name: 'Ribi Gold',
      subtitle: 'Premium Tile Adhesive',
      description: 'Ribi Gold is a high-performance, polymer-modified tile adhesive designed for heavy-duty applications. It provides superior bonding strength and water resistance, making it ideal for both interior and exterior installations.',
      image: '/images/ribi-gold.jpg',
      category: 'Construction Chemicals',
      applications: [
        'Ceramic and vitrified tile installation',
        'Natural stone mounting',
        'Large format tile applications',
        'Swimming pool and wet area tiling',
        'Exterior facade installations'
      ],
      features: [
        'Superior bonding strength up to 1.5 MPa',
        'Water and weather resistant',
        'Extended open time for easy application',
        'Non-slip formulation',
        'Suitable for both walls and floors'
      ],
      specifications: {
        'Bond Strength': '≥ 1.5 MPa',
        'Open Time': '20-30 minutes',
        'Setting Time': '24 hours',
        'Coverage': '1.2-1.5 kg/m² per mm thickness',
        'Temperature Range': '5°C to 35°C',
        'Package Size': '25 kg, 50 kg bags'
      },
      benefits: [
        'Reduces installation time',
        'Minimizes tile breakage',
        'Long-lasting performance',
        'Cost-effective solution',
        'Easy mixing and application'
      ]
    },
    'ribi-silver': {
      name: 'Ribi Silver',
      subtitle: 'High-Performance Construction Chemical',
      description: 'Ribi Silver is a versatile construction chemical solution designed for structural applications. It offers excellent adhesion properties and durability for various construction needs.',
      image: '/images/ribi-silver.jpg',
      category: 'Construction Chemicals',
      applications: [
        'Structural bonding applications',
        'Concrete repair and strengthening',
        'Joint sealing and waterproofing',
        'Industrial flooring systems',
        'Bridge and infrastructure projects'
      ],
      features: [
        'Fast setting properties',
        'Weather and chemical resistant',
        'Non-toxic formulation',
        'Cost-effective performance',
        'Easy application process'
      ],
      specifications: {
        'Compressive Strength': '≥ 45 MPa',
        'Setting Time': '4-6 hours',
        'Working Time': '45 minutes',
        'Temperature Range': '10°C to 40°C',
        'Density': '1.8 kg/L',
        'Package Size': '20 kg, 40 kg containers'
      },
      benefits: [
        'Rapid construction progress',
        'Enhanced structural integrity',
        'Reduced maintenance costs',
        'Versatile application methods',
        'Reliable performance'
      ]
    },
    'ribibond': {
      name: 'Ribibond',
      subtitle: 'Advanced Bonding Agent',
      description: 'Ribibond is a multi-purpose bonding agent designed for various industrial applications. It provides exceptional adhesion across different substrates and environmental conditions.',
      image: '/images/ribibond.jpg',
      category: 'Specialty Chemicals',
      applications: [
        'Multi-substrate bonding',
        'Industrial assembly operations',
        'Automotive component bonding',
        'Electronics manufacturing',
        'Aerospace applications'
      ],
      features: [
        'Multi-purpose bonding capability',
        'Strong adhesion to various materials',
        'Chemical and temperature resistant',
        'Long-lasting durability',
        'Precision application control'
      ],
      specifications: {
        'Shear Strength': '≥ 25 MPa',
        'Temperature Resistance': '-40°C to +150°C',
        'Cure Time': '24-48 hours',
        'Viscosity': '5000-8000 cP',
        'Shelf Life': '12 months',
        'Package Size': '1 kg, 5 kg, 25 kg containers'
      },
      benefits: [
        'Versatile bonding solution',
        'Reduced assembly time',
        'Enhanced product reliability',
        'Cost-effective manufacturing',
        'Superior environmental resistance'
      ]
    }
  };

  const product = productData[productId];

  if (!product) {
    return (
      <Container className="py-5">
        <Alert variant="warning" className="text-center">
          <h4>Product Not Found</h4>
          <p>The requested product could not be found.</p>
          <Button as={Link} to="/portfolio" variant="primary">
            View All Products
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section position-relative">
        <div className="hero-bg" style={{ backgroundImage: `url(${product.image})` }}>
          <div className="hero-overlay"></div>
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={8}>
                <Button 
                  as={Link} 
                  to="/portfolio" 
                  variant="outline-light" 
                  className="mb-3"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                  Back to Portfolio
                </Button>
                <h1 className="hero-title text-white mb-2">{product.name}</h1>
                <p className="hero-subtitle text-white mb-4">{product.subtitle}</p>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/" className="text-white">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/portfolio" className="text-white">Portfolio</a>
                    </li>
                    <li className="breadcrumb-item active text-white">{product.name}</li>
                  </ol>
                </nav>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="mb-5">
                <span className="text-primary fw-semibold">{product.category}</span>
                <h2 className="display-6 fw-bold mb-3">Product Overview</h2>
                <p className="lead">{product.description}</p>
              </div>

              {/* Key Features */}
              <div className="mb-5">
                <h3 className="mb-4">Key Features</h3>
                <Row>
                  {product.features.map((feature, index) => (
                    <Col md={6} key={index} className="mb-3">
                      <div className="d-flex align-items-start">
                        <FontAwesomeIcon 
                          icon={faCheckCircle} 
                          className="text-success me-3 mt-1" 
                        />
                        <span>{feature}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Applications */}
              <div className="mb-5">
                <h3 className="mb-4">Applications</h3>
                <Row>
                  {product.applications.map((application, index) => (
                    <Col md={6} key={index} className="mb-3">
                      <Card className="h-100 border-0 bg-light">
                        <Card.Body className="d-flex align-items-center">
                          <FontAwesomeIcon 
                            icon={faCheckCircle} 
                            className="text-primary me-3" 
                          />
                          <span className="small">{application}</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Technical Specifications */}
              <div className="mb-5">
                <h3 className="mb-4">Technical Specifications</h3>
                <Card>
                  <Card.Body>
                    <Table responsive className="mb-0">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <tr key={key}>
                            <td className="fw-semibold">{key}</td>
                            <td>{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </div>

              {/* Benefits */}
              <div className="mb-5">
                <h3 className="mb-4">Product Benefits</h3>
                <div className="bg-light p-4 rounded">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="d-flex align-items-center mb-2">
                      <FontAwesomeIcon 
                        icon={faCheckCircle} 
                        className="text-success me-3" 
                      />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            {/* Sidebar */}
            <Col lg={4}>
              <div className="sticky-top" style={{ top: '100px' }}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={product.image} alt={product.name} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="small text-muted">{product.subtitle}</Card.Text>
                    <div className="d-grid gap-2">
                      <Button as={Link} to="/contact" variant="primary">
                        <FontAwesomeIcon icon={faPhone} className="me-2" />
                        Request Quote
                      </Button>
                      <Button variant="outline-primary">
                        <FontAwesomeIcon icon={faDownload} className="me-2" />
                        Download Datasheet
                      </Button>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title as="h6">Need Technical Support?</Card.Title>
                    <Card.Text className="small">
                      Our expert team is ready to help you select the right 
                      chemical solution for your specific application.
                    </Card.Text>
                    <Button as={Link} to="/contact" variant="outline-primary" size="sm">
                      Contact Experts
                    </Button>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>
                    <Card.Title as="h6">Related Products</Card.Title>
                    <div className="d-flex flex-column gap-2">
                      {Object.entries(productData)
                        .filter(([id]) => id !== productId)
                        .slice(0, 2)
                        .map(([id, relatedProduct]) => (
                          <Button
                            key={id}
                            as={Link}
                            to={`/product/${id}`}
                            variant="outline-secondary"
                            size="sm"
                            className="text-start"
                          >
                            {relatedProduct.name}
                          </Button>
                        ))}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h3 className="mb-3">Interested in {product.name}?</h3>
              <p className="lead mb-0">
                Contact our technical experts to discuss your specific requirements 
                and get personalized recommendations for your project.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Button as={Link} to="/contact" variant="light" size="lg">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                Get In Touch
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProductDetail;