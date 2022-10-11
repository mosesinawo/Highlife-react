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
      <div className='image-red contrast'>
        <img className='header-image ' src={image1} alt='img1' />
      </div>
      <div className='image-text'>
        <h1 className='text-header'>Life Blood</h1>
        <div className='redline1'>&nbsp;</div>
        <div>
          <div className='red-content'>

            <div className='text-items'>About</div>  
            <div className='redline'>&nbsp;</div>
            <div className='text-items'>  Contact</div>  
            <div className='redline'>&nbsp;</div> 
            <div className='text-items'>  Events</div>
          </div>
        </div>

      </div>
      <div className='image-green contrast' >
        <img className='header-image-1 ' src={image2} alt='img2' />
        <div className='grid-text'>
          <h2 className='header-tag'> Get Involved</h2>
        </div>
      </div>
      <div className='image-blue contrast'>
        <img className='header-image ' src={image3} alt='img3' />
        <div className='grid-text'>
          <h2 className='header-tag'> FAQ</h2>
        </div>
      </div>
      <div className='image-yellow contrast'>
        <img className='header-image-2' src={image4} alt='img4' />
        <div className='grid-text'>
          <h2 className='header-tag'> Give</h2>
        </div>
      </div>


    </div>
  );
}

export default Header