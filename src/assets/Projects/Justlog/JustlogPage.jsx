import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./JustlogPage.css";

function JustlogPage() {
  const navigate = useNavigate();

  return (
    <div className="justlog-container">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate('/')}>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
      </button>

      {/* Header Section */}
      <header className="project-header">
        <h1 className="header-title">Justlog - Ideas, Igniting Conversations</h1>

        {/* Metadata Row */}
        <div className="meta-row">
          <div className="meta-group">
            <span className="meta-label">Industry</span>
            <span className="meta-pill">Data Labeling</span>
            <span className="meta-pill">AI</span>
          </div>

          <div className="meta-divider" />

          <div className="meta-group">
            <span className="yc-badge">YC</span>
            <span className="meta-text">X25</span>
          </div>

          <div className="meta-divider" />

          <div className="meta-group">
            <span className="meta-label">Project</span>
            <span className="meta-pill">Product Design</span>
          </div>
        </div>

        {/* Description */}
        <p className="header-description">
          Designed a product experience for Justlog that clearly communicates their role as 
          the data layer for AI, powering next-generation speech and voice models with high-quality audio data.
        </p>
      </header>

      {/* Page Content Placeholder */}
      <div className="justlog-placeholder">
        <p>justlog — coming soon</p>
      </div>
    </div>
  );
}

export default JustlogPage;