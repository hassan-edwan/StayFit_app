import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For FontAwesome icons
import { faDumbbell, faSquarePollVertical, faUsers, faUser } from '@fortawesome/free-solid-svg-icons'; // Icons
import './Styles.css';

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="title-section">
        <div className="header-title">Profile</div>
        <div className="header-text">
          Manage your profile and preferences.
        </div>
      </div>

      {/* Profile Information */}
      <div className="profile-card">
        <div className="profile-photo-placeholder"></div>
        <div className="profile-details">
          <div className="profile-name">John Doe</div>
          <div className="profile-email">johndoe@example.com</div>
        </div>
      </div>

      <div className="profile-actions">
        <button className="button" onClick={() => navigate('/EditProfile')}>
          Edit Profile
        </button>
        <button className="button" onClick={() => navigate('/ChangePassword')}>
          Change Password
        </button>
      </div>

      {/* Footer Menu */}
      <footer className="footer">
        <div className="footer-menu">
          <MenuItem name="Routines" icon={faDumbbell} onClick={() => navigate('/Routines')} />
          <MenuItem name="Progress" icon={faSquarePollVertical} onClick={() => navigate('/Progress')} />
          <MenuItem name="Community" icon={faUsers} onClick={() => navigate('/Community')} />
          <MenuItem name="Profile" icon={faUser} isActive onClick={() => navigate('/Profile')} />
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