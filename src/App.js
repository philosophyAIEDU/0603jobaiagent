import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AgentListPage from './pages/AgentListPage';
import AgentDetailPage from './pages/AgentDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // 전체적인 스타일을 위한 CSS

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agents" element={<AgentListPage />} />
          <Route path="/agents/:agentId" element={<AgentDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
