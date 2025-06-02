import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { agents as mockAgents } from '../mockData'; // 임시 데이터 가져오기
import './AgentDetailPage.css';

const AgentDetailPage = () => {
  const { agentId } = useParams();
  // 실제 애플리케이션에서는 agentId를 사용하여 API로부터 특정 에이전트 데이터를 가져옵니다.
  const agent = mockAgents.find(a => a.id === agentId);

  if (!agent) {
    return (
      <div className="agent-detail-page">
        <h2>에이전트 정보를 찾을 수 없습니다.</h2>
        <Link to="/agents">목록으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div className="agent-detail-page">
      <div className="agent-detail-header">
        <img src={agent.imageUrl || 'https://via.placeholder.com/600x400?text=AI+Agent+Detail'} alt={agent.name} className="agent-detail-image" />
        <div className="agent-detail-title-section">
          <h1>{agent.name}</h1>
          <p className="agent-detail-category">카테고리: {agent.category}</p>
          <p className="agent-detail-builder">개발사/빌더: {agent.builderName}</p>
        </div>
      </div>

      <section className="agent-detail-content">
        <h2>상세 설명</h2>
        <p>{agent.longDescription}</p>
      </section>

      {agent.features && agent.features.length > 0 && (
        <section className="agent-detail-features">
          <h2>주요 기능</h2>
          <ul>
            {agent.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="agent-detail-pricing">
        <h2>가격 정보</h2>
        <p>{agent.pricingInfo}</p>
      </section>

      <section className="agent-detail-contact">
        <h2>문의하기</h2>
        <p>이메일: <a href={`mailto:${agent.contactInfo}`}>{agent.contactInfo}</a></p>
        {/* 추가적인 연락 방법이나 문의 폼을 여기에 추가할 수 있습니다. */}
      </section>

      <Link to="/agents" className="back-to-list-button">목록으로 돌아가기</Link>
    </div>
  );
};

export default AgentDetailPage; 