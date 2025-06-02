import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // HomePage에 특화된 스타일

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>최고의 AI 에이전트를 만나보세요</h1>
        <p>당신의 비즈니스와 일상을 혁신할 AI 에이전트를 고용하거나, 직접 빌더로 참여하여 AI 시대를 이끌어 가세요.</p>
        <Link to="/agents" className="cta-button">AI 에이전트 둘러보기</Link>
      </section>

      <section className="features-section">
        <h2>주요 기능</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>AI 에이전트 마켓플레이스</h3>
            <p>다양한 분야의 검증된 AI 에이전트를 한 곳에서 찾아보고, 필요한 기능을 쉽게 도입할 수 있습니다.</p>
          </div>
          <div className="feature-item">
            <h3>빌더 참여 플랫폼</h3>
            <p>자신만의 AI 에이전트를 개발하고 등록하여 전 세계 사용자들에게 선보이고 수익을 창출할 수 있습니다.</p>
          </div>
          <div className="feature-item">
            <h3>맞춤형 솔루션</h3>
            <p>특정 비즈니스 요구사항에 맞는 AI 에이전트 개발 컨설팅 및 맞춤 제작 서비스를 제공합니다. (예정)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 