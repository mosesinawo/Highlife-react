import React from 'react';
import Section1 from './Section-A';
import Section2 from './Sidebar/Sidebar.js';
import './Main.css'
const Main = () => {
  return (
    <div className='body' style={{display: 'flex'}}>
      <Section1 style={{flex:"3"}}/> 
      <Section2 style={{flex:"1"}}/>

    </div>

      
  )
}

export default Main