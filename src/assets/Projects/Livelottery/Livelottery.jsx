import React from "react";
import "./Livelottery.css";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import Reveal from "../../Components/Reveal";

/* =========================
   CONTENT
========================== */

const SUMMARY = [
  {
    title: "The Problem",
    text: "Cluttered gaming lobbies, buried wallet balances, and intrusive compliance popups degraded player trust and led to high drop-offs during onboarding.",
  },
  {
    title: "The Solution",
    text: "A wallet-anchored home dashboard, streamlined 1-step compliance, and a live social feed showcasing real-time winners to foster transparency.",
  },
  {
    title: "Key Results",
    text: "Increased onboarding conversion, improved draw engagement, and established a scalable design system with automated design tokens.",
  },
];

const APPROACH = [
  {
    title: "Research & Audit",
    text: "Audited competitor apps to locate trust breakdowns—focusing on hidden balances, obscured odds, and ignored terms.",
  },
  {
    title: "Problem Definition",
    text: "Framed core jobs to be done: fast onboarding, persistent balance visibility, and real-time proof of win fairness.",
  },
  {
    title: "Information Architecture",
    text: "Restructured content around a wallet-first home screen and integrated high-contrast game cards for quick scanning.",
  },
  {
    title: "Refinement & Systems",
    text: "Simplified legals into single-step agreements and established modular design variables for swift dev handoff.",
  },
];

// livelotteryscreen1.webp → livelotteryscreen5.webp (in /public)
const SCREENS = [
  { src: "/livelotteryscreen1.webp", alt: "Splash screen" },
  { src: "/livelotteryscreen2.webp", alt: "Terms of service agreement" },
  { src: "/livelotteryscreen3.webp", alt: "Home dashboard with wallet balance" },
  { src: "/livelotteryscreen4.webp", alt: "Game lobby and winning information" },
  { src: "/livelotteryscreen5.webp", alt: "Winners leaderboard" },
];

// `card` and `tone` map to CSS modifier classes
const COLOR_SWATCHES = [
  { label: "Primary Accent", card: "primary", tone: "light", hex: "#762D10" },
  { label: "Secondary", card: "secondary", tone: "dark", hex: "#E2E1FD" },
  { label: "Deep Purple Accent", card: "accent", tone: "light", hex: "#2B003F" },
  { label: "Base Neutral", card: "base", tone: "light", hex: "#606060" },
  { label: "Overlay", card: "overlay", tone: "light", hex: "#000000 · 25%" },
];

/* =========================
   SMALL PIECES
========================== */

function HexLabel({ value }) {
  return (
    <>
      <span>HEX</span>
      <strong>{value}</strong>
    </>
  );
}

/* =========================
   PAGE
========================== */

function LivelotteryPage() {
  return (
    <div className="livelottery-page">
      <Navbar />

      <main>
        {/* PROJECT HEADER & SUMMARY */}
        <div className="livelottery-container">
          <Reveal distance={40}>
            <header className="livelottery-project-header">
              <span className="livelottery-eyebrow">Product Design Case Study</span>
              <h1 className="livelottery-header-title">Livelottery</h1>

              {/* <p className="livelottery-header-description">
                Redesigning the mobile gambling experience to rebuild player trust through
                transparent real-time draws, wallet-first navigation, and friction-free onboarding.
              </p> */}

              <div className="livelottery-summary-card">
                {SUMMARY.map(({ title, text }) => (
                  <div className="livelottery-summary-item" key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </header>
          </Reveal>
        </div>

        {/* HERO IMAGE */}
        <Reveal distance={48}>
          <section className="livelottery-hero">
            <div className="livelottery-hero-inner">
              <img
                src="/Livelotterymain.webp"
                alt="Livelottery mobile app hero preview"
                className="livelottery-hero-image"
                fetchPriority="high"
              />
            </div>
          </section>
        </Reveal>

        <div className="livelottery-case-container">
          {/* DESIGN APPROACH */}
          <Reveal>
            <section className="livelottery-section livelottery-approach">
              <h2 className="livelottery-section-title">The Design Approach</h2>
              <p className="livelottery-section-description">
                Transforming a high-friction experience into an engaging, trust-centered mobile
                product through a 4-phase UX strategy.
              </p>

              <div className="livelottery-approach-steps">
                {APPROACH.map(({ title, text }, i) => (
                  <div className="livelottery-approach-step" key={title}>
                    <span className="livelottery-approach-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* APP SCREENS */}
          <Reveal>
            <section className="livelottery-section">
              <h2 className="livelottery-section-title">Product Solution & Key Features</h2>
              <p className="livelottery-section-description">
                How specific UX design interventions solved player pain points and enhanced engagement.
              </p>

              <div className="livelottery-screens">
                {SCREENS.map(({ src, alt }) => (
                  <img key={src} src={src} alt={alt} loading="lazy" />
                ))}
              </div>
            </section>
          </Reveal>

          {/* DESIGN SYSTEM */}
          <Reveal>
            <section className="livelottery-section">
              <h2 className="livelottery-section-title">Design System & UI Craft</h2>
              <p className="livelottery-section-description">
                Building scalable tokens, atomic components, and structured variable naming for
                seamless developer collaboration.
              </p>

              <div className="livelottery-sub-block">
                <h3>Color Tokens</h3>
                <div className="livelottery-color-palette">
                  <div className="livelottery-color-group livelottery-color-group--gradient">
                    <p className="livelottery-color-heading">Primary Gradient</p>
                    <div className="livelottery-color-card livelottery-gradient-card">
                      <div className="livelottery-gradient-left">
                        <HexLabel value="#2C0448" />
                      </div>
                      <div className="livelottery-gradient-right">
                        <HexLabel value="#1B032C" />
                      </div>
                    </div>
                  </div>

                  {COLOR_SWATCHES.map(({ label, card, tone, hex }) => (
                    <div className="livelottery-color-group" key={label}>
                      <p className="livelottery-color-heading">{label}</p>
                      <div className={`livelottery-color-card livelottery-${card}-card`}>
                        <div className={`livelottery-color-code livelottery-color-code--${tone}`}>
                          <HexLabel value={hex} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>
        </div>

        {/* THANK YOU */}
        <section className="livelottery-thank-you">
          <Reveal>
            <div className="livelottery-thank-you-inner">
              <div className="livelottery-thank-you-symbol">F</div>
              <div className="livelottery-thank-you-copy">
                <span>Thanks for checking out</span>
                <h2>Livelottery Case Study</h2>
                <p>Have questions or feedback? Feel free to reach out!</p>
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