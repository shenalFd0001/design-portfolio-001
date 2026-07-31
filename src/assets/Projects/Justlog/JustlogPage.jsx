import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./JustlogPage.css";
import Footer from '../../../Footer';
import Navbar from '../../../Navbar';

function JustlogPage() {
  const navigate = useNavigate();

  return (
    <div className="justlog-page">
      <Navbar />
      <div className="justlog-container">
        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate('/')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>

        {/* Header Section */}
        <header className="project-header">
          <span className="eyebrow">Product Design</span>
          <h1 className="header-title">
            Justlog — Igniting<br />Conversations
          </h1>

          <div className="meta-row">
            <div className="meta-group">
              <span className="meta-label">Industry</span>
              <span className="meta-pill">Blog &amp; Writing</span>
              <span className="meta-pill">International News</span>
            </div>
            <div className="meta-divider" />
            <div className="meta-group">
              <span className="meta-label">Project</span>
              <span className="meta-pill">Product Design</span>
            </div>
          </div>

          <p className="header-description">
            Designed a product experience for Justlog that clearly communicates
            their role as a platform for ideas — helping writers publish, and
            readers discover, conversations that matter.
          </p>
        </header>
      </div>

      {/* Full-bleed hero visual */}
      <section className="hero-visual">
        <div className="hero-visual-inner">
          <img src="/justlog1.png" alt="Justlog product overview" />
        </div>
      </section>

      <div className="justlog-container">
        {/* Discovery / context section */}
        <section className="content-block">
          <span className="eyebrow">Discovery</span>
          <h2 className="block-heading">A Fresh Editorial Identity</h2>
          <p className="block-text">
            The goal was to give Justlog a distinct visual voice — one that feels
            considered and editorial rather than generic. Every screen was
            designed to keep the writing itself at the center, with structure
            and hierarchy doing the quiet work of guiding the reader.
          </p>
        </section>

        {/* Paired image grid, set 1 */}
        <section className="image-pair">
          <div className="image-pair-item">
            <img src="/justlog2.png" alt="Justlog screen 2" />
          </div>
          <div className="image-pair-item">
            <img src="/justlog3.png" alt="Justlog screen 3" />
          </div>
        </section>
      </div>

      {/* Dark stat band, full-bleed */}
      <section className="stat-band">
        <div className="stat-band-inner">
          <span className="eyebrow eyebrow--light">Discovery</span>
          <h2 className="block-heading block-heading--light">Project Numbers</h2>
          <div className="stat-grid">
            <div className="stat-item">
              <span className="stat-number">7</span>
              <span className="stat-label">Design Assets</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Iterations</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">Wireframes</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Hours of Research</span>
            </div>
          </div>
        </div>
      </section>

      <div className="justlog-container">
        {/* Paired image grid, set 2 */}
        <section className="image-pair">
          <div className="image-pair-item">
            <img src="/justlog4.png" alt="Justlog screen 4" />
          </div>
          <div className="image-pair-item">
            <img src="/justlog5.png" alt="Justlog screen 5" />
          </div>
        </section>

        {/* Closing content block */}
        <section className="content-block">
          <span className="eyebrow">Outcome</span>
          <h2 className="block-heading">Beyond The Feed</h2>
          <p className="block-text">
            The final experience gives Justlog a calm, confident reading
            environment — one that scales cleanly from a quick scroll on
            mobile to a focused, distraction-free read on desktop.
          </p>
        </section>

        {/* Paired image grid, set 3 */}
        <section className="image-pair">
          <div className="image-pair-item">
            <img src="/justlog6.png" alt="Justlog screen 6" />
          </div>
          <div className="image-pair-item">
            <img src="/justlog7.png" alt="Justlog screen 7" />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default JustlogPage;