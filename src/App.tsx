import { projects } from "@/data/projects";

const ExternalArrow = () => (
  <svg className="external-arrow" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 9 9 3M4 3h5v5" />
  </svg>
);

const ProjectArtwork = ({ id }: { id: string }) => {
  const sharedProps = {
    className: "project-art",
    viewBox: "0 0 180 112",
    role: "img",
    "aria-label": "",
    focusable: "false" as const,
  };

  switch (id) {
    case "glyph":
      return (
        <svg {...sharedProps}>
          <path d="m90 25 39 20-39 21-39-21 39-20Z" />
          <path d="m51 45 39 21 39-21v39L90 105 51 84V45Z" />
          <path d="M90 66v39" />
          <path className="accent-stroke" d="M38 30v-9h9M133 21h9v9M142 80v10h-9M47 90h-9V80" />
          <circle className="accent-fill" cx="90" cy="66" r="3" />
        </svg>
      );
    case "supercontrast":
      return (
        <svg {...sharedProps}>
          <rect x="30" y="22" width="76" height="68" />
          <rect className="accent-stroke" x="74" y="30" width="76" height="68" />
          <path className="accent-fill" d="M74 30h32v60H74z" />
          <circle cx="74" cy="60" r="19" className="paper-fill" />
          <path d="M20 99h140" />
        </svg>
      );
    case "diffvg":
      return (
        <svg {...sharedProps}>
          <path className="guide" d="M25 84 57 23M57 23l65 62M122 85l34-53" />
          <path className="accent-stroke heavy" d="M25 84C57 23 122 85 156 32" />
          <circle className="accent-fill" cx="25" cy="84" r="4" />
          <circle cx="57" cy="23" r="4" />
          <circle cx="122" cy="85" r="4" />
          <circle className="accent-fill" cx="156" cy="32" r="4" />
        </svg>
      );
    case "bogey":
      return (
        <svg {...sharedProps}>
          <path d="M22 67c7-29 32-40 59-32 22-22 63-11 71 17 13 23-2 43-28 45H53C33 94 18 84 22 67Z" />
          <path className="accent-stroke" d="M109 38v41M109 39l27 9-27 9" />
          <ellipse cx="109" cy="80" rx="11" ry="4" />
          <circle className="accent-fill" cx="48" cy="72" r="4" />
          <path className="guide" d="M52 71c22-14 31 13 52 9" />
        </svg>
      );
    case "canvas":
      return (
        <svg {...sharedProps}>
          <rect className="guide" x="25" y="17" width="130" height="78" />
          <circle className="accent-stroke" cx="65" cy="56" r="18" />
          <path d="m91 74 17-37 21 37H91Z" />
          <rect x="115" y="27" width="23" height="23" />
          <path className="accent-stroke" d="M41 27h98v58H41z" />
          <path className="accent-fill" d="M37 23h8v8h-8zM135 23h8v8h-8zM37 81h8v8h-8zM135 81h8v8h-8z" />
        </svg>
      );
    case "rustiator":
      return (
        <svg {...sharedProps}>
          <path className="guide" d="M31 23h118v72H31zM60 23v72M90 23v72M120 23v72M31 47h118M31 71h118" />
          <circle className="accent-fill" cx="60" cy="47" r="11" />
          <circle className="paper-fill" cx="120" cy="71" r="11" />
          <path className="accent-stroke heavy" d="m67 43 22-11 21 25" />
          <path d="M52 47h16M112 71h16" />
        </svg>
      );
    case "cbl":
      return (
        <svg {...sharedProps}>
          <rect x="65" y="14" width="50" height="24" />
          <rect x="22" y="73" width="48" height="24" />
          <rect className="accent-stroke" x="110" y="73" width="48" height="24" />
          <path d="M90 38v18M46 56h88M46 56v17M134 56v17" />
          <text className="svg-label" x="77" y="31">{"{ }"}</text>
          <text className="svg-small" x="33" y="89">SCAN</text>
          <text className="svg-small accent-text" x="119" y="89">RUN</text>
        </svg>
      );
    default:
      return (
        <svg {...sharedProps}>
          <path className="guide" d="M28 20h124v72H28zM59 20v72M90 20v72M121 20v72M28 44h124M28 68h124" />
          <path className="accent-stroke heavy" d="M43 80c6-30 28-20 33-42 7 28 32 12 42 37" />
          <rect className="accent-fill" x="38" y="75" width="10" height="10" />
          <circle className="paper-fill" cx="122" cy="75" r="7" />
        </svg>
      );
  }
};

const App = () => (
  <main className="page" id="top">
    <a className="skip-link" href="#projects">
      Skip to projects
    </a>

    <header className="page-header">
      <h1>Carter McClellan</h1>
      <p>Member of Technical Staff at OpenAI</p>
      <nav aria-label="Profile links">
        <a href="https://github.com/CarterMcClellan" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span aria-hidden="true">/</span>
        <a
          href="https://www.linkedin.com/in/carter-mcclellan/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </nav>
    </header>

    <section className="profile" aria-label="About Carter McClellan">
      <div className="profile-copy">
        <p>I’m a Member of Technical Staff at OpenAI.</p>
        <p>
          Previously, I co-founded{" "}
          <a
            href="https://www.ycombinator.com/companies/supercontrast"
            target="_blank"
            rel="noreferrer"
          >
            supercontrast
          </a>
          , a Y Combinator Fall ’24 company building an AI copilot for creating and
          refining high-quality designs and visual assets. We wanted to make ambitious
          creative work faster and more accessible.
        </p>
      </div>
      <img
        className="headshot"
        src="/headshot.png"
        alt="Carter McClellan"
        width="800"
        height="800"
      />
    </section>

    <section className="projects" id="projects" aria-labelledby="projects-title">
      <div className="section-header">
        <h2 id="projects-title">Selected Projects</h2>
        <a
          className="all-projects"
          href="https://github.com/CarterMcClellan?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          All projects <ExternalArrow />
        </a>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.id}>
            <div className="project-visual">
              <ProjectArtwork id={project.id} />
            </div>
            <div className="project-copy">
              <h3>
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.name} <ExternalArrow />
                </a>
              </h3>
              <p className="project-meta">{project.tags.join(" · ")}</p>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <footer>
      <span>© 2026 Carter McClellan</span>
      <a href="#top">Back to top</a>
    </footer>
  </main>
);

export default App;
