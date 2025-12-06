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
  <h3>Conception Mécanique Industrielle</h3>
  <p className="service-subtitle">20+ ans d'expertise en ingénierie & CAO</p>
  <ul className="service-list">
    <li><strong>Automobile & Aéronautique:</strong> Design CATIA pour ISUZU, concepts Bugatti/Lamborghini virals</li>
    <li><strong>Équipements Industriels:</strong> Rouleaux compacteurs, concasseurs ciment, tours de refroidissement</li>
    <li><strong>Dispositifs Médicaux:</strong> Formation certifiée SOFEMED - Classe IIb</li>
    <li><strong>Solutions Architecturales:</strong> Bibliothèque dissimulant gaines techniques</li>
    <li><strong>Produits Grand Public:</strong> Planche de skate design "peau de requin"</li>
    <li><strong>Pièces Mécaniques:</strong> Modélisation production-ready pour clients internationaux</li>
  </ul>
  <p className="service-note">
    Expert certifié CATIA V5, SolidWorks, Blender | Portfolio international (France, Danemark, Espagne)
  </p>
</div>

         <p className="service-subtitle">"Expertise technique internationale - Clients France & Danemark"</p>
<p>Modélisation 3D industrielle pour équipements lourds et solutions sur-mesure</p>
<div className="client-example">
  <strong>Référence clients:</strong> Fabricant danois de rouleaux compacteurs, client français design skateboard
</div>
<div className="client-example">
  <strong>Délivrable:</strong> Modèles 3D prêts pour production et plans techniques détaillés
</div>

         <p className="service-subtitle">"Animation 3D Cinématique - Viral sur TikTok"</p>
<p>Transformez vos produits en animations virales qui captivent 3.2M+ de vues</p>
<div className="benefits">
  <div className="benefit">✅ Design automobile viral (Bugatti, Lamborghini, Maybach)</div>
  <div className="benefit">✅ Animation 3D professionnelle Blender</div>
  <div className="benefit">✅ Preuve sociale: 47K+ likes TikTok</div>
</div>

          <p className="service-subtitle">"Du croquis à la visualisation 3D industrielle"</p>
<p>Prototypage visuel pour présentation investisseurs et campagnes crowdfunding</p>
<div className="client-example">
  <strong>Expertise certifiée:</strong> Master gestion maintenance industrielle + 10 ans SOTACIB
</div>

       <div className="reason">
  <strong>Expertise Industrielle Certifiée</strong>
  <p>20 ans across automobile (ISUZU/GM), cimenterie (SOTACIB), médical (SOFEMED), design viral</p>
</div>
<div className="reason">
  <strong>Portfolio International Réel</strong>
  <p>Clients France, Danemark, Espagne - Solutions techniques validées sur site</p>
</div>
<div className="reason">
  <strong>Formation & Certification</strong>
  <p>Master gestion maintenance + Formation médical ISO + Expert CATIA/SolidWorks</p>
</div>
<div className="reason">
  <strong>Preuve Sociale Digitale</strong>
  <p>Designs virals: 3.2M vues TikTok, recommandation Dassault Systèmes</p>
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
