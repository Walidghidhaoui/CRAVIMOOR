import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './components/ProjectCard';
import ContactUs from './components/ContactUs.jsx';
import React from 'react';
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

      

      {/* Hero Section */}
      <section id="home" className="hero" style={{ backgroundImage: `url(${bugattiBackground})` }}>
        <div className="hero-text">
        <h2 className="projects-title">CRAVIMOOR</h2>
          <h1>Vision Beyond Limits</h1>
          <p>Design. Innovation. Excellence </p>
        </div>
      </section>
      <section className="section" id="projects">
  <h2>Our Projects</h2>
  <p className="projects-intro">
    
  __Showcasing Our Design Mastery__<br/>
  Discover a curated selection of our most impactful projects, where vision meets precision. From bold automotive concepts to intricate industrial solutions, each creation reflects our passion for innovation and excellence in 3D design.<br/>
    <div className="pointer-container">
  <div className="pointer-text">Click on each image to View its content</div>
  <div className="hand-pointer">👇</div>
</div>
  </p>

      </section>
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
      linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_design-car-cardesign-activity-7225503653850173440-p1d6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    <ProjectCard
      imageUrl="/images/BUG Ghidhaoui_2.jpg"
      title="Bugatti Mistral"
      description="High-end concept modeled in CATIA with advanced lighting design by CRAVIMOOR."
      linkedinUrl="https://www.linkedin.com/feed/update/urn:li:activity:7082734965880188928/"
    />
    <ProjectCard
      imageUrl="/images/BUG Ghidhaoui_6.jpg"
      title="Bugatti Mistral"
      description="Concept design created in CATIA by CRAVIMOOR with high-end lighting details."
      linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_design-3d-automobile-activity-7082782632421261312-UZ6Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    <ProjectCard
      imageUrl="/images/Lambo v1.jpg"
      title="Lamborghini"
      description="Lamborghini concept car designed in CATIA by CRAVIMOOR."
      linkedinUrl="https://www.linkedin.com/feed/update/urn:li:activity:6968949712456437760?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    <ProjectCard
      imageUrl="/images/FSAE 01.webp"
      title="FSAE Design"
      description="Formula SAE car 3D modeled from scratch using CATIA by CRAVIMOOR."
      linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_3ddesign-catia-innovation-activity-7292160292778659840-C7UE"
    />
    <ProjectCard
      imageUrl="/images/FSAE 02.jpg"
      title="FSAE Design"
      description="Formula SAE car 3D modeled from scratch using Blender by CRAVIMOOR."
      linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_3ddesign-animation-innovation-activity-7292461296988389378-uVey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    <ProjectCard
      imageUrl="/images/Flying Car Design.jpg"
      title="Flying Car Design"
      description="Crow car Design When Inspiration Meets Creativity."
      linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_aesaedaetaeyaetabraebaeyaepaezaepaes-aebaeyaepaezaerabraefaepaeoaezaer-activity-7332453242339065856-rTOw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    <ProjectCard
      imageUrl="/images/FCR16.jpg"
      title="Formula One CR7 Design"
      description="A bold fusion of speed, design, and precision by CRAVIMOOR using Blender."
      linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_engineering-machine-cad-activity-7241081845625331712-fZCI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
     <ProjectCard
  imageUrl="/images/maybach.jpg"
  title="Maybach Concept"
  description="Luxury-class car model designed using Blender with realistic rendering."
  linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_3ddesign-automotivedesign-maybach-activity-7324555356871774208-zLOB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
/>
<ProjectCard
  imageUrl="/images/BMW_8_2020.246.webp"
  title="BMW_8 Concept"
  description="High-end BMW 8 Series concept designed in CATIA."
  linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_bmw-design-catia-activity-6653589394882076672-MKXl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
/>
    <ProjectCard
      imageUrl="/images/Walda.jpg"
      title="Walda Car Design"
      description="CRAVIMOOR’s futuristic Walda Car Design— shaped in CATIA."
      linkedinUrl="https://www.linkedin.com/posts/catia_walid-ghidhaoui-3dexperience-profile-create-activity-6923516104824778752-aybG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    
  </div>
</motion.section>

{/* Other Projects Section */}
<section className="section" id="other-projects">
  <h2>Other Projects</h2>
  <div className="projects-grid">
    
   <ProjectCard
      imageUrl="/images/Roller Compactor.jpg"
      title="Roller Compactor"
      description="Roller compactor fully modeled in CATIA."
      linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_denmark-construction-machinery-activity-7027352470775324673-Eb5J?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    <ProjectCard
      imageUrl="/images/airplane 01.461.jpg"
      title="Airplane concept design"
      description="Airplane concept designed by CRAVIMOOR using CATIA."
      linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_design-plane-car-activity-6934258826527305728-4CgB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    <ProjectCard
      imageUrl="/images/Drone wg.jpg"
      title="Beautiful Drone"
      description="Exclusive design by Walid Ghidhaoui. Software used: CATIA."
      linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_catiav5-keyshot-design-activity-6938555840555573248-o-yi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    <ProjectCard
      imageUrl="/images/collection01.jpg"
      title="Cravimoor Collection"
      description="Some of our exclusive design that we collected in this video. I hope you like it"
      linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_work-design-ingenierie-activity-7062536317527576576-I6qP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    <ProjectCard
      imageUrl="/images/CLOTH.jpg"
      title="clothing design"
      description="Challenging the limits of CATIA V5 by exploring fashion design."
      linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_clothing-armaeze-designspiration-activity-7059448800939053056-1esG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    <ProjectCard
      imageUrl="/images/Convertible furniture.webp"
      title="Convertible furniture"
      description="That moment when you want to take a nap while working Well."
      linkedinUrl="https://www.linkedin.com/feed/update/urn:li:activity:7042525144816177153?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    <ProjectCard
      imageUrl="/images/cooling tower.jpg"
      title="cooling tower"
      description="Design and manufacture of a cooling tower for the IMM company."
      linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_design-catia-mechanical-activity-7030589033277747200-cjKI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    <ProjectCard
      imageUrl="/images/Panier crible.jpg"
      title="cement crusher"
      description="basket intended for a cement crusher using Solidworks."
      linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_solidworks-engineering-3ddesign-activity-7290736193430814720-ANf5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    <ProjectCard
      imageUrl="/images/Filler cone.jpg"
      title="Filler cone"
      description="Filler cone assembly using Solidworks."
      linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_project-cement-design-activity-6950515986680692736-bPjf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    <ProjectCard
      imageUrl="/images/pendule flapper.jpg"
      title="Pendule flapper"
      description="Pendule flapper at level cylone of tower preheater cement using Solidworks."
      linkedinUrl="https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_project-design-mechanicalengineer-activity-6949333994194800640-VsJn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB7OwCsBFscI34NnvYRkni_yGSKropNxNBI"
    />
    
  </div>
</section>


      {/* About Section */}
      <section className="section" id="about">
        <h2>About Us</h2>
        <p>Crazy Vision Modeling Organisation.

Cravimoor is a futuristic design studio founded by Walid Ghidhaoui, specializing in visionary modeling and advanced concept development. Operating as a 100% remote studio, Cravimoor is committed to pushing the boundaries of industrial design and 3D innovation. Driven by a passion for creativity and engineering excellence, Cravimoor transforms bold ideas into tangible, high-impact solutions. Whether crafting cutting-edge concept cars or revolutionizing industrial systems, we approach every project with precision, originality, and purpose.

As a Crazy Vision Modeling Organisation, Cravimoor is not just about design it’s about turning the extraordinary into reality. With a growing network of collaborators and a solid foundation of over 20 years of experience, the studio is evolving into a global reference in high-end modeling and future-forward design..</p>
      </section>

      {/* Services Section */}
      <OurServices />

      
      {/* Contact Section */}
      <section className="section" id="contact">
      <ContactUs />
      </section>
      <>
  <hr className="footer-line" />
  <p className="footer-text">
    © 2025 Cravimoor. All rights reserved. | Powered by Cravimoor
  </p>
</>
    </div>
  );
}
export default App;



