import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import GlassCard from './GlassCard';
import Contact from './Pages/Contact';
import Projects from './Pages/Project';

function App() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <GlassCard />
    </div>
  );
}

export default App;