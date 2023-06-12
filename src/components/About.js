import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import headshot from '../images/photo.jpg';

const About = React.forwardRef((props, ref) => {
  const { ref1, ref2 } = ref;
  return (
    <section id="about">
      <div className="heading-wrapper" ref={ref1}>
        <div className="heading">
          <span>Hi, I'm</span>
          <h1 className="main-title">Matteo</h1>
        </div>
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
          I design, code and build user-friendly and responsive sites and
          applications.
        </p>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="btn-about"
        >
          WORK
        </Link>
      </div>
      <div className="photo-container">
        <div className="photo-wrapper" ref={ref2}>
          <img src={headshot} alt="headshot"></img>
        </div>
      </div>
    </section>
  );
});

export default About;
