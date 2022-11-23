import {Button, Row, Col, Container, Card} from 'react-bootstrap'
import{ Link } from 'react-router-dom'
import React from 'react';
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
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <MDBRow>
       <MDBCol md='6' className=' mt-3 text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-4 display-3 fw-bold ls-tight px-3" >
            Career Road Map <br />
          </h1>
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
 		<Container id="skills" class="section  py-5 d-none d-md-block">
            <div class="container-fluid section text-dark">

                <h1 data-aos="flip-down" data-aos-anchor-placement="top-center" data-aos-duration="1000">SKILLS | TOOLS</h1>
                <div class="row mx-2 pt-4 px-5">
                    <div class="col-3"></div>
                    <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-duration="1000"
                        data-aos-delay="100" class="col-1"><img class="d-flex img-fluid" src="https://icons.getbootstrap.com/assets/img/icons-hero.png" alt=""/>
                    </div>
                    <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-duration="1000"
                        data-aos-delay="200" class="col-1"><img class="d-flex img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZHlbnVivQlV23CfTzZMItg4LJkjT2TBl0Uw&usqp=CAU" alt=""/>
                    </div>
                    <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-duration="1000"
                        data-aos-delay="600" class="col-1"><img class="d-flex img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFSCnGyG7mJrUZXfrb4z6LOnko1ANL3nhjw&usqp=CAU"
                            alt=""/>
                    </div>
                    <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-duration="1000"
                        data-aos-delay="300" class="col-1"><img class="d-flex img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7szOcar3S6BI1oof6pPD0UbLdnPyT19rbw&usqp=CAU"
                            alt=""/>
                    </div>
                    <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-duration="1000"
                        data-aos-delay="400" class="col-1"><img class="d-flex img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72869hB3VQh3u5ZBsB3HOenu3PmQXIYIuPQ&usqp=CAU" alt=""/>
                    </div>
                    <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-duration="1000"
                        data-aos-delay="500" class="col-1"><img class="d-flex img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFu1101jUs72YgyhMQC-S_pmhrksPs-we1pw&usqp=CAU" alt=""/>
                    </div>
                    
                    <div class="col-3"></div>
                </div>
            </div>
        </Container>



    </MDBContainer>

  );
}

export default App;