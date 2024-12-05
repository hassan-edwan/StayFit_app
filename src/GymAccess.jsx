import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";

export default function App() {
  const [gymAccess, setGymAccess] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Load the saved data from localStorage on component mount
  useEffect(() => {
    const savedSchema = localStorage.getItem("userSchema");
    if (savedSchema) {
      const parsedSchema = JSON.parse(savedSchema);
      setName(parsedSchema.name || ""); // Directly access name from root of schema
      setGymAccess(parsedSchema.gym_access || ""); // Directly access gym_access from root of schema
    }
  }, []);

  // Handle gym access selection
  const handleGymAccessChange = (value) => {
    setGymAccess(value);
  };

  // Handle name input change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Handle form submission
  const handleGetStartedClick = async () => {
    setError("");

    if (!name || !gymAccess) {
      setError("Please provide your name and gym access status.");
      return;
    }

    setLoading(true);

    try {
      // Clone the schema and update it with the name and gym_access directly at the root level
      const updatedSchema = {
        name: name,  // Directly add name to the schema
        gym_access: gymAccess,  // Directly add gym_access to the schema
      };

      // Save the updated schema to localStorage for persistence
      localStorage.setItem("userSchema", JSON.stringify(updatedSchema));

      // Log or save the updated schema (You could also send this to a backend)
      console.log("Updated schema:", updatedSchema);

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
