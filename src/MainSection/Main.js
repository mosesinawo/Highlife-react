import React from 'react';
import Section1 from './Section-A';
import Section2 from './Sidebar/Sidebar.js';
import './Main.css'
const Main = () => {
  return (
    <div className='body' >
      <Section1 /> 
      <Section2 />
      

    </div>

      
  )
}

export default Main