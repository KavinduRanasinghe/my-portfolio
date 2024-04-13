import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeroSection } from './components/HeroSection/HeroSection.jsx';
import { About } from './components/About/About.jsx';
import { Education } from './components/Education/Education.jsx';
import { Experience } from './components/Experience/Experience.jsx'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Project } from './components/Project/Project.jsx';
import { Skill } from './components/Skill/Skill.jsx';


const App = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Project />
      <Education />
      <Experience />
      <NavBar />
      <Skill />
    </div>
  );
};

export default App;
