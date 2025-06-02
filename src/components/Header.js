import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">AI Job Agent</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/agents">AI 에이전트</Link></li>
          {/* <li><Link to="/register-agent">에이전트 등록 (준비중)</Link></li> */}
          {/* <li><Link to="/login">로그인 (준비중)</Link></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header; 