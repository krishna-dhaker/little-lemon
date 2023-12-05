import React, { useState } from "react";
import logo from "../images/Logo .svg"

const Nav = () => {
    const[menuopen, setMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!menuopen)
    }
    return (
    <nav className={`navbar ${menuopen ?"open" : ""}`}>
        <a href='/' className="logo">
            <img src={logo} alt="Logo"/>
        </a>
        [/* mobile navbar */]
        <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        
       <ul className={`nav-links ${menuopen ? "visible" : ""}`}>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/">About</a>
        </li>
        <li>
            <a href="/">Services</a>
        </li>
        <li>
            <a href="/">Menu</a></li>
            <li>
            <a href="/">Reservation</a>
        </li>
        <li>
            <a href="/">Order Online</a>
        </li>
        
        
        <li>
            <a href="/">Login</a>
        </li>
       </ul>

    </nav>
);
};
export default Nav;