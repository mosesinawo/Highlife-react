import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Highlife.css';
import niara1 from './img/niara-1.png'
import tv1 from './img/tv-1.png';
import tv2 from './img/tv-2.png';
import tv3 from './img/tv-3.png';
import Footer from '../../Footer.js/Footer';

const Highlife = () => {
    return (
        <div>
        <Container fluid style={{ marginTop: ' 9rem' }}>
            <Row className='highlife-black'>
                
                <Col md={8}>
                    <div>

                        <img src={niara1} alt='niara1' className='highlife-top' />
                    </div>
                </Col>
                <Col md={4}>
                    <div style={{textAlign:'start', padding:'2rem 2rem 0 0'}}>

                        <h2 style={{color:' #10d869', }}>Life on the Sweet <br/> Side</h2>
                        <h6 style={{color: 'white'}}>Carlton Williams</h6>
                        <p style={{paddingRight:'7rem', fontSize:'1.3rem'}}>Brody tries to protect his house as wildfires tear
                            through Malibu, and Justin is
                            caught in the middle when Audrina and Stephanie address rumors
                            during a trip to Las vegas.
                        </p>
                    </div>
                </Col>
            </Row>


</Container>
<Container>
    
            <Row style={{marginTop:'10rem'}}>
                <h1 className='highlife-header'>Other videos in this series:</h1>
                <Col md={3}>
                    <div className='highlife-container'>
                        <div className='highlife-image'>
                            <img src={niara1} className='highlife-img' alt=''/>
                        </div>
                        <div className='highlife-text'>
                            <h5 className=''>Life on the sweet side 1</h5>
                            <figcaption className='highlife-price'>&#8358;5000</figcaption>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='highlife-container'>
                        <div className='highlife-image'>
                            <img src={niara1} className='highlife-img' alt=''/>
                        </div>
                        <div className='highlife-text'>
                            <h5 className=''>Life on the sweet side 1</h5>
                            <figcaption className='highlife-price'>&#8358;5000</figcaption>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='highlife-container'>
                        <div className='highlife-image'>
                            <img src={niara1} className='highlife-img' alt=''/>
                        </div>
                        <div className='highlife-text'>
                            <h5 className=''>Life on the sweet side 1</h5>
                            <figcaption className='highlife-price'>&#8358;5000</figcaption>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='highlife-container'>
                        <div className='highlife-image'>
                            <img src={niara1} className='highlife-img' alt=''/>
                        </div>
                        <div className='highlife-text'>
                            <h5 className=''>Life on the sweet side 1</h5>
                            <figcaption className='highlife-price'>&#8358;5000</figcaption>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop:'10rem', marginBottom:'10rem'}}>
                <h1 className='highlife-header'>You will also like:</h1>
                <Col md={3}>
                    <div className='highlife-container'>
                        <div className='highlife-image'>
                            <img src={niara1} className='highlife-img' alt=''/>
                        </div>
                        <div className='highlife-text'>
                            <h5 className=''>Life on the sweet side 1</h5>
                            <figcaption className='highlife-price'>&#8358;5000</figcaption>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='highlife-container'>
                        <div className='highlife-image'>
                            <img src={tv1} className='highlife-img' alt=''/>
                        </div>
                        <div className='highlife-text'>
                            <h5 className=''>Life on the sweet side 1</h5>
                            <figcaption className='highlife-price'>&#8358;5000</figcaption>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='highlife-container'>
                        <div className='highlife-image'>
                            <img src={tv2} className='highlife-img' alt=''/>
                        </div>
                        <div className='highlife-text'>
                            <h5 className=''>Life on the sweet side 1</h5>
                            <figcaption className='highlife-price'>&#8358;5000</figcaption>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='highlife-container'>
                        <div className='highlife-image'>
                            <img src={tv3} className='highlife-img' alt=''/>
                        </div>
                        <div className='highlife-text'>
                            <h5 className=''>Life on the sweet side 1</h5>
                            <figcaption className='highlife-price'>&#8358;5000</figcaption>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Footer/>
            </Row>
        </Container>
        </div>
    )
}

export default Highlife