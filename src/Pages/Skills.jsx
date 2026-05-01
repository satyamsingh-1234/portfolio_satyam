import React from 'react';
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
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
    { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> }
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-200" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> }
  ],
  Programming: [
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'C', icon: <FaCode className="text-gray-300" /> },
    { name: 'C++', icon: <SiCplusplus className="text-indigo-300" /> }
  ],
  Tools: [
    { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white" /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-500" /> },
    { name: 'Excel', icon: <FaFileExcel className="text-green-600" /> },
    { name: 'Canva', icon: <SiCanva className="text-blue-300" /> },
    { name: 'SEO', icon: <FaSearch className="text-gray-200" /> },
    { name: 'Google Ads', icon: <FaGoogle className="text-red-400" /> }
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-16 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center hover:scale-105 transition duration-300">
          My Skills ⚙️
        </h2>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-10">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-6">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-lg text-center flex flex-col items-center gap-2 text-cyan-300 transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-cyan-500/30"
                >
                  <span className="text-3xl">{skill.icon}</span>
                  <p className="text-base font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
