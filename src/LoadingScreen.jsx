import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faDumbbell, faSquarePollVertical, faUsers, faUser } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import { faSpinner } from '@fortawesome/free-solid-svg-icons';  // Import the faSpinner icon
import './Styles.css';

export default function LoadingScreen() {
  const navigate = useNavigate(); // Initialize the navigate function

  const MenuItem = ({ name, icon, isActive, onClick }) => (
    <div className={`menu-item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} className="icon" />
      <div className="menu-label">{name}</div>
    </div>
  );

  return (
    <div className="container justify-content-center">
      {/* Centered content for loading */}
      <div className="loading-content">
        <FontAwesomeIcon icon={faSpinner} className="loading-icon" spin /> {/* Loading spinner (faSpinner) */}
        <div className="loading-text">Personalizing your routine...</div>
      </div>

      {/* Bottom navigation menu */}
      <footer className="footer">
        <div className="footer-menu">
          <MenuItem name="Routines" icon={faDumbbell} isActive onClick={() => navigate('/Routines')} />
          <MenuItem name="Progress" icon={faSquarePollVertical} onClick={() => navigate('/Progress')} />
          <MenuItem name="Community" icon={faUsers} onClick={() => navigate('/Community')} />
          <MenuItem name="Profile" icon={faUser} onClick={() => navigate('/Profile')} />
        </div>
      </footer>
    </div>
  );
}