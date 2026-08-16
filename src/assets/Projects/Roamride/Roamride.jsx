import React from "react";
import { useNavigate } from "react-router-dom";
import "./Roamride.css";
import Footer from "../../../Footer";
import Navbar from "../../../Navbar";
import Reveal from "../../Components/Reveal";

function RoamridePage() {
  const navigate = useNavigate();

  return (
    <div className="roamride-page">
      <Navbar />

      <main>
        <div className="roamride-container">
          {/* Back Button */}
          <button
            type="button"
            className="roamride-back-btn"
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

          {/* Header */}
          <Reveal distance={40}>
            <header className="roamride-project-header">
              <div className="roamride-header-title-row">
                <h1 className="roamride-header-title">
                  Roamride
                </h1>
              </div>

              <span className="roamride-eyebrow">
                Product Design
              </span>

              <p className="roamride-header-description">
                Roamride is a travel and mobility experience designed to make
                discovering destinations and booking rides simple, clear and
                convenient.
              </p>

              <div className="roamride-header-meta-details">
                <div className="roamride-meta-detail">
                  <h2 className="roamride-meta-detail-heading">
                    Industry
                  </h2>

                  <p className="roamride-meta-detail-value">
                    Travel & Mobility
                  </p>
                </div>

                <div className="roamride-meta-detail">
                  <h2 className="roamride-meta-detail-heading">
                    Project
                  </h2>

                  <p className="roamride-meta-detail-value">
                    Product Design
                  </p>
                </div>
              </div>
            </header>
          </Reveal>
        </div>

        {/* Hero */}
        <section
          className="roamride-hero-visual"
          aria-label="Roamride product overview"
        >
          <Reveal distance={48}>
            <div className="roamride-hero-visual-inner">
              <img
                src="/Roamride1.png"
                alt="Roamride product overview"
                fetchPriority="high"
              />
            </div>
          </Reveal>
        </section>

        {/* Discovery */}
        <div className="roamride-container">
          <Reveal>
            <section className="roamride-content-block">
              <span className="roamride-eyebrow">
                Discovery
              </span>

              <h2 className="roamride-block-heading">
                Making Travel Easier to Explore
              </h2>

              <p className="roamride-block-text">
                The experience was designed to reduce friction when discovering
                destinations, planning journeys and booking transport, while
                keeping the interface simple and easy to understand.
              </p>
            </section>
          </Reveal>

          {/* Images 2 + 3 */}
          <section className="roamride-image-pair">
            <Reveal className="roamride-image-reveal">
              <div className="roamride-image-pair-item">
                <img
                  src="/Roamride2.png"
                  alt="Roamride interface design"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="roamride-image-reveal" delay={0.12}>
              <div className="roamride-image-pair-item">
                <img
                  src="/Roamride3.png"
                  alt="Roamride interface design"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>
        </div>

        {/* Statistics */}
        <section className="roamride-stat-band">
          <div className="roamride-stat-band-inner">
            <Reveal>
              <span className="roamride-eyebrow roamride-eyebrow--light">
                Project
              </span>

              <h2 className="roamride-block-heading roamride-block-heading--light">
                Project Numbers
              </h2>
            </Reveal>

            <div className="roamride-stat-grid">
              <Reveal className="roamride-stat-reveal">
                <div className="roamride-stat-item">
                  <span className="roamride-stat-number">20+</span>
                  <span className="roamride-stat-label">App Screens</span>
                </div>
              </Reveal>

              <Reveal className="roamride-stat-reveal" delay={0.1}>
                <div className="roamride-stat-item">
                  <span className="roamride-stat-number">5+</span>
                  <span className="roamride-stat-label">User Flows</span>
                </div>
              </Reveal>

              <Reveal className="roamride-stat-reveal" delay={0.2}>
                <div className="roamride-stat-item">
                  <span className="roamride-stat-number">4+</span>
                  <span className="roamride-stat-label">Iterations</span>
                </div>
              </Reveal>

              <Reveal className="roamride-stat-reveal" delay={0.3}>
                <div className="roamride-stat-item">
                  <span className="roamride-stat-number">1</span>
                  <span className="roamride-stat-label">Design System</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Second Half */}
        <div className="roamride-container">
          <section className="roamride-image-pair">
            <Reveal className="roamride-image-reveal">
              <div className="roamride-image-pair-item">
                <img
                  src="/Roamride4.png"
                  alt="Roamride interface design"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="roamride-image-reveal" delay={0.12}>
              <div className="roamride-image-pair-item">
                <img
                  src="/Roamride5.png"
                  alt="Roamride interface design"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* Outcome */}
          <Reveal>
            <section className="roamride-content-block">
              <span className="roamride-eyebrow">
                Outcome
              </span>

              <h2 className="roamride-block-heading">
                Discover. Book. Go.
              </h2>

              <p className="roamride-block-text">
                The final experience brings destination discovery and travel
                planning together in one streamlined interface, helping users
                move from inspiration to booking with less friction.
              </p>
            </section>
          </Reveal>

          {/* Images 6 + 7 */}
          <section className="roamride-image-pair">
            <Reveal className="roamride-image-reveal">
              <div className="roamride-image-pair-item">
                <img
                  src="/Roamride6.png"
                  alt="Roamride interface design"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="roamride-image-reveal" delay={0.12}>
              <div className="roamride-image-pair-item">
                <img
                  src="/Roamride7.png"
                  alt="Roamride interface design"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* Final */}
          <Reveal>
            <div className="roamride-image-single">
              <img
                src="/Roamride8.png"
                alt="Roamride final product presentation"
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

export default RoamridePage;