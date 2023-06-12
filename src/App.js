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

  const projectCards = useRef([]);
  const pushRef = (el) => projectCards.current.push(el);
  const heading = useRef(null);
  const headShot = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  const refs = {
    ref1: heading,
    ref2: headShot,
  };

  // Fade / slide up animation on scroll
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
      observer.observe(skills.current);
      observer.observe(contact.current);

      projectCards.current.forEach((card) => {
        observer.observe(card);
      });

      observer.observe(headShot.current);
    },
    [projectCards],
    heading,
    headShot,
    skills,
    contact
  );

  return (
    <React.Fragment>
      <NavBar show={showHeader} />
      <main>
        <About ref={refs} />
        <Projects ref={pushRef} />
        <Skills ref={skills} />
        <ContactForm ref={contact} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
