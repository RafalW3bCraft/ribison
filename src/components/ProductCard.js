import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, className = '' }) => {
  return (
    <Card className={`h-100 shadow-sm hover-shadow ${className}`}>
      <Card.Img 
        variant="top" 
        src={product.image} 
        alt={product.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <div className="mb-2">
          <Badge bg="secondary" className="mb-2">
            {product.category}
          </Badge>
        </div>
        <Card.Title className="h5">{product.name}</Card.Title>
        <Card.Text className="text-muted flex-grow-1">
          {product.description}
        </Card.Text>
        {product.features && (
          <div className="mb-3">
            {product.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} bg="light" text="dark" className="me-1 mb-1">
                {feature}
              </Badge>
            ))}
          </div>
        )}
        <LinkContainer to={`/product/${product.id}`}>
          <Button variant="primary" className="mt-auto">
            <FontAwesomeIcon icon={faEye} className="me-2" />
            View Details
          </Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;