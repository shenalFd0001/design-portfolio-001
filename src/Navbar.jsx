import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="top-nav">
      <span className="nav-name">Shenal Fernando</span>
      <nav className="nav-links">
        <a href="#">Link One</a>
        <a href="#">Link Two</a>
        <a href="#">Link Three</a>
      </nav>
    </header>
  );
}

export default Navbar;