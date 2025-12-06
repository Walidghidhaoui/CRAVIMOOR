import React from 'react';
import './OurServices.css';

const OurServices = () => {
  return (
    <section className="our-services" id="services">
      <div className="services-container">
        
        {/* Header */}
        <div className="services-header">
          <h2>OUR SERVICES</h2>
          <p className="services-subtitle">
            <strong>CAD & 3D Design Expert</strong> - 20+ Years in Mechanical Design | 4.8M+ TikTok Views
          </p>
          <p className="services-intro">
            From industrial equipment to viral TikTok designs, I transform concepts into precise 3D models 
            that combine technical accuracy with visual appeal.
          </p>
        </div>

        {/* TikTok Stats */}
        <div className="tiktok-stats">
          <h3>🚀 Design That Performs on Social Media</h3>
          <p>My automotive designs have proven viral appeal and engagement.</p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">4.8M+</div>
              <div className="stat-label">Publication Views</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15K</div>
              <div className="stat-label">Profile Views</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">81K+</div>
              <div className="stat-label">Likes</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4,112</div>
              <div className="stat-label">Comments</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4,291</div>
              <div className="stat-label">Shares</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Monetized</div>
              <div className="stat-label">Creator Account</div>
            </div>
          </div>
          
          <p className="stats-note">
            <strong>What this means for you:</strong> Designs that capture attention and drive engagement.
          </p>
        </div>

        {/* Services - 4 Cards */}
        <div className="service-grid">
          
          {/* Service 1 */}
          <div className="service-card highlight-card compact-card">
            <div className="service-icon">⚙️</div>
            <h3>Industrial & Automotive 3D Design</h3>
            <p className="service-subtitle">Expert in CATIA V5, SolidWorks, Blender - 20+ Years Experience</p>
            <ul className="service-list">
              <li><strong>Automotive Design:</strong> Bugatti, Lamborghini, Maybach concepts - CATIA modeling</li>
              <li><strong>Industrial Equipment:</strong> Roller compactors, crushers, cooling towers</li>
              <li><strong>Product Design:</strong> Innovative skateboard (French client), mechanical parts</li>
              <li><strong>Technical Solutions:</strong> Library concealing ductwork</li>
              <li><strong>3D Modeling:</strong> For manufacturing, presentation, technical documentation</li>
            </ul>
            <p className="service-note">
              Specialist in precise, functional 3D modeling for industry
            </p>
          </div>

          {/* Service 2 */}
          <div className="service-card compact-card">
            <div className="service-icon">🌍</div>
            <h3>For International Clients</h3>
            <p className="service-subtitle">Technical Solutions for Europe</p>
            <p>3D modeling of industrial equipment and technical products</p>
            <div className="client-example">
              <strong>Client References:</strong> Danish roller compactor manufacturer, French skateboard design
            </div>
            <div className="client-example">
              <strong>Deliverables:</strong> Production-ready 3D models and technical drawings
            </div>
          </div>

          {/* Service 3 */}
          <div className="service-card compact-card">
            <div className="service-icon">🎬</div>
            <h3>3D Animation & Social Media Design</h3>
            <p className="service-subtitle">High-Performance Social Media Content</p>
            <p>Transform your products into engaging 3D animations</p>
            <div className="benefits">
              <div className="benefit">✅ Viral automotive designs on TikTok</div>
              <div className="benefit">✅ Professional Blender 3D animation</div>
              <div className="benefit">✅ Proven: 4.8M+ views, 81K+ likes</div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="service-card compact-card">
            <div className="service-icon">💡</div>
            <h3>Prototyping & Visualization</h3>
            <p className="service-subtitle">From Sketch to 3D Visualization</p>
            <p>Create 3D models for presentations, crowdfunding, investors</p>
            <div className="client-example">
              <strong>For:</strong> Entrepreneurs, inventors, technical startups
            </div>
            <p className="service-note">
              Technical precision + attractive design
            </p>
          </div>

        </div>

        {/* Why Choose */}
        <div className="why-choose">
          <h3>✅ Why Choose Cravimoor</h3>
          <div className="reasons-grid">
            <div className="reason">
              <strong>Industrial Experience</strong>
              <p>20+ years in automotive, industrial equipment, 3D design</p>
            </div>
            <div className="reason">
              <strong>Technical Expertise</strong>
              <p>Specialist in CATIA V5, SolidWorks, Blender - mechanical engineering background</p>
            </div>
            <div className="reason">
              <strong>Proven Results</strong>
              <p>Clients in France, Denmark - High-performing TikTok designs</p>
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
