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
        <h4>Nigeria is the Lord's</h4>
        <p className='date'>High Life Music</p>
        <img src={radio} alt="radio" style={{width:'70%', color:'#eee'}} />

      </div>

      <div className='events'>
        <h1 className='side-head'>Events</h1>
        <h6 className='events-head'>High Life Music Album Launch</h6>
        <p className='date'>12 march 2019</p>
        <h6 className='events-head'>World Blood Donor Day drive</h6>
        <p className='date'>12 march 2019</p>
        <h6 className='events-head'>On Eagles Wings Prophetic Gathering</h6>
        <p className='date'>12 march 2019</p>
        <p className='foward'>all events <i class="fa fa-share" aria-hidden="true"></i></p>
      </div>
      
      <div className='side-store'>
        <h2 className='store-header'>Store</h2>
        
          <img src={niara10} alt='niara10' className="side-image-2" />
          <h6>New series from carlton Williams</h6>
        
        
          <img src={niara11} alt='niara11' className="side-image-2" />
          <h6>Official High Life World Merch Stone</h6>
        

      </div>
    </div>
  )
}

export default Section2;