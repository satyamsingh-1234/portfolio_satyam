import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaJava,
  FaCode,
  FaSearch,
  FaGoogle,
  FaFileExcel
} from 'react-icons/fa';

import {
  SiCplusplus,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiAdobephotoshop,
  SiCanva
} from 'react-icons/si';

const skillCategories = {
  Frontend: [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, glow: 'hover:shadow-orange-500/20 hover:border-orange-500/30' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, glow: 'hover:shadow-blue-500/20 hover:border-blue-500/30' },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" />, glow: 'hover:shadow-yellow-400/20 hover:border-yellow-400/30' },
    { name: 'React.js', icon: <FaReact className="text-cyan-400 animate-spin-slow" />, glow: 'hover:shadow-cyan-400/25 hover:border-cyan-400/40' },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" />, glow: 'hover:shadow-purple-500/20 hover:border-purple-500/30' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" />, glow: 'hover:shadow-sky-400/20 hover:border-sky-400/30' }
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, glow: 'hover:shadow-green-500/20 hover:border-green-500/30' },
    { name: 'Express.js', icon: <SiExpress className="text-slate-300" />, glow: 'hover:shadow-slate-400/20 hover:border-slate-400/30' },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, glow: 'hover:shadow-green-600/20 hover:border-green-600/30' },
    { name: 'MySQL', icon: <SiMysql className="text-blue-400" />, glow: 'hover:shadow-blue-400/20 hover:border-blue-400/30' }
  ],
  Programming: [
    { name: 'Java', icon: <FaJava className="text-red-500" />, glow: 'hover:shadow-red-500/20 hover:border-red-500/30' },
    { name: 'C', icon: <FaCode className="text-slate-300" />, glow: 'hover:shadow-slate-300/20 hover:border-slate-300/30' },
    { name: 'C++', icon: <SiCplusplus className="text-indigo-400" />, glow: 'hover:shadow-indigo-500/20 hover:border-indigo-500/30' }
  ],
  Tools: [
    { name: 'Git', icon: <FaGitAlt className="text-orange-400" />, glow: 'hover:shadow-orange-400/20 hover:border-orange-400/30' },
    { name: 'GitHub', icon: <FaGithub className="text-white" />, glow: 'hover:shadow-slate-400/30 hover:border-slate-500/30' },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-500" />, glow: 'hover:shadow-blue-500/20 hover:border-blue-500/30' },
    { name: 'Excel', icon: <FaFileExcel className="text-emerald-500" />, glow: 'hover:shadow-emerald-500/20 hover:border-emerald-500/30' },
    { name: 'Canva', icon: <SiCanva className="text-blue-300" />, glow: 'hover:shadow-blue-300/20 hover:border-blue-300/30' },
    { name: 'SEO', icon: <FaSearch className="text-slate-300" />, glow: 'hover:shadow-slate-300/20 hover:border-slate-300/30' },
    { name: 'Google Ads', icon: <FaGoogle className="text-red-400" />, glow: 'hover:shadow-red-400/20 hover:border-red-400/30' }
  ]
};

const Skills = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-16 bg-[#0f172a] text-slate-100 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-16 text-center tracking-wide"
        >
          My Tech Stack ⚙️
        </motion.h2>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-14">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-cyan-300/90 mb-6 border-l-4 border-cyan-500 pl-3 tracking-wide"
            >
              {category}
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className={`bg-slate-800/30 border border-slate-800 backdrop-blur-sm p-4 rounded-xl flex flex-col items-center gap-3 text-slate-300 transition-all duration-300 ${skill.glow}`}
                >
                  <span className="text-4xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]">
                    {skill.icon}
                  </span>
                  <p className="text-sm font-semibold text-slate-200">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
