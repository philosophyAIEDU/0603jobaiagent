import React from 'react';
import { Link } from 'react-router-dom';
import './AgentCard.css';

const AgentCard = ({ agent }) => {
  return (
    <div className="agent-card">
      <Link to={`/agents/${agent.id}`}>
        <img src={agent.imageUrl || 'https://via.placeholder.com/300x200?text=AI+Agent'} alt={agent.name} className="agent-card-image" />
        <div className="agent-card-content">
          <h3>{agent.name}</h3>
          <p className="agent-card-category">{agent.category}</p>
          <p className="agent-card-description">{agent.shortDescription}</p>
        </div>
      </Link>
    </div>
  );
};

export default AgentCard; 