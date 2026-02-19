import React, { useState, useEffect } from 'react';
import projectsData from '../../data/projectsData';
import Games from '../../Components/games/Games';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Best Practice: Handle side-effects (like modifying the body tag) in a useEffect
  // This ensures scrolling is restored even if the component unexpectedly unmounts
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="portfolio-page">
      
      {/* 1. Header Section */}
      <div className="portfolio-header">
        <h1 className="page-title">My <span>Work</span></h1>
        <p className="creative-statement">
          I don't just write code; I craft experiences. From building scalable 
          <strong> web applications</strong> to creating engaging <strong>video content</strong>, 
          I bridge the gap between technical logic and creative storytelling.
        </p>
      </div>

      {/* 2. Projects Grid */}
      <div className="portfolio-grid">
        {projectsData.map((project) => (
          <div className="portfolio-card" key={project.id}>
            <div className="card-image">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <button className="view-btn" onClick={() => openModal(project)}>
                  View Details
                </button>
              </div>
            </div>
            <div className="card-content">
              <span className="category">{project.category}</span>
              <h3>{project.title}</h3>
              {/* Added optional chaining to prevent crashes if summary is missing */}
              <p>{project.summary?.substring(0, 100) || 'No summary available.'}...</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>&times;</button>
            
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image"/>
            
            <div className="modal-text">
              <span className="modal-category">{selectedProject.category}</span>
              <h2>{selectedProject.title}</h2>
              <p className="modal-summary">{selectedProject.summary}</p>
              
              <div className="modal-tech-stack">
                {selectedProject.tech?.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>

              <h3>Key Features:</h3>
              <ul className="modal-details-list">
                {/* Added optional chaining to prevent crashes if details array is missing */}
                {selectedProject.details?.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 4. Games Section (Embedded) */}
      <Games /> 

    </section>
  );
};

export default Portfolio;