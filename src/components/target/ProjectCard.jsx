import React, { useState } from 'react';

const ProjectCard = ({ title, description, imageUrl }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-[#010101] border border-gray-700 rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div
        className={`absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
