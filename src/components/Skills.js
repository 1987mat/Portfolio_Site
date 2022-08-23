import React from 'react';
import { icons } from '../icons';

function Skills() {
  return (
    <section id="skills">
      <div className="icons-wrapper">
        {icons.map((icon, index) => (
          <div key={index}>{icon}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
