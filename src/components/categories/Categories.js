import React from 'react';
import Section2 from '../../MainSection/Sidebar/Sidebar';
import Footer from '../../Footer.js/Footer';
import Categories1 from './img/categories-1.png';
import Categories2 from './img/categories-2.png';
import Categories3 from './img/categories-3.png';
import Categories4 from './img/categories-4.png';
import Categories5 from './img/categories-5.png';
import './Categories.css'


const Categories = () => {
    return (
        <div>
            <div className='categories-top'>
                <div className='categories-1'>
                    {/* <img src={niara1} /> */}
                    <div className='categories-text'>
                        <p>
                            Life on the Sweet side /
                            <span> Carlton Williams</span>
                        </p>

                    </div>
                </div>

                <div className='categories-2'>

                    {/* <img src={niara2} alt='niara2' /> */}
                    <div className='categories-text'>

                        <p>
                            Life on the Sweet side /
                            <span> Carlton Williams</span>
                        </p>
                    </div>
                </div>

                <div className='categories-3'>

                    {/* <img src={niara3} alt='niara3' /> */}
                    <div className='categories-text'>
                        <p>
                            Life on the Sweet side /
                            <span> Carlton Williams</span>
                        </p>

                    </div>
                </div>
            </div>


            <div className='middle'>

                <div className=' categories-middle'>
                    <div className='middle-top'>

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
                    </div>
                    <div className='middle-1'>
                        <img src={Categories3} alt='caegories3'className='middle-large' />

                        <div className='middle-text'>
                            <p>
                                Life on the Sweet side /
                                <span> Carlton Williams</span>
                            </p>

                        </div>
                    </div>
                    <div className='middle-buttom'>

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
                    </div>

                </div>
                <Section2 />
            </div>
            <Footer />
        </div >

    )
}
export default Categories