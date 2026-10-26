import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sheperd.css";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import Reveal from "../../Components/Reveal";

/* =========================
   CONTENT — edit these
========================== */

const AUTHOR = {
  name: "Shenal Fernando",
  bio: "Product designer specialized in web app experiences across consumer tech, healthcare, and fintech.",
  avatar: "/profilepic.JPG",
  instagram: "https://www.instagram.com/_shena_fd_/",
};

const ARTICLE = {
  tags: ["Brand", "Case Study"],
  title: "Sheperd - The Ultimate Space to Create",
  readTime: "6 min read",
  date: "Oct 24, 2026",
  intro:
    "Write a short introduction here: the context of the project, your role, and what you set out to achieve.",
};

// Left column links + right column content. Add or remove items freely —
// numbering and scroll tracking are automatic.
const SECTIONS = [
  {
    id: "overview",
    label: "Overview",
    title: "Understanding the brand",
    paragraphs: [
      "Describe the starting point of the project: who the client or audience was and what the brief asked for.",
      "Explain the goals, the constraints, and how you decided where to focus first.",
    ],
  },
  {
    id: "research",
    label: "Research",
    title: "Exploring the problem space",
    paragraphs: [
      "Summarise the research you did: competitors, users, references, or interviews.",
      "Call out the one or two insights that shaped the direction of the design.",
    ],
  },
  {
    id: "design",
    label: "Design",
    title: "Shaping the identity",
    paragraphs: [
      "Walk through the design process: sketches, explorations, and key decisions.",
      "Explain why you chose the final direction over the alternatives.",
    ],
  },
  {
    id: "outcome",
    label: "Outcome",
    title: "The final result",
    paragraphs: [
      "Show what was delivered and how it was received.",
      "Close with what you learned and what you would do differently next time.",
    ],
  },
];

const pad = (n) => String(n + 1).padStart(2, "0");

/* =========================
   PAGE
========================== */

function SheperdPage() {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  // Highlight the left link of whichever section is near the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.dataset.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(`sheperd-${id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document
      .getElementById(`sheperd-${id}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sheperd-page">
      <Navbar />

      <main className="sheperd-shell">
        <div className="sheperd-top">
          {/* LEFT: AUTHOR SIDEBAR */}
          <aside className="sheperd-sidebar">
            <img className="sheperd-avatar" src={AUTHOR.avatar} alt={AUTHOR.name} />
            <h2 className="sheperd-author-name">{AUTHOR.name}</h2>
            <p className="sheperd-author-bio">{AUTHOR.bio}</p>
            <a
              className="sheperd-follow-link"
              href={AUTHOR.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Follow on Instagram
            </a>
          </aside>

          {/* CENTER: ARTICLE HEADER */}
          <Reveal distance={32}>
            <article className="sheperd-article">
              <ul className="sheperd-tags">
                {ARTICLE.tags.map((tag) => (
                  <li className="sheperd-tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>

              <h1 className="sheperd-title">{ARTICLE.title}</h1>

              <div className="sheperd-byline">
                <img className="sheperd-byline-avatar" src={AUTHOR.avatar} alt="" />
                <span className="sheperd-byline-name">{AUTHOR.name}</span>
                <button
                  type="button"
                  className="sheperd-contact-btn"
                  onClick={() => navigate("/about")}
                >
                  Contact
                </button>
                <span className="sheperd-meta">
                  {ARTICLE.readTime} · {ARTICLE.date}
                </span>
              </div>

              <hr className="sheperd-divider" />

              <p className="sheperd-intro">{ARTICLE.intro}</p>
            </article>
          </Reveal>
        </div>

        {/* FULL-WIDTH IMAGE (placeholder colour — swap for an <img> later) */}
        <Reveal distance={40}>
          <div className="sheperd-hero" role="img" aria-label="Sheperd hero image" />
        </Reveal>

        {/* TWO-COLUMN STORY: fixed left nav, scrolling right content */}
        <section className="sheperd-story">
          <nav className="sheperd-story-nav" aria-label="Case study sections">
            {SECTIONS.map(({ id, label }, i) => (
              <button
                key={id}
                type="button"
                className={
                  "sheperd-story-link" + (activeId === id ? " is-active" : "")
                }
                onClick={() => scrollToSection(id)}
                aria-current={activeId === id ? "true" : undefined}
              >
                <span className="sheperd-story-num">{pad(i)}</span>
                <span className="sheperd-story-label">{label}</span>
              </button>
            ))}
          </nav>

          <div className="sheperd-story-content">
            {SECTIONS.map(({ id, label, title, paragraphs }, i) => (
              <article
                key={id}
                id={`sheperd-${id}`}
                data-id={id}
                className="sheperd-story-section"
              >
                <span className="sheperd-story-eyebrow">
                  {pad(i)} — {label}
                </span>
                <h2 className="sheperd-story-title">{title}</h2>
                {paragraphs.map((text) => (
                  <p className="sheperd-story-text" key={text}>
                    {text}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SheperdPage;