import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="py-5 bg-white">
      <Container>
        <Row className='justify-content-end'>
          <Col md={3} className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="d-flex align-items-center">
              <img
                src="logo.png"
                alt="logo"
                style={{ width: '40px', height: '40px', marginRight: '10px' }}
              />
              <h5 className="mb-0">DataWarehouse</h5>
            </div>
            <p className="mt-3">
              Warehouse Society, 234 <br />
              Bahagia Ave Street PRBW 29281
            </p>
            <p>
              info@warehouse.project <br />
              1-232-3434 (Main)
            </p>
          </Col>
          <Col md={2} className="mb-4" data-aos="fade-up" data-aos-delay="300">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>Profile</li>
              <li>Features</li>
              <li>Careers</li>
              <li>DW News</li>
            </ul>
          </Col>
          <Col md={2} className="mb-4" data-aos="fade-up" data-aos-delay="400">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li>Support</li>
              <li>Sign up</li>
              <li>Guide</li>
              <li>Reports</li>
              <li>Q&A</li>
            </ul>
          </Col>
          <Col md={3} className="mb-4" data-aos="fade-up" data-aos-delay="500">
            <h5>Social Media</h5>
            <div className="d-flex">
              <FaFacebook size={30} className="me-3" />
              <FaTwitter size={30} className="me-3" />
              <FaLinkedin size={30} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p className="text-muted">
              &copy; DataWarehouse™, 2020. All rights reserved. <br />
              Company Registration Number: 21479524.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
