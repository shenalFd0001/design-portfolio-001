import React from "react";
import { useNavigate } from "react-router-dom";
import "./Saveup.css";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import Reveal from "../../Components/Reveal";

function SaveupPage() {
  const navigate = useNavigate();

  return (
    <div className="saveup-page">
      <Navbar />

      <main>
        {/* =========================
            PROJECT HEADER
        ========================== */}

        <div className="saveup-container">
          <button
            type="button"
            className="saveup-back-btn"
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
            <header className="saveup-project-header">
              <div className="saveup-header-title-row">
                <h1 className="saveup-header-title">Saveup</h1>
              </div>

              <span className="saveup-eyebrow">Product Design</span>

              <p className="saveup-header-description">
                Saveup is a personal finance experience designed to help users
                understand their spending, manage savings and build stronger
                financial habits through a simple and approachable mobile
                experience.
              </p>

              <div className="saveup-header-meta-details">
                <div className="saveup-meta-detail">
                  <h2 className="saveup-meta-detail-heading">
                    Industry
                  </h2>

                  <p className="saveup-meta-detail-value">
                    Fintech
                  </p>
                </div>

                <div className="saveup-meta-detail">
                  <h2 className="saveup-meta-detail-heading">
                    Project
                  </h2>

                  <p className="saveup-meta-detail-value">
                    Product Design
                  </p>
                </div>
              </div>
            </header>
          </Reveal>
        </div>

        {/* =========================
            HERO IMAGE
        ========================== */}

        <Reveal distance={48}>
          <section className="saveup-hero">
            <div className="saveup-hero-inner">
              <img
                src="/Saveup1.webp"
                alt="Saveup mobile app overview"
                className="saveup-hero-image"
                fetchPriority="high"
              />
            </div>
          </section>
        </Reveal>

        {/* =========================
            THE PROBLEM
        ========================== */}

        <Reveal>
          <section className="saveup-problem">
            <div className="saveup-problem-inner">
              <span className="saveup-problem-eyebrow">The Problem</span>

              <h2 className="saveup-problem-statement">
                Most people don't lack the will to save money —
                they lack visibility into where it's actually going.
              </h2>

              <div className="saveup-problem-stats">
                <div className="saveup-problem-stat">
                  <strong>73%</strong>
                  <p>of users couldn't explain their last week of spending</p>
                </div>

                <div className="saveup-problem-stat">
                  <strong>4+</strong>
                  <p>apps juggled just to track money in one place</p>
                </div>

                <div className="saveup-problem-stat">
                  <strong>0</strong>
                  <p>clear savings goal set by most first-time users</p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* =========================
            MAIN CASE STUDY
        ========================== */}

        <div className="saveup-case-container">
          {/* =========================
              THE APPROACH
          ========================== */}

          <Reveal>
            <section className="saveup-section saveup-approach">
              <h2 className="saveup-section-title">
                How I Got There
              </h2>

              <p className="saveup-section-description saveup-approach-intro">
                From an unclear money picture to a habit users could actually stick to —
                here's the process behind Saveup.
              </p>

              <div className="saveup-approach-steps">
                <div className="saveup-approach-step">
                  <span className="saveup-approach-number">01</span>
                  <h3>Research</h3>
                  <p>Interviewed users to understand where existing budgeting tools broke down.</p>
                </div>

                <div className="saveup-approach-step">
                  <span className="saveup-approach-number">02</span>
                  <h3>Define</h3>
                  <p>Mapped the core problem to three jobs: track, save, and understand spending.</p>
                </div>

                <div className="saveup-approach-step">
                  <span className="saveup-approach-number">03</span>
                  <h3>Design</h3>
                  <p>Built a component system and high-fidelity screens around clarity over density.</p>
                </div>

                <div className="saveup-approach-step">
                  <span className="saveup-approach-number">04</span>
                  <h3>Refine</h3>
                  <p>Tested flows with users and simplified onboarding down to three steps.</p>
                </div>
              </div>
            </section>
          </Reveal>

          {/* =========================
              BRAND INTRO
          ========================== */}

          <Reveal>
            <section className="saveup-brand-intro">
              <div className="saveup-brand-lockup">
                <h2 className="saveup-brand-name">
                  Saveup<span>.</span>
                </h2>

                <p className="saveup-brand-tagline">
                  Your personal finance companion.
                </p>
              </div>
            </section>
          </Reveal>

          {/* =========================
              COLOUR PALETTE
          ========================== */}

          <Reveal>
            <section className="saveup-section">
              <h2 className="saveup-section-title">
                Colour Palette
              </h2>

              <div className="saveup-color-palette">
                {/* PRIMARY GRADIENT */}

                <div className="saveup-color-group saveup-color-group--gradient">
                  <p className="saveup-color-heading">
                    Primary Gradient
                  </p>

                  <div className="saveup-color-card saveup-gradient-card">
                    <div className="saveup-gradient-left">
                      <span>HEX</span>
                      <strong>#0B2848</strong>
                    </div>

                    <div className="saveup-gradient-right">
                      <span>HEX</span>
                      <strong>#1A508B</strong>
                    </div>
                  </div>
                </div>

                {/* PRIMARY */}

                <div className="saveup-color-group">
                  <p className="saveup-color-heading">
                    Primary
                  </p>

                  <div className="saveup-color-card saveup-primary-card">
                    <div className="saveup-color-code saveup-color-code--light">
                      <span>HEX</span>
                      <strong>#1A508B</strong>
                    </div>
                  </div>
                </div>

                {/* SECONDARY */}

                <div className="saveup-color-group">
                  <p className="saveup-color-heading">
                    Secondary
                  </p>

                  <div className="saveup-color-card saveup-secondary-card">
                    <div className="saveup-color-code saveup-color-code--dark">
                      <span>HEX</span>
                      <strong>#FFC285</strong>
                    </div>
                  </div>
                </div>

                {/* BASE */}

                <div className="saveup-color-group">
                  <p className="saveup-color-heading">
                    BASE
                  </p>

                  <div className="saveup-color-card saveup-base-card">
                    <div className="saveup-color-code saveup-color-code--light">
                      <span>HEX</span>
                      <strong>#1B1B1B</strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* =========================
              COMPONENTS / VARIANTS / VARIABLES
          ========================== */}

          <Reveal>
            <section className="saveup-section">
              <h2 className="saveup-section-title">
                Leveraging Components, Variants, and Variables
              </h2>

              <div className="saveup-components-images">
                <div className="saveup-components-image-item">
                  <img
                    src="/saveup2.png"
                    alt="Saveup components and variants"
                    loading="lazy"
                  />
                </div>

                <div className="saveup-components-image-item">
                  <img
                    src="/saveup3.png"
                    alt="Saveup variables and component system"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>
          </Reveal>

          {/* =========================
              ELEMENT NAMING
          ========================== */}

          <Reveal>
            <section className="saveup-section">
              <h2 className="saveup-section-title">
                Element Naming and Variable Structure for Screen Definitions
              </h2>

              <div className="saveup-components-image-item saveup-components-image-item--wide">
                <img
                  src="/saveup4.png"
                  alt="Saveup element naming and screen structure"
                  loading="lazy"
                />
              </div>
            </section>
          </Reveal>

          {/* =========================
              HIGH FIDELITY MOCKUPS
          ========================== */}

          <Reveal>
            <section className="saveup-section saveup-mockup-section">
              <div className="saveup-mockup-heading-row">
                <div className="saveup-mockup-heading">
                  <h2 className="saveup-section-title">
                    High Fidelity Mockups
                  </h2>

                  <p className="saveup-section-description">
                    High-fidelity screens were developed to bring together
                    onboarding, savings goals, spending insights and account
                    management within one consistent mobile experience.
                  </p>
                </div>
              </div>

              <div className="saveup-mockup-grid">
                <div className="saveup-mockup-item">
                  <img
                    src="/saveup5.webp"
                    alt="Saveup onboarding screen"
                    loading="lazy"
                  />
                </div>

                <div className="saveup-mockup-item">
                  <img
                    src="/saveup6.webp"
                    alt="Saveup savings goals screen"
                    loading="lazy"
                  />
                </div>

                <div className="saveup-mockup-item">
                  <img
                    src="/saveup7.webp"
                    alt="Saveup spending insights screen"
                    loading="lazy"
                  />
                </div>

                <div className="saveup-mockup-item">
                  <img
                    src="/saveup8.webp"
                    alt="Saveup account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="saveup-mockup-item">
                  <img
                    src="/saveup9.webp"
                    alt="Saveup account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="saveup-mockup-item">
                  <img
                    src="/saveup10.webp"
                    alt="Saveup account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="saveup-mockup-item">
                  <img
                    src="/saveup11.webp"
                    alt="Saveup account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="saveup-mockup-item">
                  <img
                    src="/saveup12.webp"
                    alt="Saveup account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="saveup-mockup-item">
                  <img
                    src="/saveup13.webp"
                    alt="Saveup account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="saveup-mockup-item">
                  <img
                    src="/saveup14.webp"
                    alt="Saveup account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="saveup-mockup-item">
                  <img
                    src="/saveup15.webp"
                    alt="Saveup account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="saveup-mockup-item">
                  <img
                    src="/saveup16.webp"
                    alt="Saveup account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="saveup-mockup-item">
                  <img
                    src="/saveup17.webp"
                    alt="Saveup account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="saveup-mockup-item">
                  <img
                    src="/saveup18.webp"
                    alt="Saveup account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="saveup-mockup-item">
                  <img
                    src="/saveup19.webp"
                    alt="Saveup account management screen"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>
          </Reveal>
        </div>

        {/* =========================
            THANK YOU
        ========================== */}

        <section className="saveup-thank-you">
          <Reveal>
            <div className="saveup-thank-you-inner">
              <div className="saveup-thank-you-symbol">
                F
              </div>

              <div className="saveup-thank-you-copy">
                <span>
                  Thanks for checking out
                </span>

                <h2>
                  Thank you
                </h2>

                <p>
                  for watching
                </p>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SaveupPage;