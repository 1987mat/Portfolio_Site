import React from 'react';
import logo from '../images/logo.png';

function Navbar({ show }) {
  return (
    <header className={!show ? 'hidden' : ''}>
      <img className="logo" src={logo} alt="logo"></img>
      <nav>
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
      <a className="github" href="https://github.com/1987mat" target="e_blank">
        <i className="fa fa-github"></i>
      </a>
    </header>
  );
}

export default Navbar;
