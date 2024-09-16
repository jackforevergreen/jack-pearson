import React from 'react';

const ProjectCard = ({ title, description, link }) => (
  <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '15px', marginBottom: '20px' }}>
    <h3>{title}</h3>
    <p>{description}</p>
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
    {/* Add more ProjectCard components for other projects */}
  </div>
);

export default Projects;