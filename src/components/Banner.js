import {Button, Row, Col, Container, Card} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import{ Link } from 'react-router-dom'
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';


function App() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <MDBRow>
       <MDBCol md='6' className=' mt-3 text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-4 display-3 fw-bold ls-tight px-3">Career Road Map</h1>
           <h4 className=" fw-bold ls-tight px-3">
           About <br />
          </h4>
          <p className='px-3' style={{color: 'hsl(28, 90%, 50%)'}}>
           I previously worked at Accenture in the Philippines as Platform Experience Associate for 
more than 2 years then took certification of intensive training in Website Development at Zuitt 
Coding Bootcamp to career shift covering MERN stack. I am seeking to fully nurture my 
foundation in software development to a full-time job role and willing to work as a Frontend 
Developer. I am committed and eager to learn whatever the industry has to offer
          </p>
          <Link to="/entries">
     				 <Button id="submitBtn" className="mt-3" disabled>Let's Go</Button>
 				</Link>
        </MDBCol>
        <MDBCol md='6' className="mt-5">
          <MDBCard className='my-5'>
            <MDBCardBody className='banner p-3'>
                <div className="banner-bg"/>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>	
    </MDBContainer>

  );
}

export default App;