import React from 'react';
import './OurServices.css';

const OurServices = () => {
  return (
    <section className="our-services" id="services">
      <div className="services-container">
        
        {/* En-tête */}
        <div className="services-header">
          <h2>OUR SERVICES</h2>
          <p className="services-subtitle">
            <strong>CAD & 3D Design Expert</strong> - 20+ Years in Mechanical Design | 4.8M+ TikTok Views
          </p>
          <p className="services-intro">
            From industrial equipment to viral TikTok sensations, I transform concepts into visual masterpieces 
            that captivate audiences and drive engagement.
          </p>
        </div>

        {/* Statistiques TikTok */}
        <div className="tiktok-stats">
          <h3>🚀 Viral Design Proven on TikTok</h3>
          <p>My designs don't just look good - they capture attention at scale.</p>
          
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
            <strong>What this means for you:</strong> I create designs that naturally perform well on social media.
          </p>
        </div>

        {/* Services - 4 cartes */}
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
            <h3>Animation 3D & Design</h3>
            <p className="service-subtitle">Animation 3D Professionnelle</p>
            <p>Animation 3D de qualité pour présenter vos produits</p>
            <div className="benefits">
              <div className="benefit">✅ Design automobile performant</div>
              <div className="benefit">✅ Animation 3D Blender</div>
              <div className="benefit">✅ 4.8M+ vues TikTok</div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="service-card compact-card">
            <div className="service-icon">💡</div>
            <h3>Prototypage & Visualisation</h3>
            <p className="service-subtitle">Prototypage & Visualisation 3D</p>
            <p>Création de modèles 3D pour présentation et développement</p>
            <div className="client-example">
              <strong>Pour:</strong> Entrepreneurs, startups techniques
            </div>
            <p className="service-note">
              Précision technique + design attractif
            </p>
          </div>

        </div>

        {/* Why Choose */}
        <div className="why-choose">
          <h3>✅ Why Choose Cravimoor</h3>
          <div className="reasons-grid">
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
          </div>
        </div>

        {/* Call-to-Action (un seul!) */}
        <div className="cta-section">
          <h3>Projet de Conception 3D?</h3>
          <p>Discutons de votre besoin en modélisation technique ou design produit.</p>
          <a href="#contact" className="cta-button">
            Demander un Devis
          </a>
        </div>

      </div>
    </section>
  );
};

export default OurServices;
