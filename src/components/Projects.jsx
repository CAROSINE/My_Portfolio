import "./Projects.css";

const projects = [
  {
    id: "01",
    title: "CampusEats",
    category: "WEB APPLICATION",
    description:
      "A responsive campus food-ordering frontend designed to make restaurant discovery, food selection, cart management, checkout, and order tracking feel simple and intuitive.",
    tech: ["React", "Vite", "JavaScript", "React Router", "Context API", "CSS"],
    github: "https://github.com/CAROSINE/Campuseats",
    featured: true,
  },
  {
    id: "02",
    title: "Emergency Blood Finder",
    category: "APPLICATION",
    description:
      "A practical application focused on connecting people with blood donors and making emergency blood-search workflows easier to manage.",
    tech: ["Java"],
    github: "https://github.com/CAROSINE/Emergency-Blood-Finder-Application",
    featured: false,
  },
  {
    id: "03",
    title: "Pong Game",
    category: "GAME / LOGIC",
    description:
      "A game project built to explore programming logic, interaction, movement, collision handling, and real-time gameplay behavior.",
    tech: ["Programming", "Game Logic"],
    github: "https://github.com/CAROSINE/Pong-Game",
    featured: false,
  },
  {
    id: "04",
    title: "BATCH-Command_.bat",
    category: "SYSTEM EXPERIMENT",
    description:
      "A command-line based experiment exploring Windows batch scripting, automation, and system-level command workflows.",
    tech: ["Batch", "Windows CLI"],
    github: "https://github.com/CAROSINE/BATCH-Commnad_.bat",
    featured: false,
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="section-label">
          <span>03</span>
          PROJECT VAULT
        </div>

        <div className="projects-header">
          <div>
            <p className="projects-kicker">MISSION_ARCHIVE</p>

            <h2>
              Things I
              <br />
              <span>built.</span>
            </h2>
          </div>

          <div className="projects-header-copy">
            <p>
              A collection of experiments, applications, and builds from my
              journey through programming, development, and security-focused
              learning.
            </p>

            <span className="vault-status">
              <span className="vault-dot"></span>
              VAULT ACCESS: GRANTED
            </span>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
              key={project.id}
            >
              <div className="project-top">
                <span className="project-number">{project.id}</span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-main">
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                <span className="project-state">
                  <span></span>
                  ARCHIVED / ACTIVE BUILD
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  VIEW REPOSITORY
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-note">
          <span className="note-mark">+</span>

          <p>
            More projects are currently in development.
            <br />
            <span>SignFusion will be added to the vault later.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;