import React from "react";
import "../stylesheets/Navbar.css"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src="../assets/images/logo.svg" />
        <ul className="links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a className="contact-btn" href="#contact">Contact</a></li>
        </ul>
        <img className="hamburger" src="../assets/images/icon-hamburger.svg" />
      </div>
    </>
  );
}

export default Navbar;
