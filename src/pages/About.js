import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye, faHeart, faAward, faUsers, faGlobe } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const values = [
    {
      icon: faEye,
      title: 'Innovation',
      description: 'Continuously advancing chemical technology to meet evolving industry needs'
    },
    {
      icon: faBullseye,
      title: 'Quality',
      description: 'Uncompromising commitment to excellence in every product we manufacture'
    },
    {
      icon: faHeart,
      title: 'Sustainability',
      description: 'Environmental responsibility through eco-friendly manufacturing processes'
    },
    {
      icon: faUsers,
      title: 'Partnership',
      description: 'Building long-term relationships with customers, suppliers, and communities'
    }
  ];

  const achievements = [
    {
      icon: faAward,
      number: '15+',
      title: 'Years of Excellence',
      description: 'Serving industries with quality chemical solutions'
    },
    {
      icon: faUsers,
      number: '500+',
      title: 'Satisfied Clients',
      description: 'Trusted by businesses across multiple industries'
    },
    {
      icon: faGlobe,
      number: '8+',
      title: 'Industry Sectors',
      description: 'Comprehensive coverage from construction to agriculture'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section position-relative">
        <div className="hero-bg" style={{ backgroundImage: 'url(/images/about-hero.jpg)' }}>
          <div className="hero-overlay"></div>
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={8}>
                <h1 className="hero-title text-white mb-4">About Ribison Chemicals</h1>
                <p className="hero-subtitle text-white mb-4">
                  Leading the chemical industry with innovation, quality, and sustainable solutions
                </p>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/" className="text-white">Home</a>
                    </li>
                    <li className="breadcrumb-item active text-white">About Us</li>
                  </ol>
                </nav>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <span className="text-primary fw-semibold">Our Story</span>
              <h2 className="display-6 fw-bold mb-4">Building Excellence Since Day One</h2>
              <p className="lead mb-4">
                Founded with a vision to revolutionize the chemical industry, Ribison Chemicals 
                has grown from a small manufacturing unit to a leading provider of premium chemical solutions.
              </p>
              <p className="mb-4">
                Our journey began with a simple commitment: to deliver high-quality chemical products 
                that meet the evolving needs of modern industries. Today, we serve clients across 
                construction, paints & coatings, textiles, agriculture, and many other sectors.
              </p>
              <p>
                Located in Wankaner, Morbi, Gujarat, our state-of-the-art manufacturing facility 
                combines traditional expertise with cutting-edge technology to produce chemicals 
                that consistently exceed industry standards.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src="/images/about-story.jpg" 
                alt="Ribison Chemicals Manufacturing" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <Card className="h-100 text-center p-4">
                <Card.Body>
                  <FontAwesomeIcon icon={faBullseye} size="3x" className="text-primary mb-3" />
                  <Card.Title as="h3">Our Mission</Card.Title>
                  <Card.Text className="lead">
                    To manufacture and supply premium chemical solutions that empower industries 
                    to achieve excellence while maintaining the highest standards of quality, 
                    safety, and environmental responsibility.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="h-100 text-center p-4">
                <Card.Body>
                  <FontAwesomeIcon icon={faEye} size="3x" className="text-primary mb-3" />
                  <Card.Title as="h3">Our Vision</Card.Title>
                  <Card.Text className="lead">
                    To be the most trusted and innovative chemical solutions provider globally, 
                    recognized for our commitment to quality, customer satisfaction, and 
                    sustainable business practices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">Our Values</span>
            <h2 className="display-6 fw-bold mb-3">What Drives Us</h2>
            <p className="lead">The principles that guide our every decision and action</p>
          </div>
          
          <Row>
            {values.map((value, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <div className="text-center">
                  <div className="mb-3">
                    <FontAwesomeIcon 
                      icon={value.icon} 
                      size="3x" 
                      className="text-primary"
                    />
                  </div>
                  <h5>{value.title}</h5>
                  <p className="text-muted">{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Achievements */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Our Achievements</h2>
            <p className="lead">Milestones that reflect our commitment to excellence</p>
          </div>
          
          <Row>
            {achievements.map((achievement, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <div className="text-center">
                  <FontAwesomeIcon 
                    icon={achievement.icon} 
                    size="3x" 
                    className="mb-3"
                  />
                  <h2 className="display-4 fw-bold mb-2">{achievement.number}</h2>
                  <h5>{achievement.title}</h5>
                  <p>{achievement.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Quality Commitment */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <img 
                src="/images/quality-lab.jpg" 
                alt="Quality Control Laboratory" 
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col lg={6}>
              <span className="text-primary fw-semibold">Quality Assurance</span>
              <h2 className="display-6 fw-bold mb-4">Uncompromising Quality Standards</h2>
              <p className="lead mb-4">
                Our commitment to quality begins with raw material selection and continues 
                through every stage of production, testing, and delivery.
              </p>
              
              <div className="mb-3">
                <h5>Advanced Testing Facilities</h5>
                <p>State-of-the-art laboratory equipment ensures consistent product quality and performance.</p>
              </div>
              
              <div className="mb-3">
                <h5>Certified Processes</h5>
                <p>ISO-compliant manufacturing processes and quality management systems.</p>
              </div>
              
              <div className="mb-3">
                <h5>Continuous Improvement</h5>
                <p>Regular process optimization and technology upgrades to maintain excellence.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold">Our Team</span>
            <h2 className="display-6 fw-bold mb-3">Expert Professionals</h2>
            <p className="lead">
              Our success is built on the expertise and dedication of our talented team of 
              chemists, engineers, and industry professionals who bring years of experience 
              and innovation to every project.
            </p>
          </div>
          
          <Row className="align-items-center">
            <Col lg={6}>
              <h4 className="mb-3">Research & Development</h4>
              <p className="mb-4">
                Our R&D team consists of experienced chemists and engineers who continuously 
                work on developing new formulations and improving existing products to meet 
                evolving market demands.
              </p>
              
              <h4 className="mb-3">Production Excellence</h4>
              <p className="mb-4">
                Skilled production professionals ensure consistent quality and efficient 
                manufacturing processes while maintaining the highest safety standards.
              </p>
              
              <h4 className="mb-3">Customer Support</h4>
              <p>
                Dedicated customer service and technical support teams provide expert 
                guidance and assistance to ensure optimal product performance for our clients.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src="/images/team-work.jpg" 
                alt="Ribison Chemicals Team" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;