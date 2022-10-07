import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Highlife.css';
import niara1 from './img/niara-1.png'

const Highlife = () => {
    return (
        <Container fluid style={{ margin: ' ' }}>
            <Row className='highlife-black'>
                <Col md={8}>
                    <div>

                        <img src={niara1} alt='niara1' className='highlife-top' />
                    </div>
                </Col>
                <Col md={4}>
                    <div>

                        <h2>Life on the Sweet Side</h2>
                        <h6>Carlton Williams</h6>
                        <p>Brody tries to protect his house as wildfires tear
                            through Malibu, and Justin is
                            caught in the middle when Audrina and Stephanie address rumors
                            during a trip to Las vegas.
                        </p>
                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default Highlife