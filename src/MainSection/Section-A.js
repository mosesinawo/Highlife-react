// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
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

     const [carosel, setCarosel] = useState(false);
     const mobile = () =>{
        if (window.innerWidth <= 580){
            return setCarosel(true)
        }else{
         return  setCarosel
        }
     }

    return (

<div>

    <div className="left-part" style={{flex:''}}>


        <div className="upper-part" style={{display:'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap:'1rem'}}>
            <div className='lifeblood1'>

                <img className='life-image' src={lifeBlood1} alt="lifeBlood1" />
                <div className='text-container' >
                    <h3 className='text'>30 blood donation myth in Nigeria</h3>
                </div>
            </div>
            <div className='lifeblood2'>


                <img className='life-image' src={lifeBlood2} alt="lifeBlood2" />
                <div className='text-container' >
                    <h3 className='text'>Life Blood Nigeria Testimonials - Docuseries</h3>
                </div>
            </div>

        </div>


        <div className='second-part'>
            <div className='box-1'>

                <img className='lifeblood' src={lifeBlood4} alt="lifeBlood4" />
                <div className='text-container' >
                    <h5 className='text'>Blood count booster</h5>
                </div>
            </div>

            <div className="box-2">

                <img className='lifeblood' src={lifeBlood3} alt="lifeBlood3" />
                <div className='text-container' >
                    <h5 className='text'>World blood donor day celeberation</h5>
                </div>
            </div>
            <div className='box-3'>


                <img className='lifeblood' src={lifeBlood5} alt="lifeBlood5" />
                <div className='text-container' >
                    <h5 className='text'>Testimonials - Hows keji was saved by a blood donor</h5>
                </div>
            </div>

            <div className="box-4">

                <img className='lifeblood' src={lifeBlood6} alt="lifeBlood6" />
                <div className='text-container' >
                    <h5 className='text'>Blood Donationn sensitization in ipaja</h5>
                </div>
            </div>


            <div className="box-5">

                <img className='lifeblood' src={lifeBlood7} alt="lifeBlood7" />
                <div className='text-container' >
                    <h5 className='text'>All you need to know about blood types <br/> and groups</h5>
                </div>
            </div>

            <div className="box-6">

                <img className='lifeblood' src={lifeBlood8} alt="lifeBlood8" />
                <div className='text-container' >
                    <h5 className='text'>world blood Donor 2019 celebration</h5>
                </div>
            </div>
        </div>
    



        <div className="fourth">
            <div className="box-7">

                <img className='forth-image' src={lifeBlood9} alt="lifeBlood9" />
                <div className='text-container' >
                    <h3 className='text'>The definitive article on blood diseases
                    </h3>
                </div>
            </div>
            <div className="box-8">

                <img className='forth-image' src={lifeBlood10} alt="lifeBlood10" />
                <div className='text-container' >
                    <h3 className='text'>Testimonials - Baby Temi's got her groove back
                    </h3>
                </div>
            </div>
        </div>
        <div className="box-9">
            <p className="last-text"> <Link className="inner-text">LiveBlood Archives</Link></p>
        </div>
        

    </div>
   
   <div style={{padding: ''}}>

        <Carousel className='carousel'>
      <Carousel.Item style={{overflow:'hidden',width:'100%'}}>
        <img style={{overflow:'hidden', width:'100vw'}}
          className="carousel-image"
          src={lifeBlood1}
          alt="First slide"
        />
        <Carousel.Caption style={{position:'unset'}}>
          <h3 className="text" >30 blood donation myth in Nigeria</h3>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{overflow:'hidden', width:'100%'}}>
        <img style={{overflow:'hidden', width:'100vw'}}
          className="carousel-image"
          src={lifeBlood2}
          alt="Second slide"
        />

        <Carousel.Caption style={{position:'unset'}}>
          <h3  className="text" >Life Blood Nigeria Testimonials - Docuseries</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


        
    <Carousel className='carousel'>
      <Carousel.Item style={{overflow:'hidden',width:'100%'}}>
        <img style={{overflow:'hidden', width:'100vw'}}
          className="carousel-image"
          src={lifeBlood3}
          alt="First slide"
        />
        <Carousel.Caption style={{position:'unset'}}>
          <h3 className="text"> Blood count booster</h3>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{overflow:'hidden', width:'100%'}}>
        <img style={{overflow:'hidden', width:'100vw'}}
          className="carousel-image"
          src={lifeBlood4}
          alt="Second slide"
        />

        <Carousel.Caption style={{position:'unset'}}>
          <h3  className="text" >World blood donor day celeberation</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{overflow:'hidden', width:'100%'}}>
        <img style={{overflow:'hidden', width:'100vw'}}
          className="carousel-image"
          src={lifeBlood5}
          alt="Second slide"
        />

        <Carousel.Caption style={{position:'unset'}}>
          <h3  className="text" >Life Blood Nigeria Testimonials - Docuseries</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>

    
    
</div>




    );
}

export default Section1;
