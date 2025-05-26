import React from 'react';
import './Projects.css';

const OurProjects = () => {
  const projects = [
    {
      title: "Automotive Design",
      description: "Revolutionary vehicle concepts pushing the boundaries of mobility",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },
    {
      title: "Industrial Innovation",
      description: "Cutting-edge industrial equipment design",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
    },
    {
      title: "Concept Art",
      description: "Futuristic product visualization",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>OUR PROJECTS</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={project.image} alt={project.title} />
                <div className="gradient-overlay"></div>
              </div>
              <div className="card-back">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="project-button">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;