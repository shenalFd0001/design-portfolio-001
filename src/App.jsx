import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';


function App() {
  const mainRef = useRef(null);
  useEffect(() => {
  const handleWheel = (e) => {
    if (mainRef.current) {
      e.preventDefault();
      mainRef.current.scrollTop += e.deltaY;
    }
  };

  window.addEventListener('wheel', handleWheel, { passive: false });
  return () => window.removeEventListener('wheel', handleWheel);
}, []);

// add the ref to your main element:
<main className="main-content" ref={mainRef}></main>
  const navigate = useNavigate();
  return (
    <div className="portfolio-container">
      {/* LEFT SIDEBAR - FIXED */}
      <aside className="sidebar">
        {/* Circular Profile Container */}
        <div className="profile-image">
          <img src="/profilepic.JPG" alt="Shenal Fernando" />
        </div>

        {/* Typography */}
        <h1 className="name-title">Shenal Fernando</h1>
        <p className="bio-text">
          I'm a product designer specialized in web app experiences across
          consumer tech, healthcare, and fintech. I've helped numerous companies
          bring innovative products to market and secure over $20M in investment
          funding.
        </p>

        {/* Circular Social Icons */}
        <div className="social-links-container">
          <div className="social-links-container">
            <a
              href="#"
              className="social-circle"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                className="social-icon-img"
              />
            </a>
            <a
              href="#"
              className="social-circle"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/behance.png"
                alt="Behance"
                className="social-icon-img"
              />
            </a>
            <a
              href="#"
              className="social-circle"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="social-icon-img"
              />
            </a>
            <a
              href="#"
              className="social-circle"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/CV.png"
                alt="Resume / CV"
                className="social-icon-img"
              />
            </a>
          </div>
        </div>

        <hr className="section-divider" />

        {/* Contact Section */}
        <div className="contact-section">
          <h3 className="contact-heading">Interested in working together?</h3>
          <p className="contact-subtext">
            Shoot me an email if you'd like to chat.
          </p>

          <div className="button-group">
            <button
              className="btn-pill btn-about"
              onClick={() => navigate("/about")}
            >
              About Me
            </button>
            <button className="btn-pill btn-email">Email</button>
          </div>
        </div>
      </aside>

      {/* RIGHT CONTENT - SCROLLABLE */}
      <main className="main-content">
        <section
          className="project-card"
          onClick={() => navigate("/packit")}
          style={{ cursor: "pointer" }}
        >
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
          <img src="/Saveup.jpg" alt="Project 3" />
          <div className="project-info">
            <h3>Save Up · App</h3>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;