import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For FontAwesome icons
import { faDumbbell, faSquarePollVertical, faUsers, faHeart, faUser, faChildReaching, faPersonRunning, faPersonRays} from '@fortawesome/free-solid-svg-icons'; // Icons
import bench from './assets/bench.png';
import './Styles.css';

export default function Progress() {
  const navigate = useNavigate();
  // const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  // const yValues = [55, 49, 44, 24, 15];
  // const barColors = ["red", "green","blue","orange","brown"];

  // NEEDS TO USE A LAMBDA FUNCTION & GRAPHQL
  // new Chart("myChart", {
  //   type: "bar",
  //   data: {
  //     labels: xValues,
  //     datasets: [{
  //       backgroundColor: barColors,
  //       data: yValues
  //     }]
  //   },
  //   options: {...}
  // });

  return (
    <div className="container">
      <div className="title-section">
        <h3 className="card-header0 white">WEDNESDAY, NOV 27</h3>
        <div className="header-title">Progress</div>
      </div>

      <div className="large-cards-section">
        <div className="card-row relative">
            <img src={bench} className="card-main" />
            <div className="bottom-left">
            <h3 className="card-header0">FOR TODAY</h3>
            <h3 className="card-header">Build and Bench</h3>
            <p className="card-caption small-card-caption">20min - Hip-Hop</p>
            </div>
        </div>
      </div>

      <div className="graph-section">
            <div className="graph-card">
              <div className="graph-label">Step Distance</div>
              {/* <hr className="line-under-day" />
              <p>Today</p>
              <p>0.00MI</p> */}
            </div>
            <div className="graph-card">
              <div className="graph-label">Volume</div>
              {/* <hr className="line-under-day" />
              <p>Today</p>
              <p>0.00MI</p> */}
            </div>
        </div>

        <div className="graph-section">
            <div className="graph-card">
              <div className="graph-label">Walking</div>
              {/* <hr className="line-under-day" />
              <p>Today</p>
              <p>0.00MI</p> */}
            </div>
            <div className="graph-card">
              <div className="graph-label">Streak</div>
              {/* <hr className="line-under-day" />
              <p>Today</p>
              <p>0.00MI</p> */}
            </div>
        </div>

        <div className="training-section">
          <div className="training-card">
            <div className="progress-title">Training Tips</div>
            <div className="training-info">
              <FontAwesomeIcon icon={faHeart} className="training" />
              <span className="training-text">Recovery tips for your joints after a day of benching</span>
            </div>
          </div>
        </div>

        <div className="session-section">
        <div className="session-card">
          <div className="progress-title">Sessions</div>
          <div className="session-info">
          <div className="session-container">
            <div className="circle">
              <FontAwesomeIcon icon={faPersonRunning} className="running" /> 
            </div>
            <div className="session-text">
              <p className="session">Cardio</p>
              <p className="session-label">3.24MI</p>
            </div>
            </div>
            <div className="session-container">
            <div className="circle">
              <FontAwesomeIcon icon={faPersonRays} className="running" /> 
            </div>
            <div className="session-text">
              <p className="session">Strength</p>
              <p className="session-label">500LBS</p>
            </div>
            </div>
            <div className="session-container">
            <div className="circle">
              <FontAwesomeIcon icon={faChildReaching} className="running" /> 
            </div>
            <div className="session-text">
              <p className="session">Mobility</p>
              <p className="session-label">10MIN</p>
            </div>
            </div>
          </div>
        </div>
        </div>

        {/* <div className="progress-card">
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
      </div> */}

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