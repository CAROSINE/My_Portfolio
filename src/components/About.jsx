import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="section-label">
          <span>01</span>
          WHO AM I?
        </div>

        <div className="about-grid">
          <div className="about-heading">
            <p className="about-kicker">ABOUT_THE_OPERATOR</p>

            <h2>
              Curious mind.
              <br />
              <span>Security mindset.</span>
            </h2>

            <div className="quote-card">
              <span className="quote-icon">♻️</span>

              <div>
                <p className="quote-text">
                  Weakness compels strength
                </p>

                <p className="quote-caption">
                  — a principle I carry into every challenge.
                </p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <p>
              I'm a Computer Science student with a growing focus on
              Cyber Security, software development, and problem solving.
              I enjoy understanding how systems work, where they fail,
              and how they can be built more securely.
            </p>

            <p>
              My learning journey moves between coding, security,
              experimentation, and real-world projects. I believe the
              best way to improve is to build, break, understand, and
              rebuild better.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">01</span>
                <span className="stat-label">CSE STUDENT</span>
              </div>

              <div className="stat-card">
                <span className="stat-number">02</span>
                <span className="stat-label">SECURITY FOCUSED</span>
              </div>

              <div className="stat-card">
                <span className="stat-number">03</span>
                <span className="stat-label">ALWAYS LEARNING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;