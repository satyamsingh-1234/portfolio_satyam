import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const menuItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Services', id: 'services' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 cursor-pointer select-none"
          onClick={() => handleLinkClick('home')}
        >
          QuoDes <span className="font-light text-cyan-300">∑</span>satyam
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-slate-300 text-base font-medium">
          {menuItems.map((item, i) => (
            <li key={i} className="relative py-1">
              <button
                onClick={() => handleLinkClick(item.id)}
                className={`transition-colors duration-300 hover:text-cyan-400 focus:outline-none ${
                  activeSection === item.id ? 'text-cyan-400 font-semibold' : ''
                }`}
              >
                {item.name}
              </button>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-400"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none hover:text-cyan-400 transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f172a]/95 backdrop-blur-lg border-b border-slate-800/80 overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 px-6 py-6 text-slate-300 text-lg font-medium">
              {menuItems.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full text-left py-2 hover:text-cyan-400 transition ${
                      activeSection === item.id ? 'text-cyan-400 font-bold border-l-2 border-cyan-400 pl-2' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
