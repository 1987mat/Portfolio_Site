import React from 'react';
import Typewriter from 'typewriter-effect';

function About() {
  return (
    <section id="about">
      <div className="heading-wrapper">
        <h1 className="main-title">Matteo Calvani</h1>
        <div className="type-writer-wrapper">
          <span style={{ color: 'darkred' }}>Web</span>
          <Typewriter
            options={{
              strings: ['Developer', 'Designer'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="down-arrow-container">
        <a href="#projects">
          <div className="down-arrow-wrapper">
            <i className="fa fa-chevron-down"></i>
            <i className="fa fa-chevron-down"></i>
            <i className="fa fa-chevron-down"></i>
          </div>
        </a>
      </div>
    </section>
  );
}

export default About;
