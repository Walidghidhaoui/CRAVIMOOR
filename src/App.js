import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './components/ProjectCard';
import ContactUs from './components/ContactUs';
import logo from './logo.png';
import bugattiBackground from './images/BUG_Ghidhaoui_1.jpg'; 
import './App.css';
import OurServices from './components/OurServices';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero" style={{ backgroundImage: `url(${bugattiBackground})` }}>
        <div className="hero-text">
          <h2 className="projects-title">CRAVIMOOR</h2>
          <h1>Vision Beyond Limits</h1>
          <p>Design. Innovation. Excellence</p>
        </div>
      </section>

      {/* Featured Projects Intro */}
      <section className="section" id="projects">
        <h2>Featured Projects</h2>
        <p className="projects-intro">
          <strong>From Viral TikTok Concepts to Industrial Solutions</strong><br/>
          A showcase of 20+ years in mechanical design and 3D modeling, blending technical precision 
          with viral visual appeal. Each project demonstrates expertise in CATIA, SolidWorks, and Blender 
          for automotive, industrial, and product design applications.<br/>
          <div className="pointer-container">
            <div className="pointer-text">Click on each image to view project details</div>
            <div className="hand-pointer">👇</div>
          </div>
        </p>
      </section>

      {/* Aeronautic */}
      <motion.section
        className="section"
        id="aeronautic"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>✈️ Viral Aeronautic Projects</h2>
        <p className="projects-intro">
          <strong>Engineering meets viral impact: 1.7M+ views on TikTok</strong><br/>
          Aeronautic concepts that combine technical precision with social media success.
        </p>
        <div className="projects-grid">
          <ProjectCard
            imageUrl="/images/falcon.webp"
            title="Falcon Tunisia Stealth Jet"
            description="Stealth fighter concept - 1.7M+ TikTok views"
            linkedinUrl="https://www.tiktok.com/@cravimoor/video/7552557438143106315"
          />
          <ProjectCard
            imageUrl="/images/tunisia.webp"
            title="Jet Drawing 'Tunisia' in Sky"
            description="Patriotic aerobatic display - 1.1M+ TikTok views"
            linkedinUrl="https://www.tiktok.com/@cravimoor/video/7567470752753011979"
          />
          <ProjectCard
            imageUrl="/images/fighter.webp"
            title="Hannibal 01 Fighter Jet"
            description="Advanced combat aircraft flying in sky - Aerobatic display"
            linkedinUrl="https://www.tiktok.com/@cravimoor/video/7573802187474603275"
          />
          <ProjectCard
            imageUrl="/images/dronem.webp"
            title="Latest Military Drone Design"
            description="Advanced UAV concept - Fresh content"
            linkedinUrl="https://www.tiktok.com/@cravimoor/video/7580008242214948152"
          />
        </div>
        <div className="tiktok-cta">
          <p>
            <strong>Want to see these viral videos?</strong><br/>
            Follow <a href="https://tiktok.com/@cravimoor" target="_blank" rel="noopener noreferrer">@cravimoor on TikTok</a> for more aerospace content
          </p>
        </div>
      </motion.section>

      {/* Automotive */}
      <motion.section
        className="section"
        id="automotive"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Automotive Projects</h2>
        <div className="projects-grid">
          <ProjectCard
            imageUrl="/images/CR0011.jpg"
            title="Cravimoor car Design"
            description="CRAVIMOOR’s exclusive speed car — modeled in CATIA."
            linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_design-car-cardesign-activity-7225503653850173440-p1d6"
          />
          <ProjectCard
            imageUrl="/images/BUG Ghidhaoui_2.jpg"
            title="Bugatti Mistral"
            description="High-end concept modeled in CATIA with advanced lighting design by CRAVIMOOR."
            linkedinUrl="https://www.linkedin.com/feed/update/urn:li:activity:7082734965880188928"
          />
          <ProjectCard
            imageUrl="/images/Lambo v1.jpg"
            title="Lamborghini"
            description="Lamborghini concept car designed in CATIA by CRAVIMOOR."
            linkedinUrl="https://www.linkedin.com/feed/update/urn:li:activity:6968949712456437760"
          />
        </div>
      </motion.section>

      {/* About */}
      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
          <strong>Walid Ghidhaoui - CAD & 3D Design Specialist</strong><br/><br/>
          With over 20 years of hands-on experience in mechanical design and industrial engineering, 
          I specialize in precision 3D modeling using CATIA V5, SolidWorks, and Blender.<br/><br/>
          <strong>Professional Background:</strong><br/>
          • <strong>Automotive:</strong> 7+ years designing utility vehicle bodies for ISUZU/GM<br/>
          • <strong>Industrial:</strong> 10+ years as senior mechanical designer at SOTACIB cement plant<br/>
          • <strong>Medical Devices:</strong> 2 years in ISO-certified medical equipment design at SOFEMED<br/>
          • <strong>Freelance Design:</strong> International clients in France, Denmark, and Pakistan<br/><br/>
          <strong>Education & Certification:</strong><br/>
          • Master's in Industrial Systems Maintenance Management (ISSAT Kairouan)<br/>
          • Technical engineering degree in Mechanical Engineering<br/>
          • Certified expertise in CATIA V5, SolidWorks, and Blender<br/><br/>
          <strong>What sets my approach apart:</strong><br/>
          • <strong>Technical precision</strong> from industrial engineering background<br/>
          • <strong>Viral design appeal</strong> - 4.8M+ TikTok views in just 3 months<br/>
          • <strong>Practical experience</strong> with real-world manufacturing constraints<br/>
          I bridge the gap between theoretical engineering and practical, 
          production-ready 3D design, delivering solutions that are both 
          technically sound and visually compelling.
        </p>
      </section>

      {/* Services */}
      <OurServices />

      {/* Contact */}
      <section className="section" id="contact">
        <ContactUs />
      </section>

      {/* Footer */}
      <hr className="footer-line" />
      <p className="footer-text">
        © 2025 Cravimoor. All rights reserved. | Powered by Cravimoor
      </p>
    </div>
  );
}

export default App;
