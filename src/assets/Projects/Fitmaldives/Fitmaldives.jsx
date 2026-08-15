import React from "react";
import { useNavigate } from "react-router-dom";
import "./Fitmaldives.css";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import Reveal from "../../Components/Reveal";

function FitmaldivesPage() {
  const navigate = useNavigate();

  return (
    <div className="fitmaldives-page">
      <Navbar />

      <main>
        {/* =========================
            PROJECT HEADER
        ========================== */}

        <div className="fitmaldives-container">
          <button
            type="button"
            className="fitmaldives-back-btn"
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
            <header className="fitmaldives-project-header">
              <div className="fitmaldives-header-title-row">
                <h1 className="fitmaldives-header-title">
                  Fit Maldives
                </h1>
              </div>

              <span className="fitmaldives-eyebrow">
                Brand Design
              </span>

              <p className="fitmaldives-header-description">
                A modern fitness and wellness brand designed for the Maldives,
                focused on creating an energetic, clean and approachable visual
                identity.
              </p>

              <div className="fitmaldives-header-meta-details">
                <div className="fitmaldives-meta-detail">
                  <h2 className="fitmaldives-meta-detail-heading">
                    Industry
                  </h2>

                  <p className="fitmaldives-meta-detail-value">
                    Fitness & Wellness
                  </p>
                </div>

                <div className="fitmaldives-meta-detail">
                  <h2 className="fitmaldives-meta-detail-heading">
                    Project
                  </h2>

                  <p className="fitmaldives-meta-detail-value">
                    Branding
                  </p>
                </div>
              </div>
            </header>
          </Reveal>
        </div>

        {/* =========================
            HERO IMAGE
            fitmaldives1
        ========================== */}

        <section
          className="fitmaldives-hero-visual"
          aria-label="Fit Maldives brand overview"
        >
          <Reveal distance={48}>
            <div className="fitmaldives-hero-visual-inner">
              <img
                src="/fitmaldives1.png"
                alt="Fit Maldives brand overview"
                fetchPriority="high"
              />
            </div>
          </Reveal>
        </section>

        {/* =========================
            DISCOVERY
        ========================== */}

        <div className="fitmaldives-container">
          <Reveal>
            <section className="fitmaldives-content-block">
              <span className="fitmaldives-eyebrow">
                Discovery
              </span>

              <h2 className="fitmaldives-block-heading">
                Creating an Active Identity
              </h2>

              <p className="fitmaldives-block-text">
                The brand was developed to communicate energy, movement and
                accessibility while maintaining a clean visual direction that
                feels relevant to a modern fitness-focused audience.
              </p>
            </section>
          </Reveal>

          {/* =========================
              IMAGES 2 + 3
          ========================== */}

          <section
            className="fitmaldives-image-pair"
            aria-label="Fit Maldives branding designs"
          >
            <Reveal className="fitmaldives-image-reveal">
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives2.png"
                  alt="Fit Maldives branding design 2"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal
              className="fitmaldives-image-reveal"
              delay={0.12}
            >
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives3.png"
                  alt="Fit Maldives branding design 3"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* =========================
              IMAGES 4 + 5
          ========================== */}

          <section
            className="fitmaldives-image-pair"
            aria-label="Fit Maldives identity exploration"
          >
            <Reveal className="fitmaldives-image-reveal">
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives4.png"
                  alt="Fit Maldives design 4"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal
              className="fitmaldives-image-reveal"
              delay={0.12}
            >
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives5.png"
                  alt="Fit Maldives design 5"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>
        </div>

        {/* =========================
            PROJECT NUMBERS
        ========================== */}

        <section
          className="fitmaldives-stat-band"
          aria-labelledby="fitmaldives-numbers-heading"
        >
          <div className="fitmaldives-stat-band-inner">
            <Reveal>
              <span className="fitmaldives-eyebrow fitmaldives-eyebrow--light">
                Project
              </span>

              <h2
                id="fitmaldives-numbers-heading"
                className="fitmaldives-block-heading fitmaldives-block-heading--light"
              >
                Project Numbers
              </h2>
            </Reveal>

            <div className="fitmaldives-stat-grid">
              <Reveal className="fitmaldives-stat-reveal">
                <div className="fitmaldives-stat-item">
                  <span className="fitmaldives-stat-number">
                    19
                  </span>

                  <span className="fitmaldives-stat-label">
                    Design Assets
                  </span>
                </div>
              </Reveal>

              <Reveal
                className="fitmaldives-stat-reveal"
                delay={0.1}
              >
                <div className="fitmaldives-stat-item">
                  <span className="fitmaldives-stat-number">
                    4+
                  </span>

                  <span className="fitmaldives-stat-label">
                    Concepts
                  </span>
                </div>
              </Reveal>

              <Reveal
                className="fitmaldives-stat-reveal"
                delay={0.2}
              >
                <div className="fitmaldives-stat-item">
                  <span className="fitmaldives-stat-number">
                    3+
                  </span>

                  <span className="fitmaldives-stat-label">
                    Iterations
                  </span>
                </div>
              </Reveal>

              <Reveal
                className="fitmaldives-stat-reveal"
                delay={0.3}
              >
                <div className="fitmaldives-stat-item">
                  <span className="fitmaldives-stat-number">
                    1
                  </span>

                  <span className="fitmaldives-stat-label">
                    Visual Identity
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================
            SECOND HALF
        ========================== */}

        <div className="fitmaldives-container">
          {/* IMAGES 6 + 7 */}

          <section className="fitmaldives-image-pair">
            <Reveal className="fitmaldives-image-reveal">
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives6.png"
                  alt="Fit Maldives design 6"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal
              className="fitmaldives-image-reveal"
              delay={0.12}
            >
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives7.png"
                  alt="Fit Maldives design 7"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* IMAGES 8 + 9 */}

          <section className="fitmaldives-image-pair">
            <Reveal className="fitmaldives-image-reveal">
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives8.png"
                  alt="Fit Maldives design 8"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal
              className="fitmaldives-image-reveal"
              delay={0.12}
            >
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives9.png"
                  alt="Fit Maldives design 9"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* =========================
              OUTCOME
          ========================== */}

          <Reveal>
            <section className="fitmaldives-content-block">
              <span className="fitmaldives-eyebrow">
                Outcome
              </span>

              <h2 className="fitmaldives-block-heading">
                Built for an Active Community
              </h2>

              <p className="fitmaldives-block-text">
                The final identity creates a confident and recognizable visual
                presence that can work consistently across digital platforms,
                campaigns and physical brand applications.
              </p>
            </section>
          </Reveal>

          {/* IMAGES 10 + 11 */}

          <section className="fitmaldives-image-pair">
            <Reveal className="fitmaldives-image-reveal">
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives10.png"
                  alt="Fit Maldives design 10"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal
              className="fitmaldives-image-reveal"
              delay={0.12}
            >
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives11.png"
                  alt="Fit Maldives design 11"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* IMAGES 12 + 13 */}

          <section className="fitmaldives-image-pair">
            <Reveal className="fitmaldives-image-reveal">
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives12.png"
                  alt="Fit Maldives design 12"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal
              className="fitmaldives-image-reveal"
              delay={0.12}
            >
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives13.png"
                  alt="Fit Maldives design 13"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* IMAGES 14 + 15 */}

          <section className="fitmaldives-image-pair">
            <Reveal className="fitmaldives-image-reveal">
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives14.png"
                  alt="Fit Maldives design 14"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal
              className="fitmaldives-image-reveal"
              delay={0.12}
            >
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives15.png"
                  alt="Fit Maldives design 15"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* IMAGES 16 + 17 */}

          <section className="fitmaldives-image-pair">
            <Reveal className="fitmaldives-image-reveal">
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives16.png"
                  alt="Fit Maldives design 16"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal
              className="fitmaldives-image-reveal"
              delay={0.12}
            >
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives17.png"
                  alt="Fit Maldives design 17"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* IMAGES 18 + 19 */}

          <section className="fitmaldives-image-pair">
            <Reveal className="fitmaldives-image-reveal">
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives18.png"
                  alt="Fit Maldives design 18"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal
              className="fitmaldives-image-reveal"
              delay={0.12}
            >
              <div className="fitmaldives-image-pair-item">
                <img
                  src="/fitmaldives19.png"
                  alt="Fit Maldives design 19"
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

export default FitmaldivesPage;