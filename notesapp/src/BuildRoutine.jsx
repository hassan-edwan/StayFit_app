import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
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
                <option value="30 min">30 min</option>
                <option value="45 min">45 min</option>
                <option value="1 hour">1 hour</option>
                <option value="1.5 hours">1.5 hours</option>
                <option value="2 hours">2 hours</option>
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
                <option value="4 Weeks">4 Weeks</option>
                <option value="6 Weeks">6 Weeks</option>
                <option value="8 Weeks">8 Weeks</option>
                <option value="12 Weeks">12 Weeks</option>
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
                <span className="activity-title">Strength</span>
              </div>
            </div>
            <div
              className={`activity-card ${selectedActivityTypes.cardio ? 'selected' : ''}`}
              onClick={() => handleActivityToggle('cardio')}
            >
              <div className="card-content">
                <span className="activity-title">Cardio</span>
              </div>
            </div>
            <div
              className={`activity-card ${selectedActivityTypes.mobility ? 'selected' : ''}`}
              onClick={() => handleActivityToggle('mobility')}
            >
              <div className="card-content">
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