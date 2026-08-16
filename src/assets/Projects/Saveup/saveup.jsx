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
                  <h2 className="saveup-meta-detail-heading">Industry</h2>
                  <p className="saveup-meta-detail-value">Fintech</p>
                </div>

                <div className="saveup-meta-detail">
                  <h2 className="saveup-meta-detail-heading">Project</h2>
                  <p className="saveup-meta-detail-value">Product Design</p>
                </div>
              </div>
            </header>
          </Reveal>
        </div>

        {/* =========================
            HERO
        ========================== */}

        <Reveal distance={48}>
          <section className="saveup-hero">
            <div className="saveup-hero-inner">
              <ImagePlaceholder
                label="HERO IMAGE — saveup1.png"
                className="saveup-placeholder-hero"
              />
            </div>
          </section>
        </Reveal>

        {/* =========================
            MAIN CASE STUDY
        ========================== */}

        <div className="saveup-case-container">
          {/* BRAND INTRO */}

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
              <h2 className="saveup-section-title">Colour Palette</h2>

              <ImagePlaceholder
                label="COLOUR PALETTE — saveup2.png"
                className="saveup-placeholder-colours"
              />
            </section>
          </Reveal>

          {/* =========================
              COMPONENTS / VARIABLES
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
              <div className="saveup-thank-you-symbol">F</div>

              <div className="saveup-thank-you-copy">
                <span>Thanks for checking out</span>

                <h2>Thank you</h2>

                <p>for watching</p>
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