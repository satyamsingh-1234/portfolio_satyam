import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ title, description, children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`glass-effect glass-effect-hover p-6 rounded-2xl shadow-xl ${className}`}
    >
      {title && <h3 className="text-xl font-bold text-cyan-400 mb-2">{title}</h3>}
      {description && <p className="text-slate-300 leading-relaxed text-sm">{description}</p>}
      {children}
    </motion.div>
  );
};

export default GlassCard;
