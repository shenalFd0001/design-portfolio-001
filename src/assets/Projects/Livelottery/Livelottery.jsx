import React from "react";
import { useNavigate } from "react-router-dom";
import "./Livelottery.css";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import Reveal from "../../Components/Reveal";

function LivelotteryPage() {
  const navigate = useNavigate();

  return (
    <div className="livelottery-page">
      <Navbar />

      <main>
        {/* =========================
            PROJECT HEADER
        ========================== */}

        <div className="livelottery-container">
          <button
            type="button"
            className="livelottery-back-btn"
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
            <header className="livelottery-project-header">
              <div className="livelottery-header-title-row">
                <h1 className="livelottery-header-title">Livelottery</h1>
              </div>

              <span className="livelottery-eyebrow">Product Design</span>

              <p className="livelottery-header-description">
                Livelottery is a live gambling experience designed to let
                users join real-time lottery draws, track their entries and
                celebrate wins through a fast, engaging mobile experience.
              </p>

              <div className="livelottery-header-meta-details">
                <div className="livelottery-meta-detail">
                  <h2 className="livelottery-meta-detail-heading">
                    Industry
                  </h2>

                  <p className="livelottery-meta-detail-value">
                    Gambling
                  </p>
                </div>

                <div className="livelottery-meta-detail">
                  <h2 className="livelottery-meta-detail-heading">
                    Project
                  </h2>

                  <p className="livelottery-meta-detail-value">
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
          <section className="livelottery-hero">
            <div className="livelottery-hero-inner">
              <img
                src="/Livelotterymain.webp"
                alt="Livelottery mobile app preview"
                className="livelottery-hero-image"
                fetchPriority="high"
              />
            </div>
          </section>
        </Reveal>

        {/* =========================
            MAIN CASE STUDY
        ========================== */}

        <div className="livelottery-case-container">
          {/* =========================
              THE APPROACH
          ========================== */}

          <Reveal>
            <section className="livelottery-section livelottery-approach">
              <h2 className="livelottery-section-title">
                How I Got There
              </h2>

              <p className="livelottery-section-description livelottery-approach-intro">
                From a cluttered gaming lobby to a wallet-first home screen
                players could actually trust — here's the process behind
                Livelottery.
              </p>

              <div className="livelottery-approach-steps">
                <div className="livelottery-approach-step">
                  <span className="livelottery-approach-number">01</span>
                  <h3>Research</h3>
                  <p>Audited existing lottery and casino apps to see where players lost trust — buried balances, unclear odds, and compliance screens players skipped without reading.</p>
                </div>

                <div className="livelottery-approach-step">
                  <span className="livelottery-approach-number">02</span>
                  <h3>Define</h3>
                  <p>Framed the experience around three jobs: onboard players fast, keep their wallet and winnings always visible, and surface live wins to build trust.</p>
                </div>

                <div className="livelottery-approach-step">
                  <span className="livelottery-approach-number">03</span>
                  <h3>Design</h3>
                  <p>Designed a home dashboard anchoring balance and quick actions above the fold, with a dedicated feed for real-time winning activity and top earners.</p>
                </div>

                <div className="livelottery-approach-step">
                  <span className="livelottery-approach-number">04</span>
                  <h3>Refine</h3>
                  <p>Simplified the Terms of Service and onboarding into a single clear agreement step, and tightened the game catalog into scannable, high-contrast cards.</p>
                </div>
              </div>
            </section>
          </Reveal>


          {/* =========================
              COLOUR PALETTE
          ========================== */}

          <Reveal>
            <section className="livelottery-section">
              <h2 className="livelottery-section-title">
                Colour Palette
              </h2>

              <div className="livelottery-color-palette">
                {/* PRIMARY GRADIENT */}

                <div className="livelottery-color-group livelottery-color-group--gradient">
                  <p className="livelottery-color-heading">
                    Primary Gradient
                  </p>

                  <div className="livelottery-color-card livelottery-gradient-card">
                    <div className="livelottery-gradient-left">
                      <span>HEX</span>
                      <strong>#2C0448</strong>
                    </div>

                    <div className="livelottery-gradient-right">
                      <span>HEX</span>
                      <strong>#1B032C</strong>
                    </div>
                  </div>
                </div>

                {/* PRIMARY */}

                <div className="livelottery-color-group">
                  <p className="livelottery-color-heading">
                    Primary
                  </p>

                  <div className="livelottery-color-card livelottery-primary-card">
                    <div className="livelottery-color-code livelottery-color-code--light">
                      <span>HEX</span>
                      <strong>#762D10</strong>
                    </div>
                  </div>
                </div>

                {/* SECONDARY */}

                <div className="livelottery-color-group">
                  <p className="livelottery-color-heading">
                    Secondary
                  </p>

                  <div className="livelottery-color-card livelottery-secondary-card">
                    <div className="livelottery-color-code livelottery-color-code--dark">
                      <span>HEX</span>
                      <strong>#E2E1FD</strong>
                    </div>
                  </div>
                </div>

                {/* ACCENT */}

                <div className="livelottery-color-group">
                  <p className="livelottery-color-heading">
                    Accent
                  </p>

                  <div className="livelottery-color-card livelottery-accent-card">
                    <div className="livelottery-color-code livelottery-color-code--light">
                      <span>HEX</span>
                      <strong>#2B003F</strong>
                    </div>
                  </div>
                </div>

                {/* BASE */}

                <div className="livelottery-color-group">
                  <p className="livelottery-color-heading">
                    Base
                  </p>

                  <div className="livelottery-color-card livelottery-base-card">
                    <div className="livelottery-color-code livelottery-color-code--light">
                      <span>HEX</span>
                      <strong>#606060</strong>
                    </div>
                  </div>
                </div>

                {/* OVERLAY */}

                <div className="livelottery-color-group">
                  <p className="livelottery-color-heading">
                    Overlay
                  </p>

                  <div className="livelottery-color-card livelottery-overlay-card">
                    <div className="livelottery-color-code livelottery-color-code--light">
                      <span>HEX</span>
                      <strong>#000000 · 25%</strong>
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
            <section className="livelottery-section">
              <h2 className="livelottery-section-title">
                Leveraging Components, Variants, and Variables
              </h2>

              <div className="livelottery-components-images">
                <div className="livelottery-components-image-item">
                  <img
                    src="/livelottery2.png"
                    alt="Livelottery components and variants"
                    loading="lazy"
                  />
                </div>

                <div className="livelottery-components-image-item">
                  <img
                    src="/livelottery3.png"
                    alt="Livelottery variables and component system"
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
            <section className="livelottery-section">
              <h2 className="livelottery-section-title">
                Element Naming and Variable Structure for Screen Definitions
              </h2>

              <div className="livelottery-components-image-item livelottery-components-image-item--wide">
                <img
                  src="/livelottery4.png"
                  alt="Livelottery element naming and screen structure"
                  loading="lazy"
                />
              </div>
            </section>
          </Reveal>

          {/* =========================
              HIGH FIDELITY MOCKUPS
          ========================== */}

          <Reveal>
            <section className="livelottery-section livelottery-mockup-section">
              <div className="livelottery-mockup-heading-row">
                <div className="livelottery-mockup-heading">
                  <h2 className="livelottery-section-title">
                    High Fidelity Mockups
                  </h2>

                  <p className="livelottery-section-description">
                    High-fidelity screens were developed to bring together
                    onboarding, live draws, entry tracking and account
                    management within one consistent mobile experience.
                  </p>
                </div>
              </div>

              <div className="livelottery-mockup-grid">
                <div className="livelottery-mockup-item">
                  <img
                    src="/livelottery5.webp"
                    alt="Livelottery onboarding screen"
                    loading="lazy"
                  />
                </div>

                <div className="livelottery-mockup-item">
                  <img
                    src="/livelottery6.webp"
                    alt="Livelottery live draw screen"
                    loading="lazy"
                  />
                </div>

                <div className="livelottery-mockup-item">
                  <img
                    src="/livelottery7.webp"
                    alt="Livelottery entry tracking screen"
                    loading="lazy"
                  />
                </div>

                <div className="livelottery-mockup-item">
                  <img
                    src="/livelottery8.webp"
                    alt="Livelottery account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="livelottery-mockup-item">
                  <img
                    src="/livelottery9.webp"
                    alt="Livelottery account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="livelottery-mockup-item">
                  <img
                    src="/livelottery10.webp"
                    alt="Livelottery account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="livelottery-mockup-item">
                  <img
                    src="/livelottery11.webp"
                    alt="Livelottery account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="livelottery-mockup-item">
                  <img
                    src="/livelottery12.webp"
                    alt="Livelottery account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="livelottery-mockup-item">
                  <img
                    src="/livelottery13.webp"
                    alt="Livelottery account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="livelottery-mockup-item">
                  <img
                    src="/livelottery14.webp"
                    alt="Livelottery account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="livelottery-mockup-item">
                  <img
                    src="/livelottery15.webp"
                    alt="Livelottery account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="livelottery-mockup-item">
                  <img
                    src="/livelottery16.webp"
                    alt="Livelottery account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="livelottery-mockup-item">
                  <img
                    src="/livelottery17.webp"
                    alt="Livelottery account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="livelottery-mockup-item">
                  <img
                    src="/livelottery18.webp"
                    alt="Livelottery account management screen"
                    loading="lazy"
                  />
                </div>

                <div className="livelottery-mockup-item">
                  <img
                    src="/livelottery19.webp"
                    alt="Livelottery account management screen"
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

        <section className="livelottery-thank-you">
          <Reveal>
            <div className="livelottery-thank-you-inner">
              <div className="livelottery-thank-you-symbol">
                F
              </div>

              <div className="livelottery-thank-you-copy">
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

export default LivelotteryPage;