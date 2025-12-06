import React from 'react';
import './OurServices.css';

const OurServices = () => {
  return (
    <section className="our-services" id="services">
      <div className="services-container">
        
        {/* العنوان الرئيسي مع إحصائيات TikTok */}
        <div className="services-header">
          <h2>OUR SERVICES</h2>
          <p className="services-subtitle">
            <strong>Proven Viral Designer</strong> - 3.2M+ TikTok Views & 20+ Years Visual Expertise
          </p>
          <p className="services-intro">
            From industrial equipment to viral TikTok sensations, I transform concepts into visual masterpieces 
            that captivate audiences and drive engagement.
          </p>
        </div>

        {/* إحصائيات TikTok */}
        <div className="tiktok-stats">
          <h3>🚀 Viral Design Proven on TikTok</h3>
          <p>My designs don't just look good - they capture attention at scale.</p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">3.2M+</div>
              <div className="stat-label">Publication Views</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">9,261</div>
              <div className="stat-label">Profile Views</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">47K+</div>
              <div className="stat-label">Likes</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2,774</div>
              <div className="stat-label">Comments</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2,590</div>
              <div className="stat-label">Shares</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Monetized</div>
              <div className="stat-label">Creator Account</div>
            </div>
          </div>
          
          <p className="stats-note">
            <strong>What this means for you:</strong> I create designs that naturally perform well on social media.
          </p>
        </div>

        {/* الخدمات الرئيسية - 4 بطاقات */}
        <div className="service-grid">
          
          {/* Service 1 */}
          <div className="service-card highlight-card compact-card">
            <div className="service-icon">🎭</div>
            <h3>Your Idea, My Visual Magic</h3>
            <p className="service-subtitle">Specialized 3D Modeling Across Industries</p>
            <ul className="service-list">
              <li><strong>Aerospace & Automotive:</strong> My viral passion</li>
              <li><strong>Industrial Equipment:</strong> Roller compactors, crushers</li>
              <li><strong>Medical Devices:</strong> ISO-certified experience</li>
              <li><strong>Consumer Products:</strong> French skateboard design</li>
              <li><strong>Architectural Solutions:</strong> Hidden duct library</li>
              <li><strong>Mechanical Parts:</strong> Production-ready assemblies</li>
            </ul>
            <p className="service-note">
              My secret: 20+ years of understanding how things should look AND function visually
            </p>
          </div>

          {/* Service 2 */}
          <div className="service-card compact-card">
            <div className="service-icon">🌍</div>
            <h3>For International Clients</h3>
            <p className="service-subtitle">"From Denmark with Precision"</p>
            <p>Expert 3D Modeling for Heavy Equipment & Industrial Solutions</p>
            <div className="client-example">
              <strong>Real client example:</strong> Danish roller compactor manufacturer
            </div>
            <div className="client-example">
              <strong>What I deliver:</strong> Production-ready 3D models
            </div>
          </div>

          {/* Service 3 */}
          <div className="service-card compact-card">
            <div className="service-icon">🎬</div>
            <h3>For Brands & Creators</h3>
            <p className="service-subtitle">"Hollywood-Grade Visualization"</p>
            <p>Make your products irresistible through cinematic 3D animation</p>
            <div className="benefits">
              <div className="benefit">✅ Perfect for e-commerce</div>
              <div className="benefit">✅ Crowdfunding campaigns</div>
              <div className="benefit">✅ Investor pitches</div>
            </div>
            <p className="service-note">
              My edge: Decades of making complex designs look effortlessly beautiful
            </p>
          </div>

          {/* Service 4 */}
          <div className="service-card compact-card">
            <div className="service-icon">💡</div>
            <h3>For Inventors & Entrepreneurs</h3>
            <p className="service-subtitle">"From French Skateboards to Viral Concepts"</p>
            <p>Visual prototyping that captivates and converts</p>
            <div className="client-example">
              <strong>Real example:</strong> French skateboard with shark-skin texture
            </div>
            <p className="service-note">
              My approach: Blend technical precision with artistic innovation
            </p>
          </div>

        </div>

        {/* قسم "Why Choose Me" */}
        <div className="why-choose">
          <h3>✅ Why Choose Cravimoor</h3>
          <div className="reasons-grid">
            <div className="reason">
              <strong>20+ Years Across 4 Industries</strong>
              <p>Medical → Automotive → Cement → Viral 3D Design</p>
            </div>
            <div className="reason">
              <strong>International Portfolio</strong>
              <p>France, Denmark, Spain, Tunisia - proven results</p>
            </div>
            <div className="reason">
              <strong>Technical + Visual Mastery</strong>
              <p>Rare combination of engineering insight and artistic vision</p>
            </div>
            <div className="reason">
              <strong>Viral Design Intuition</strong>
              <p>Creates content that performs (3.2M+ TikTok views)</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="cta-section">
          <h3>🚀 From Your Sketch to Stunning 3D</h3>
          <p>Whether it's industrial equipment or the next viral TikTok concept,<br/>
          I have the 20-year visual intuition to make it extraordinary.</p>
          <a href="#contact" className="cta-button">
            Get Your Free Visual Consultation
          </a>
        </div>

      </div>
    </section>
  );
};

export default OurServices;
