import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = ({ size = 'md', variant = 'primary', text = 'Loading...' }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-4">
      <Spinner animation="border" variant={variant} size={size} />
      {text && <span className="mt-2">{text}</span>}
    </div>
  );
};

export default LoadingSpinner;