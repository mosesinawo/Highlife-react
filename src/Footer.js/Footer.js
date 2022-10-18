import React from 'react';
import './Footer.css'
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <div className='container'>
      <div className='footer-head'>
        <h1 className='footer-text' > Be a Part of The Highlife World</h1>
        <h3 className='footer-text2'>Join our mailing list</h3>
        <div className='footer-input'>

        <input type='text' placeholder='email@example.com' /><button type='button'>SUBSCRIBE</button>
        </div>
      </div>
      <div className=''>
        <ul className='footer-link'>
          <li style={{borderBottom: 'none'}} className='footer-items'><img src={logo} alt='logo' /></li>
          <li className='footer-items'>About</li>
          <li className='footer-items'>Contact</li>
          <li className='footer-items'>Give</li>
          <li className='footer-items'>Privacy</li>
          <li className='footer-items'>Terms</li>
        </ul>
        <p className='copy'>&copy; 2022 High Life World. All Right Reserved</p>
      </div>

    </div>
  )
}

export default Footer