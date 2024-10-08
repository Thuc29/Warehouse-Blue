import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BiRightArrowAlt } from 'react-icons/bi';  // Import the arrow icon
import './Features.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

const Features = () => {
  React.useEffect(() => {
    AOS.init(); 
  }, []);


  return (
    <Container className="my-5 m-5" data-aos="zoom-in" data-aos-offset="100" data-aos-delay="400">
      <h1 className="text-center" data-aos="zoom-in-right" data-aos-delay="400">Features</h1>
      <p className='text-center mt-5 mx-auto w-50' data-aos="zoom-in-right" data-aos-delay="400"> Some of the features and advantages that we provide for those of you who store data in this Data Warehouses</p>
      <Row className="m-5">
        <Col md={6} className='mt-5 '>
        <Container className="feature-card" data-aos="zoom-in" data-aos-offset="100" data-aos-delay="400">    
            <img src="bgSearchData.png"
        alt="Background"
        className="background-image d-none w-75 d-xl-block"
      />
      <Row className="d-flex align-items-center">
        <Col xs={12} xl={4} className="image" data-aos="zoom-in-right" data-aos-delay="400">
          <img src="seachData.png" alt="Feature" style={{marginLeft: '-3.5rem'}}/>
        </Col>
        <Col xs={12} xl={8} className="content-container ">
          <h3>Search Data</h3>
          <p className='text-muted w-75'>Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
          <div className="learn-more">
            <a href="#" className='text-decoration-none text-black'>Learn more</a>
            <BiRightArrowAlt className="icon" />
          </div>
        </Col>
      </Row>
    </Container>
        </Col>
        <Col md={6} className='mt-5 '>
        <Container className="feature-card" data-aos="zoom-in" data-aos-offset="100" data-aos-delay="400">    
            <img src="bg24hours.png"
        alt="Background"
        className="background-image d-none w-75 d-xl-block"
      />
      <Row className="d-flex align-items-center">
        <Col xs={12} xl={4} className="image" data-aos="zoom-in-right" data-aos-delay="400">
          <img src="24hours.png" alt="Feature" style={{marginLeft: '-3.5rem'}}/>
        </Col>
        <Col xs={12} xl={8} className="content-container ">
          <h3>24 Hours Access</h3>
          <p className='text-muted w-75'>Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent..</p>
          <div className="learn-more">
            <a href="#" className='text-decoration-none text-black'>Learn more</a>
            <BiRightArrowAlt className="icon" />
          </div>
        </Col>
      </Row>
    </Container>
        </Col>
        <Col md={6} className='mt-5 '>
        <Container className="feature-card" data-aos="zoom-in" data-aos-offset="100" data-aos-delay="400">    
            <img src="bgPrintOut.png"
        alt="Background"
        className="background-image d-none w-75 d-xl-block"
      />
      <Row className="d-flex align-items-center">
        <Col xs={12} xl={4} className="image" data-aos="zoom-in-right" data-aos-delay="400">
          <img src="printOut.png" alt="Feature" style={{marginLeft: '-3.5rem'}}/>
        </Col>
        <Col xs={12} xl={8} className="content-container ">
          <h3>Print Out</h3>
          <p className='text-muted w-75'>Print out service gives you convenience if someday you need print data, just edit it all and just print it.</p>
          <div className="learn-more">
            <a href="#" className='text-decoration-none text-black'>Learn more</a>
            <BiRightArrowAlt className="icon" />
          </div>
        </Col>
      </Row>
    </Container>
        </Col>
        <Col md={6} className='mt-5 '>
        <Container className="feature-card" data-aos="zoom-in" data-aos-offset="100" data-aos-delay="400">    
            <img src="bgSecurityCode.png"
        alt="Background"
        className="background-image d-none w-75 d-xl-block"
      />
      <Row className="d-flex align-items-center">
        <Col xs={12} xl={4} className="image" data-aos="zoom-in-right" data-aos-delay="400">
          <img src="securityCode.png" alt="Feature" style={{marginLeft: '-3.5rem'}}/>
        </Col>
        <Col xs={12} xl={8} className="content-container ">
          <h3>Security Code </h3>
          <p className='text-muted w-75'>Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password than you created, so only you can open the file.</p>
          <div className="learn-more">
            <a href="#" className='text-decoration-none text-black'>Learn more</a>
            <BiRightArrowAlt className="icon" />
          </div>
        </Col>
      </Row>
    </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
