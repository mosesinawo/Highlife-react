import React from 'react';
import Section1 from './Section-A';
import Section2 from './Sidebar/Sidebar.js';
import lifeBlood6 from "../img/lifeblood-6.png";
import lifeBlood7 from "../img/lifeblood-7.png";
import lifeBlood8 from "../img/lifeblood-8.png";
import './Main.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <div className='body' >
      <Section1 /> 
      <Section2 />

      
      <Carousel className='carousel'>
          <Carousel.Item style={{ overflow: 'hidden',  width: '100%' }}>
            <img
              className="carousel-image"
              src={lifeBlood6}
              alt="First slide"
            />
            <Carousel.Caption style={{ position: 'unset' }}>
              <h1 className="text">Blood Donationn sensitization in ipaja</h1>

            </Carousel.Caption>
            <div className='swipe'>Swipe side way for more <span className='control'>  <i class="fa fa-chevron-circle-left prev " aria-hidden="true"></i>   <i class="fa fa-chevron-circle-right next"  aria-hidden="true"></i></span></div>

          </Carousel.Item>
          <Carousel.Item style={{ overflow: 'hidden',  width: '100%' }}>
            <img
              className="carousel-image"
              src={lifeBlood7}
              alt="Second slide"
            />

            <Carousel.Caption style={{ position: 'unset' }}>
              <h1 className="text" >All you need to know about blood types and groups</h1>

            </Carousel.Caption>
           <div className='swipe'>Swipe side way for more <span className='control'>  <i class="fa fa-chevron-circle-left prev " aria-hidden="true"></i>   <i class="fa fa-chevron-circle-right next"  aria-hidden="true"></i></span></div>

          </Carousel.Item>
          <Carousel.Item style={{ overflow: 'hidden', width: '100%' }}>
            <img
              className="carousel-image"
              src={lifeBlood8}
              alt="Second slide"
            />

            <Carousel.Caption style={{ position: 'unset' }}>
              <h1 className="text" >world blood Donor 2019 celebration</h1>

            </Carousel.Caption>
            <div className='swipe'>Swipe side way for more <span className='control'>  <i class="fa fa-chevron-circle-left prev " aria-hidden="true"></i>   <i class="fa fa-chevron-circle-right next"  aria-hidden="true"></i></span></div>
            
          </Carousel.Item>
        </Carousel>
        <div className="box-9">
          <p className="last-text"> <Link className="inner-text-2" >LiveBlood Archives</Link></p>
        </div>
      

    </div>

      
  )
}

export default Main