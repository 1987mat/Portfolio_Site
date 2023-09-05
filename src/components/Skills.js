import React from 'react';
import { icons } from '../icons';

const Skills = React.forwardRef((props, ref) => {
  const { ref1, ref2 } = ref;

  return (
    <section id="skills">
      <h1 className="skills-title" ref={ref1}>
        Skills
      </h1>
      <div className="icons-wrapper" ref={ref2}>
        {icons.map((icon, index) => (
          <div key={index}>{icon}</div>
        ))}
      </div>
    </section>
  );
});

export default Skills;
