import './App.css';
import React, { useRef } from 'react';
import Navbar from './Components/Navbar';
import Sections from './Components/Sections';
import Footer from './Components/Footer';


function App() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
  
    const scrollTo = (ref) => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <div>
      <Navbar 
        onHomeClick={() => scrollTo(homeRef)}
        onAboutClick={() => scrollTo(aboutRef)}
        onProjectsClick={() => scrollTo(projectsRef)}
        onContactClick={() => scrollTo(contactRef)}
      />
      <Sections 
        onProjectsClick={() => scrollTo(projectsRef)}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Footer onHomeClick={() => scrollTo(homeRef)}
        onAboutClick={() => scrollTo(aboutRef)}
        onProjectsClick={() => scrollTo(projectsRef)}
        onContactClick={() => scrollTo(contactRef)}/>
    </div>
  );
}

export default App;
