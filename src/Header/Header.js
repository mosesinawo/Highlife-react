// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import image1 from '../img/tv-1.png';
import image2 from '../img/arm.png';
import image3 from '../img/question.png';
import image4 from '../img/atm.png';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import "./Header.css";
// import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <div className='header-body'>
          <div className='image-red'>
            <img className='header-image' src={image1} alt='img1'/>
          </div>
          <div className='image-text'>
            <h1 className='text-header'>Life Blood</h1>
            <div>

            <span className='text-items'>About</span>  <span className='text-items'>  Contact</span>   <span className='text-items'>  Events</span>
            </div>

          </div>
          <div className='image-green'>
          <img className='header-image-1' src={image2} alt='img2'/>
          </div>
          <div className='image-blue'>
          <img className='header-image' src={image3} alt='img3'/>
          </div>
          <div className='image-yellow'>
          <img className='header-image-1' src={image4} alt='img4'/>
          </div>


        </div>
    );
}

export default Header