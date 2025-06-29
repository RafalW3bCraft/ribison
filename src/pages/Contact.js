import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock, 
  faGlobe, 
  faShippingFast,
  faPaperPlane,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { useNotification } from '../contexts/NotificationContext';

const Contact = () => {
  const { showNotification } = useNotification();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product_interest: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        showNotification(result.message, 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          product_interest: '',
          message: '',
          newsletter: false
        });
      } else {
        showNotification(result.message, 'error');
      }
    } catch (error) {
      showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: 'Our Location',
      content: '75, Star Plaza Complex, 27NH\nWankaner, Morbi, India-363621'
    },
    {
      icon: faPhone,
      title: 'Phone Number',
      content: '+91 7777942233',
      link: 'tel:+917777942233'
    },
    {
      icon: faEnvelope,
      title: 'Email Address',
      content: 'info@ribison.com',
      link: 'mailto:info@ribison.com'
    },
    {
      icon: faClock,
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed'
    },
    {
      icon: faGlobe,
      title: 'Website',
      content: 'www.ribison.com\nFollow us on social media for updates\nand industry insights'
    },
    {
      icon: faShippingFast,
      title: 'Shipping & Delivery',
      content: 'Pan-India delivery available\nExpress shipping options\nBulk order logistics'
    }
  ];

  const faqs = [
    {
      question: 'What industries do you serve?',
      answer: 'We serve multiple industries including construction, paints & coatings, textiles, ceramics, agriculture, paper mills, cosmetics, and specialty chemical applications. Our diverse portfolio allows us to provide customized solutions for various industrial needs.'
    },
    {
      question: 'Do you provide custom formulations?',
      answer: 'Yes, we specialize in developing custom chemical formulations tailored to specific customer requirements. Our team of expert chemists works closely with clients to create solutions that meet their unique specifications and performance criteria.'
    },
    {
      question: 'What is your minimum order quantity?',
      answer: 'Minimum order quantities vary by product and application. We work with businesses of all sizes, from small enterprises to large industrial operations. Contact us to discuss your specific requirements and we\'ll provide flexible solutions.'
    },
    {
      question: 'Do you offer technical support?',
      answer: 'Absolutely! Our technical team provides comprehensive support including product selection guidance, application assistance, troubleshooting, and ongoing consultation to ensure optimal performance of our chemical solutions.'
    },
    {
      question: 'What quality certifications do you have?',
      answer: 'We maintain strict quality standards and hold relevant industry certifications. Our manufacturing processes follow international quality management systems to ensure consistent product excellence and regulatory compliance.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section position-relative">
        <div className="hero-bg" style={{ backgroundImage: 'url(/images/contact.jpg)' }}>
          <div className="hero-overlay"></div>
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={8}>
                <h1 className="hero-title text-white mb-4">Contact Us</h1>
                <p className="hero-subtitle text-white mb-4">
                  Get in touch with our experts for personalized chemical solutions
                </p>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/" className="text-white">Home</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Contact</li>
                  </ol>
                </nav>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">Get In Touch</span>
            <h2 className="display-6 fw-bold mb-3">Contact Information</h2>
            <p className="lead">We're here to help you find the perfect chemical solution for your needs</p>
          </div>
          
          <Row className="g-4 mb-5">
            {contactInfo.map((info, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="contact-info-card h-100">
                  <Card.Body className="text-center">
                    <div className="icon mb-3">
                      <FontAwesomeIcon icon={info.icon} />
                    </div>
                    <Card.Title as="h5">{info.title}</Card.Title>
                    <Card.Text>
                      {info.link ? (
                        <a href={info.link} className="text-decoration-none">
                          {info.content}
                        </a>
                      ) : (
                        info.content.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < info.content.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))
                      )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="contact-form">
                <Card.Body>
                  <div className="text-center mb-4">
                    <h3>Send Us a Message</h3>
                    <p className="text-muted">Fill out the form below and we'll get back to you as soon as possible</p>
                  </div>
                  
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Company Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Label>Product Interest</Form.Label>
                          <Form.Select
                            name="product_interest"
                            value={formData.product_interest}
                            onChange={handleInputChange}
                          >
                            <option value="">Select a product category</option>
                            <option value="construction">Construction Chemicals</option>
                            <option value="tile-adhesives">Tile Adhesives</option>
                            <option value="paints">Paint Chemicals</option>
                            <option value="textile">Textile Chemicals</option>
                            <option value="ceramic">Ceramic Chemicals</option>
                            <option value="agriculture">Agriculture Chemicals</option>
                            <option value="specialty">Specialty Chemicals</option>
                            <option value="other">Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      
                      <Col xs={12}>
                        <Form.Group className="mb-3">
                          <Form.Label>Message *</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Please describe your requirements, questions, or how we can help you..."
                            required
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col xs={12}>
                        <Form.Group className="mb-4">
                          <Form.Check
                            type="checkbox"
                            name="newsletter"
                            checked={formData.newsletter}
                            onChange={handleInputChange}
                            label="Subscribe to our newsletter for industry updates and product news"
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col xs={12} className="text-center">
                        <Button 
                          type="submit" 
                          variant="primary" 
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">FAQ</span>
            <h2 className="display-6 fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="lead">Quick answers to common questions about our products and services</p>
          </div>
          
          <Row>
            <Col lg={8} className="mx-auto">
              <Accordion defaultActiveKey="0">
                {faqs.map((faq, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>{faq.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;