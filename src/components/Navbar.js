import React, { useState } from 'react';
import logo from '../images/logo.png';
import cv from '../Matteo Calvani Resume.pdf';

function Navbar({ show }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleToggle = () => {
    setShowMobileMenu((prev) => !prev);
    setClicked((prev) => !prev);
    document.documentElement.classList.toggle('no-scroll');
  };

  const handleClick = () => {
    // Close mobile menu when click on nav item
    if (clicked) {
      setShowMobileMenu((prev) => !prev);
      setClicked((prev) => !prev);
      document.documentElement.classList.toggle('no-scroll');
    }
  };

  return (
    <header className={!show ? 'hidden' : ''}>
      <div
        onClick={handleToggle}
        className={clicked ? 'hamburger clicked' : 'hamburger'}
      >
        <div></div>
      </div>
      <img className="logo" src={logo} alt="logo"></img>
      <nav onClick={handleClick} className={showMobileMenu ? 'show' : ''}>
        <ul className="main-navigation">
          <li>
            <i className="fa fa-user"></i>
            <a href="#about">About</a>
          </li>
          <li>
            <i className="fa fa-suitcase" aria-hidden="true"></i>{' '}
            <a href="#projects">Work</a>
          </li>
          <li>
            <i className="fa fa-laptop"></i>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <i className="fa fa-comment"></i>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <a className="resume-link" href={cv} download>
        <i className="fa fa-download"></i>
        Resume
      </a>
      <div className="sm-icons">
        <a
          className="github"
          href="https://github.com/1987mat"
          target="e_blank"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/matteo-calvani-0802b0234/"
          target="e_blank"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
