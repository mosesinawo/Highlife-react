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
        <Container fluid style={{marginTop: '7rem'}}>
          <Row>
          <Carlton/>
          </Row>
         <Container>
         <Row style={{marginTop:'3rem'}}>
            <select className='select'>
              <option className='option'>Niara</option>
            </select>
          </Row>
          <Row style={{marginTop:'3rem'}}>
            <Col md={2}> 
            <img className='niara-image' src={niara4} alt='niara4'/>
            <div className='niara-text'>
              <h4>Building megacities from scratch</h4>
              <figcaption>Niara</figcaption>

            </div>
            </Col>
            <Col md={2}> 
            <img className='niara-image' src={niara5} alt='niara5'/>
            <div className='niara-text'>
              <h4>Building megacities from scratch</h4>
              <figcaption>Niara</figcaption>

            </div>
            </Col>
            <Col md={2}> 
            <img className='niara-image' src={niara6} alt='niara6'/>
            <div className='niara-text'>
              <h4>Building megacities from scratch</h4>
              <figcaption>Niara</figcaption>

            </div>
            </Col>
            <Col md={2}> 
            <img className='niara-image' src={niara7} alt='niara7'/>
            <div className='niara-text'>
              <h4>Building megacities from scratch</h4>
              <figcaption>Niara</figcaption>

            </div>
            </Col>
            <Col md={4}> 
            <Section2/>
            </Col>
          </Row>
          <Row>
            <Footer/>
          </Row>
         </Container>
        </Container>
    )
}

export default Niara;