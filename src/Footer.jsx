import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-name">Shenal Fernando</p>
        <div className="footer-links">
          <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/_shena_fd_/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noreferrer">Behance</a>
        </div>
      </div>
      <p className="footer-copy">Made with ♥ in Sri Lanka · Copyright © 2026</p>
    </footer>
  );
}

export default Footer;