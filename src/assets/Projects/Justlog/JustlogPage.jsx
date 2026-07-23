import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./JustlogPage.css";
import Footer from '../../../Footer';


function JustlogPage() {
  const navigate = useNavigate();

  return (
    <div className="justlog-container">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate('/')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
      </button>

      {/* Header Section */}
      <header className="project-header">
        <h1 className="header-title">Justlog - Ideas, Igniting Conversations</h1>

        <div className="meta-row">
          <div className="meta-group">
            <span className="meta-label">Industry</span>
            <span className="meta-pill">Blog & Writing</span>
            <span className="meta-pill">International News</span>
          </div>
          <div className="meta-group">
            <span className="meta-label">Project</span>
            <span className="meta-pill">Product Design</span>
          </div>
        </div>

        <p className="header-description">
          Designed a product experience for Justlog that clearly communicates their role as
          the data layer for AI, powering next-generation speech and voice models with high-quality audio data.
        </p>
      </header>

      {/* Images */}
      <div className="project-images">
        <img src="/justlog1.png" alt="Justlog screen 1" />
        <img src="/justlog2.png" alt="Justlog screen 2" />
        <img src="/justlog3.png" alt="Justlog screen 3" />
        <img src="/justlog4.png" alt="Justlog screen 4" />
        <img src="/justlog5.png" alt="Justlog screen 5" />
        <img src="/justlog6.png" alt="Justlog screen 6" />
        <img src="/justlog7.png" alt="Justlog screen 7" />
      </div>

      <Footer />
    </div>
  );
}

export default JustlogPage;