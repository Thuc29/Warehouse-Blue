import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css'; 
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 


const Hero = () => {
  React.useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <Container className="hero-container mt-5 " data-aos="zoom-in" data-aos-offset="100" data-aos-delay="400">
      <Row className="align-items-center hero-content">
        {/* Text Section */}
        <Col xs={12} lg={6} className="hero-text text-start text-lg-left" data-aos="zoom-in-right" data-aos-delay="400">
          <h1 className="hero-title mb-3" data-aos="zoom-in-right" data-aos-delay="400">
            Save your data storage here.
          </h1>
          <p className="hero-description" data-aos="zoom-in-right" data-aos-delay="400">
            Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.
          </p>
          <Button variant="" className="bton" data-aos="zoom-in-right" data-aos-delay="400">Learn more</Button>
        </Col>

        {/* Image Section */}
        <Col xs={12} lg={6} className="hero-image" data-aos="zoom-in-right" data-aos-delay="400">
          <img src="pic1.png" alt="Hero" className="img" data-aos="zoom-in-right" data-aos-delay="400"/>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
