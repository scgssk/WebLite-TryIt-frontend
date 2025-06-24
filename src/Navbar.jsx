import { useState } from 'react';
import './Navbar.css';
import logo from './assets/weblite-logo.png'; // adjust if needed

function Navbar({ onRunClick, darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo-wrapper">
          <img src={logo} alt="WebLite Logo" className="logo" />
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="https://github.com/scgssk/WebLite-DSL/blob/Master/Readme.md" target='_blank'>Docs</a>
          <a href="https://github.com/scgssk/WebLite-DSL/blob/Master/Examples.md" target='_blank'>Examples</a>
          <a href="https://github.com/scgssk/WebLite-DSL/" target='_blank'>GitHub</a>
        </div>
      </div>

      <div className="nav-right">
        <button className="run-btn" onClick={onRunClick}>▶ Run</button>
        <label className="theme-switch">
          <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
          <span className="slide"></span>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
