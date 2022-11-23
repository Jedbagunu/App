import {Button, Row, Col, Container, Card} from 'react-bootstrap'
import{ Link } from 'react-router-dom'
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody 
}
from 'mdb-react-ui-kit';


function Skills() {
  return (
    <MDBContainer fluid className='background-radial-gradient overflow-hidden'>   
       <Container id="skills" class="section d-none d-md-block">
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

export default Skills;