import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';
// import cv from '../resume2.pdf';

const NavBar = ({ show }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleToggle = () => {
    setShowMobileMenu((prev) => !prev);
    setClicked((prev) => !prev);
    document.documentElement.classList.toggle('no-scroll');
  };

  const handleClick = () => {
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
      <Link to="about" spy={true} smooth={true} offset={0} duration={1000}>
        <img className="logo" src={logo} alt="logo"></img>
      </Link>
      <nav className={showMobileMenu ? 'show' : ''}>
        <ul className="main-navigation">
          <li>
            <i className="fa fa-user"></i>
            <Link
              className="nav-link"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              onClick={handleClick}
            >
              About
            </Link>
          </li>
          <li>
            <i className="fa fa-suitcase" aria-hidden="true"></i>
            <Link
              className="nav-link"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              onClick={handleClick}
            >
              Work
            </Link>
          </li>
          <li>
            <i className="fa fa-laptop"></i>
            <Link
              className="nav-link"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              onClick={handleClick}
            >
              Skills
            </Link>
          </li>
          <li>
            <i className="fa fa-comment"></i>
            <Link
              className="nav-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              onClick={handleClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* <a className="resume-link" href={cv} download="Matteo Calvani Resume">
        <i className="fa fa-download"></i>
        <span>Resume</span>
      </a> */}
      <a
        href="https://github.com/1987mat"
        target="_blank"
        rel="noreferrer"
        className="github-link"
      >
        <i className="fa fa-github"></i>
      </a>
    </header>
  );
};

export default NavBar;
