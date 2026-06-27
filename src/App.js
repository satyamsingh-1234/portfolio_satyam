import React, { useEffect, useState } from 'react';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Services from './Pages/Services';
import Projects from './Pages/Project';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const percentage = (window.scrollY / totalScroll) * 100;
        setScrollProgress(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0f172a] text-slate-100 min-h-screen relative overflow-hidden font-sans">
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-indigo-500 z-50 transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Elegant Ambient Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[45%] h-[45%] rounded-full bg-purple-500/5 blur-[130px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;