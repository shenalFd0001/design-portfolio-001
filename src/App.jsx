import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="portfolio-container">
        {/* LEFT SIDEBAR - STICKY */}
        <aside className="sidebar">
          {/* Circular Profile Container */}
          <div className="profile-image">
            <img src="/profilepic.JPG" alt="Shenal Fernando" />
          </div>

          <div className="sidebar-left">
            {/* Typography */}
            <h1 className="name-title">
              Hi, I'm <span className="name-highlight">Shenal</span>
            </h1>
            <p className="bio-text">
              I'm a product designer specialized in web app experiences across
              consumer tech, healthcare, and fintech.
            </p>

            {/* Contact Section */}
            <div className="contact-section">
              <div className="button-group">
                <button
                  className="btn-pill btn-about"
                  onClick={() => navigate("/about")}
                >
                  Email
                </button>
                <button className="btn-pill btn-email">View my CV</button>
              </div>
            </div>
          </div>

          {/* Circular Social Icons */}
          <div className="social-links-container">
            <a
              href="https://www.instagram.com/_shena_fd_/"
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
        </aside>

        {/* RIGHT CONTENT - PAGE SCROLLS */}
        <main className="main-content">
          <div className="projects-grid">
            <section className="project-card">
              <div className="card-image-wrapper">
                <img src="/BuildingboxThumbnail.png" alt="Saveup" />
              </div>
              <div className="project-info">
                <h3>Saveup - Personal Finance Tracker</h3>
                <div className="project-tags">
                  <span className="tag">Brand</span>
                </div>
              </div>
            </section>

            <section className="project-card">
              <div className="card-image-wrapper">
                <img src="/ZenmartThumbnail.png" alt="Saveup" />
              </div>
              <div className="project-info">
                <h3>Saveup - Personal Finance Tracker</h3>
                <div className="project-tags">
                  <span className="tag">Brand</span>
                </div>
              </div>
            </section>

            <section className="project-card">
              <div className="card-image-wrapper">
                <img src="/PackitThumbnail.png" alt="Saveup" />
              </div>
              <div className="project-info">
                <h3>Saveup - Personal Finance Tracker</h3>
                <div className="project-tags">
                  <span className="tag">Brand</span>
                </div>
              </div>
            </section>

            <section className="project-card">
              <div className="card-image-wrapper">
                <img src="/SheperdThumbnail.png" alt="Saveup" />
              </div>
              <div className="project-info">
                <h3>Saveup - Personal Finance Tracker</h3>
                <div className="project-tags">
                  <span className="tag">Brand</span>
                </div>
              </div>
            </section>

            <section
              className="project-card"
              onClick={() => navigate("/packit")}
            >
              <div className="card-image-wrapper">
                <img src="/LivelotteryThumbnail.png" alt="Packit" />
              </div>
              <div className="project-info">
                <h3>Live Lottery - Gamble Win & Win</h3>
                <div className="project-tags">
                  <span className="tag">Product</span>
                  <span className="tag">Web</span>
                </div>
              </div>
            </section>

            <section
              className="project-card"
              onClick={() => navigate("/saveup")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate("/saveup");
                }
              }}
            >
              <div className="card-image-wrapper">
                <img src="/SaveupThumbnail.png" alt="Saveup" />
              </div>

              <div className="project-info">
                <h3>Saveup - Personal Finance Tracker</h3>

                <div className="project-tags">
                  <span className="tag">Brand</span>
                </div>
              </div>
            </section>

            <section
              className="project-card"
              onClick={() => navigate("/roamride")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate("/roamride");
                }
              }}
            >
              <div className="card-image-wrapper">
                <img src="/SigiriyaThumbnail.png" alt="Roamride" />
              </div>

              <div className="project-info">
                <h3>Roamride - Book and Go</h3>

                <div className="project-tags">
                  <span className="tag">App</span>
                </div>
              </div>
            </section>

            <section className="project-card">
              <div className="card-image-wrapper">
                <img src="/SilviaThumbnail.png" alt="Silvianco" />
              </div>
              <div className="project-info">
                <h3>Silvia & Co.</h3>
                <div className="project-tags">
                  <span className="tag">Product</span>
                  <span className="tag">Web</span>
                </div>
              </div>
            </section>

            <section
              className="project-card"
              onClick={() => navigate("/fitmaldives")}
              role="button"
              tabIndex={0}
            >
              <div className="card-image-wrapper">
                <img src="/FitmaldivesThumbnail.png" alt="Fit Maldives" />
              </div>

              <div className="project-info">
                <h3>Fit Maldives</h3>

                <div className="project-tags">
                  <span className="tag">Brand</span>
                </div>
              </div>
            </section>

            <section
              className="project-card"
              onClick={() => navigate("/greenify")}
              role="button"
              tabIndex={0}
            >
              <div className="card-image-wrapper">
                <img src="/GreenifyThumbnail.png" alt="Greenify" />
              </div>

              <div className="project-info">
                <h3>Greenify - Let's go green</h3>

                <div className="project-tags">
                  <span className="tag">App</span>
                </div>
              </div>
            </section>

            <section
              className="project-card"
              onClick={() => navigate("/taxilk")}
            >
              <div className="card-image-wrapper">
                <img src="/Taxilk.png" alt="Taxi.lk" />
              </div>
              <div className="project-info">
                <h3>Taxi.lk - Order Anytime Anywhere</h3>
                <div className="project-tags">
                  <span className="tag">Product</span>
                </div>
              </div>
            </section>

            <section
              className="project-card"
              onClick={() => navigate("/justlog")}
            >
              <div className="card-image-wrapper">
                <img src="/JustlogThumbnail.png" alt="Justlog" />
              </div>
              <div className="project-info">
                <h3>Justlog - Ideas, Igniting Conversations</h3>
                <div className="project-tags">
                  <span className="tag">Brand</span>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
