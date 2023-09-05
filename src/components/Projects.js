import React from 'react';
import { projects } from '../data';

const Projects = React.forwardRef((props, ref) => {
  const { ref1, ref2 } = ref;

  return (
    <section id="projects">
      <h1 className="projects-title" ref={ref1}>
        Projects
      </h1>
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <div ref={ref2} key={index} className="project-container">
            <h2 className="project-title">{project.title}</h2>
            <a
              className="project-card-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="screenshot"
                src={project.image}
                alt="screenshot"
              ></img>
              <div className="project-description-wrapper">
                <p className="project-description">{project.description}</p>
              </div>
            </a>
            <div className="project-links-wrapper">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <p>
                  Live Version
                  <i
                    className="fa fa-external-link-square"
                    aria-hidden="true"
                  ></i>
                </p>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-icon"
              >
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;
