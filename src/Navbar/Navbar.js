// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from "../img/logo.png";
import user from "../img/SVG/user-solid-circle.svg";
import cart from "../img/SVG/shopping-cart.svg";
import "./Navbar.css";
import {Link} from 'react-router-dom';
import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

const  HeaderNavbar = () => {

    const [mobile, setMobile] = useState(false)

  return (
   <div className="navbar">
    <div className="logo">
<img src={logo} alt='logo'/>
    </div>
    <ul className="navbar-link">
       <li className="nav-li"> <Link to='/' className="navbar-items">Life Blood</Link></li>
       <li className="nav-li"> <Link to='/categories' className="navbar-items"> Carlton Williams</Link></li>
       <li className="nav-li"> <Link to='/store' className="navbar-items">Store</Link></li>
       <li className="nav-li"> <Link className="navbar-items">HighLife Tv</Link></li>
       <li className="nav-li"> <Link className="navbar-items"> Naira</Link></li>
    </ul>
    <div className="user">
        <img className="user-items" src={user} alt="user"/>
        <img className="user-items" src={cart} alt="cart"/>
        <span>Sign Up/Login</span>
    </div>
   </div>
  );
}

export default HeaderNavbar;