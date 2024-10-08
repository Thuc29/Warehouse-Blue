import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function HighLevel() {
  return (
    <Container className='my-5'  data-aos="zoom-in"  data-aos-delay="400">
     <Row className='mt-5 mx-auto w-75 h-100 mb-5' style={{ backgroundColor: 'rgb(255 232 244)', borderRadius: '60px'}}>
          <Col md={5} className='mt-5 mb-5'data-aos="zoom-in-left"  data-aos-delay="400">
               <img src='highlevel.png' style={{width: '100%', height: '100%'}}/>
          </Col>
          <Col className='pt-5 mx-auto mt-5 mb-5' data-aos="zoom-in-right" data-aos-offset="100" data-aos-delay="400">
               <h1 className='text-start fw-bold'>We are a high-level data storage bank</h1>
               <p className='text-start mt-5 mb-5 text-muted' style={{marginRight: '50px'}}> The place to store various data that you can access at any time through the internet and where you can carry it. This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse</p>
          </Col>
          </Row>         
    </Container>
  )
}

export default HighLevel