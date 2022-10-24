import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Footer.js/Footer';
import Section2 from '../../MainSection/Sidebar/Sidebar';
import Carlton from '../categories/Carlton';

import niara4 from './img/niara-4.png';
import niara5 from './img/niara-5.png';
import niara6 from './img/niara-6.png';
import niara7 from './img/niara-7.png';
import './Niara.css';

const Niara = () => {
    return (
        <Container fluid style={{marginTop: ''}}>
          <Row>
          <Carlton/>
          </Row>
         <Container>
         <Row style={{marginTop:'3rem'}}>
            <select className='select' style={{margin:'0'}}>
              <option className='option'>Niara</option>
            </select>
          </Row>
          <div style={{marginTop:'3rem'}} className='niara-container'>
            <div className='niara-item'> 
            <img className='niara-image' src={niara4} alt='niara4'/>
            <div className='niara-text'>
              <h4 className='niara-paragraph'>Building megacities from scratch</h4>
              <figcaption className='price'>Niara</figcaption>

            </div>
            </div>
            <div className='niara-item'> 
            <img className='niara-image' src={niara5} alt='niara5'/>
            <div className='niara-text'>
              <h4 className='niara-paragraph'>Nation building and other millenium goal</h4>
              <figcaption className='price'>Niara</figcaption>

            </div>
            </div>
            <div className='niara-item'> 
            <img className='niara-image' src={niara6} alt='niara6'/>
            <div className='niara-text'>
              <h4 className='niara-paragraph'>Chalenges inherent in building road network</h4>
              <figcaption className='price'>Niara</figcaption>

            </div>
            </div>
            <div className='niara-item'> 
            <img className='niara-image' src={niara7} alt='niara7'/>
            <div className='niara-text'>
              <h4 className='niara-paragraph'>Eco-friendly construction in the 21st century</h4>
              <figcaption className='price'>Niara</figcaption>

            </div>
            </div>
            <div md={4}> 
            <Section2/>
            </div>
          </div>
          <Row>
            <Footer/>
          </Row>
         </Container>
        </Container>
    )
}

export default Niara;