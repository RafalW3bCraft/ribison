import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Innovations in Tile Adhesive Technology',
      excerpt: 'Explore the latest advancements in tile adhesive formulations and their impact on modern construction projects.',
      image: '/images/blog-tile-adhesive.jpg',
      date: '2025-01-15',
      author: 'Dr. Rajesh Patel',
      category: 'Construction',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Sustainable Chemistry for Paint Industry',
      excerpt: 'How eco-friendly chemical solutions are revolutionizing the paints and coatings industry.',
      image: '/images/blog-sustainable-paint.jpg',
      date: '2025-01-10',
      author: 'Priya Sharma',
      category: 'Sustainability',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Advanced Textile Processing Chemicals',
      excerpt: 'Understanding the role of modern chemicals in textile manufacturing and finishing processes.',
      image: '/images/blog-textile-chemicals.jpg',
      date: '2025-01-05',
      author: 'Amit Kumar',
      category: 'Textile',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Quality Control in Chemical Manufacturing',
      excerpt: 'Best practices for maintaining consistent quality standards in chemical production facilities.',
      image: '/images/blog-quality-control.jpg',
      date: '2024-12-28',
      author: 'Dr. Meera Joshi',
      category: 'Quality',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Future of Agricultural Chemicals',
      excerpt: 'Emerging trends in agricultural chemistry and their potential impact on sustainable farming.',
      image: '/images/blog-agriculture.jpg',
      date: '2024-12-20',
      author: 'Ravi Gupta',
      category: 'Agriculture',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Chemical Safety in Industrial Applications',
      excerpt: 'Essential safety protocols and best practices for handling industrial chemicals effectively.',
      image: '/images/blog-safety.jpg',
      date: '2024-12-15',
      author: 'Neha Agarwal',
      category: 'Safety',
      readTime: '9 min read'
    }
  ];

  const categories = ['All', 'Construction', 'Sustainability', 'Textile', 'Quality', 'Agriculture', 'Safety'];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section position-relative">
        <div className="hero-bg" style={{ backgroundImage: 'url(/images/blog-hero.jpg)' }}>
          <div className="hero-overlay"></div>
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={8}>
                <h1 className="hero-title text-white mb-4">Industry Insights & Updates</h1>
                <p className="hero-subtitle text-white mb-4">
                  Stay informed with the latest trends, innovations, and best practices in chemical manufacturing
                </p>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/" className="text-white">Home</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Blog</li>
                  </ol>
                </nav>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">Knowledge Hub</span>
            <h2 className="display-6 fw-bold mb-3">Latest Articles & Insights</h2>
            <p className="lead">Expert perspectives on chemical industry trends and innovations</p>
          </div>

          {/* Category Filter */}
          <div className="text-center mb-5">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant="outline-primary"
                  size="sm"
                  className="rounded-pill"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <Row className="mb-5">
            <Col lg={8}>
              <Card className="border-0 shadow-lg">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <Badge bg="primary" className="fs-6">Featured</Badge>
                  </div>
                </div>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <Badge bg="light" text="dark" className="me-2">{blogPosts[0].category}</Badge>
                    <small className="text-muted">
                      <FontAwesomeIcon icon={faCalendar} className="me-1" />
                      {formatDate(blogPosts[0].date)}
                    </small>
                    <small className="text-muted ms-3">
                      <FontAwesomeIcon icon={faUser} className="me-1" />
                      {blogPosts[0].author}
                    </small>
                  </div>
                  <Card.Title as="h3" className="mb-3">{blogPosts[0].title}</Card.Title>
                  <Card.Text className="lead">{blogPosts[0].excerpt}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted small">{blogPosts[0].readTime}</span>
                    <Button variant="primary">
                      Read More <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <div className="sticky-top" style={{ top: '100px' }}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title as="h5">Newsletter Signup</Card.Title>
                    <Card.Text>Stay updated with our latest articles and industry insights.</Card.Text>
                    <div className="d-grid">
                      <Button variant="primary">Subscribe Now</Button>
                    </div>
                  </Card.Body>
                </Card>
                
                <Card>
                  <Card.Body>
                    <Card.Title as="h5">Popular Categories</Card.Title>
                    <div className="d-flex flex-column gap-2">
                      {categories.slice(1).map(category => (
                        <Button key={category} variant="outline-secondary" size="sm" className="text-start">
                          {category}
                        </Button>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>

          {/* Blog Grid */}
          <Row>
            {blogPosts.slice(1).map(post => (
              <Col lg={4} md={6} key={post.id} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img 
                    variant="top" 
                    src={post.image} 
                    alt={post.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-2">
                      <Badge bg="light" text="dark" className="me-2">{post.category}</Badge>
                      <small className="text-muted">{post.readTime}</small>
                    </div>
                    <Card.Title as="h6" className="mb-2">{post.title}</Card.Title>
                    <Card.Text className="flex-grow-1 small">{post.excerpt}</Card.Text>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <small className="text-muted">
                          <FontAwesomeIcon icon={faCalendar} className="me-1" />
                          {formatDate(post.date)}
                        </small>
                        <small className="text-muted">
                          <FontAwesomeIcon icon={faUser} className="me-1" />
                          {post.author}
                        </small>
                      </div>
                      <Button variant="outline-primary" size="sm" className="w-100">
                        Read Article
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Load More */}
          <div className="text-center mt-5">
            <Button variant="primary" size="lg">
              Load More Articles
            </Button>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h3 className="mb-3">Want to Contribute?</h3>
              <p className="lead mb-0">
                Share your expertise with our community. We welcome industry professionals 
                to contribute articles and insights about chemical innovations and best practices.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Button variant="primary" size="lg">
                Submit Article
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Blog;