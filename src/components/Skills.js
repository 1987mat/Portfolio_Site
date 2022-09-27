import React from 'react';
import { icons } from '../icons';

function Skills() {
  return (
    <section id="skills">
      <h1 className="skills-section-title">Tech Stacks</h1>
      <div className="icons-wrapper">
        {icons.map((icon, index) => (
          <div key={index}>{icon}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
