import './About.css';
import profile from '../../assets/profile.JPEG'
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Left: Image with Frame */}
        <div className="about-img-wrapper">
          <div className="img-frame"></div>
          <img 
            src={profile} 
            alt="Lekhan" 
          />
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <span className="section-subtitle">WHO AM I?</span>
          <h2 className="about-title">
            I'm <span className="text-highlight">Lekhan</span>, a Web Developer and AI Enthusiast.
          </h2>
          <p className="about-desc">
           Full-Stack Developer specializing in AI-integrated web applications. I merge React.js architectures with Generative AI—from multimodal triage systems to automated video pipelines—to build scalable, data-driven solutions.        </p>

          <div className="about-divider"></div>

          <div className="about-details">
            <div className="detail-item">
              <span>Name:</span> <p>Lekhan</p>
            </div>
            <div className="detail-item">
              <span>Email:</span> <p>lekhandayananda@gmail.com</p>
            </div>
            <div className="detail-item">
              <span>Age:</span> <p>22</p>
            </div>
            <div className="detail-item">
              <span>From:</span> <p>Bengaluru, India</p>
            </div>
          </div>

          <a href="https://drive.google.com/file/d/1UqOJLOihfJ8CM2oPNM3OyIw6FML0SShp/view?usp=sharing" target="_blank" rel="noopener noreferrer" download className="download-btn">Download CV</a>
        </div>

      </div>
    </section>
  );
};

export default About;