import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div className="status-line">
          <span className="status-dot"></span>
          SYSTEM ONLINE
        </div>

        <p className="hero-tag">CSE STUDENT • CYBER SECURITY ENTHUSIAST</p>

        <h1>
          Think like a
          <span> defender.</span>
          <br />
          Build like a
          <span> developer.</span>
        </h1>

        <p className="hero-description">
          I'm Md. Moshiur Rahman Sajol, a Computer Science student exploring
          Cyber Security, Software Development, and the art of building
          secure digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            Explore My Work
          </a>

          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="terminal-card">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span className="terminal-title">security@portfolio:~</span>
        </div>

        <div className="terminal-body">
          <p>
            <span className="prompt">$</span> whoami
          </p>

          <p className="terminal-output">
            moshiur_rahman
          </p>

          <p>
            <span className="prompt">$</span> role
          </p>

          <p className="terminal-output">
            CSE Student / Security Enthusiast
          </p>

          <p>
            <span className="prompt">$</span> mission
          </p>

          <p className="terminal-output">
            Secure → Build → Learn → Repeat
          </p>

          <p className="cursor-line">
            <span className="prompt">$</span> _
          </p>
        </div>
      </div>

      <div className="scroll-indicator">
        <span></span>
        SCROLL TO EXPLORE
      </div>
    </section>
  );
}

export default Hero;