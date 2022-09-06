import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Routes/navigation/navigation.component'
import Home from './Routes/home/home.component'
import About from './Routes/about-me/about.component'
import Contact from './Routes/contact/contact.component'
import Projects from './Routes/personal-projects/projects.component'
import Skills from './Routes/skills/skills.component'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects/*" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
