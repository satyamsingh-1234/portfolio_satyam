// components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center hover:scale-105 transition duration-300">
          About Me
        </h2>
        <div className="bg-white/10 p-8 rounded-2xl shadow-2xl backdrop-blur-md hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] hover:rotate-1">
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm <span className="text-cyan-400 font-semibold">Satyam Kumar Singh</span>, a passionate and detail-oriented Full Stack Web Developer skilled in the MERN stack — MongoDB, Express.js, React.js, and Node.js. I specialize in building modern, responsive, and scalable web applications with a focus on clean design and smooth user experience using React and Tailwind CSS.
          </p>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            Currently pursuing my <span className="text-cyan-400 font-medium">B.Tech in Computer Science</span> from Punjab Technical University, I’ve also served as a <span className="text-cyan-400">Junior Professor at SVGOI</span>, mentoring students in emerging technologies. I’ve conducted several technical workshops, participated in hackathons, and played key leadership roles including Core Committee Member of Spontania at SVIET.
          </p>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            I thrive on continuous learning and problem-solving, and I'm particularly proud of developing <span className="text-cyan-400">NeighbourMart</span> — a full-stack application that reflects my ability to integrate real-world logic with modern UI. With certifications in C, C++, and Digital Marketing (Google), I bring both coding expertise and strategic thinking to the table.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
