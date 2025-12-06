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
  <div className="service-icon">⚙️</div>
  <h3>Conception 3D Industrielle & Automobile</h3>
  <p className="service-subtitle">Expert CATIA V5, SolidWorks, Blender - 20+ ans d'expérience</p>
  <ul className="service-list">
    <li><strong>Design Automobile:</strong> Concepts Bugatti, Lamborghini, Maybach - modélisation CATIA</li>
    <li><strong>Équipements Industriels:</strong> Rouleaux compacteurs, concasseurs, tours de refroidissement</li>
    <li><strong>Design Produit:</strong> Planche de skate innovante (client France), pièces mécaniques</li>
    <li><strong>Solutions Techniques:</strong> Bibliothèque dissimulant gaines techniques</li>
    <li><strong>Modélisation 3D:</strong> Pour fabrication, présentation, documentation technique</li>
  </ul>
  <p className="service-note">
    Spécialiste en modélisation 3D précise et fonctionnelle pour l'industrie
  </p>
</div>

        {/* Service 2 */}
<div className="service-card compact-card">
  <div className="service-icon">🌍</div>
  <h3>Pour Clients Internationaux</h3>
  <p className="service-subtitle">Solutions techniques pour l'Europe</p>
  <p>Modélisation 3D d'équipements industriels et produits techniques</p>
  <div className="client-example">
    <strong>Références:</strong> Fabricant danois de rouleaux compacteurs, design skateboard France
  </div>
  <div className="client-example">
    <strong>Livrable:</strong> Modèles 3D prêts pour production et plans techniques
  </div>
</div>

        {/* Service 3 */}
<div className="service-card compact-card">
  <div className="service-icon">🎬</div>
  <h3>Animation 3D & Design Viral</h3>
  <p className="service-subtitle">Création de contenu performant sur les réseaux</p>
  <p>Transformez vos produits en animations 3D qui attirent l'attention</p>
  <div className="benefits">
    <div className="benefit">✅ Design automobile performant sur TikTok</div>
    <div className="benefit">✅ Animation 3D professionnelle Blender</div>
    <div className="benefit">✅ Preuve: 3.2M+ vues, 47K+ likes</div>
  </div>
</div>

          {/* Service 4 */}
<div className="service-card compact-card">
  <div className="service-icon">💡</div>
  <h3>Prototypage & Visualisation</h3>
  <p className="service-subtitle">Du croquis à la visualisation 3D</p>
  <p>Création de modèles 3D pour présentation, crowdfunding, investisseurs</p>
  <div className="client-example">
    <strong>Pour:</strong> Entrepreneurs, inventeurs, startups techniques
  </div>
  <p className="service-note">
    Précision technique + design attractif
  </p>
</div>

      <div className="reason">
  <strong>Expérience Industrielle</strong>
  <p>20+ ans dans l'automobile, équipements industriels, design 3D</p>
</div>
<div className="reason">
  <strong>Expertise Technique</strong>
  <p>Spécialiste CATIA V5, SolidWorks, Blender - formation ingénierie mécanique</p>
</div>
<div className="reason">
  <strong>Résultats Concrets</strong>
  <p>Clients France, Danemark - Designs performants sur TikTok</p>
</div>
<div className="reason">
  <strong>Approche Pratique</strong>
  <p>Solutions techniques fonctionnelles et esthétiques</p>
</div>
          <div className="cta-section">
  <h3>Projet de Conception 3D?</h3>
  <p>Discutons de votre besoin en modélisation technique ou design produit.</p>
  <a href="#contact" className="cta-button">
    Demander un Devis
  </a>
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
