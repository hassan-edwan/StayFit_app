import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './App.css'; // Assuming you move your styles to a separate CSS file

export default function OpeningScreen() {
  const [gymAccess, setGymAccess] = useState(null);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false); // New loading state
  const [error, setError] = useState(''); // Error handling state
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGymAccessChange = (value) => {
    setGymAccess(value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGetStartedClick = async () => {
    if (!name || !gymAccess) {
      setError('Please provide your name and gym access status.');  // Set error message
      return;
    }

    setLoading(true); // Start loading
    setError(''); // Clear any previous error messages

    try {
      const response = await fetch('http://localhost:3000/save-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, gymAccess }),
      });

      if (response.ok) {
        alert('Your information has been saved locally!');
        setName(''); // Reset form after success
        setGymAccess(null); // Reset gym access
        navigate('/opening-screen1'); // Navigate to OpeningScreen1 after successful submission
      } else {
        setError('Failed to save your information.'); // Set error message
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while saving data.'); // Set error message on network failure
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="OpeningScreen">
      {/* Title Section */}
      <div className="title-section">
        <div className="header-title">Let's create the best experience for you</div>
        <div className="header-text">Let us know a bit more so we can help <br />you</div>
        
        <label htmlFor="nameInput" className="label">What should we call you?</label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="First & Last Name"
          className="input-field"
        />

        {/* Gym Access Section */}
        <div className="gym-access">
          <div className="label">Gym Access</div>
          <div className="button-group">
            <div 
              onClick={() => handleGymAccessChange('Yes')} 
              className={`button ${gymAccess === 'Yes' ? 'active' : ''}`}
            >
              Yes
            </div>
            <div 
              onClick={() => handleGymAccessChange('No')} 
              className={`button ${gymAccess === 'No' ? 'active' : ''}`}
            >
              No
            </div>
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="get-started-button" onClick={handleGetStartedClick} disabled={loading}>
        {loading ? 'Submitting...' : 'Get Started'}
      </div>

      {/* Error Handling */}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
