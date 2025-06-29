import React, { useState } from 'react';
import { Form, Button, Alert, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import useApi from '../hooks/useApi';
import { validateEmail } from '../utils/helpers';
import { API_ENDPOINTS } from '../utils/constants';

const NewsletterSignup = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { loading, post } = useApi();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      await post(API_ENDPOINTS.newsletter, { email });
      setSuccess(true);
      setEmail('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={className}>
      <Form onSubmit={handleSubmit}>
        {success && (
          <Alert variant="success" className="mb-3">
            Thank you for subscribing to our newsletter!
          </Alert>
        )}

        {error && (
          <Alert variant="danger" className="mb-3">
            {error}
          </Alert>
        )}

        <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faEnvelope} />
          </InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <Button 
            type="submit" 
            variant="primary"
            disabled={loading}
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default NewsletterSignup;