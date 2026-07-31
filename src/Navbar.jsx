import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="top-nav">
      <Link
        to="/"
        className="nav-name"
        aria-label="Go to homepage"
      >
        Shenal Fernando
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#">Link One</a>
        <a href="#">Link Two</a>
        <a href="#">Link Three</a>
      </nav>
    </header>
  );
}

export default Navbar;