import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Testimonials.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

const Testimonials = () => {
  React.useEffect(() => {
    AOS.init(); 
  }, []);


  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="600">
      <Row className="w-100" data-aos="zoom-in-right" data-aos-delay="400">
        <Col xs={12} data-aos="zoom-in-right" data-aos-delay="400">
          <Card className="p-5 rounded-lg custom-card " style={{backgroundColor: '#6b46c1', borderRadius: '40px'}} data-aos="zoom-in-right" data-aos-delay="400">
            <h2 className=" text-center text-white mb-5 mt-5" data-aos="zoom-in-right" data-aos-delay="400">Testimonials</h2>
            <div className="testimonial-card  position-relative bg-white rounded-lg shadow" data-aos="zoom-in-right" data-aos-delay="400">
              <Row className="align-items-center" data-aos="zoom-in-right" data-aos-delay="400">
                <Col xs="auto" data-aos="zoom-in-right" data-aos-delay="400">
                  <img
                    src="test1.png"
                    alt="Profile picture of John Fang"
                    className="rounded-circle"
                    width="64"
                    height="64"
                    data-aos="zoom-in-right" data-aos-delay="400"
                  />
                </Col>
                <Col data-aos="zoom-in-right" data-aos-delay="400">
                  <h3 className="font-weight-bold">John Fang</h3>
                  <a href="#" className="text-primary text-decoration-none">
                    wordfang.com
                  </a>
                </Col>
              </Row>
              <p className="mt-3 text-muted" data-aos="zoom-in-right" data-aos-delay="400">
                Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                aenean nam laoreet nulla.
              </p>
              <Button
                variant="link"
                className="position-absolute left-arrow"
                aria-label="Previous testimonial"
                data-aos="zoom-in-right" data-aos-delay="400"
              >
                <i className="fas fa-chevron-left text-white"></i>
              </Button>
              <Button
                variant="link"
                className="position-absolute right-arrow"
                aria-label="Next testimonial"
                data-aos="zoom-in-right" data-aos-delay="400"
              >
                <i className="fas fa-chevron-right text-white"></i>
              </Button>
            </div>
            <div className="d-flex justify-content-center mt-3" data-aos="zoom-in-right" data-aos-delay="400">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
