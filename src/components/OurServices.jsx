import React from 'react';
import './OurServices.css';

const OurServices = () => {
  return (
    <section className="our-services" id="services">
      <div className="services-container">
        
        {/* Header */}
        <div className="services-header">
  <h2>SERVICES</h2>
  <p className="services-subtitle">
  <strong>CAD & 3D Design Expert</strong> - 20+ Years in Mechanical Design | 5.7M+ TikTok Views
</p>
          <p className="services-intro">
            From industrial equipment to viral TikTok designs, I transform concepts into precise 3D models 
            that combine technical accuracy with visual appeal. Cravimoor is my independent freelance 
            design practice — this is my personal portfolio.
          </p>
        </div>

        {/* TikTok Stats */}
<div className="tiktok-stats">
  <h3>🚀 Viral Design Performance</h3>
  <p>My models gained 5.7M+ views on TikTok, proving viral appeal. Notably, my Tunisian Falcon alone reached 1.7M views in just 3 months.</p>
  
  <div className="stats-grid">
    <div className="stat-item">
      <div className="stat-number">5.7M+</div>
      <div className="stat-label">Views</div>
    </div>
    <div className="stat-item">
      <div className="stat-number">114.5K+</div>
      <div className="stat-label">Likes</div>
    </div>
    <div className="stat-item">
      <div className="stat-number">6.7k</div>
      <div className="stat-label">Shares</div>
    </div>
    <div className="stat-item">
      <div className="stat-number">21.7K</div>
      <div className="stat-label">Profile Views</div>
    </div>
    <div className="stat-item">
      <div className="stat-number">5.8k</div>
      <div className="stat-label">Comments</div>
    </div>
    <div className="stat-item">
      <div className="stat-number">Monetized</div>
      <div className="stat-label">Creator Account</div>
    </div>
  </div>
  
  <p className="stats-note">
    <strong>What this means:</strong> Designs that capture attention quickly and drive engagement.
  </p>
</div>
        {/* Services - 4 Cards */}
        <div className="service-grid">
          
          {/* Service 1 */}
          <div className="service-card highlight-card compact-card">
            <div className="service-icon">⚙️</div>
            <h3>Industrial & Automotive 3D Design</h3>
            <p className="service-subtitle">Expert in CATIA V5, SolidWorks, AutoCad, Blender - 20+ Years Experience</p>
            <ul className="service-list">
              <li><strong>Automotive Design:</strong> Bugatti, Lamborghini, Maybach concepts - CATIA modeling</li>
              <li><strong>Industrial Equipment:</strong> Roller compactors, crushers, cooling towers</li>
              <li><strong>Product Design:</strong> Skateboard design for an independent client, mechanical parts</li>
              <li><strong>Technical Solutions:</strong> Library concealing ductwork</li>
              <li><strong>3D Modeling:</strong> For manufacturing, presentation, technical documentation</li>
            </ul>
            <p className="service-note">
              Specialist in precise, functional 3D modeling for industry
            </p>
          </div>


          {/* Service 3 */}
<div className="service-card compact-card">
  <div className="service-icon">🎬</div>
  <h3>3D Animation & Social Media Design</h3>
  <p className="service-subtitle">High-Performance Social Media Content</p>
  <p>Transform your products into engaging 3D animations</p>
  <div className="benefits">
    <div className="benefit">✅ Viral aeronautic designs on TikTok</div>
    <div className="benefit">✅ My Tunisian Falcon alone reached 1.7M views in just 3 months - proven appeal</div>
    <div className="benefit">✅ Professional Blender 3D animation</div>
  </div>
</div>


        {/* Why Choose */}
        <div className="why-choose">
          <h3>✅ Why Work With Me</h3>
          <div className="reasons-grid">
            <div className="reason">
  <strong>Proven Viral Appeal</strong>
  <p>My Tunisian Falcon alone reached 1.7M views in just 3 months - designs that perform</p>
</div>
            <div className="reason">
              <strong>Technical Expertise</strong>
              <p>Specialist in CATIA V5, SolidWorks, AutoCad, Blender - mechanical engineering background</p>
            </div>
            <div className="reason">
              <strong>Freelance Track Record</strong>
              <p>Independent design work for clients in France, plus high-performing TikTok designs</p>
            </div>
            <div className="reason">
              <strong>Practical Approach</strong>
              <p>Functional and aesthetic technical solutions</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="cta-section">
          <h3>3D Design Project?</h3>
          <p>Let's discuss your technical modeling or product design needs.</p>
          <a href="#contact" className="cta-button">
            Request a Quote
          </a>
        </div>

      </div>
    </section>
  );
};

export default OurServices;
