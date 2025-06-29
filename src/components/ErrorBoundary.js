import React from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faHome } from '@fortawesome/free-solid-svg-icons';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container className="my-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div className="text-center">
                <FontAwesomeIcon 
                  icon={faExclamationTriangle} 
                  size="4x" 
                  className="text-warning mb-4" 
                />
                <h1 className="h2 mb-3">Oops! Something went wrong</h1>
                <Alert variant="danger">
                  <Alert.Heading>Application Error</Alert.Heading>
                  <p>
                    We're sorry, but something unexpected happened. Please try refreshing 
                    the page or contact our support team if the problem persists.
                  </p>
                </Alert>
                
                {process.env.NODE_ENV === 'development' && this.state.error && (
                  <div className="mt-4">
                    <h5>Error Details (Development Mode)</h5>
                    <pre className="text-start bg-light p-3 rounded">
                      {this.state.error.toString()}
                    </pre>
                  </div>
                )}
                
                <div className="mt-4">
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={() => window.location.href = '/'}
                  >
                    <FontAwesomeIcon icon={faHome} className="me-2" />
                    Return to Homepage
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    size="lg"
                    className="ms-3"
                    onClick={() => window.location.reload()}
                  >
                    Refresh Page
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;