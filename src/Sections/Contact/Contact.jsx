import React from 'react';
// 1. Import the icons you want
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <h4 className="section-subtitle">GET IN TOUCH</h4>
          <h2 className="section-title">Let's Work Together</h2>
        </div>

        <div className="contact-content">
          
          {/* Left: Info */}
          <div className="contact-info">
            <p>
              Have a project in mind or just want to say hi? 
              Feel free to send me a message.
            </p>
            
            <div className="info-box">
              <h3>Email</h3>
              <p>lekhandayananda@gmail.com</p>
            </div>
            
            <div className="info-box">
              <h3>Phone</h3>
              <p>+91 6364105424</p>
            </div>

            {/* 2. Updated Social Links with Icons */}
            <div className="social-links">
              {/* Remember to replace '#' with your actual profile links */}
              
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/lekhandayanandasagar" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedinIn />
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/lekhan_03" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>

              {/* WhatsApp (Uses api.whatsapp.com or wa.me link format) */}
              <a href="https://wa.me/916364105424" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;