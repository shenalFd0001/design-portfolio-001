import React from "react";
import { useNavigate } from "react-router-dom";
import "./Taxilk.css";
import Footer from "../../../Footer";


function TaxilkPage() {
  const navigate = useNavigate();

  return (
    <div className="justlog-container">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate("/")}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
      </button>

      {/* Header Section */}
      <header className="project-header">
        <h1 className="header-title">
          Taxi.lk - Order Anytime Anywhere
        </h1>

        <div className="meta-row">
          <div className="meta-group">
            <span className="meta-label">Industry</span>
            <span className="meta-pill">Transportation</span>
            <span className="meta-pill">Mobility</span>
          </div>
          <div className="meta-group">
            <span className="meta-label">Project</span>
            <span className="meta-pill">Product Design</span>
          </div>
        </div>

        <p className="header-description">
          Designed a seamless ride-hailing experience for Taxi.lk, making it
          easy for users to order a ride anytime, anywhere across Sri Lanka.
        </p>
      </header>

      {/* Images */}
      <div className="project-images">
        <img src="/Taxilk1.png" alt="Taxilk screen 1" />
        <img src="/Taxilk2.png" alt="Taxilk screen 2" />
        <img src="/Taxilk3.png" alt="Taxilk screen 3" />
        <img src="/Taxilk4.png" alt="Taxilk screen 3" />
        <img src="/Taxilk5.png" alt="Taxilk screen 3" />
        <img src="/Taxilk6.png" alt="Taxilk screen 3" />
        <img src="/Taxilk7.png" alt="Taxilk screen 3" />
        <img src="/Taxilk8.png" alt="Taxilk screen 3" />
        <img src="/Taxilk9.png" alt="Taxilk screen 3" />
        <img src="/Taxilk10.png" alt="Taxilk screen 3" />
      </div>

      <Footer />
    </div>
  );
}

export default TaxilkPage;