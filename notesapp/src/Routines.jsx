import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For FontAwesome icons
import { faDumbbell, faSquarePollVertical, faUsers, faUser } from '@fortawesome/free-solid-svg-icons'; // Icons
import './Styles.css'; // Custom styles

const Routines = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Page Header */}
      <div className="title-section">
        <div className="header-title">Routines</div>
        <div className="header-text">Choose a routine that suits your fitness goals</div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Cardio Section */}
        <div className="card-section">
          <div className="section-title">Cardio</div>
          <div className="card-row">
            <RoutineCard title="Increase Heart Rate" time="10 min - Everything Rock" />
            <RoutineCard title="Boost Endurance" time="15 min - High Energy" />
            <RoutineCard title="Fat Burner" time="20 min - Pump It Up" />
          </div>
        </div>

        {/* Mobility Section */}
        <div className="card-section">
          <div className="section-title">Mobility</div>
          <div className="card-row">
            <RoutineCard title="Stretching Moves" time="15 min - Calm Vibes" />
            <RoutineCard title="Full Body Flow" time="20 min - Jazz" />
            <RoutineCard title="Yoga for Beginners" time="25 min - Ambient" />
          </div>
        </div>

        {/* Strength Section */}
        <div className="card-section">
          <div className="section-title">Strength</div>
          <div className="card-row">
            <RoutineCard title="Build Muscle" time="20 min - Hip Hop" />
            <RoutineCard title="Core Strength" time="15 min - Workout Mix" />
            <RoutineCard title="Leg Day" time="30 min - Pump Up" />
          </div>
        </div>
      </div>

      {/* Footer Menu */}
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
};

// Routine Card Component
const RoutineCard = ({ title, time }) => (
  <div className="card">
    <div className="image-placeholder"></div>
    <div className="card-content">
      <div className="card-title">{title}</div>
      <div className="card-time">{time}</div>
    </div>
  </div>
);

// Footer Menu Item Component
const MenuItem = ({ name, icon, isActive, onClick }) => (
  <div className={`menu-item ${isActive ? 'active' : ''}`} onClick={onClick}>
    <FontAwesomeIcon icon={icon} className="icon" />
    <div className="menu-label">{name}</div>
  </div>
);

export default Routines;