import React from "react";
import { useNavigate } from "react-router-dom";
import "./Saveup.css";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import Reveal from "../../Components/Reveal";

function ImagePlaceholder({ label, className = "" }) {
  return (
    <div className={`saveup-image-placeholder ${className}`}>
      <span>{label}</span>
    </div>
  );
}

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
                src="/saveup1.png"
                alt="Saveup mobile app overview"
                className="saveup-hero-image"
                fetchPriority="high"
              />
            </div>
          </section>
        </Reveal>

        {/* =========================
            MAIN CASE STUDY
        ========================== */}

        <div className="saveup-case-container">
          {/* =========================
              BRAND INTRO
          ========================== */}

         

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
              COMPONENTS
          ========================== */}

          <Reveal>
            <section className="saveup-section">
              <h2 className="saveup-section-title">
                Leveraging Components, Variants, and Variables
              </h2>

              <ImagePlaceholder
                label="COMPONENTS, VARIANTS & VARIABLES — saveup3.png"
                className="saveup-placeholder-landscape"
              />
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

              <ImagePlaceholder
                label="ELEMENT NAMING / SCREEN STRUCTURE — saveup4.png"
                className="saveup-placeholder-landscape"
              />
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

              <ImagePlaceholder
                label="HIGH FIDELITY MOCKUPS — saveup5.png"
                className="saveup-placeholder-mockups"
              />
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