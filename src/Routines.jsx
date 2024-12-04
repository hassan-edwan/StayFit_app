import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For FontAwesome icons
import { faDumbbell, faSquarePollVertical, faUsers, faUser } from '@fortawesome/free-solid-svg-icons'; // Icons
import bench from './assets/bench.png';
import back from './assets/back.png';
import knees from './assets/knees.png';
import release from './assets/release.png';
import stretch from './assets/stretch.png';
import treadmill from './assets/treadmill.png';
import triceps from './assets/triceps.png';
import upper from './assets/upper.png';
import vo2max from './assets/vo2max.png';
import './Styles.css'; // Ensure this file is imported for styling

export default function Routines() {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Header Section */}
      <div className="title-section">
        <div className="header-title">Routines</div>
      </div>

      {/* Large Cards Section */}
      <div className="large-cards-section">
        <div className="card-row">
          <img src={bench} className="large-image"/>
          <div className="card large-card">
            <h3 className="card-header0">TRY A STRENGTH WORKOUT</h3>
            <h3 className="card-header">Build and Bench</h3>
            <p className="card-caption small-card-caption">20min - Hip-Hop</p>
            <button className="card-button">Lets Go</button>
          </div>
        </div>
        <div className="card-row">
          <img src={treadmill} className="large-image"/>
          <div className="card large-card">
            <h3 className="card-header0">TRY A TREADMILL WORKOUT</h3>
            <h3 className="card-header">Incline Intervals</h3>
            <p className="card-caption small-card-caption">10min - Latin Grooves</p>
            <div className="button-row">
              <button className="card-button">Walk</button>
              <button className="card-button">Run</button>
            </div>
          </div>
        </div>
        <div className="card-row">
          <img src={stretch} className="large-image"/>
          <div className="card large-card">
            <h3 className="card-header0">TRY A MOBILITY WORKOUT</h3>
            <h3 className="card-header">Stretch</h3>
            <p className="card-caption small-card-caption">15min - Pure Dance</p>
            <button className="card-button">Lets Go</button>
          </div>
        </div>
      </div>

      {/* Smaller Cards Section */}
      <div className="section-label">Cardio</div>
      <div className="small-cards-section">
        <div className="card-row">
          <img src={treadmill} className="card-image" />
          <div className="card-title small-card-title">Increase Heartrate</div>
          <div className="card-caption small-card-caption">10min - Latest Hits</div>
        </div>
        <div className="card-row">
          <img src={vo2max} className="card-image" />
          <div className="card-title small-card-title">VO2 Max</div>
          <div className="card-caption small-card-caption">15min - Blast off</div>
        </div>
        <div className="card-row">
          <img src={treadmill} className="card-image" />
          <div className="card-title small-card-title">Bike Off</div>
          <div className="card-caption small-card-caption">10min - Rock</div>
        </div>
      </div>

      <div className="section-label">Mobility</div>
      <div className="small-cards-section">
        <div className="card-row">
          <img src={stretch} className="card-image" />
          <div className="card-title small-card-title">Stretch</div>
          <div className="card-caption small-card-caption">10min - Pure Dance</div>
        </div>
        <div className="card-row">
          <img src={release} className="card-image" />
          <div className="card-title small-card-title">Release</div>
          <div className="card-caption small-card-caption">15min - Upbeat Anthems</div>
        </div>
        <div className="card-row">
          <img src={knees} className="card-image" />
          <div className="card-title small-card-title">Knees</div>
          <div className="card-caption small-card-caption">10min - Hip-Hop</div>
        </div>
      </div>

      <div className="section-label">Strength</div>
      <div className="small-cards-section">
        <div className="card-row">
          <img src={triceps} className="card-image" />
          <div className="card-title small-card-title">Triceps</div>
          <div className="card-caption small-card-caption">10min - Latest Hits</div>
        </div>
        <div className="card-row">
          <img src={back} className="card-image" />
          <div className="card-title small-card-title">Back</div>
          <div className="card-caption small-card-caption">15min - Blast off</div>
        </div>
        <div className="card-row">
          <img src={upper} className="card-image" />
          <div className="card-title small-card-title">Upper Body</div>
          <div className="card-caption small-card-caption">10min - Rock</div>
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
}

const MenuItem = ({ name, icon, isActive, onClick }) => (
  <div className={`menu-item ${isActive ? 'active' : ''}`} onClick={onClick}>
    <FontAwesomeIcon icon={icon} className="icon" />
    <div className="menu-label">{name}</div>
  </div>
);