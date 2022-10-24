import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Store.css';
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
import { Link } from 'react-router-dom';

const Store = () => {


    return (
        <Container style={{ marginTop: '10rem', padding: ' 0 1rem' }}>
            <Row>
                <Col className='main' >
                   

                    <div className='main-text'>
                        <h1 className='text-head'>Limitless Joy <br />Bundles</h1>
                        <p className='text-name'>by Carlton Williams</p>
                        <figcaption className='shop-now'>shop now</figcaption>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='filter-container'><h5 className='filter'>Filter+</h5></Col>
            </Row>

            <Row className='store-list'>
                <Col >
                    <h5 style={{ color: '#10d869' }}  className='main-items'>categories</h5>
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
            <Container className='store-container'>


                <div className='gallary-container'>
                    <div className='original'>

                        <div className='gallary-image'>
                            <img src={main1} alt='main1' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Dig it: Find your destiny in the dirt</h6>
                            <figcaption className='price'>&#8358;5,000</figcaption>

                        </div>
                    </div>
                    <div className='overlay'>

                        <div className='gallary-image-2'>
                            <img src={main1} alt='main1' className='store-image' />
                        </div>
                        <Link to='/product' className='view'>View</Link>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Dig it: Find your destiny in the dirt</h6>
                           
                            <figcaption className='price'> <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart </figcaption>

                        </div>

                    </div>

                </div >
                <div className='gallary-container'>
                    <div className='original'>
                        <div className='gallary-image' >
                            <img src={main2} alt='main2' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h6 className='store-text' >View
                                Fly away beautiful soul</h6>
                            <figcaption className='price'>&#8358;1,000</figcaption>

                        </div>
                    </div>
                    <div className='overlay'>

                        <div className='gallary-image-2'>
                            <img src={main2} alt='main2' className='store-image' />
                        </div>
                        <h6 className='view'>View</h6>
                        <div className='gallary-text'>
                            <h6 className='store-text'>View
                                Fly away beautiful soul</h6>
                            <figcaption className='price'> <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</figcaption>

                        </div>

                    </div>


                </div>
                <div className='gallary-container'>
                    <div className='original'>
                        <div className='gallary-image'>
                            <img src={main3} alt='main3' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h6 className='store-text'>How to be Brave</h6>
                            <figcaption className='price'>&#8358;3,000</figcaption>

                        </div>
                    </div>
                    <div className='overlay'>

                        <div className='gallary-image-2'>
                            <img src={main3} alt='main3' className='store-image' />
                        </div>
                        <Link className='view'>View</Link>
                        <div className='gallary-text'>
                            <h6 className='store-text'>How to be Brave</h6>
                            <figcaption className='price'> <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</figcaption>

                        </div>

                    </div>


                </div>
                <div className='gallary-container'>
                    <div className='original'>
                        <div className='gallary-image'>
                            <img src={main4} alt='main4' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Praise before my Breakthrough</h6>
                            <figcaption className='price'>&#8358;2,000</figcaption>

                        </div>
                    </div>
                    <div className='overlay'>

                        <div className='gallary-image-2'>
                            <img src={main4} alt='main4' className='store-image' />
                        </div>
                        <Link className='view'>View</Link>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Praise before my Breakthrough</h6>
                            <figcaption className='price'> <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</figcaption>

                        </div>

                    </div>

                </div>




                <div className='gallary-container'>
                    <div className='original'>
                        <div className='gallary-image'>
                            <img src={main5} alt='main5' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Walk your window, no one else will do it for you</h6>
                            <figcaption className='price'>&#8358;8,000</figcaption>

                        </div>
                    </div>
                    <div className='overlay'>

                        <div className='gallary-image-2'>
                            <img src={main5} alt='main5' className='store-image' />
                        </div>
                        <h6 className='view'>View</h6>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Walk your window, no one else will do it for you</h6>
                            <figcaption className='price'> <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</figcaption>

                        </div>

                    </div>

                </div>
                <div className='gallary-container'>
                    <div className='original'>
                        <div className='gallary-image'>
                            <img src={main6} alt='main6' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Conscious spirit (In vinyl)</h6>
                            <figcaption className='price'>&#8358;1000</figcaption>

                        </div>
                    </div>
                    <div className='overlay'>

                        <div className='gallary-image-2'>
                            <img src={main6} alt='main6' className='store-image' />
                        </div>
                        <Link className='view'>View</Link>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Conscious spirit (In vinyl)</h6>
                            <figcaption className='price'><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</figcaption>

                        </div>

                    </div>

                </div>
                <div className='gallary-container'>
                    <div className='original'>
                        <div className='gallary-image'>
                            <img src={main7} alt='main7' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Poverty riches and wealth</h6>
                            <figcaption className='price'>&#8358;6000</figcaption>

                        </div>
                    </div>
                    <div className='overlay'>

                        <div className='gallary-image-2'>
                            <img src={main6} alt='main6' className='store-image' />
                        </div>
                        <Link className='view'>View</Link>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Poverty riches and wealth</h6>
                            <figcaption className='price'><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</figcaption>

                        </div>

                    </div>

                </div>
                <div className='gallary-container'>
                    <div className='original'>
                        <div className='gallary-image'>
                            <img src={main8} alt='main8' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Crash the Chatterbox</h6>
                            <figcaption className='price'>&#8358;5000</figcaption>

                        </div>
                    </div>
                    <div className='overlay'>

                        <div className='gallary-image-2'>
                            <img src={main8} alt='main8' className='store-image' />
                        </div>
                        <Link className='view'>View</Link>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Crash the Chatterbox</h6>
                            <figcaption className='price'><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</figcaption>

                        </div>

                    </div>

                </div>


                <div className='gallary-container'>
                    <div className='original'>
                        <div className='gallary-image'>
                            <img src={main9} alt='main9' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Don't stop: a spiritual guide to never ever quitting</h6>
                            <figcaption className='price'>&#8358;7000</figcaption>

                        </div>

                    </div>
                    <div className='overlay'>

                        <div className='gallary-image-2'>
                            <img src={main9} alt='main9' className='store-image' />
                        </div>
                        <Link className='view'>View</Link>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Don't stop: a spiritual guide to never ever quitting</h6>
                            <figcaption className='price'><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</figcaption>

                        </div>

                    </div>

                </div>
                <div className='gallary-container'>
                    <div className='original'>
                        <div className='gallary-image'>
                            <img src={main10} alt='main10' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Mighty to save all who call</h6>
                            <figcaption className='price'>&#8358;1000</figcaption>

                        </div>
                    </div>
                    <div className='overlay'>

                        <div className='gallary-image-2'>
                            <img src={main10} alt='main10' className='store-image' />
                        </div>
                        <Link className='view'>View</Link>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Mighty to save all who call</h6>
                            <figcaption className='price'><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</figcaption>

                        </div>

                    </div>

                </div>
                <div className='gallary-container'>
                    <div className='original'>
                        <div className='gallary-image'>
                            <img src={main11} alt='main11' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Faith is Trust (Tees)</h6>
                            <figcaption className='price'>&#8358;10,000</figcaption>

                        </div>
                    </div>
                    <div className='overlay'>

                        <div className='gallary-image-2'>
                            <img src={main11} alt='main11' className='store-image' />
                        </div>
                        <Link className='view'>View</Link>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Faith is Trust (Tees)</h6>
                            <figcaption className='price'><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</figcaption>

                        </div>

                    </div>


                </div>
                <div className='gallary-container'>
                    <div className='original'>
                        <div className='gallary-image'>
                            <img src={main12} alt='main12' className='store-image' />
                        </div>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Take bake what's mine</h6>
                            <figcaption className='price'>&#8358;9000</figcaption>

                        </div>
                    </div>
                    <div className='overlay'>

                        <div className='gallary-image-2'>
                        <img src={main12} alt='main12' className='store-image' />
                        </div>
                        <Link className='view'>View</Link>
                        <div className='gallary-text'>
                            <h6 className='store-text'>Take bake what's mine</h6>
                            <figcaption className='price'><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</figcaption>

                        </div>

                    </div>


                </div>


            </Container>

            <Row style={{ marginTop: '15rem' }}>

                <Footer />
            </Row>

        </Container>

    )
}

export default Store