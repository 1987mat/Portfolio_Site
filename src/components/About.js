import React from 'react';
import Typewriter from 'typewriter-effect';
import headshot from '../images/photo.jpg';

const About = React.forwardRef((props, ref) => {
  const { ref1, ref2 } = ref;
  return (
    <section id="about">
      <div className="heading-wrapper" ref={ref1}>
        <p className="small-title">Hi, I'm</p>
        <h1 className="main-title">Matteo Calvani.</h1>
        <div className="type-writer-wrapper">
          <span style={{ color: '#f08000', fontWeight: 'lighter' }}>Web</span>
          <Typewriter
            options={{
              strings: ['Developer', 'Designer'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="heading-text">
          I build user-friendly and responsive websites using front end
          technologies in a creative way. I like to constantly learn new things
          and acquire skills in (but not limited to) web development.
        </p>
        <a href="#projects" className="btn-about">
          Projects
        </a>
      </div>
      <div className="photo-wrapper" ref={ref2}>
        <div className="border top left"></div>
        <div className="border top right"></div>
        <div className="border bottom left"></div>
        <div className="border bottom right"></div>
        <img src={headshot} alt="headshot"></img>
      </div>
    </section>
  );
});

export default About;
