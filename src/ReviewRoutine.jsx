import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For FontAwesome icons
import { faPlus, faChevronLeft, faPersonRays} from '@fortawesome/free-solid-svg-icons'; // Icons
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
    <div className="container no-padding">
      <div className="smaller-container">
      <button className="back-btn" onClick={handleBackClick}>
        <FontAwesomeIcon icon={faChevronLeft} className="icon" /> Back
      </button>
      <div className="content">
        <div className="review-title">Review Routine</div>
        <div className="review-text">
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
            <div className="circle">
              <FontAwesomeIcon icon={faPersonRays} className="running" /> 
            </div>
            <div className="activity-text">
              <p className="activity">Strength</p>
              <p className="workout-time">30 min • Total Body</p>
            </div>
          </div>
            <hr className="line-under-details" />
            <div className="add-card">
              <FontAwesomeIcon icon={faPlus} className="plus" /> 
              <p className="add">Add</p>
            </div>
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
    </div>
  );
}