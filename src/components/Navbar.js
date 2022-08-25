import React, { useState } from 'react';

import logo from '../images/logo.png';

function Navbar({ show }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleToggle = () => {
    setShowMobileMenu((prev) => !prev);
    setClicked((prev) => !prev);
    document.documentElement.classList.toggle('no-scroll');
  };

  return (
    <header className={!show ? 'hidden' : ''}>
      <div
        onTouchStart={handleToggle}
        className={clicked ? 'hamburger clicked' : 'hamburger'}
      >
        <div></div>
      </div>
      <img className="logo" src={logo} alt="logo"></img>
      <nav onTouchStart={handleToggle} className={showMobileMenu ? 'show' : ''}>
        <ul className="main-navigation">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
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
