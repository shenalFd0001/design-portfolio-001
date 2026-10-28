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
    title: "A website for Colombo’s premier creative studio",
    paragraphs: [
      "Sheperd Space is a creative studio in Colombo that provides high-end production space, elite gear and on-site support for photographers, models and brands. I designed its website to show what the studio offers and make booking effortless.",
    ],
    details: [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Tools", value: "Figma" },
      { label: "Timeline", value: "[e.g. 2 weeks]" },
      { label: "Type", value: "[Concept project / Client project]" },
      { label: "Deliverables", value: "Main, About Us and Careers pages" },
    ],
    brief:
      "The studio needed a website that looks as polished as its work and turns visitors into bookings.",
    goals: [
      "Communicate the studio’s premium feel",
      "Make services and equipment easy to scan",
      "Guide visitors toward booking",
      "Attract creative talent through the Careers page",
    ],
  },
  {
    id: "research",
    label: "Research",
    title: "Exploring the problem space",
    paragraphs: [
      "Summarise the research you did and the one or two insights that shaped the direction of the design.",
    ],
    subsections: [
      {
        title: "Project scoping",
        paragraphs: [
          "Describe how you defined the scope: what was included, what was left out, and why.",
        ],
        image: "/sheperd02.webp", // file lives in the /public folder
        imageAlt: "FigJam board for the Sheperd project scoping",
      },
      {
        title: "Research with other sites",
        paragraphs: [
          "Summarise the websites you studied, what worked well on them, and what you took from them.",
        ],
        table: {
          headers: [
            "Site",
            "Type",
            "What it does well",
            "Gap for Sheperd to fill",
          ],
          rows: [
            [
              "MillionSpaces (Colombo)",
              "Booking marketplace",
              "Easy discovery and booking of photoshoot and video locations",
              "Many venues, so no premium feel for any one space",
            ],
            [
              "Pictorial Studios (Colombo)",
              "Photography service studio",
              "Credibility from a strong list of client brands",
              "Sells services, not space rental",
            ],
            [
              "COCO Creative Space (Singapore)",
              "Creative agency with studio rental",
              "Studio packages with gear rental when you book",
              "Rental is a side service, so it’s hard to find",
            ],
            [
              "Cineview Studios (London)",
              "Premium studio rental",
              "Clear technical features such as an infinity cove, green screen and lighting",
              "International, with no local relevance or Careers angle",
            ],
          ],
        },
        // Coloured placeholder box. When your image is ready, replace this
        // line with:  image: "/your-file.webp",
        imageColor: "#d9d1c0",
        imageAlt: "Research findings from competitor websites",
      },
            {
        title: "User journeys",
        paragraphs: [
          "Explain the key journeys you mapped, such as a visitor booking the studio or applying through Careers.",
        ],
        image: "/sheperduserjourney01.webp", // file lives in the /public folder
        imageAlt: "User journey map for booking the studio and applying through Careers",
      },
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

        {/* FULL-WIDTH HERO IMAGE */}
        <Reveal distance={40}>
          <img
            className="sheperd-hero"
            src="/sheperd01.webp"
            alt="Sheperd Space website hero preview"
            fetchPriority="high"
          />
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
            {SECTIONS.map(
              (
                {
                  id,
                  label,
                  title,
                  paragraphs,
                  image,
                  imageColor,
                  imageAlt,
                  details,
                  brief,
                  goals,
                  subsections,
                },
                i
              ) => (
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

                  {/* Image (or coloured placeholder box) */}
                  {image ? (
                    <img
                      className="sheperd-story-image"
                      src={image}
                      alt={imageAlt}
                      loading="lazy"
                    />
                  ) : (
                    imageColor && (
                      <div
                        className="sheperd-story-image sheperd-story-image--box"
                        style={{ backgroundColor: imageColor }}
                        role="img"
                        aria-label={imageAlt}
                      />
                    )
                  )}

                  {paragraphs.map((text) => (
                    <p className="sheperd-story-text" key={text}>
                      {text}
                    </p>
                  ))}

                  {details && (
                    <dl className="sheperd-story-details">
                      {details.map(({ label: dLabel, value }) => (
                        <div className="sheperd-story-detail" key={dLabel}>
                          <dt>{dLabel}</dt>
                          <dd>{value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {brief && (
                    <>
                      <h3 className="sheperd-story-subtitle">The brief</h3>
                      <p className="sheperd-story-text">{brief}</p>
                    </>
                  )}

                  {goals && (
                    <>
                      <h3 className="sheperd-story-subtitle">The goal</h3>
                      <ul className="sheperd-story-goals">
                        {goals.map((goal) => (
                          <li key={goal}>{goal}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {subsections &&
                    subsections.map(
                      ({
                        title: subTitle,
                        paragraphs: subParagraphs,
                        image: subImage,
                        imageColor: subImageColor,
                        imageAlt: subImageAlt,
                        table,
                      }) => (
                        <div className="sheperd-story-subsection" key={subTitle}>
                          <h3 className="sheperd-story-subsection-title">{subTitle}</h3>
                          {subParagraphs.map((text) => (
                            <p className="sheperd-story-text" key={text}>
                              {text}
                            </p>
                          ))}

                          {/* Comparison table */}
                          {table && (
                            <div className="sheperd-table-wrap">
                              <table className="sheperd-table">
                                <thead>
                                  <tr>
                                    {table.headers.map((h) => (
                                      <th key={h} scope="col">
                                        {h}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {table.rows.map((row) => (
                                    <tr key={row[0]}>
                                      {row.map((cell, cellIndex) =>
                                        cellIndex === 0 ? (
                                          <th key={cell} scope="row">
                                            {cell}
                                          </th>
                                        ) : (
                                          <td key={cell}>{cell}</td>
                                        )
                                      )}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}

                          {/* Subsection image (or coloured placeholder box) */}
                          {subImage ? (
                            <img
                              className="sheperd-story-image"
                              src={subImage}
                              alt={subImageAlt}
                              loading="lazy"
                            />
                          ) : (
                            subImageColor && (
                              <div
                                className="sheperd-story-image sheperd-story-image--box"
                                style={{ backgroundColor: subImageColor }}
                                role="img"
                                aria-label={subImageAlt}
                              />
                            )
                          )}
                        </div>
                      )
                    )}
                </article>
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SheperdPage;