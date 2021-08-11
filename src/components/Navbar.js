import React from "react";
import "../stylesheets/Navbar.css";
import hamburger from "../assets/images/icon-hamburger.svg";
import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} />
        <ul className="links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a className="contact-btn" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <img className="hamburger" src={hamburger} />
      </div>
    </>
  );
}

export default Navbar;
