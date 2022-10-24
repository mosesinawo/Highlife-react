import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Product.css'
import cart from './img/main-1.png';
import main9 from './img/main-9.png';
import main10 from './img/main-10.png';
import main11 from './img/main-11.png';
import main12 from './img/main-12.png';
import fb from './img/facebook.svg';
import tw from './img/twitter.svg';
import pi from './img/pinterest2.svg';
import Footer from '../../Footer.js/Footer';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div>
            <Container>
                <Row className='product-text-container'>
                    <Col md={4} className='product-img-body'>
                        <img src={cart} alt='cart' className='product-image' />
                    </Col>
                    <Col md={8} className='product-text-body'>
                        <h2 className='product-header'>Dig it: Find your destiny in <br/> the dirt</h2>
                        <h3 className='product-price'>&#8358;3,000</h3>
                        <p className='product-paragraph'>Dig it: Finding Your destiny in the dirt - DVD SERIES:
                            Do you think about that one aspect of life that hasn't turned out as you planned and say.
                            Is it time to keep pushing or just cut my losses? In this series,
                            Pastor Steven Furtick shared with the Church how disappointment can change
                            your direction or strengthen you for the task ahead. If you've ever been frustrated by the
                            pace of change or the intense effort and concentration it takes to break through spiritually,
                            you'll be energized by
                            these teachings. It's all part of His plan, so prepare your heart and mind to Dig It!</p>
                        <div className='cart-box'>
                            <div className='cart-item'>
                                <label className='product-quantity'>Quantity</label>
                                <input type='number' placeholder='2' className='product-input' />
                            <Link className='add-cart'>Add to cart</Link>
                            </div>

                            <div className='product-icon' >
                                <img className='product-icon-item' src={fb} alt='fb'/>
                                <img className='product-icon-item' src={tw} alt='tw'/>
                                <img className='product-icon-item' src={pi} alt='pi'/>

                            </div>
                        </div>
                    </Col>
                </Row>

                <div>
                    <h2 className='product-text'> You will also like:</h2>
                    <div className='greenline'>&nbsp;</div>
                    <div  className='store-container'>
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
                                <h6 className='view'>View</h6>
                                <div className='gallary-text'>
                                    <h6 className='store-text'>Don't stop: a spiritual guide to never ever quitting</h6>
                                    <figcaption className='price'>Add to cart</figcaption>

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
                                <h6 className='view'>View</h6>
                                <div className='gallary-text'>
                                    <h6 className='store-text'>Mighty to save all who call</h6>
                                    <figcaption className='price'>Add to cart</figcaption>

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
                                <h6 className='view'>View</h6>
                                <div className='gallary-text'>
                                    <h6 className='store-text'>Faith is Trust (Tees)</h6>
                                    <figcaption className='price'>Add to cart</figcaption>

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
                                <h6 className='view'>View</h6>
                                <div className='gallary-text'>
                                    <h6 className='store-text'>Take bake what's mine</h6>
                                    <figcaption className='price'>Add to cart</figcaption>

                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </Container>
            <Footer/>
        </div>
    )
}

export default Product