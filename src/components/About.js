import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import headshot from '../images/photo.jpg';

const About = React.forwardRef((props, ref) => {
  const { ref1, ref2 } = ref;
  return (
    <section id="about">
      <div className="heading-wrapper" ref={ref1}>
        <h1 className="main-title">Matteo Calvani</h1>
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
          I design and build user-friendly and responsive websites. I love
          learning and working on cool and interesting projects.
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
