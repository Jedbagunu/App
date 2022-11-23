import {Button, Row, Col, Container, Card} from 'react-bootstrap'
import{ Link } from 'react-router-dom'
import React from 'react';




function Education() {
  return (
    <Container fluid>   
        <Row>
            <Col md='6' className=' text-center text-md-start d-flex flex-column justify-content-center'>
                <h4 className="fw-bold">Education</h4>
                <subtitle className='px-3 fw-bold' style={{color: 'hsl(28, 90%, 50%)'}}>
                Bachelor of Science in Computer Engineering
                </subtitle>
                 <subtitle className='px-3' style={{}}>
                Isabela State University, Cabagan
                </subtitle>
                 <subtitle className='px-3 mb-4' style={{}}>
                2014-2019
                </subtitle>

                <subtitle className='px-3 fw-bold' style={{color: 'hsl(28, 90%, 50%)'}}>
                Website Development | Fullstack (MERN)
                </subtitle>
                <subtitle className='px-3' style={{}}>
                Zuitt Coding Bootcamp, Philippines
                </subtitle>
                 <subtitle className='px-3' style={{}}>
                Metro Manila, Philippines
                </subtitle>
                 <subtitle className='px-3' style={{}}>
                September - October 2022
                </subtitle>
                
            </Col>

        <Col md='6' className="mt-5">
          <Card className='my-5'>
            <Card.Body className='banner p-3'>
                <div className="educ-bg"/>
            </Card.Body>
          </Card>
        </Col>
        </Row>
    </Container>

  );
}

export default Education;