import {Button, Row, Col, Container, Card} from 'react-bootstrap'
import{ Link } from 'react-router-dom'
import React from 'react';




function Experience() {
  return (
    <Container fluid>   
        <Row>
            <Col md='6' className=' text-center text-md-start d-flex flex-column justify-content-center'>
                <h4 className="fw-bold">Experience</h4>
                <subtitle className='px-3 fw-bold' style={{color: 'hsl(28, 90%, 50%)'}}>
                Zuitt - Coding Bootcamp
                </subtitle>
                 <subtitle className='px-3' style={{}}>
                Website Development | Fullstack (MERN)
                </subtitle>
                 <subtitle className='px-3' style={{}}>
                Two-month intensive training in Website Development covering MERN stack
                </subtitle>
                 <subtitle className='px-3 mb-4' style={{}}>
                September 2022 - October 2022 (2 months)
                </subtitle>
               
             
                 <subtitle className='px-3 fw-bold' style={{color: 'hsl(28, 90%, 50%)'}}>
                Accenture Philippines
                </subtitle>
                 <subtitle className='px-3' style={{}}>
                Platform Experience Associate
                </subtitle>
                 <subtitle className='px-3 mb-4' style={{}}>
                November 2019 – May 2022 (2yrs 8months)
                </subtitle>
                
                <Link to="/myentries">
                    <Button id="submitBtn" className="mt-3" disabled>Check My Certificates</Button>
                </Link>
            </Col>
            <Col md='6' className="mt-5">
          <Card className='my-5'>
            <Card.Body className='banner p-3'>
                <div className="exp-bg"/>
            </Card.Body>
          </Card>
        </Col>
        </Row>
    </Container>

  );
}

export default Experience;