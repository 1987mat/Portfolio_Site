import React from 'react';
import { icons } from '../icons';

const Skills = React.forwardRef((props, ref) => {
  return (
    <section id="skills">
      <div className="icons-wrapper" ref={ref}>
        {icons.map((icon, index) => (
          <div key={index}>{icon}</div>
        ))}
      </div>
    </section>
  );
});

export default Skills;
