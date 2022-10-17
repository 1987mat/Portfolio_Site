import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';
import cv from '../Matteo Calvani Resume.pdf';

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
      <img className="logo" src={logo} alt="logo"></img>
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
      <a className="resume-link" href={cv} download>
        <i className="fa fa-download"></i>
        <span>Resume</span>
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
};

export default NavBar;
