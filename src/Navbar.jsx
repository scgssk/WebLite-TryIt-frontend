import { useState } from 'react';
import './Navbar.css';
import logo from './assets/weblite-logo.png'; // adjust path if needed

function Navbar({ onRunClick, darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="nav-left">
        <img src={logo} alt="WebLite Logo" className="logo" />

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
