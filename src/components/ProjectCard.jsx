import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ imageUrl, title, description, linkedinUrl }) => {
  const isTikTok = linkedinUrl.includes('tiktok.com');

  return (
    <div className="project-card-wrapper">
      <div className="project-card">
        <div 
          className="image-frame"
          onClick={() => window.open(linkedinUrl, '_blank', 'noopener,noreferrer')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && window.open(linkedinUrl, '_blank', 'noopener,noreferrer')}
        >
          <img 
            src={imageUrl.startsWith('/') ? process.env.PUBLIC_URL + imageUrl : imageUrl} 
            alt={title} 
            className="project-image" 
            onError={(e) => {
              e.target.src = process.env.PUBLIC_URL + '/images/placeholder.jpg';
            }}
          />
          <div className={`social-badge ${isTikTok ? 'tiktok-badge' : 'linkedin-badge'}`}>
            {isTikTok ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="#fff">
                <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            )}
          </div>
        </div>
        <div className="project-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
