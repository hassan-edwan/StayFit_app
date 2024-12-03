import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For FontAwesome icons
import { faDumbbell, faSquarePollVertical, faUsers, faUser } from '@fortawesome/free-solid-svg-icons'; // Icons
import './Styles.css';

export default function Community() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="title-section">
        <div className="header-title">Community</div>
        <div className="header-text">
          Join the community, interact with others, and share your progress.
        </div>
      </div>

      {/* Community Section */}
      <div className="community-section">
        <div className="community-card">
          <div className="community-title">Active Discussions</div>
          <div className="community-content">
            <div className="discussion-item">How to stay motivated?</div>
            <div className="discussion-item">Best pre-workout meals</div>
            <div className="discussion-item">Core workout challenge</div>
          </div>
        </div>

        <div className="community-card">
          <div className="community-title">Upcoming Events</div>
          <div className="community-content">
            <div className="event-item">10K Charity Run</div>
            <div className="event-item">Yoga for Beginners</div>
          </div>
        </div>
      </div>

      {/* Footer Menu */}
      <footer className="footer">
        <div className="footer-menu">
          <MenuItem name="Routines" icon={faDumbbell} onClick={() => navigate('/Routines')} />
          <MenuItem name="Progress" icon={faSquarePollVertical} onClick={() => navigate('/Progress')} />
          <MenuItem name="Community" icon={faUsers} isActive onClick={() => navigate('/Community')} />
          <MenuItem name="Profile" icon={faUser} onClick={() => navigate('/Profile')} />
        </div>
      </footer>
    </div>
  );
}

const MenuItem = ({ name, icon, isActive, onClick }) => (
  <div className={`menu-item ${isActive ? 'active' : ''}`} onClick={onClick}>
    <FontAwesomeIcon icon={icon} className="icon" />
    <div className="menu-label">{name}</div>
  </div>
);