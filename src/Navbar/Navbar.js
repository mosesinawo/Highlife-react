

import logo from "../img/logo.png";
import user from "../img/SVG/user-solid-circle.svg";
import cart from "../img/SVG/shopping-cart.svg";
import magnifying from "../img/SVG/magnifying-glass.svg";
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
                   <span style={{fontSize:'1.5rem', fontWeight:'600', color:'#00a651'}}> Menu   </span> <i className={mobile ? "fas fa-times" : "fas fa-bars"} /> 
                </div>

                <ul className={mobile ? "navbar-link active " : 'navbar-link'}>
                    <li onClick={hideLink} className="nav-li"> <Link className="navbar-items"> High Life Church</Link></li>
                    <li onClick={hideLink} className="nav-li"> <Link to='/' className="navbar-items">Life Blood</Link></li>
                    <li onClick={hideLink} className="nav-li"> <Link to='/categories' className="navbar-items"> Carlton Williams</Link></li>
                    <li onClick={hideLink} className="nav-li"> <Link to='/store' className="navbar-items">Store</Link></li>
                    <li onClick={hideLink} className="nav-li"> <Link to='/highlifetv' className="navbar-items">HighLife Tv</Link></li>
                    <li onClick={hideLink} className="nav-li"> <Link to='/niara' className="navbar-items"> Naira</Link></li>
                    <li onClick={hideLink} className=""> <Link className="navbar-items"> 
                    <i class="fa fa-search" aria-hidden="true"></i>
                    </Link></li>
                    <div className="user1">
                    <i class="fa fa-user-circle user-items icons" aria-hidden="true"></i>
                        <i class="fa fa-shopping-cart user-items icons" aria-hidden="true"></i> 
                        <Link  className="login">Sign Up / Login</Link>
                    </div>
                </ul>
                <div className="user">
                <i class="fa fa-user-circle user-items icons" aria-hidden="true"></i>
                    <i class="fa fa-shopping-cart user-items icons" aria-hidden="true"></i> 
                    <Link  className="login">Sign Up / Login</Link>
                </div>
            </div>


        </div>
    );
}

export default HeaderNavbar;