import type { CSSProperties } from "react";
import { projects } from "@/data/projects";

const Arrow = () => <span aria-hidden="true">↗</span>;

const App = () => {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Carter McClellan, home">
          CM<span>.</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a
            href="https://github.com/CarterMcClellan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow />
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="page-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              OpenAI · Applied Evals
            </p>

            <h1 id="page-title">
              <span>Carter</span>
              <span>McClellan</span>
            </h1>

            <p className="hero-lede">
              I build evaluations, creative tools, and strange little systems.
            </p>

            <div className="hero-links" aria-label="Profile links">
              <a
                href="https://github.com/CarterMcClellan"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
              <a
                href="https://www.linkedin.com/in/carter-mcclellan/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Arrow />
              </a>
            </div>
          </div>

          <div className="portrait-column" aria-label="Portrait of Carter McClellan">
            <div className="portrait-frame">
              <img
                src="/carter-avatar.jpg"
                alt="Illustrated portrait of Carter McClellan"
                width="460"
                height="460"
              />
            </div>
            <p className="portrait-caption">
              <span>01</span>
              Engineer / builder / SVG enjoyer
            </p>
          </div>
        </section>

        <div className="intro-strip" aria-hidden="true">
          <p>Models, tools &amp; interfaces</p>
          <span>↓</span>
        </div>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <header className="section-heading">
            <p>01 / Work</p>
            <h2 id="work-title">What I’m working on</h2>
          </header>

          <div className="work-grid">
            <article className="work-card work-card-openai">
              <div className="work-card-meta">
                <span>OpenAI</span>
                <span>Applied Evals</span>
              </div>
              <h3>Making model behavior legible in the real world.</h3>
              <p>
                At OpenAI, I’m part of the Applied Evals team. My recent work
                focuses on longer-horizon coding, reliable tool use, and
                multi-agent workflows.
              </p>
              <a href="https://openai.com/" target="_blank" rel="noreferrer">
                OpenAI <Arrow />
              </a>
            </article>

            <article className="work-card work-card-supercontrast">
              <div className="work-card-meta">
                <span>Supercontrast</span>
                <span>YC F24</span>
              </div>
              <h3>Giving more people a serious creative toolkit.</h3>
              <p>
                I co-founded supercontrast, a Y Combinator Fall ’24 company
                building an AI copilot for creating and refining high-quality
                designs and visual assets. We set out to make ambitious creative
                work faster and more accessible.
              </p>
              <a
                href="https://www.ycombinator.com/companies/supercontrast"
                target="_blank"
                rel="noreferrer"
              >
                YC profile <Arrow />
              </a>
            </article>
          </div>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <header className="section-heading">
            <p>02 / Selected projects</p>
            <h2 id="projects-title">Things I’ve put into the world</h2>
          </header>

          <div className="project-list">
            {projects.map((project, index) => (
              <a
                className="project-row"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.name}
                style={
                  {
                    "--project-accent": project.accent,
                    "--project-tint": project.tint,
                  } as CSSProperties
                }
                aria-label={`${project.name} on GitHub`}
              >
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="project-mark" aria-hidden="true">
                  {project.mark}
                </span>
                <span className="project-name">{project.name}</span>
                <span className="project-description">{project.description}</span>
                <span className="project-tags" aria-label="Technologies">
                  {project.tags.join(" · ")}
                </span>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="more-section" aria-labelledby="more-title">
          <p>Still curious?</p>
          <h2 id="more-title">There’s more in the workshop.</h2>
          <a
            href="https://github.com/CarterMcClellan?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Browse all public projects <Arrow />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Carter McClellan</p>
        <p>Made with curiosity in San Francisco.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
};

export default App;
