import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutPage.css';

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate('/')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
      </button>

      {/* Heading */}
      <h1 className="about-heading">
        Crafting the Future,<br />
        One Pixel at a Time
      </h1>

      {/* Subtitle */}
      <p className="about-subtitle">
        Passionate about creating impactful, user-centered web app experiences across industries.
      </p>

      {/* Social Icons */}
      <div className="about-socials">
        <a href="#" className="about-social-circle" target="_blank" rel="noreferrer">
          <img src="/instagram.png" alt="Instagram" className="about-social-img" />
        </a>
        <a href="#" className="about-social-circle" target="_blank" rel="noreferrer">
          <img src="/behance.png" alt="Behance" className="about-social-img" />
        </a>
        <a href="#" className="about-social-circle" target="_blank" rel="noreferrer">
          <img src="/linkedin.png" alt="LinkedIn" className="about-social-img" />
        </a>
        <a href="#" className="about-social-circle" target="_blank" rel="noreferrer">
          <img src="/CV.png" alt="Resume / CV" className="about-social-img" />
        </a>
      </div>

      {/* Profile Photo */}
      <div className="about-photo-wrapper">
        <img src="/profilepic.JPG" alt="Shenal Fernando" className="about-photo" />
      </div>

      {/* Bio */}
      <div className="about-bio">
        <p>
          As a product designer, I specialize in crafting seamless web app experiences
          across diverse industries including consumer tech, healthcare, and fintech.
          With over a decade of experience, I've had the privilege of working with
          talented teams to launch innovative products that not only meet user needs but
          also drive business success. My work has contributed to securing over $20M
          in investment funding, and I take pride in designing intuitive solutions that push
          the boundaries of what's possible.
        </p>
        <p>
          I believe great design is invisible — it simply feels right. Whether it's a
          complex SaaS dashboard or a consumer-facing mobile app, I bring the same
          dedication to clarity, usability, and visual craft to every project I take on.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;