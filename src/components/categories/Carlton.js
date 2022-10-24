import React from 'react';
import './Calton.css';
import { Col, Container, Row } from 'react-bootstrap';

const Carlton = () => {
  return (
    <Container fluid style={{marginTop: '8rem'}}>
            <Row className='carlton'>

                <Col md={8} className='carlton-container1'>
                    {/* <img src={niara1} alt='niara1' className='carlton-image1' /> */}
                    <div className='carlton-text'>
                        <p className='carlton-williams'>
                        <i class="fa fa-play-circle-o" aria-hidden="true"></i>
                            Life on the Sweet side /
                            <span className='span-1'> Carlton Williams</span>
                        </p>

                    </div>
                </Col>

                <Col md={4} className='carlton-container2' >

                    <div className='sub1'>

                        {/* <img src={niara2} alt='niara2' className='carlton-image2' /> */}
                        <div className='carlton-text'>

                            <p className='carlton-williams-2'>
                            <i class="fa fa-play-circle-o" aria-hidden="true"></i>
                                Life on the Sweet side /
                                <span className='span-2'> Carlton Williams</span>
                            </p>
                        </div>
                    </div>

                    <div className='sub2'>

                        {/* <img src={niara3} alt='niara3' className='carlton-image2' /> */}
                        <div className='carlton-text'>
                            <p className='carlton-williams-2'>
                            <i class="fa fa-play-circle-o" aria-hidden="true"></i>
                                Life on the Sweet side /
                                <span className='span-2'> Carlton Williams</span>
                            </p>

                        </div>
                    </div>



                </Col>
            </Row>
        </Container>
  )
}

export default Carlton