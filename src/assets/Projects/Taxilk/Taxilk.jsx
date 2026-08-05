import React from "react";
import { useNavigate } from "react-router-dom";
import "./Taxilk.css";
import Footer from "../../../Footer";
import Navbar from "../../../Navbar";
import Reveal from "../../Components/Reveal";

function TaxilkPage() {
  const navigate = useNavigate();

  return (
    <div className="taxilk-page">
      <Navbar />

      <main>
        <div className="taxilk-container">
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
              <div className="header-title-row">
                
                <h1 className="header-title">
                  Taxi lk
                </h1>
              </div>

              <span className="eyebrow">Product Design</span>

              <div className="meta-row">
                <div className="meta-group">
                  <span className="meta-pill">Industry</span>
                  <span className="meta-pill">Transportation</span>
                  <span className="meta-pill">Mobility</span>
                </div>

                <div className="meta-divider" aria-hidden="true" />

                <div className="meta-group">
                  <span className="meta-label">Project</span>
                  <span className="meta-pill">Product Design</span>
                </div>
              </div>

              <p className="header-description">
                Designed a seamless ride-hailing experience for Taxi.lk,
                making it easy for users to order a ride anytime, anywhere
                across Sri Lanka — from booking to drop-off.
              </p>

              <div className="header-meta-details">
                <div className="meta-detail">
                  <h2 className="meta-detail-heading">Industry</h2>
                  <p className="meta-detail-value">Transportation</p>
                </div>

                <div className="meta-detail">
                  <h2 className="meta-detail-heading">Date</h2>
                  <p className="meta-detail-value">
                    <time dateTime="2024-02">Feb 2024</time>
                    {" – "}
                    <time dateTime="2024-04">Apr 2024</time>
                  </p>
                </div>
              </div>
            </header>
          </Reveal>
        </div>

        {/* Full-bleed Hero Visual */}
        <section className="hero-visual" aria-label="Taxi.lk product overview">
          <Reveal distance={48}>
            <div className="hero-visual-inner">
              <img
                src="/Taxilk1.png"
                alt="Overview of the Taxi.lk product experience"
                fetchPriority="high"
              />
            </div>
          </Reveal>
        </section>

        <div className="taxilk-container">
          {/* Discovery Section */}
          <Reveal>
            <section className="content-block">
              <span className="eyebrow">Discovery</span>

              <h2 className="block-heading">Seamless Rides, Every Time</h2>

              <p className="block-text">
                The goal was to remove friction from booking a ride — from
                the moment a user opens the app to the moment they're picked
                up. Every screen was designed around speed, clarity, and
                trust, so getting a ride never feels uncertain.
              </p>
            </section>
          </Reveal>

          {/* Paired Image Grid — Set 1 */}
          <section className="image-pair" aria-label="Taxi.lk interface designs">
            <Reveal className="image-reveal">
              <div className="image-pair-item">
                <img
                  src="/Taxilk2.png"
                  alt="Taxi.lk booking interface"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="image-reveal" delay={0.12}>
              <div className="image-pair-item">
                <img
                  src="/Taxilk3.png"
                  alt="Taxi.lk ride tracking interface"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>
        </div>

        {/* Dark Statistics Band */}
        <section className="stat-band" aria-labelledby="taxilk-numbers-heading">
          <div className="stat-band-inner">
            <Reveal>
              <span className="eyebrow eyebrow--light">Discovery</span>

              <h2
                id="taxilk-numbers-heading"
                className="block-heading block-heading--light"
              >
                Project Numbers
              </h2>
            </Reveal>

            <div className="stat-grid">
              <Reveal className="stat-reveal">
                <div className="stat-item">
                  <span className="stat-number">10</span>
                  <span className="stat-label">Design Assets</span>
                </div>
              </Reveal>

              <Reveal className="stat-reveal" delay={0.1}>
                <div className="stat-item">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Iterations</span>
                </div>
              </Reveal>

              <Reveal className="stat-reveal" delay={0.2}>
                <div className="stat-item">
                  <span className="stat-number">18</span>
                  <span className="stat-label">Wireframes</span>
                </div>
              </Reveal>

              <Reveal className="stat-reveal" delay={0.3}>
                <div className="stat-item">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Hours of Research</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="taxilk-container">
          {/* Paired Image Grid — Set 2 */}
          <section className="image-pair" aria-label="Additional Taxi.lk interface designs">
            <Reveal className="image-reveal">
              <div className="image-pair-item">
                <img
                  src="/Taxilk4.png"
                  alt="Taxi.lk driver matching interface"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="image-reveal" delay={0.12}>
              <div className="image-pair-item">
                <img
                  src="/Taxilk5.png"
                  alt="Taxi.lk fare estimate interface"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* Outcome Section */}
          <Reveal>
            <section className="content-block">
              <span className="eyebrow">Outcome</span>

              <h2 className="block-heading">Anywhere Anytime</h2>

              <p className="block-text">
                The final experience makes booking a ride feel effortless —
                a consistent, reliable flow that works the same way whether
                you're commuting downtown or heading to the airport.
              </p>
            </section>
          </Reveal>

          {/* Paired Image Grid — Set 3 */}
          <section className="image-pair" aria-label="Further Taxi.lk interface designs">
            <Reveal className="image-reveal">
              <div className="image-pair-item">
                <img
                  src="/Taxilk6.png"
                  alt="Taxi.lk trip history interface"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="image-reveal" delay={0.12}>
              <div className="image-pair-item">
                <img
                  src="/Taxilk7.png"
                  alt="Taxi.lk payment interface"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* Paired Image Grid — Set 4 */}
          <section className="image-pair" aria-label="Final Taxi.lk interface designs">
            <Reveal className="image-reveal">
              <div className="image-pair-item">
                <img
                  src="/Taxilk8.png"
                  alt="Taxi.lk driver profile interface"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="image-reveal" delay={0.12}>
              <div className="image-pair-item">
                <img
                  src="/Taxilk9.png"
                  alt="Taxi.lk support interface"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </section>

          {/* Closing full-width image */}
          <Reveal>
            <div className="image-single">
              <img
                src="/Taxilk10.png"
                alt="Taxi.lk final screen"
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

export default TaxilkPage;