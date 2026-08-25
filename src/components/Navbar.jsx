import "./Navbar.css";

function Navbar() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo" aria-label="Go to home">
        <span className="logo-mark">⌬</span>
        <span className="logo-text">
          <span className="logo-name">CAROSINE</span>
          <span className="logo-sub">/SECURE BY DESIGN</span>
        </span>
      </a>

      <nav className="navbar-links">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="navbar-status">
        <span className="navbar-status-dot"></span>
        ONLINE
      </div>
    </header>
  );
}

export default Navbar;