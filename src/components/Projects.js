import {Button, Row, Col, Container, Card} from 'react-bootstrap'
import{ Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Projects() {
     useEffect(() => {
        AOS.init();
      }, [])
  return (
   <Container>
    <section id="projects" className="bg-img-2 two" >
      <div class="section bg-container">
        <div class="container px-4 py-5" id="custom-cards">
            <h1 class="pb-2  d-flex justify-content-center">PROJECTS</h1>
          <div class="row row-col-lg-3 align-items-stretch g-4 pt-4">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="500"data-aos-delay="100" class="col-lg-4 col-md-6 col-xs-12">
              <div class="c1 card card-cover h-100 overflow-hidden rounded-4 shadow-lg post">
                <div class="d-flex flex-column h-100 text-shadow-1">
                    <a href="https://jedbagunu.github.io/web-portfolio/" target="_blank" class="display-9 lh-1 post-title">FIRST PORTFOLIO</a>
                </div>
            </div>
          </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="500"data-aos-delay="200" class="col-lg-4 col-md-6 col-xs-12">
         <div class="c2 card card-cover h-100 overflow-hidden rounded-4 shadow-lg post">
           <div class="d-flex flex-column h-100 text-shadow-1">
              <a href="https://dashboard.heroku.com/apps/limitless-ravine-61280" target="_blank" class="display-9 lh-1 post-title">E-Commerce API</a>
            </div>
          </div>
      </div>
     <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="500"
                            data-aos-delay="300" class="col-lg-4 col-md-6 col-xs-12">
        <div class="c3 card card-cover h-100 overflow-hidden rounded-4 shadow-lg post">
            <div class="d-flex flex-column h-100 text-shadow-1">
                <a href="https://classicscooters-7texamaqr-jedbagunu.vercel.app/login2" target="_blank" class="display-9 lh-1 post-title">E-commerce Website</a>
                </div>
            </div>
        </div>
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="500"
                            data-aos-delay="100" class="col-lg-4 col-md-6 col-xs-12">
        <div class="c4 card card-cover h-100 overflow-hidden rounded-4 shadow-lg post">
            <div class="d-flex flex-column h-100 text-shadow-1">
                <a href="https://gitlab.com/dashboard/projects" target="_blank" class="display-9 lh-1 post-title">Bootcamp Activities</a>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>

    </section>
   </Container>
  );
}

export default Projects;