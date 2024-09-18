import React from 'react';

const ProjectCard = ({ title, description, link }) => (
  <div style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
    <h3>{title}</h3>
    <p><small>{description}</small></p>
    <p>{link}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">Learn more</a>
  </div>
);

const Projects = () => (
  <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
    <h2>My Projects</h2>
    <ProjectCard 
      title="Forevergreen"
      description="A startup focused on fighting climate change through innovative sustainability solutions."
      link="https://www.forevergreen.earth"
    />
    <ProjectCard 
      title="Personal Website"
      description="This website you're currently viewing, built to showcase my projects and skills."
      link="#"
    />
    {/* Add more ProjectCard components for other projects as needed */}
  </div>
);

export default Projects;