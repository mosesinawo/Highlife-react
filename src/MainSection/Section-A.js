// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';
import lifeBlood1 from "../img/lifeblood-1.png";
import lifeBlood2 from "../img/lifeblood-2.png";
import lifeBlood4 from "../img/lifeblood-4.png";
import lifeBlood3 from "../img/lifeblood-3.png";
import lifeBlood5 from "../img/lifeblood-5.png";
import lifeBlood6 from "../img/lifeblood-6.png";
import lifeBlood7 from "../img/lifeblood-7.png";
import lifeBlood8 from "../img/lifeblood-8.png";
import lifeBlood9 from "../img/lifeblood-9.png";
import lifeBlood10 from "../img/lifeblood-10.png";
import "./Main.css";
import { Link } from "react-router-dom";
// import niara8 from "../img/niara-8.png";
// import radio from "../img/radio.png";

const Section1 = () => {



  return (

    <div>

      <div className="left-part" >


        <div className="upper-part" >
          <div className='lifeblood1'>

            <img className='life-image' src={lifeBlood1} alt="lifeBlood1" />
            <div className='text-container' >
              <h4 className='text'>30 blood donation myth in Nigeria</h4>
            </div>
          </div>
          <div className='lifeblood2'>


            <img className='life-image' src={lifeBlood2} alt="lifeBlood2" />
            <div className='text-container' >
              <h4 className='text'>Life Blood Nigeria Testimonials - Docuseries</h4>
            </div>
          </div>

        </div>


        <div className='second-part'>
          <div className='box-1'>

            <img className='lifeblood' src={lifeBlood4} alt="lifeBlood4" />
            <div className='text-container' >
              <h6 className='small-text'>Blood count booster</h6>
            </div>
          </div>

          <div className="box-2">

            <img className='lifeblood' src={lifeBlood3} alt="lifeBlood3" />
            <div className='text-container' >
              <h6 className='small-text'>World blood donor day celeberation</h6>
            </div>
          </div>
          <div className='box-3'>


            <img className='lifeblood' src={lifeBlood5} alt="lifeBlood5" />
            <div className='text-container' >
              <h6 className='small-text'>Testimonials - Hows keji was saved by a blood donor</h6>
            </div>
          </div>

          <div className="box-4">

            <img className='lifeblood' src={lifeBlood6} alt="lifeBlood6" />
            <div className='text-container' >
              <h6 className='small-text'>Blood Donationn sensitization in ipaja</h6>
            </div>
          </div>


          <div className="box-5">

            <img className='lifeblood' src={lifeBlood7} alt="lifeBlood7" />
            <div className='text-container' >
              <h6 className='small-text'>All you need to know about blood types and groups</h6>
            </div>
          </div>

          <div className="box-6">

            <img className='lifeblood' src={lifeBlood8} alt="lifeBlood8" />
            <div className='text-container' >
              <h6 className='small-text'>world blood Donor 2019 celebration</h6>
            </div>
          </div>
        </div>




        <div className="fourth">
          <div className="box-7">

            <img className='forth-image' src={lifeBlood9} alt="lifeBlood9" />
            <div className='text-container' >
              <h4 className='text'>The definitive article on blood diseases
              </h4>
            </div>
          </div>
          <div className="box-8">

            <img className='forth-image' src={lifeBlood10} alt="lifeBlood10" />
            <div className='text-container' >
              <h4 className='text'>Testimonials - Baby Temi's got her groove back
              </h4>
            </div>
          </div>
        </div>
        <div className="box-9">
          <p className="last-text"> <Link className="inner-text">LiveBlood Archives</Link></p>
        </div>


      </div>

      <div className='carousel-container'>


        <Carousel className='carousel'>
          <Carousel.Item style={{ overflow: 'hidden', width: '100%' }}>
            <img
              className="carousel-image"
              src={lifeBlood1}
              alt="First slide"
            />
            <Carousel.Caption style={{ position: 'unset' }}>
              <h1 className="text" >30 blood donation myth in Nigeria prevalant in Nigeria</h1>
            </Carousel.Caption>
            <div className='swipe'>Swipe side way for more <span className='control'>  <i class="fa fa-chevron-circle-left prev " aria-hidden="true"></i>   <i class="fa fa-chevron-circle-right next"  aria-hidden="true"></i></span></div>
          </Carousel.Item>
          <Carousel.Item style={{ overflow: 'hidden', width: '100%' }}>
            <img
              className="carousel-image"
              src={lifeBlood2}
              alt="Second slide"
            />

            <Carousel.Caption style={{ position: 'unset' }}>
              <h1 className="text" >Life Blood Nigeria Testimonials - Docuseries</h1>

            </Carousel.Caption>
            <div className='swipe'>Swipe side way for more <span className='control'>  <i class="fa fa-chevron-circle-left prev " aria-hidden="true"></i> <i class="fa fa-chevron-circle-right next"  aria-hidden="true"></i></span></div>
          </Carousel.Item>
        </Carousel>



        <Carousel className='carousel'>
          <Carousel.Item style={{ overflow: 'hidden',  width: '100%' }}>
            <img
              className="carousel-image"
              src={lifeBlood3}
              alt="First slide"
            />
            <Carousel.Caption style={{ position: 'unset' }}>
              <h1 className="text"> Blood count booster</h1>

            </Carousel.Caption>
            <div className='swipe'>Swipe side way for more <span className='control'>  <i class="fa fa-chevron-circle-left prev " aria-hidden="true"></i>   <i class="fa fa-chevron-circle-right next"  aria-hidden="true"></i></span></div>

          </Carousel.Item>
          <Carousel.Item style={{ overflow: 'hidden',  width: '100%' }}>
            <img
              className="carousel-image"
              src={lifeBlood4}
              alt="Second slide"
            />

            <Carousel.Caption style={{ position: 'unset' }}>
              <h1 className="text" >World blood donor day celeberation</h1>

            </Carousel.Caption>
           <div className='swipe'>Swipe side way for more <span className='control'>  <i class="fa fa-chevron-circle-left prev " aria-hidden="true"></i>   <i class="fa fa-chevron-circle-right next"  aria-hidden="true"></i></span></div>

          </Carousel.Item>
          <Carousel.Item style={{ overflow: 'hidden', width: '100%' }}>
            <img
              className="carousel-image"
              src={lifeBlood5}
              alt="Second slide"
            />

            <Carousel.Caption style={{ position: 'unset' }}>
              <h1 className="text" >Life Blood Nigeria Testimonials - Docuseries</h1>

            </Carousel.Caption>
            <div className='swipe'>Swipe side way for more <span className='control'>  <i class="fa fa-chevron-circle-left prev " aria-hidden="true"></i>   <i class="fa fa-chevron-circle-right next"  aria-hidden="true"></i></span></div>
            
          </Carousel.Item>
        </Carousel>
      </div>



    </div>




  );
}

export default Section1;
