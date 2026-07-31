import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Column 1 — Intro */}
        <div className="footer-col footer-col--intro">
          <h2 className="footer-heading">Get In Touch</h2>
          <p className="footer-text">
            Thanks for taking the time to look over my portfolio.
            Drop me an email for any enquiries.
          </p>
        </div>

        {/* Column 2 — Contact Details */}
        <div className="footer-col">
          <h3 className="footer-subheading">Contact Details</h3>
          <p className="footer-contact-line">
            <span className="footer-name">Shenal Fernando</span>
            <span className="footer-phone"> +94 XX XXX XXXX</span>
          </p>
          <p className="footer-email">shenal@example.com</p>
        </div>

        {/* Column 3 — Follow Me */}
        <div className="footer-col">
          <h3 className="footer-subheading">Follow Me</h3>
          <div className="footer-socials">
            <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/_shena_fd_/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="Behance">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M2 7h6.5a2.5 2.5 0 0 1 0 5H2z" />
                <path d="M2 12h7a2.7 2.7 0 0 1 0 5.4H2z" />
                <path d="M14 14.5a3.2 3.2 0 0 0 6.2.9" />
                <path d="M14 14.2a3.1 3.1 0 0 1 6.1-.7" />
                <path d="M13.8 8.5h6.4" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          Copyright &copy; 2026 Shenal Fernando | Personal Portfolio
        </p>
        <p className="footer-powered">Powered By Shenal Fernando</p>
      </div>
    </footer>
  );
}

export default Footer;