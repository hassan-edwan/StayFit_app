import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Styles.css';

export default function ReviewRoutine() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBackClick = () => {
    navigate('/BuildRoutine');  // Navigate back to Screen3
  };

  const handleConfirmClick = () => {
    // Add logic to confirm the plan (e.g., send data to an API or save it)
    navigate('/LoadingScreen');
  };

  return (
    <div className="container">
      <button className="back-btn" onClick={handleBackClick}>
        &#8592; Back
      </button>
      <div className="content">
        <div className="header-title">Review Routine</div>
        <div className="header-text">
          Starts <span className="purple-date">Monday, December 2</span>
        </div>
        <div className="label">Weekly Schedule</div>
        <div className="text">
          Scheduled workouts can be completed later if they are missed.
        </div>

        {/* Summary of the user's selected plan */}
        <div className="summary-card">
            <div className="date-container">
                <div className="date-label">Monday</div>
                <div className="total-duration">30 min</div>
            </div>
            <hr className="line-under-day" />
            <div className="activity-container">
            <div className="circle"></div>
            <div className="activity-text">
              <p className="activity">Strength</p>
              <p className="workout-time">30 min • Total Body</p>
            </div>
          </div>
            <hr className="line-under-details" />
        </div>

        {/* Buttons for confirming or going back */}
          <button 
            className="button" 
            onClick={handleConfirmClick}
          >
            Create Routine
          </button>
      </div>
    </div>
  );
}