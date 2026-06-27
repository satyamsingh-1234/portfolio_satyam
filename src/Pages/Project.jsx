import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import neighbourmartImg from '../assets/neighbourmart.png';
import portfolioImg from '../assets/portfolio_preview.png';

const projects = [
  {
    title: 'NeighbourMart',
    image: neighbourmartImg,
    tech: ['React', 'Tailwind CSS', 'Firebase'],
    description:
      'A community-driven platform allowing users to join or create local group-buying communities. Features include group management, user participation, real-time messaging, and interactive listings.',
    liveLink: '#',
    githubLink: 'https://github.com/satyam-singh-dev/NeighbourMart'
  },
  {
    title: 'Portfolio Website',
    image: portfolioImg,
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    description:
      'A premium single-page developer portfolio showcasing skills, projects, resume, and services. Features smooth scroll navigation, scroll progress indicator, and interactive form integrations.',
    liveLink: '#',
    githubLink: 'https://github.com/satyam-singh-dev/portfolio'
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-16 bg-[#0f172a] text-slate-100 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-16 text-center tracking-wide"
        >
          Featured Projects 🚀
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-slate-800/30 border border-slate-800 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Image Frame with hover zoom */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all duration-300" />
              </div>

              {/* Card Details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed font-normal">
                    {project.description}
                  </p>
                  
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-cyan-950/50 text-cyan-400 px-2.5 py-1 rounded-md text-xs font-semibold border border-cyan-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-900 px-5 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-800 text-slate-200 border border-slate-700 px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-700 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
