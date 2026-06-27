import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaChalkboardTeacher, FaSearchDollar, FaPaintBrush } from 'react-icons/fa';
import GlassCard from '../GlassCard';

const services = [
  {
    title: 'Full Stack Development',
    description: 'Developing responsive, high-performance, and secure web applications using React, Node.js, Express, and MongoDB. Writing clean and scalable backend structures.',
    icon: <FaLaptopCode />,
    gradient: 'from-cyan-400 to-sky-500'
  },
  {
    title: 'Technical Mentorship',
    description: 'Providing structural logic training in programming languages (C, C++, JavaScript) and conducting custom web bootcamps and workshops for student groups.',
    icon: <FaChalkboardTeacher />,
    gradient: 'from-indigo-400 to-purple-500'
  },
  {
    title: 'SEO & Ads Strategy',
    description: 'Configuring clean on-page search engine optimization (SEO) details, tracking site visibility metrics, and running Google Ads campaigns to drive growth.',
    icon: <FaSearchDollar />,
    gradient: 'from-emerald-400 to-teal-500'
  },
  {
    title: 'UI/UX & Asset Design',
    description: 'Crafting premium digital visual designs, vector layouts, banners, and interactive prototyping flows using Figma, Canva, and Adobe Photoshop.',
    icon: <FaPaintBrush />,
    gradient: 'from-pink-400 to-rose-500'
  }
];

const Services = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="services" className="py-24 px-6 md:px-16 bg-[#0c1222] text-slate-100 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-16 text-center tracking-wide"
        >
          What I Offer 🚀
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <GlassCard className="h-full flex flex-col justify-between relative overflow-hidden group">
                {/* Background glow hover */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-5 blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div>
                  {/* Icon with gradient wrap */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-slate-900 text-xl font-bold mb-5 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3 tracking-wide">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Learn more &rarr;
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
