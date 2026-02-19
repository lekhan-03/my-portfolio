import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import SpinningMesh from '../../Components/SpinningMesh'; // Adjust path if needed
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">

      {/* LEFT SIDE: Text Content */}
      <div className="hero-text-side">
        <span className="sub-heading">HI THERE!</span>
        <h1 className="hero-title">
          I am a <span className="highlight">Developer</span> <br />
          Lekhan
        </h1>
        <p className="hero-desc">
          Turning curiosity into code with React, Python, and daily experiments
          </p>

        <div className="btn-group">
          <a href="#contact" className="primary-btn">Contact Me</a>
          <Link to='/portfolio' className="secondary-btn">View Work</Link>
        </div>

        {/* Info Bar */}
        <div className="hero-info-bar">
          <div className="info-item">
            <span>Email</span>
            <p>lekhandayananda@gmail.com</p>
          </div>
          <div className="info-item">
            <span>Phone</span>
            <p>+91 6364105424</p>
          </div>
          <div className="info-item">
            <span>Location</span>
            <p>Bengaluru, India</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: 3D Scene */}
      <div className="hero-3d-side">
        <div className="canvas-wrapper">
          <Canvas camera={{ position: [3, 2, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            {/* Main Spinning Object */}
            <SpinningMesh position={[0, 0, 0]} />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;