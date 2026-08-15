import React from "react";
import { useNavigate } from "react-router-dom";
import "./Greenify.css";
import Footer from "../../../Footer";
import Navbar from "../../../Navbar";
import Reveal from "../../Components/Reveal";

function GreenifyPage() {
  const navigate = useNavigate();

  return (
    <div className="greenify-page">
      <Navbar />

      <main>
        {/* =========================
            PROJECT HEADER
        ========================== */}

        <div className="greenify-container">
          <button
            type="button"
            className="greenify-back-btn"
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

          <Reveal distance={40}>
            <header className="greenify-project-header">
              <div className="greenify-header-title-row">
                <h1 className="greenify-header-title">
                  Greenify
                </h1>
              </div>

              <span className="greenify-eyebrow">
                Product Design
              </span>

              <p className="greenify-header-description">
                Greenify is a sustainability-focused mobile experience
                designed to encourage people to take part in environmental
                challenges, connect with communities and turn everyday actions
                into measurable positive impact.
              </p>

              <div className="greenify-header-meta-details">
                <div className="greenify-meta-detail">
                  <h2 className="greenify-meta-detail-heading">
                    Industry
                  </h2>

                  <p className="greenify-meta-detail-value">
                    Sustainability
                  </p>
                </div>

                <div className="greenify-meta-detail">
                  <h2 className="greenify-meta-detail-heading">
                    Project
                  </h2>

                  <p className="greenify-meta-detail-value">
                    Mobile App Design
                  </p>
                </div>
              </div>
            </header>
          </Reveal>
        </div>

        {/* =========================
            HERO IMAGE
        ========================== */}

        <section
          className="greenify-hero-visual"
          aria-label="Greenify app overview"
        >
          <Reveal distance={48}>
            <div className="greenify-hero-visual-inner">
              <img
                src="/greenify1.png"
                alt="Greenify mobile app overview"
                fetchPriority="high"
              />
            </div>
          </Reveal>
        </section>

        {/* =========================
            DISCOVERY
        ========================== */}

        <div className="greenify-container">
          <Reveal>
            <section className="greenify-content-block">
              <span className="greenify-eyebrow">
                Discovery
              </span>

              <h2 className="greenify-block-heading">
                Making Sustainability More Engaging
              </h2>

              <p className="greenify-block-text">
                Environmental action can often feel difficult to measure or
                disconnected from everyday life. Greenify was designed around
                the idea of turning sustainability into something simple,
                social and rewarding.
              </p>
            </section>
          </Reveal>

          {/* Images 2 + 3 */}

          <section
            className="greenify-image-pair"
            aria-label="Greenify application screens"
          >
            <Reveal className="greenify-image-reveal">
              <div className="greenify-image-pair-item">
                <img
                  src="/greenify2.png"
                  alt="Greenify challenge interface"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal
              className="greenify-image-reveal"
              delay={0.12}
            >
              <div className="greenify-image-pair-item">
                <img
                  src="/greenify3.png"
                  alt="Greenify community interface"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>
        </div>

        {/* =========================
            STATISTICS BAND
        ========================== */}

        <section
          className="greenify-stat-band"
          aria-labelledby="greenify-numbers-heading"
        >
          <div className="greenify-stat-band-inner">
            <Reveal>
              <span className="greenify-eyebrow greenify-eyebrow--light">
                Project
              </span>

              <h2
                id="greenify-numbers-heading"
                className="greenify-block-heading greenify-block-heading--light"
              >
                Project Numbers
              </h2>
            </Reveal>

            <div className="greenify-stat-grid">
              <Reveal className="greenify-stat-reveal">
                <div className="greenify-stat-item">
                  <span className="greenify-stat-number">
                    20+
                  </span>

                  <span className="greenify-stat-label">
                    App Screens
                  </span>
                </div>
              </Reveal>

              <Reveal
                className="greenify-stat-reveal"
                delay={0.1}
              >
                <div className="greenify-stat-item">
                  <span className="greenify-stat-number">
                    5+
                  </span>

                  <span className="greenify-stat-label">
                    User Flows
                  </span>
                </div>
              </Reveal>

              <Reveal
                className="greenify-stat-reveal"
                delay={0.2}
              >
                <div className="greenify-stat-item">
                  <span className="greenify-stat-number">
                    4+
                  </span>

                  <span className="greenify-stat-label">
                    Iterations
                  </span>
                </div>
              </Reveal>

              <Reveal
                className="greenify-stat-reveal"
                delay={0.3}
              >
                <div className="greenify-stat-item">
                  <span className="greenify-stat-number">
                    1
                  </span>

                  <span className="greenify-stat-label">
                    Design System
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================
            SECOND HALF
        ========================== */}

        <div className="greenify-container">

          {/* Images 4 + 5 */}

          <section
            className="greenify-image-pair"
            aria-label="Greenify challenge designs"
          >
            <Reveal className="greenify-image-reveal">
              <div className="greenify-image-pair-item">
                <img
                  src="/greenify4.png"
                  alt="Greenify environmental challenges"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal
              className="greenify-image-reveal"
              delay={0.12}
            >
              <div className="greenify-image-pair-item">
                <img
                  src="/greenify5.png"
                  alt="Greenify challenge details"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* Outcome */}

          <Reveal>
            <section className="greenify-content-block">
              <span className="greenify-eyebrow">
                Outcome
              </span>

              <h2 className="greenify-block-heading">
                Small Actions. Bigger Impact.
              </h2>

              <p className="greenify-block-text">
                The final experience brings challenges, community activity,
                progress tracking and rewards into one simple platform,
                encouraging people to build more sustainable habits while
                seeing the impact they create together.
              </p>
            </section>
          </Reveal>

          {/* Images 6 + 7 */}

          <section
            className="greenify-image-pair"
            aria-label="Greenify community designs"
          >
            <Reveal className="greenify-image-reveal">
              <div className="greenify-image-pair-item">
                <img
                  src="/greenify6.png"
                  alt="Greenify community feed"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal
              className="greenify-image-reveal"
              delay={0.12}
            >
              <div className="greenify-image-pair-item">
                <img
                  src="/greenify7.png"
                  alt="Greenify leaderboard"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* Images 8 + 9 */}

          <section
            className="greenify-image-pair"
            aria-label="Additional Greenify designs"
          >
            <Reveal className="greenify-image-reveal">
              <div className="greenify-image-pair-item">
                <img
                  src="/greenify8.png"
                  alt="Greenify organisation interface"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal
              className="greenify-image-reveal"
              delay={0.12}
            >
              <div className="greenify-image-pair-item">
                <img
                  src="/greenify9.png"
                  alt="Greenify rewards interface"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* Closing Image */}

          <Reveal>
            <div className="greenify-image-single">
              <img
                src="/greenify10.png"
                alt="Greenify final application overview"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default GreenifyPage;