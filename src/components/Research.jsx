import "./Research.css";

const researchTracks = [
  {
    number: "01",
    title: "Spiking Neural Networks",
    label: "CURRENT RESEARCH",
    description:
      "Exploring Spiking Neural Networks as part of an ongoing learning and experimentation journey in modern neural computation and deep learning.",
    stack: ["Python", "PyTorch", "Deep Learning"],
  },
  {
    number: "02",
    title: "Data & Numerical Computing",
    label: "FOUNDATION",
    description:
      "Working with Python-based tools for numerical computation, data manipulation, experimentation, and preparing datasets for machine learning workflows.",
    stack: ["Python", "NumPy", "Pandas"],
  },
  {
    number: "03",
    title: "Security Research",
    label: "EXPLORING",
    description:
      "Continuing to explore Cyber Security through system understanding, experimentation, programming, networking, and a security-first way of thinking.",
    stack: ["Cyber Security", "Networking", "Linux", "Research"],
  },
];

function Research() {
  return (
    <section className="research-section" id="research">
      <div className="research-container">
        <div className="section-label">
          <span>04</span>
          RESEARCH & EXPLORATION
        </div>

        <div className="research-header">
          <div>
            <p className="research-kicker">RESEARCH_LAB</p>

            <h2>
              Learn.
              <br />
              <span>Experiment. Evolve.</span>
            </h2>
          </div>

          <div className="research-intro">
            <p>
              Not everything I build starts as a finished product. Some
              projects begin as questions, experiments, and a curiosity to
              understand how things work under the hood.
            </p>

            <div className="research-terminal">
              <span className="terminal-prompt">$</span>
              <span> current_focus --show</span>
              <strong>python / deep-learning / security</strong>
            </div>
          </div>
        </div>

        <div className="research-grid">
          {researchTracks.map((track) => (
            <article className="research-card" key={track.number}>
              <div className="research-card-top">
                <span className="research-number">{track.number}</span>

                <span className="research-label">
                  {track.label}
                </span>
              </div>

              <div className="research-card-body">
                <h3>{track.title}</h3>

                <p>{track.description}</p>

                <div className="research-stack">
                  {track.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="research-card-footer">
                <span>
                  <i></i>
                  ACTIVE EXPLORATION
                </span>

                {track.number === "01" && (
                  <a
                    href="https://github.com/CAROSINE/Spiking-Neural-Networks-SNN"
                    target="_blank"
                    rel="noreferrer"
                  >
                    OPEN RESEARCH ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="research-quote">
          <span className="research-quote-symbol">♻️</span>

          <div>
            <p>Weakness compels strength</p>
            <span>
              Every limitation is another reason to learn deeper.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;