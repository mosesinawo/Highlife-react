import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Store.css';
import main from './img/main-img.png';
import main1 from './img/main-1.png';
import main2 from './img/main-2.png';
import main3 from './img/main-3.png';
import main4 from './img/main-4.png';
import main5 from './img/main-5.png';
import main6 from './img/main-6.png';
import main7 from './img/main-7.png';
import main8 from './img/main-8.png';
import main9 from './img/main-9.png';
import main10 from './img/main-10.png';
import main11 from './img/main-11.png';
import main12 from './img/main-12.png';
import Footer from '../../Footer.js/Footer';

const Store = () => {

    return (
        <Container style={{ marginTop: '4rem', }}>
            <Row>
                <Col style={{ position: 'relative' }} >
                    <img src={main} className='main' alt='main' />

                    <blockquote className='main-text'>
                        <h1 className='text-head'>Limitless Joy <br />Bundles</h1>
                        <p className='text-name'>by Carlton Williams</p>
                        <figcaption className='shop-now'>shop now</figcaption>
                    </blockquote>
                </Col>
            </Row>
            <Row>
                <Col className='filter-container'><h2 className='filter'>Filter+</h2></Col>
            </Row>

            <Row style={{ marginTop: '4rem',marginBottom:'6rem'}}>
                <Col >
                    <h5 style={{ color: '#10d869' }} className='main-items'>categories</h5>
                    <h5 className='main-items'>Hilife church</h5>
                    <h5 className='main-items'>Carlton Williams</h5>
                    <h5 className='main-items'>niara</h5>
                    <h5 className='main-items'>Merchandise</h5>
                    <h5 className='main-items'>Videos</h5>
                    <h5 className='main-items'>Merchandise</h5>
                    <h5 className='main-items'>Videos</h5>
                </Col>
                <Col>
                    <h5 style={{ color: '#10d869' }} className='main-items'>sort by :</h5>
                    <h5 className='main-items'>Default</h5>
                    <h5 className='main-items'>Newest</h5>
                    <h5 className='main-items'>High Price</h5>
                    <h5 className='main-items'>Low Price</h5>
                    <h5 className='main-items'>Name: A - Z</h5>
                    <h5 className='main-items'>Name: A - Z</h5>

                </Col>
            </Row>
            <Row>
                    <Col md={3} className='gallary-container'>
                        <div className='gallary-image'>
                            <img src={main1} alt='main1' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h4>View
                                Fly away beautiful soul</h4>
                            <figcaption className='price'>#5000</figcaption>

                        </div>

                    </Col>
                    <Col md={3} className='gallary-container'>
                        <div className='gallary-image'>
                            <img src={main2} alt='main2' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h4>View
                                Fly away beautiful soul</h4>
                            <figcaption className='price'>#5000</figcaption>

                        </div>

                    </Col>
                    <Col md={3} className='gallary-container'>
                        <div className='gallary-image'>
                            <img src={main3} alt='main3' className='store-image'/>
                        </div>
                        <div className='gallary-text'>
                            <h4>View
                                Fly away beautiful soul</h4>
                            <figcaption className='price'>#5000</figcaption>

                        </div>

                    </Col>
                    <Col md={3} className='gallary-container'>
                        <div className='gallary-image'>
                            <img src={main4} alt='main4'className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h4>View
                                Fly away beautiful soul</h4>
                            <figcaption className='price'>#5000</figcaption>

                        </div>

                    </Col>

                
            </Row>
            <Row >
                    <Col md={3} className='gallary-container'>
                        <div className='gallary-image'>
                            <img src={main5} alt='main5' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h4>View
                                Fly away beautiful soul</h4>
                            <figcaption className='price'>#5000</figcaption>

                        </div>

                    </Col>
                    <Col md={3} className='gallary-container'>
                        <div className='gallary-image'>
                            <img src={main6} alt='main6' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h4>View
                                Fly away beautiful soul</h4>
                            <figcaption className='price'>#5000</figcaption>

                        </div>

                    </Col>
                    <Col md={3} className='gallary-container'>
                        <div className='gallary-image'>
                            <img src={main7} alt='main7' className='store-image'/>
                        </div>
                        <div className='gallary-text'>
                            <h4>View
                                Fly away beautiful soul</h4>
                            <figcaption className='price'>#5000</figcaption>

                        </div>

                    </Col>
                    <Col md={3} className='gallary-container'>
                        <div className='gallary-image'>
                            <img src={main8} alt='main8'className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h4>View
                                Fly away beautiful soul</h4>
                            <figcaption className='price'>#5000</figcaption>

                        </div>

                    </Col>

                
            </Row>
            <Row>
                    <Col md={3} className='gallary-container'>
                        <div className='gallary-image'>
                            <img src={main9} alt='main9' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h4>View
                                Fly away beautiful soul</h4>
                            <figcaption className='price'>#5000</figcaption>

                        </div>

                    </Col>
                    <Col md={3} className='gallary-container'>
                        <div className='gallary-image'>
                            <img src={main10} alt='main10' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h4>View
                                Fly away beautiful soul</h4>
                            <figcaption className='price'>#5000</figcaption>

                        </div>

                    </Col>
                    <Col md={3} className='gallary-container'>
                        <div className='gallary-image'>
                            <img src={main11} alt='main11' className='store-image'/>
                        </div>
                        <div className='gallary-text'>
                            <h4>View
                                Fly away beautiful soul</h4>
                            <figcaption className='price'>#5000</figcaption>

                        </div>

                    </Col>
                    <Col md={3} className='gallary-container'>
                        <div className='gallary-image'>
                            <img src={main12} alt='main12'className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h4>View
                                Fly away beautiful soul</h4>
                            <figcaption className='price'>#5000</figcaption>

                        </div>

                    </Col>

                
            </Row>

<Row style={{marginTop: '15rem'}}>

<Footer/>
</Row>

        </Container>

    )
}

export default Store