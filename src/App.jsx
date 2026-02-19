import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Sections/About/About';
import Services from './Components/Services/Services';
import Contact from './Sections/Contact/Contact';
import Hero from './Sections/Hero/Hero';
import Resume from './Sections/Resume/Resume';
import Portfolio from './Sections/Portfolio/Portfolio';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Contact />
          </>
        } />
        {/* Separate Pages */}
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;