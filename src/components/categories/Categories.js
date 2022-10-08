import React from 'react';
import Section2 from '../../MainSection/Sidebar/Sidebar';
import Footer from '../../Footer.js/Footer';
import Carlton from './Carlton';
import Categories1 from './img/categories-1.png';
import Categories2 from './img/categories-2.png';
import Categories3 from './img/categories-3.png';
import Categories4 from './img/categories-4.png';
import Categories5 from './img/categories-5.png';
import './Categories.css'
import { Col, Container, Row } from 'react-bootstrap';


const Categories = () => {
    return (
        <div>
<Carlton/>
            <Container fluid className='middle'>

                <Col className=' categories-middle'>
                    <Row className='middle-top'>

                        <div className='middle-1'>
                            <img src={Categories1} alt='caegories1' className='middle-small' />

                            <div className='middle-text'>
                                <p>
                                    Life on the Sweet side /
                                    <span> Carlton Williams</span>
                                </p>

                            </div>
                        </div>
                        <div className='middle-1'>
                            <img src={Categories2} alt='caegories2' className='middle-small'/>

                            <div className='middle-text'>
                                <p>
                                    Life on the Sweet side /
                                    <span> Carlton Williams</span>
                                </p>

                            </div>
                        </div>
                    </Row>
                    <Row className='middle-1'>
                        <img src={Categories3} alt='caegories3'className='middle-large' />

                        <div className='middle-text'>
                            <p>
                                Life on the Sweet side /
                                <span> Carlton Williams</span>
                            </p>

                        </div>
                    </Row>
                    <Row className='middle-buttom'>

                        <div className='middle-1'>
                            <img src={Categories4} alt='caegories4' className='middle-small'/>

                            <div className='middle-text'>
                                <p>
                                    Life on the Sweet side /
                                    <span> Carlton Williams</span>
                                </p>

                            </div>
                        </div>
                        <div className='middle-1'>
                            <img src={Categories5} alt='caegories5' className='middle-small' />

                            <div className='middle-text'>
                                <p>
                                    Life on the Sweet side /
                                    <span> Carlton Williams</span>
                                </p>

                            </div>
                        </div>
                    </Row>

                </Col>
                <Col md={4}>
                <Section2 />
                </Col>
            </Container>
            <Footer />
        </div >

    )
}
export default Categories