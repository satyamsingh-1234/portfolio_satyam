import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import MyPortfolio from '../assets/MyPortfolio.jpg';

const Home = () => {
  const [emailCopied, setEmailCopied] = React.useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("satyam.kumar@credflow.in");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
    window.location.href = "mailto:satyam.kumar@credflow.in";
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-16 text-center md:text-left bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#121b2e] pt-28 md:pt-0 relative overflow-hidden"
    >
      {/* Visual Decoration Blob */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      {/* Hero Image Section (Orders first on mobile) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative w-64 h-64 md:w-[380px] md:h-[380px] order-1 md:order-2 flex-shrink-0 mt-8 md:mt-0"
      >
        {/* Glow border ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 blur-md opacity-70 animate-pulse" />

        {/* Main image container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800/80 shadow-2xl">
          <motion.img
            src={MyPortfolio}
            alt="Satyam Kumar Singh"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=500&auto=format&fit=crop";
            }}
          />
        </div>
      </motion.div>

      {/* Text Content Section */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-2xl mt-10 md:mt-0 md:mr-16 order-2 md:order-1 flex flex-col items-center md:items-start z-10"
      >
        <span className="text-cyan-400 font-semibold tracking-wider text-sm md:text-base uppercase bg-cyan-950/40 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
          Welcome to my portfolio
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">
            Satyam Singh
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-6 text-center md:text-left h-auto">
          MERN Stack Developer & Junior Professor
        </h2>

        <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed max-w-lg text-center md:text-left">
          Passionate about crafting high-performance, pixel-perfect user interfaces and building scalable, full-stack architectures. Combining coding expertise with leadership.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8 w-full">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="px-8 py-3.5 bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-900 font-bold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            View My Work
          </a>
          <button
            onClick={() => alert("Resume download is coming soon!")}
            className="px-8 py-3.5 bg-slate-800 text-slate-200 font-bold rounded-full border border-slate-700 hover:bg-slate-700 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Download CV
          </button>
        </div>

        {/* Floating Social Icons */}
        <div className="flex space-x-6 text-slate-400 text-2xl items-center">
          <a
            href="https://github.com/satyamsingh-1234"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/satyam-singh-b1216b252/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <div className="relative group">
            <a
              href="mailto:satyam.kumar@credflow.in"
              onClick={handleEmailClick}
              className="hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110 block"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-slate-800 text-slate-200 border border-slate-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {emailCopied ? "Copied!" : "Copy: satyam.kumar@credflow.in"}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
