import React from 'react';

const projects = [
  {
    title: 'NeighbourMart',
    image: '',
    tech: ['React', 'Tailwind CSS', 'Firebase'],
    description:
      'A community-driven platform allowing users to join or create local group-buying communities. Features include group management, user participation, and responsive UI.',
    link: '#'
  },
  {
    title: 'Portfolio Website',
    image: '',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    description:
      'Personal portfolio showcasing skills, projects, resume, and interactive contact form.',
    link: '#'
  },

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center hover:scale-105 transition duration-300">
          Projects 🚀
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:scale-105 hover:rotate-1 transition-all duration-300"
            >
              <div className="h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
                {/* 🖼️ Placeholder for Image */}
                Project Image {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-cyan-200 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-cyan-900/40 px-2 py-1 rounded-md border border-cyan-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-400 text-[#0f172a] px-4 py-2 rounded-md font-semibold hover:bg-cyan-500 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
