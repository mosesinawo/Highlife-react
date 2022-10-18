import React from 'react';
import radio from "./img/radio.png";
import niara8 from "./img/niara-8.png";
import niara10 from "./img/niara-10.png";
import niara11 from "./img/niara-11.png";
import './Sidebar.css';

// import 'bootstrap/dist/css/bootstrap.min.css';



const Section2 = () => {
  return (
    <div className='sidebar'>
      <div className='world'>
        <h1 className='side-head'>Our World</h1>

        <img src={niara8} alt={niara8} className="side-image" />
        <h2>Nigeria is the Lord's</h2>
        <p className='date'>High Life Music</p>
        <img src={radio} alt="radio" className="side-image" />

      </div>

      <div className='events'>
        <h1 className='side-head'>Events</h1>
        <h4 className='events-head'>High Life Music Album Launch</h4>
        <p className='date'>12 march 2019</p>
        <h4 className='events-head'>World Blood Donor Day drive</h4>
        <p className='date'>12 march 2019</p>
        <h4 className='events-head'>On Eagles Wings Prophetic Gathering</h4>
        <p className='date'>12 march 2019</p>
      </div>
      <p>all Events</p>
      <div className='store'>
        <div>
          <img src={niara10} alt='niara10' className="side-image" />
          <h4>New series from carlton Williams</h4>
        </div>
        <div>
          <img src={niara11} alt='niara11' className="side-image" />
          <h4>New series from carlton Williams</h4>
        </div>

      </div>
    </div>
  )
}

export default Section2;