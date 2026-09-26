import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import About from './components/About';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Hero onOpenResume={() => setIsResumeOpen(true)} />
      <Impact />
      <About />
      <Education />
      <Experience />
      <Certificates />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}

export default App;
