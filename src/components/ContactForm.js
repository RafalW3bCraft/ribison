import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import useApi from '../hooks/useApi';
import { validateEmail, validatePhone } from '../utils/helpers';
import { API_ENDPOINTS } from '../utils/constants';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product_interest: '',
    message: '',
    newsletter: false
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const { loading, post } = useApi();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    try {
      await post(API_ENDPOINTS.contact, formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product_interest: '',
        message: '',
        newsletter: false
      });
    } catch (error) {
      setErrors({ submit: error.message });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {success && (
        <Alert variant="success" className="mb-4">
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </Alert>
      )}

      {errors.submit && (
        <Alert variant="danger" className="mb-4">
          {errors.submit}
        </Alert>
      )}

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Name *</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
              placeholder="Your full name"
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              placeholder="your.email@example.com"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
              placeholder="+91-123-456-7890"
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Product Interest</Form.Label>
        <Form.Select
          name="product_interest"
          value={formData.product_interest}
          onChange={handleChange}
        >
          <option value="">Select a product category</option>
          <option value="agriculture">Agriculture Chemicals</option>
          <option value="construction">Construction Chemicals</option>
          <option value="paints">Paints & Coatings</option>
          <option value="ceramic">Ceramic & Tiles</option>
          <option value="textile">Textile Chemicals</option>
          <option value="specialty">Specialty Chemicals</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message *</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          isInvalid={!!errors.message}
          placeholder="Tell us about your requirements..."
        />
        <Form.Control.Feedback type="invalid">
          {errors.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Check
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
          label="Subscribe to our newsletter for updates and industry insights"
        />
      </Form.Group>

      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        disabled={loading}
        className="w-100"
      >
        {loading ? (
          'Sending...'
        ) : (
          <>
            <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
            Send Message
          </>
        )}
      </Button>
    </Form>
  );
};

export default ContactForm;