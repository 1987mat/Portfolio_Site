import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const prevScrollY = useRef(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // Hide navbar on scroll
      if (prevScrollY.current < currentScrollY && showHeader) {
        setShowHeader(false);
      }
      if (
        (prevScrollY.current > currentScrollY || window.pageYOffset < 50) &&
        !showHeader
      ) {
        setShowHeader(true);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showHeader]);

  // Fade / slide up animation on scroll
  const heading = useRef(null);
  const headShot = useRef(null);
  const projectsTitle = useRef([]);
  const projectCards = useRef([]);
  const pushRef = (el) => projectCards.current.push(el);
  const skillsTitle = useRef(null);
  const skillsWrapper = useRef(null);
  const contact = useRef(null);

  const aboutRefs = {
    ref1: heading,
    ref2: headShot,
  };

  const projectsRefs = {
    ref1: projectsTitle,
    ref2: pushRef,
  };

  const skillsRefs = {
    ref1: skillsTitle,
    ref2: skillsWrapper,
  };

  useEffect(
    () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle('slide-up', entry.isIntersecting);
            if (entry.isIntersecting) observer.unobserve(entry.target);
          });
        },
        {
          treshold: 0.7,
        }
      );

      observer.observe(heading.current);
      observer.observe(headShot.current);
      observer.observe(projectsTitle.current);
      projectCards.current.forEach((card) => {
        observer.observe(card);
      });
      observer.observe(skillsTitle.current);
      observer.observe(skillsWrapper.current);
      observer.observe(contact.current);
    },
    [projectCards],
    heading,
    headShot,
    projectsTitle,
    skillsTitle,
    skillsWrapper,
    contact
  );

  return (
    <React.Fragment>
      <NavBar show={showHeader} />
      <main>
        <About ref={aboutRefs} />
        <Projects ref={projectsRefs} />
        <Skills ref={skillsRefs} />
        <ContactForm ref={contact} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
