import React from 'react';

function Navbar({ show }) {
  return (
    <header className={!show ? 'hidden' : ''}>
      <nav>
        <ul className="main-navigation">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
