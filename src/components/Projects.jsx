import React from 'react';
import ProjectCard from './target/ProjectCard';

const Projects = () => {
  const projectData = [
    {
      title: 'Ketal Mesobol',
      description: 'Desarrollo de modulo de ventas y gestion de pedidos. Creacion de pedidos, seguimiento de pedidos para la parte de cliente, asignacion de pedidos para los usuarios de produccuion.',
      imageUrl: 'https://via.placeholder.com/400x250'
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      imageUrl: 'https://via.placeholder.com/400x250'
    },
    {
      title: 'Project Three',
      description: 'A brief description of Project Three.',
      imageUrl: 'https://via.placeholder.com/400x250'
    }
  ];

  return (
    <section id="projects" className="w-full h-auto py-20 px-4 bg-[#010101]">
      <h2 className="text-3xl font-bold text-white mb-6">Mis Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
