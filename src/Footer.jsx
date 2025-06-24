import './Footer.css';

function Footer({ darkMode }) {
  return (
    <footer className={`footer ${darkMode ? 'dark-footer' : 'light-footer'}`}>
      <p>© WebLite | Made to Simplify</p>
    </footer>
  );
}

export default Footer;
