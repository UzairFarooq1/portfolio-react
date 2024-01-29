import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChuckNorrisJokes from './components/ChuckNorrisJokes';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/footer" element={<Footer />} /> 
          <Route path="/chucknorrisjokes" element={<ChuckNorrisJokes />}/>
        </Routes>
    </Router>
  );
}

export default App;
