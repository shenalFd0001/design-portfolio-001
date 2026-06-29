import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PackitPage.css';

function PackitPage() {
  const navigate = useNavigate();

  return (
    <div className="packit-container">
      <button className="back-btn" onClick={() => navigate('/')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
      </button>

      <div className="packit-placeholder">
        <p>Packit — coming soon</p>
      </div>
    </div>
  );
}

export default PackitPage;