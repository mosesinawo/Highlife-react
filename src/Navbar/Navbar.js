

import logo from "../img/logo.png";
import user from "../img/SVG/user-solid-circle.svg";
import cart from "../img/SVG/shopping-cart.svg";
import bars from '../img/bars.png';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

const HeaderNavbar = () => {

    const [mobile, setMobile] = useState(false)
    const showLink = () =>  setMobile(!mobile)
    const hideLink = () => setMobile(false)
    // const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="header-nav">
            <div className="nav-container">

                <div className="logo">
                    <img src={logo} alt='logo' />
                </div>
                <div onClick={showLink} className="bars-container">
                    <img className="bars" src={bars} alt='bars' />
                </div>

                <ul className={mobile ? "navbar-link active " : 'navbar-link'}>
                    <li onClick={hideLink} className="nav-li"> <Link to='/' className="navbar-items">Life Blood</Link></li>
                    <li onClick={hideLink} className="nav-li"> <Link to='/categories' className="navbar-items"> Carlton Williams</Link></li>
                    <li onClick={hideLink} className="nav-li"> <Link to='/store' className="navbar-items">Store</Link></li>
                    <li onClick={hideLink} className="nav-li"> <Link to='/highlifetv' className="navbar-items">HighLife Tv</Link></li>
                    <li onClick={hideLink} className="nav-li"> <Link to='/niara' className="navbar-items"> Naira</Link></li>
                    <div className="user1">
                        <img className="user-items" src={user} alt="user" />
                        <img className="user-items" src={cart} alt="cart" />
                        <span className="login">Sign Up/Login</span>
                    </div>
                </ul>
                <div className="user">
                    <img className="user-items" src={user} alt="user" />
                    <img className="user-items" src={cart} alt="cart" />
                    <span className="login">Sign Up/Login</span>
                </div>
            </div>


        </div>
    );
}

export default HeaderNavbar;