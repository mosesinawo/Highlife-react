import React from 'react';
import './Calton.css';
import { Col, Container, Row } from 'react-bootstrap';

const Carlton = () => {
  return (
    <Container fluid>
            <Row className='carlton'>

                <Col md={8} className='carlton-container1'>
                    {/* <img src={niara1} alt='niara1' className='carlton-image1' /> */}
                    <div className='carlton-text'>
                        <p className='carlton-williams'>
                            Life on the Sweet side /
                            <span> Carlton Williams</span>
                        </p>

                    </div>
                </Col>

                <Col md={4} className='carlton-container2' >

                    <div className='sub1'>

                        {/* <img src={niara2} alt='niara2' className='carlton-image2' /> */}
                        <div className='carlton-text'>

                            <p className='carlton-williams'>
                                Life on the Sweet side /
                                <span> Carlton Williams</span>
                            </p>
                        </div>
                    </div>

                    <div className='sub2'>

                        {/* <img src={niara3} alt='niara3' className='carlton-image2' /> */}
                        <div className='carlton-text'>
                            <p className='carlton-williams'>
                                Life on the Sweet side /
                                <span> Carlton Williams</span>
                            </p>

                        </div>
                    </div>



                </Col>
            </Row>
        </Container>
  )
}

export default Carlton