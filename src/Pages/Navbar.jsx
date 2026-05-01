import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1e293b] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400"> QuoDes ∑satyam
        </h1>
        <ul className="flex space-x-6 text-white text-lg">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
