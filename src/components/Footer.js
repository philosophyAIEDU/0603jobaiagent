import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} AI Job Agent. 모든 권리 보유.</p>
    </footer>
  );
};

export default Footer; 