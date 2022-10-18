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

      // Hide Navbar only on smaller screens
      if (window.innerWidth >= 992) {
        // Scroll down and hide navbar
        if (prevScrollY.current < currentScrollY && showHeader) {
          setShowHeader(false);
        }
        // Scroll Up and show navbar
        if (
          (prevScrollY.current > currentScrollY && !showHeader) ||
          (window.pageYOffset < 50 && !showHeader)
        ) {
          setShowHeader(true);
        }
        prevScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showHeader]);

  // Fade in animation on scroll
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

  // Fade in effect when user scroll to sections
  useEffect(
    () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle('show', entry.isIntersecting);
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

      if (window.innerWidth >= 992) {
        observer.observe(headShot.current);
      }
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
