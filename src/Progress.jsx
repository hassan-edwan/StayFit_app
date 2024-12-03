import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For FontAwesome icons
import { faDumbbell, faSquarePollVertical, faUsers, faUser } from '@fortawesome/free-solid-svg-icons'; // Icons
import './Styles.css';

export default function Progress() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="title-section">
        <div className="header-title">Progress</div>
        <div className="header-text">
          Track your achievements and progress in your fitness journey.
        </div>
      </div>

      {/* Progress Information */}
      <div className="progress-summary">
        <div className="progress-card">
          <div className="progress-title">Workout Completion</div>
          <div className="progress-info">
            <div className="progress-bar">
              <div className="progress-completed" style={{ width: '75%' }}></div>
            </div>
            <div className="progress-details">
              <span className="progress-text">75% Completed</span>
              <span className="progress-text">12/16 Workouts</span>
            </div>
          </div>
        </div>

        <div className="progress-card">
          <div className="progress-title">Calories Burned</div>
          <div className="progress-info">
            <span className="progress-text">2,350 Kcal</span>
          </div>
        </div>

        <div className="progress-card">
          <div className="progress-title">Total Distance</div>
          <div className="progress-info">
            <span className="progress-text">8.5 km</span>
          </div>
        </div>
      </div>

      {/* Footer Menu */}
      <footer className="footer">
        <div className="footer-menu">
          <MenuItem name="Routines" icon={faDumbbell} onClick={() => navigate('/Routines')} />
          <MenuItem name="Progress" icon={faSquarePollVertical} isActive onClick={() => navigate('/Progress')} />
          <MenuItem name="Community" icon={faUsers} onClick={() => navigate('/Community')} />
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