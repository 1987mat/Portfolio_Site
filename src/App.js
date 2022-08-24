import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const prevScrollY = useRef(0);
  const [showHeader, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scroll down
      if (prevScrollY.current < currentScrollY && showHeader) {
        setShowNav(false);
      }

      // Scroll Up
      if (prevScrollY.current > currentScrollY && !showHeader) {
        setShowNav(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showHeader]);

  return (
    <React.Fragment>
      <Navbar show={showHeader} />
      <main>
        <About />
        <Projects />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
