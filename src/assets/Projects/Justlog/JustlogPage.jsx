import React from "react";
import { useNavigate } from "react-router-dom";
import "./JustlogPage.css";
import Footer from "../../../Footer";
import Navbar from "../../../Navbar";
import Reveal from "../../Components/Reveal";

function JustlogPage() {
  const navigate = useNavigate();

 

  return (
    <div className="justlog-page">
      <Navbar />

      <main>
        <div className="justlog-container">
          {/* Back Button */}
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate("/")}
            aria-label="Go back to home"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>

          {/* Header Section */}
          <Reveal distance={40}>
            <header className="project-header">
              <span className="eyebrow">Product Design</span>

              <h1 className="header-title">
                Justlog — Igniting
                <br />
                Conversations.
              </h1>

              <div className="meta-row">
                <div className="meta-group">
                  <span className="meta-label">Industry</span>
                  <span className="meta-pill">Blog &amp; Writing</span>
                  <span className="meta-pill">International News</span>
                </div>

                <div className="meta-divider" aria-hidden="true" />

                <div className="meta-group">
                  <span className="meta-label">Project</span>
                  <span className="meta-pill">Product Design</span>
                </div>
              </div>

              <p className="header-description">
                Designed a product experience for Justlog that clearly
                communicates its role as a platform for ideas — helping writers
                publish and readers discover conversations that matter.
              </p>

              <div className="header-meta-details">
                <div className="meta-detail">
                  <h2 className="meta-detail-heading">Industry</h2>
                  <p className="meta-detail-value">Blog &amp; Writing</p>
                </div>

                <div className="meta-detail">
                  <h2 className="meta-detail-heading">Date</h2>
                  <p className="meta-detail-value">
                    <time dateTime="2024-01">Jan 2024</time>
                    {" – "}
                    <time dateTime="2024-03">Mar 2024</time>
                  </p>
                </div>
              </div>
            </header>
          </Reveal>
        </div>

        {/* Full-bleed Hero Visual */}
        <section
          className="hero-visual"
          aria-label="Justlog product overview"
        >
          <Reveal distance={48}>
            <div className="hero-visual-inner">
              <img
                src="/justlog1.png"
                alt="Overview of the Justlog product experience"
                fetchPriority="high"
              />
            </div>
          </Reveal>
        </section>

        <div className="justlog-container">
          {/* Discovery Section */}
          <Reveal>
            <section className="content-block">
              <span className="eyebrow">Discovery</span>

              <h2 className="block-heading">
                A Fresh Editorial Identity
              </h2>

              <p className="block-text">
                The goal was to give Justlog a distinct visual voice — one that
                feels considered and editorial rather than generic. Every
                screen was designed to keep the writing itself at the center,
                with structure and hierarchy doing the quiet work of guiding
                the reader.
              </p>
            </section>
          </Reveal>

          {/* Paired Image Grid — Set 1 */}
          <section
            className="image-pair"
            aria-label="Justlog interface designs"
          >
            <Reveal className="image-reveal">
              <div className="image-pair-item">
                <img
                  src="/justlog2.png"
                  alt="Justlog editorial interface design"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="image-reveal" delay={0.12}>
              <div className="image-pair-item">
                <img
                  src="/justlog3.png"
                  alt="Justlog article discovery interface"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>
        </div>

        {/* Dark Statistics Band */}
        <section
          className="stat-band"
          aria-labelledby="project-numbers-heading"
        >
          <div className="stat-band-inner">
            <Reveal>
              <span className="eyebrow eyebrow--light">
                Discovery
              </span>

              <h2
                id="project-numbers-heading"
                className="block-heading block-heading--light"
              >
                Project Numbers
              </h2>
            </Reveal>

            <div className="stat-grid">
              <Reveal className="stat-reveal">
                <div className="stat-item">
                  <span className="stat-number">7</span>
                  <span className="stat-label">Design Assets</span>
                </div>
              </Reveal>

              <Reveal className="stat-reveal" delay={0.1}>
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Iterations</span>
                </div>
              </Reveal>

              <Reveal className="stat-reveal" delay={0.2}>
                <div className="stat-item">
                  <span className="stat-number">12</span>
                  <span className="stat-label">Wireframes</span>
                </div>
              </Reveal>

              <Reveal className="stat-reveal" delay={0.3}>
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">
                    Hours of Research
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="justlog-container">
          {/* Paired Image Grid — Set 2 */}
          <section
            className="image-pair"
            aria-label="Additional Justlog interface designs"
          >
            <Reveal className="image-reveal">
              <div className="image-pair-item">
                <img
                  src="/justlog4.png"
                  alt="Justlog reading experience"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="image-reveal" delay={0.12}>
              <div className="image-pair-item">
                <img
                  src="/justlog5.png"
                  alt="Justlog publishing interface"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* Outcome Section */}
          <Reveal>
            <section className="content-block">
              <span className="eyebrow">Outcome</span>

              <h2 className="block-heading">
                Beyond The Feed
              </h2>

              <p className="block-text">
                The final experience gives Justlog a calm, confident reading
                environment — one that scales cleanly from a quick scroll on
                mobile to a focused, distraction-free read on desktop.
              </p>
            </section>
          </Reveal>

          {/* Paired Image Grid — Set 3 */}
          <section
            className="image-pair"
            aria-label="Final Justlog interface designs"
          >
            <Reveal className="image-reveal">
              <div className="image-pair-item">
                <img
                  src="/justlog6.png"
                  alt="Final Justlog desktop interface"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="image-reveal" delay={0.12}>
              <div className="image-pair-item">
                <img
                  src="/justlog7.png"
                  alt="Final Justlog mobile interface"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default JustlogPage;