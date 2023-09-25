// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/About';
// import Nav from './components/Nav';

// const App = () => {
//   return (
//     <div>
//       <Nav />
//       <BrowserRouter>
//          <Routes>
//            <Route path='/' element={<Home />} />
//          </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

// eslint-disable-next-line no-unused-vars
import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import Background from './background/Background.js';
import PlayerStats from './components/PlayerStats';

const App = () => {
  return (
    <>
      <div>
      <Router>
        <Nav />
        <Background />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <PlayerStats />
      </Router>
      </div>
      
    </>
  );
};

export default App;
