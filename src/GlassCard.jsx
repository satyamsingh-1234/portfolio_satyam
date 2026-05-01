import React from 'react';

const GlassCard = ({ title, description }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:rotate-1">
      <h3 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default GlassCard;
