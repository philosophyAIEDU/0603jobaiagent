import React from 'react';
import AgentCard from '../components/AgentCard';
import { agents as mockAgents } from '../mockData'; // 임시 데이터 가져오기
import './AgentListPage.css';

const AgentListPage = () => {
  // 실제 애플리케이션에서는 API를 통해 에이전트 목록을 가져옵니다.
  const agents = mockAgents;

  return (
    <div className="agent-list-page">
      <h1>AI 에이전트 목록</h1>
      <p>다양한 분야의 AI 에이전트를 둘러보고 필요한 서비스를 찾아보세요.</p>
      {agents.length > 0 ? (
        <div className="agents-grid">
          {agents.map(agent => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      ) : (
        <p>등록된 AI 에이전트가 없습니다.</p>
      )}
    </div>
  );
};

export default AgentListPage; 