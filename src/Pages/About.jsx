import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChalkboardTeacher, FaAward } from 'react-icons/fa';
import GlassCard from '../GlassCard';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-[#0c1222] text-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-16 text-center tracking-wide"
        >
          About Me
        </motion.h2>

        {/* Content Wrapper */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          {/* Main Bio Paragraph (Left) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-cyan-300">
              Passionate MERN Developer & Tech Educator
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm <span className="text-cyan-400 font-semibold">Satyam Kumar Singh</span>, a detail-oriented developer specializing in MongoDB, Express.js, React, and Node.js. My focus lies in designing modern, responsive web experiences.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Through my tenure as a Junior Professor at SVGOI, I combined engineering with mentorship, conducting technical workshops and guiding aspiring programmers.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I thrive on building scalable, real-world solutions (like my community-driven app <span className="text-cyan-400 font-medium">NeighbourMart</span>) and continuously expanding my digital marketing and systems knowledge.
            </p>
          </motion.div>

          {/* Cards Grid (Right) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Card 1: Education */}
            <GlassCard className="sm:col-span-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-950/60 rounded-xl text-cyan-400 text-2xl border border-cyan-500/20">
                  <FaGraduationCap />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-100 mb-1">Education</h4>
                  <p className="text-cyan-400 font-semibold text-sm">B.Tech in Computer Science Engineering</p>
                  <p className="text-slate-400 text-sm">Punjab Technical University</p>
                  <p className="text-slate-400 text-xs mt-1">Focus: Full-Stack Systems, Software Design & Data Structures</p>
                </div>
              </div>
            </GlassCard>

            {/* Card 2: Experience */}
            <GlassCard>
              <div className="flex flex-col gap-3 h-full justify-between">
                <div className="p-3 bg-cyan-950/60 rounded-xl text-cyan-400 text-2xl border border-cyan-500/20 w-fit">
                  <FaChalkboardTeacher />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-100 mb-1">Experience</h4>
                  <p className="text-cyan-400 text-xs font-semibold">Junior Professor @ SVGOI</p>
                  <p className="text-slate-400 text-xs">Mentored 100+ students in web tech, C/C++, and held technical bootcamps.</p>
                </div>
              </div>
            </GlassCard>

            {/* Card 3: Certifications */}
            <GlassCard>
              <div className="flex flex-col gap-3 h-full justify-between">
                <div className="p-3 bg-cyan-950/60 rounded-xl text-cyan-400 text-2xl border border-cyan-500/20 w-fit">
                  <FaAward />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-100 mb-1">Credentials</h4>
                  <p className="text-slate-400 text-xs">
                    • Google Digital Marketing Certification<br />
                    • Programming in C / C++ Certificates<br />
                    • Core Member of Spontania at SVIET
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
