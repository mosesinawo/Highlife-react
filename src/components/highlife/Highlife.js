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
        <div className='highlife-body'>
            <Container fluid style={{ margin: ' 9rem 0' }}>
                <Row className='highlife-black'>

                    <Col md={8}>
                        <div>

                            <img src={niara1} alt='niara1' className='highlife-top' />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div style={{ textAlign: 'start', padding: '2rem 2rem 0 0' }}>

                            <h1 style={{ color: ' #10d869', }}>Life on the Sweet Side</h1>
                            <h6 className='highlife-calton'>Carlton Williams</h6>
                            <p className='highlife-top-text'>Brody tries to protect his house as wildfires tear
                                through Malibu, and Justin is
                                caught in the middle when Audrina and Stephanie address rumors
                                during a trip to Las vegas.
                            </p>
                        </div>
                    </Col>
                </Row>


            </Container>
            
            <h2 className='product-text'>Other videos in this series:</h2>
            <div className='greenline'>&nbsp;</div>
            <Container className='now-playing'>


                <div className='now-playing-items'>
                    <div className='highlife-original'>
                        <div className='highlife-container'>
                            <div className='highlife-image'>
                                <img src={niara1} className='highlife-img' alt='' />
                            </div>
                            <div className='highlife-text'>
                                <h5 className='now-playing-text'>Life on the sweet side </h5>
                                <figcaption className='highlife-price'>Niara</figcaption>
                            </div>
                        </div>
                    </div>
                    <div className='highlife-overlay'>
                       
                            <div className='highlife-image'>
                                <img src={niara1} className='highlife-img-2' alt='' />
                            </div>
                            <h6 className='effect'>Now Playing</h6>
                            <div className='highlife-text'>
                                <h5 className='now-playing-text'>Life on the sweet side </h5>
                                <figcaption className='highlife-price'>Niara</figcaption>
                            </div>

                        
                    </div>
                </div>
                <div className='now-playing-items'>
                    <div className='highlife-original'>
                        <div className='highlife-container'>
                            <div className='highlife-image'>
                                <img src={niara1} className='highlife-img' alt='' />
                            </div>
                            <div className='highlife-text'>
                                <h5 className='now-playing-text'>Life on the sweet side 2</h5>
                                <figcaption className='highlife-price'>Niara</figcaption>
                            </div>
                        </div>
                    </div>
                    <div className='highlife-overlay'>
                       
                            <div className='highlife-image'>
                                <img src={niara1} className='highlife-img-2' alt='' />
                            </div>
                            <h6 className='effect'>Now Playing</h6>
                            <div className='highlife-text'>
                                <h5 className='now-playing-text'>Life on the sweet side 2</h5>
                                <figcaption className='highlife-price'>Niara</figcaption>
                            </div>

                        
                    </div>
                </div>
                <div className='now-playing-items'>
                    <div className='highlife-original'>
                        <div className='highlife-container'>
                            <div className='highlife-image'>
                                <img src={niara1} className='highlife-img' alt='' />
                            </div>
                            <div className='highlife-text'>
                                <h5 className='now-playing-text'>Life on the sweet side 3</h5>
                                <figcaption className='highlife-price'>Niara</figcaption>
                            </div>
                        </div>
                    </div>
                    <div className='highlife-overlay'>
                       
                            <div className='highlife-image'>
                                <img src={niara1} className='highlife-img-2' alt='' />
                            </div>
                            <h6 className='effect'>Now Playing</h6>
                            <div className='highlife-text'>
                                <h5 className='now-playing-text'>Life on the sweet side 3</h5>
                                <figcaption className='highlife-price'>Niara</figcaption>
                            </div>

                        
                    </div>
                </div>
                <div className='now-playing-items'>
                    <div className='highlife-original'>
                        <div className='highlife-container'>
                            <div className='highlife-image'>
                                <img src={niara1} className='highlife-img' alt='' />
                            </div>
                            <div className='highlife-text'>
                                <h5 className='now-playing-text'>Life on the sweet side 4</h5>
                                <figcaption className='highlife-price'>Niara</figcaption>
                            </div>
                        </div>
                    </div>
                    <div className='highlife-overlay'>
                       
                            <div className='highlife-image'>
                                <img src={niara1} className='highlife-img-2' alt='' />
                            </div>
                            <h6 className='effect'>Now Playing</h6>
                            <div className='highlife-text'>
                                <h5 className='now-playing-text'>Life on the sweet side 4</h5>
                                <figcaption className='highlife-price'>Niara</figcaption>
                            </div>

                        
                    </div>
                </div>


            </Container>

            

            <h2 className='product-text'> You will also like:</h2>
            <div className='greenline' >&nbsp;</div>
            <Container className='now-playing' style={{marginBottom:'13rem'}}>
                <div className='now-playing-items'>
                    <div className='highlife-container'>
                        <div className='highlife-image'>
                            <img src={niara1} className='highlife-img' alt='' />
                        </div>
                        <div className='highlife-text'>
                            <h5 className='now-playing-text'>International blood donor day highlife</h5>
                            <figcaption className='highlife-price'>Niara</figcaption>
                        </div>
                    </div>
                </div>
                <div className='now-playing-items'>
                    <div className='highlife-container'>
                        <div className='highlife-image'>
                            <img src={tv1} className='highlife-img' alt='' />
                        </div>
                        <div className='highlife-text'>
                            <h5 className='now-playing-text'>International blood donor day highlife</h5>
                            <figcaption className='highlife-price'>Life blood</figcaption>
                        </div>
                    </div>
                </div>
                <div className='now-playing-items'>
                    <div className='highlife-container'>
                        <div className='highlife-image'>
                            <img src={tv2} className='highlife-img' alt='' />
                        </div>
                        <div className='highlife-text'>
                            <h5 className='now-playing-text'>Getting more intimate with the Holy Spirit</h5>
                            <figcaption className='highlife-price'>Courses</figcaption>
                        </div>
                    </div>
                </div>
                <div className='now-playing-items'>
                    <div className='highlife-container'>
                        <div className='highlife-image'>
                            <img src={tv3} className='highlife-img' alt='' />
                        </div>
                        <div className='highlife-text'>
                            <h5 className='now-playing-text'>Original guide to setting up eco-friendly offices</h5>
                            <figcaption className='highlife-price'>&#8358;5000</figcaption>
                        </div>
                    </div>
                </div>
            </Container>

            <Row>
                <Footer />
            </Row>
        </div>
    )
}

export default Highlife