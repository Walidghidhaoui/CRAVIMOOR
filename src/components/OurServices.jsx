import React from 'react';

const OurServices = () => {
  return (
    <section className="our-services" id="services">
      <h2>OUR SERVICES</h2>
      <p>
        Cravimoor offers a wide range of services to help you transform your concepts into reality.
        From product design to 3D modeling and animation, we have the expertise to bring your vision to life.
      </p>
      <div className="service-grid">
        <div className="service-card">
          <h3>⚙️ Product Design</h3>
          <p>Our team of industrial designers will work with you to create innovative and user-centric product designs.</p>
        </div>
        <div className="service-card">
          <h3>🛠️ Prototyping</h3>
          <p>We can create physical and digital prototypes to help you validate your designs and gather feedback.</p>
        </div>
        <div className="service-card">
          <h3>🧩 3D Modeling</h3>
          <p>Our 3D modeling experts can create high-quality, photorealistic models and animations to showcase your products.</p>
        </div>
        <div className="service-card">
          <h3>🎨 Rendering</h3>
          <p>We offer advanced 3D rendering services to produce stunning visuals that bring your designs to life.</p>
        </div>
        <div className="service-card">
          <h3>🎥 Animation</h3>
          <p>Our 3D animation experts can create captivating videos to showcase your products in action.</p>
        </div>
        <div className="service-card">
          <h3>👓 Visualization</h3>
          <p>We can provide high-quality 3D visualizations to help you better understand and communicate your design ideas.</p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
