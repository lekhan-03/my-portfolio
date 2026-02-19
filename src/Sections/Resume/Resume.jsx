import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        
        {/* Header with Download Button */}
        <div className="resume-header">
          <h2 className="section-title">My Resume</h2>
          {/* Replace href with actual path to your PDF file in public folder */}
          <a href="https://drive.google.com/file/d/1UqOJLOihfJ8CM2oPNM3OyIw6FML0SShp/view?usp=sharing" target="_blank" rel="noopener noreferrer" download className="primary-btn1">
            Download CV
          </a>
        </div>

        {/* Summary Section */}
        <div className="resume-summary">
          <h3>Professional Summary</h3>
          <p>
            Motivated graduate seeking to leverage innovative ideas, technical skills, and creativity 
            to contribute effectively to projects and organizational growth. Strong logical programming abilities 
            with expertise in Java and AI-based pipelines.
          </p>
        </div>

        <div className="resume-grid">
          
          {/* LEFT COLUMN: Education & Soft Skills */}
          <div className="resume-left">
            
            <div className="resume-block">
              <h3 className="block-title">Education</h3>
              
              <div className="resume-item">
                <h4>BE - Computer Science & Engineering</h4>
                <span>Acharya Institute Of Technology</span>
                {/* <p className="year">Graduated</p> */}
              </div>

              <div className="resume-item">
                <h4>Pre-University</h4>
                <span>Narayana PU College</span>
              </div>

              <div className="resume-item">
                <h4>High School</h4>
                <span>Narayana Olympiad School</span>
              </div>
            </div>

            <div className="resume-block">
              <h3 className="block-title">Soft Skills</h3>
              <ul className="skills-list">
                <li>Collaboration & Adaptability</li>
                <li>Teamwork & Leadership</li>
                <li>Effective Communication</li>
                <li>Logical Thinking & Problem-solving</li>
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN: Projects & Technical Skills */}
          <div className="resume-right">
            
            <div className="resume-block">
              <h3 className="block-title">Projects</h3>
              
              <div className="resume-item">
                <h4>Long-Form Video Generation from Text</h4>
                <p className="project-desc">
                  Developed an AI-powered pipeline converting text prompts into high-quality 
                  videos using Mixtral AI, Edge TTS, and Stable Diffusion.
                </p>
                <p className="tech-stack">
                  <strong>Tech:</strong> Python, MoviePy, Whisper, Stable Diffusion, Edge TTS, Mixtral AI
                </p>
              </div>
            </div>

            <div className="resume-block">
              <h3 className="block-title">Technical Skills</h3>
              
              <div className="resume-item">
                <div className="skill-category">
                  <h4>Languages & Databases</h4>
                  <p>Java (Core & Advanced), Python, MySQL, HTML/CSS, JavaScript</p>
                </div>
                
                <div className="skill-category">
                  <h4>Core Concepts</h4>
                  <p>OOPs, Data Structures, Algorithms, SDLC, Operating System</p>
                </div>

                <div className="skill-category">
                  <h4>Tools & Frameworks</h4>
                  <p>React, Git, VS Code, Gen AI,LLMs</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;