import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // CORRECTION ici : emailjs-com ➔ @emailjs/browser
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    emailjs.send(
      'service_5kluta8',       // service_5kluta8
      'template_y7n64fd',      // template_y7n64fd
      templateParams,
      'UU4qhYU51mSNj6wdR'           // UU4qhYU51mSNj6wdR
    )
    .then(() => {
      alert('Message envoyé avec succès à walidghidhawi@gmail.com !');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Erreur lors de l\'envoi :', error);
      alert("Erreur lors de l'envoi");
    });
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'walidghidhawi@gmail.com' },
    { icon: '📱', label: 'Téléphone', value: '+216 96 30 78 00' },
    { icon: '🏢', label: 'Adresse', value: 'Kairouan, Tunis' }
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-container">

        {/* Partie Coordonnées */}
        <div className="contact-info-card">
          <h3>Nos Coordonnées</h3>
          <table className="contact-table">
            <tbody>
              {contactInfo.map((item, index) => (
                <tr key={index}>
                  <td className="icon-cell">{item.icon}</td>
                  <td className="label-cell">{item.label}</td>
                  <td className="value-cell">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Liens sociaux */}
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/walid-ghidhaoui-3a3120125/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button linkedin-btn"
            >
              <span className="social-icon">🔗</span> LinkedIn
            </a>
            <a href="https://x.com/walid_ghidhaoui"
            target="_blank"
            rel="noopener noreferrer"
             className="social-button twitter-btn">
  <span className="social-icon">𝕏</span> Twitter
</a>
<a 
  href="https://www.facebook.com/share/15gM7LFCje/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="social-button facebook-btn"
>
<i class="fab fa-facebook-f social-icon">f</i> Facebook
</a>
            <a 
  href="https://instagram.com/walidghidhawi" 
  target="_blank" 
  rel="noopener noreferrer"
  className="social-button instagram-btn"
>
  <span className="social-icon">📷</span> Instagram
</a>
<a href="https://www.tiktok.com/@cravimoor" 
   class="social-btn tiktok-btn" 
   rel="noopener noreferrer"
   target="_blank">
    
   <i class="fab fa-tiktok social-icon">♬</i> TikTok
</a>
<a href="https://youtube.com/@cravimoor" 
   class="social-btn youtube-btn"
   rel="noopener noreferrer"
   target="_blank">
    
   <i class="fab fa-youtube social-icon">📺</i> YouTube
</a>

          </div>
        </div>

        {/* Formulaire de contact */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Votre Nom</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Votre Email</label>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Votre Message</label>
          </div>

          <button type="submit" className="submit-btn">
            Envoyer
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactUs;
