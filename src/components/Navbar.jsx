import { useEffect, useState } from "react";
import CircuitAnimation from "./CircuitAnimation";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${menuOpen ? "menu-open" : ""} ${
        isAtTop ? "navbar-top" : "navbar-scrolled"
      }`}
    >
      <div className="identity-panel">
        <CircuitAnimation active={isAtTop} />

        <a
          href="#home"
          className="navbar-logo"
          aria-label="Go to home"
          onClick={handleNavClick}
        >
          <span className="logo-mark">⌬</span>

          <span className="logo-text">
            <span className="logo-name">Md.Moshiur Rahman Sajol</span>
            <span className="logo-sub">CAROSINE</span>
          </span>
        </a>
      </div>

      <nav className="navbar-links">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={handleNavClick}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="navbar-right">
        <div className="navbar-status">
          <span className="navbar-status-dot"></span>
          ONLINE
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <div className="mobile-menu-header">
          <span>ACCESS_MENU</span>
          <span>STATUS: ACTIVE</span>
        </div>

        {navItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            onClick={handleNavClick}
          >
            <span>0{index + 1}</span>
            {item.label}
            <b>↗</b>
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;