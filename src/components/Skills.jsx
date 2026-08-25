import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    title: "CYBER SECURITY",
    description:
      "Security concepts, reconnaissance, vulnerability awareness and defensive thinking.",
    skills: [
      "Cyber Security Fundamentals",
      "Networking",
      "Web Security",
      "Vulnerability Analysis",
      "Linux",
      "Security Research",
    ],
  },
  {
    number: "02",
    title: "PROGRAMMING",
    description:
      "Building logic, solving problems and turning ideas into working software.",
    skills: [
      "C / C++",
      "Python",
      "JavaScript",
      "Data Structures",
      "Algorithms",
      "OOP",
    ],
  },
  {
    number: "03",
    title: "DEVELOPMENT",
    description:
      "Creating modern applications with clean structure and practical development workflows.",
    skills: [
      "HTML",
      "CSS",
      "React",
      "Git & GitHub",
      "REST APIs",
      "Responsive Design",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="section-label">
          <span>02</span>
          SYSTEM CAPABILITIES
        </div>

        <div className="skills-header">
          <div>
            <p className="skills-kicker">SECURITY_STACK</p>

            <h2>
              Tools I use.
              <br />
              <span>Skills I build.</span>
            </h2>
          </div>

          <p className="skills-intro">
            A growing technical stack shaped by curiosity, experimentation,
            problem solving, and a security-first mindset.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.number}>
              <div className="skill-card-top">
                <span className="skill-number">{group.number}</span>
                <span className="skill-signal">● ACTIVE</span>
              </div>

              <h3>{group.title}</h3>

              <p className="skill-description">{group.description}</p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className="skill-card-footer">
                <span>STATUS</span>
                <span className="skill-status">LEARNING / BUILDING</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;