import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Cryptotracker</p>
    </footer>
  );
}

export default Footer;
