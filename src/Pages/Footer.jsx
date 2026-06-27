import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [emailCopied, setEmailCopied] = React.useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("satyam.kumar@credflow.in");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
    window.location.href = "mailto:satyam.kumar@credflow.in";
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0b1222] border-t border-slate-900 text-slate-400 py-12 px-6 md:px-16 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo and copyright */}
        <div className="text-center md:text-left">
          <h2 
            className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 cursor-pointer select-none mb-2"
            onClick={() => handleScroll('home')}
          >
            QuoDes <span className="font-light text-cyan-300">∑</span>satyam
          </h2>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Satyam Kumar Singh. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {['home', 'about', 'skills', 'services', 'projects', 'contact'].map((id) => (
            <li key={id}>
              <button
                onClick={() => handleScroll(id)}
                className="hover:text-cyan-400 capitalize transition duration-300"
              >
                {id}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-6">
          {/* Socials */}
          <div className="flex gap-4 text-xl items-center">
            <a
              href="https://github.com/satyamsingh-1234"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/satyam-singh-b1216b252/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <div className="relative group">
              <a
                href="mailto:satyam.kumar@credflow.in"
                onClick={handleEmailClick}
                className="hover:text-cyan-400 transition duration-300 block"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-slate-800 text-slate-200 border border-slate-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {emailCopied ? "Copied!" : "Copy: satyam.kumar@credflow.in"}
              </span>
            </div>
          </div>

          {/* Scroll to Top button */}
          <button
            onClick={() => handleScroll('home')}
            className="p-3 bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-white rounded-full transition-all duration-300 flex items-center justify-center shadow-lg"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-xs" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
