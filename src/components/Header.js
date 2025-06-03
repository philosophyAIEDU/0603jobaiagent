import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">
          <i className="fas fa-robot logo-icon"></i>
          <span className="logo-text">Your AI Agent</span>
          <span className="beta-badge">BETA</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/"><i className="fas fa-home"></i> Browse Jobs</Link></li>
          <li><Link to="/agents"><i className="fas fa-robot"></i> Job Automation Calculator ⚡</Link></li>
          <li><Link to="/builders"><i className="fas fa-users"></i> For Builders</Link></li>
          <li><Link to="/post" className="post-job-btn"><i className="fas fa-plus"></i> Post a Job</Link></li>
        </ul>
        <div className="auth-section">
          <button className="sign-in-btn">
            <i className="fab fa-google"></i> Sign in
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 