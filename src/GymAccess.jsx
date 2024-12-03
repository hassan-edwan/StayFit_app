import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Styles.css";

export default function App() {
  const [gymAccess, setGymAccess] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleGymAccessChange = (value) => {
    setGymAccess(value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGetStartedClick = async () => {
    setError("");

    if (!name || !gymAccess) {
      setError("Please provide your name and gym access status.");
      return;
    }

    setLoading(true);

    // Prepare the data to send to the backend
    const payload = {
      users: name, // Match the column in your DynamoDB table
      gym_ccess: gymAccess, // Match the column in your DynamoDB table
    };

    try {
      // Replace this URL with your actual API Gateway endpoint
      await axios.post("https://abc123xyz.execute-api.us-east-1.amazonaws.com/dev/items", payload);
      
      // Navigate to the next page on success
      navigate("/HealthConcerns");
    } catch (err) {
      console.error("Error submitting data:", err);
      setError("Failed to submit data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="title-section">
        <div>
          <div className="header-title">
            Let's create the best experience for you
          </div>
          <div className="header-text">
            Let us know a bit more so we can help you
          </div>
        </div>
      </div>

      {/* Form Inputs */}
      <div className="section">
        <div htmlFor="nameInput" className="label"> What should we call you?</div>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="First & Last Name"
          className="input-field"
        />
        {error && <div className="error-message">{error}</div>}
        <div className="label">Gym Access</div>
        <div className="yes-no-container">
          <button
            onClick={() => handleGymAccessChange("Yes")}
            className={`yes-no-btn ${gymAccess === "Yes" ? "active" : ""}`}
          >
            Yes
          </button>
          <button
            onClick={() => handleGymAccessChange("No")}
            className={`yes-no-btn ${gymAccess === "No" ? "active" : ""}`}
          >
            No
          </button>
        </div>
      </div>

      {/* Get Started Button */}
      <button
        className="button"
        onClick={loading ? null : handleGetStartedClick}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Get Started"}
      </button>
    </div>
  );
}
