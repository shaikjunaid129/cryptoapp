import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">CRYPTO TRACKER</Link>
      </div>

      {/* Hamburger menu icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar links */}
      <div className={`navbar-links ${showMenu ? 'show' : ''}`}>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;
