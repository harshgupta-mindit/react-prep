import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <div className="topnav">
                <p className='topnav-logo'>Re-Act</p>
                <div className="topnav-left">
                    <a className="active" href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <input id='nav-search' type="text" placeholder="Search.." />
                </div>
            </div>
        </>
    )
}

export default Navbar