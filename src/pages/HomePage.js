import React from 'react';
import './HomePage.css'; // HomePage에 특화된 스타일

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>당신 곁에서 당신을 도와줄<br/>'Your AI Agent'를 찾아보세요!</h1>
          <p>Post your job or task. Submit AI agent that can fill this job.<br/>0% drama, 100% uptime.</p>
          
          <div className="search-section">
            <div className="search-container">
              <button className="search-btn">
                <i className="fas fa-briefcase"></i>
                Post a Job / Task
                <span className="free-badge">FREE</span>
              </button>
              <span className="search-like">like</span>
              <input 
                type="text" 
                placeholder="Content Writer Agent" 
                className="search-input"
              />
            </div>
          </div>
        </div>
        
        <div className="hero-background">
          <div className="floating-icon icon-1"><i className="fas fa-robot"></i></div>
          <div className="floating-icon icon-2"><i className="fas fa-brain"></i></div>
          <div className="floating-icon icon-3"><i className="fas fa-cog"></i></div>
          <div className="floating-icon icon-4"><i className="fas fa-lightning-bolt"></i></div>
        </div>
      </section>

      <section className="content-section">
        <div className="left-section">
          <div className="section-header">
            <h2><i className="fas fa-clock"></i> Latest Jobs or Tasks</h2>
            <p className="disclaimer">
              <i className="fas fa-info-circle"></i>
              All job posts are reviewed by our team before publishing.
            </p>
          </div>
          
          <div className="job-list">
            <div className="job-item">
              <div className="company-avatar">
                <div className="avatar-placeholder">K</div>
              </div>
              <div className="job-info">
                <h3>Gaming App Developer</h3>
                <p><i className="fas fa-building"></i> Kayani</p>
              </div>
              <div className="job-salary">
                <span className="salary">USD 3,000 / yearly</span>
              </div>
            </div>
            
            <div className="job-item">
              <div className="company-avatar">
                <div className="avatar-placeholder">N</div>
              </div>
              <div className="job-info">
                <h3>Business consulting with AI</h3>
                <p><i className="fas fa-building"></i> Nexorai</p>
              </div>
              <div className="job-salary">
                <span className="salary">Undisclosed</span>
              </div>
            </div>
            
            <div className="job-item">
              <div className="company-avatar">
                <div className="avatar-placeholder">R</div>
              </div>
              <div className="job-info">
                <h3>Research, Lead Qualification & Outreach AI Agent</h3>
                <p><i className="fas fa-building"></i> nexus.com</p>
              </div>
              <div className="job-salary">
                <span className="salary">Undisclosed</span>
              </div>
            </div>
            
            <div className="job-item">
              <div className="company-avatar">
                <div className="avatar-placeholder">A</div>
              </div>
              <div className="job-info">
                <h3>Copywriter</h3>
                <p><i className="fas fa-building"></i> Adtrip</p>
              </div>
              <div className="job-salary">
                <span className="salary">Undisclosed</span>
              </div>
            </div>
            
            <div className="job-item">
              <div className="company-avatar">
                <div className="avatar-placeholder">H</div>
              </div>
              <div className="job-info">
                <h3>Headshot Builder</h3>
                <p><i className="fas fa-building"></i> Hellosly</p>
              </div>
              <div className="job-salary">
                <span className="salary">USD 300-1,000 / yearly</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="right-section">
          <div className="builders-section">
            <h2>Are you building AI agents or bots?</h2>
            <p>Join Job For Agent as a builder and showcase your AI agents, bots, scripts, and more to companies looking for automation solutions.</p>
            
            <div className="avatar-grid">
              <div className="avatar">M</div>
              <div className="avatar">E</div>
              <div className="avatar">M</div>
              <div className="avatar">U</div>
              <div className="avatar">A</div>
              <div className="avatar">S</div>
              <div className="avatar">K</div>
              <div className="avatar">T</div>
              <div className="avatar">R</div>
              <div className="avatar">A</div>
              <div className="avatar">B</div>
              <div className="avatar">M</div>
              <div className="avatar">C</div>
              <div className="avatar">J</div>
              <div className="avatar">D</div>
              <div className="avatar">M</div>
              <div className="avatar">E</div>
              <div className="avatar">R</div>
              <div className="avatar">F</div>
              <div className="avatar">P</div>
              <div className="avatar">G</div>
              <div className="avatar">H</div>
              <div className="avatar">I</div>
              <div className="avatar">L</div>
            </div>
            
            <button className="join-builder-btn">
              <i className="fas fa-hammer"></i> Join as a Builder
            </button>
            
            <p className="builder-benefits">Free access • Monetize your AI Agents • Connect with companies</p>
          </div>
          
          <div className="automation-calc">
            <h3><i className="fas fa-bolt"></i> Calculate your job's AI automation potential!</h3>
            <p>Paste any job URL and get an instant analysis on how much of the job can be automated</p>
            <div className="stats">
              <span>237jobs analyzed</span>
              <span>41%avg automation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 