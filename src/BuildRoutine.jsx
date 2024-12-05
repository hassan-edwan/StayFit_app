import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For FontAwesome icons
import {faChildReaching, faPersonRunning, faPersonRays} from '@fortawesome/free-solid-svg-icons'; // Icons
import './Styles.css';

export default function BuildRoutine() {
  const navigate = useNavigate(); // Initialize the navigate function

  const [selectedActivityTypes, setSelectedActivityTypes] = useState({
    strength: false,
    cardio: false,
    mobility: false,
  });

  const [fitnessLevel, setFitnessLevel] = useState('');
  const [weeklySchedule, setWeeklySchedule] = useState('3 days/week');
  const [totalTime, setTotalTime] = useState('30 min');
  const [planLength, setPlanLength] = useState('4 Weeks');
  const [loading, setLoading] = useState(false);

  const [selectedDays, setSelectedDays] = useState({
    M: false,
    T: false,
    W: false,
    Th: false,
    F: false,
    S: false,
    Su: false,
  });

  // Handle day toggle (for weekly schedule)
  const handleDayToggle = (day) => {
    setSelectedDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  // Handle activity toggle (for Strength, Cardio, Mobility)
  const handleActivityToggle = (activityType) => {
    setSelectedActivityTypes((prevState) => ({
      ...prevState,
      [activityType]: !prevState[activityType], // Toggle the selected state
    }));
  };

  // Handle next button click (form submission)
  const handleNextClick = () => {
    if (!fitnessLevel || Object.values(selectedActivityTypes).every((selected) => !selected)) {
      alert('Please fill in all fields!');
      return;
    }

    // Prepare the updated schema with the selected conditions
    const updatedSchema = {
      // Assuming you're combining the schema with the selected conditions
      ...JSON.parse(localStorage.getItem("userSchema") || "{}"), // If you want to persist user schema
      schedule: selectedDays,
      time_per_day: totalTime,
      length_of_plan: planLength,
      activity_types: selectedActivityTypes, // Add selected conditions to the schema
    };
  
    // Optional: Save the updated schema to localStorage for persistence across pages
    localStorage.setItem("userSchema", JSON.stringify(updatedSchema));

    // Log the updated schema (for debugging)
    console.log("Updated schema:", updatedSchema);

    setLoading(true);
    // Add further logic for form submission here
    setLoading(false);

    navigate('/ReviewRoutine'); 
  };

  return (
    <div className="container">
      <div className="title-section">
        <div className="header-title">Build Your Routine</div>

        {/* Fitness Level Dropdown */}
        <div className="dropdown-section">
          <div className="dropdown-label">Fitness Level</div>
          <select
            value={fitnessLevel}
            onChange={(e) => setFitnessLevel(e.target.value)}
            className="dropdown"
          >
            <option value="">Select Fitness Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Plan Card with Total Time and Length of Plan */}
        <div className="dropdown-label">Weekly Schedule</div>
        <div className="plan-card">
          {/* Days of the Week */}
          <div className="week-days">
            {['M', 'T', 'W', 'Th', 'F', 'S', 'Su'].map((day) => (
              <span
                key={day}
                className={`week-day ${selectedDays[day] ? 'selected' : ''}`}
                onClick={() => handleDayToggle(day)}
              >
                {day}
              </span>
            ))}
          </div>

          {/* Plan Summary (Total Time Per Day and Length of Plan) */}
          <div className="plan-summary">
            <div className="plan-summary-dropdown">
              <span className="label">Total Time Per Day</span>
              <select
                value={totalTime}
                onChange={(e) => setTotalTime(e.target.value)}
                className="dropdown"
              >
                <option value="10 min">10 min</option>
                <option value="25 min">20 min</option>
                <option value="30 min">30 min</option>
                <option value="45 min">45 min</option>
                <option value="60 min">60 min</option>
                <option value="90 min">90 min</option>
              </select>
            </div>

            {/* Length of Plan Dropdown */}
            <div className="plan-summary-dropdown">
              <span className="label">Length of Plan</span>
              <select
                value={planLength}
                onChange={(e) => setPlanLength(e.target.value)}
                className="dropdown"
              >
                <option value="2 Weeks">2 Weeks</option>
                <option value="3 Weeks">3 Weeks</option>
                <option value="4 Weeks">4 Weeks</option>
                <option value="5 Weeks">5 Weeks</option>
                <option value="6 Weeks">6 Weeks</option>
                <option value="7 Weeks">7 Weeks</option>
                <option value="8 Weeks">8 Weeks</option>
              </select>
            </div>
          </div>
        </div>

        {/* Activity Types Section */}
        <div className="activity-types">
          <div className="dropdown-label">Activity Types</div>
          <div className="activity-cards">
            <div
              className={`activity-card ${selectedActivityTypes.strength ? 'selected' : ''}`}
              onClick={() => handleActivityToggle('strength')}
            >
              <div className="card-content">
                <FontAwesomeIcon icon={faPersonRays} className="activity-icon" /> 
                <span className="activity-title">Strength</span>
              </div>
            </div>
            <div
              className={`activity-card ${selectedActivityTypes.cardio ? 'selected' : ''}`}
              onClick={() => handleActivityToggle('cardio')}
            >
              <div className="card-content">
                <FontAwesomeIcon icon={faPersonRunning} className="activity-icon" /> 
                <span className="activity-title">Treadmill</span>
              </div>
            </div>
            <div
              className={`activity-card ${selectedActivityTypes.mobility ? 'selected' : ''}`}
              onClick={() => handleActivityToggle('mobility')}
            >
              <div className="card-content">
                <FontAwesomeIcon icon={faChildReaching} className="activity-icon " /> 
                <span className="activity-title">Mobility</span>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="button"
          onClick={handleNextClick}
          disabled={loading || !fitnessLevel || Object.values(selectedActivityTypes).every((selected) => !selected)}
        >
          {loading ? 'Submitting...' : 'Review Routine'}
        </button>
      </div>
    </div>
  );
}