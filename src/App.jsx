import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* LEFT SIDEBAR - FIXED */}
      <aside className="sidebar">
        <div className="profile-image">
          <img src="https://via.placeholder.com/80" alt="Profile" />
        </div>
        <h1>Shenal Fernando</h1>
        <p className="bio">
          I'm a product designer specialized in web app experiences across consumer tech, healthcare, and fintech.
        </p>
        <div className="social-links">
          <span>🌐</span> <span>📸</span> <span>💼</span>
        </div>
        <div className="contact-section">
          <p>Interested in working together?</p>
          <button className="btn-email">Email</button>
        </div>
      </aside>

      {/* RIGHT CONTENT - SCROLLABLE */}
      <main className="main-content">
        <section className="project-card">
          <img src="/Packit.jpg" alt="Project 1" />
          <div className="project-info">
            <h3>Packit · Product · Web</h3>
          </div>
        </section>

        <section className="project-card">
          <img src="/luminaura.jpg" alt="Project 2" />
          <div className="project-info">
            <h3>Luminaura · Brand</h3>
          </div>
        </section>

        <section className="project-card">
          <img src="https://via.placeholder.com/800x500" alt="Project 3" />
          <div className="project-info">
            <h3>Clarity Craft · App</h3>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;