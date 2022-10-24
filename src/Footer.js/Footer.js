import React from 'react';
import './Footer.css'
import logo from "../img/logo.png";
import facebook from './img/facebook.svg'
import instagram from './img/instagram.svg'
import twitter from './img/twitter.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-head'>
        <h1 className='footer-text' > Be a Part of The Highlife World</h1>
        <h3 className='footer-text2'>Join our mailing list</h3>
        <div className='footer-input'>

          <input type='text' placeholder='email@example.com' /><Link className='buttn'>subscribe</Link>
        </div>
      </div>
      <div className=''>
        <ul className='footer-link'>
        <img src={logo} alt='logo' />
          <li className='footer-items'>About</li>
          <li className='footer-items'>Contact</li>
          <li className='footer-items'>Give</li>
          <li className='footer-items'>Privacy</li>
          <li className='footer-items'>Terms</li>
          <div className='social'>
            <p className='social-items'><img src={facebook} alt='facebook'/></p>
            <p className='social-items'><img src={instagram} alt='instagram'/></p>          
            <p className='social-items'><img src={twitter} alt='twittwr'/></p>         
            </div>
        </ul>
        <p className='copy'>&copy; 2022 High Life World. All Right Reserved</p>
      </div>

    </div>
  )
}

export default Footer