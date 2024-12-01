import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./App.css";

export default function App() {
  const [gymAccess, setGymAccess] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Create navigate function

  // Handle changes to the Gym Access state (Yes or No)
  const handleGymAccessChange = (value) => {
    setGymAccess(value); // Set the gymAccess state to either "Yes" or "No"
  };

  const handleNameChange = (e) => {
    setName(e.target.value); // Handle name input
  };

  // Handle form submission and data saving
  const handleGetStartedClick = async () => {
    if (!name || !gymAccess) {
      alert("Please provide your name and gym access status.");
      return;
    }
  
    setLoading(true); // Show loading indicator while submitting data
    navigate("/screen2");
    // try {
    //   console.log("Sending data:", { name, gymAccess }); // Debug data being sent
  
    //   const response = await fetch("http://localhost:3000/api/save", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ name, gymAccess }),
    //   });
  
    //   const data = await response.json();
    //   console.log("Response data:", data); // Debug server response
  
    //   if (response.ok) {
    //     alert(data.message); // Show success message
    //     navigate("/screen2"); // Navigate to the next screen
    //   } else {
    //     alert(`Error: ${data.message}`); // Show error message from the server
    //   }
    // } catch (error) {
    //   console.error("Error saving data:", error);
    //   alert("An error occurred. Please try again."); // Handle network errors
    // } finally {
    //   setLoading(false); // Reset loading state
    // }
  };
  

  return (
    <div className="container">
      <div className="title-section">
        <div className="header-title">
          Let's create the best experience for you
        </div>
        <div className="header-text">
          Let us know a bit more so we can help <br />
          you
        </div>

        <label htmlFor="nameInput" className="label">
          What should we call you?
        </label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="First & Last Name"
          className="input-field"
        />

        <div className="gym-access">
          <div className="label">Gym Access</div>
          <div className="button-group">
            <div
              onClick={() => handleGymAccessChange("Yes")}
              className={`button ${gymAccess === "Yes" ? "active" : ""}`}
            >
              Yes
            </div>
            <div
              onClick={() => handleGymAccessChange("No")}
              className={`button ${gymAccess === "No" ? "active" : ""}`}
            >
              No
            </div>
          </div>
        </div>
      </div>

      <div
        className={`get-started-button ${loading ? "disabled" : ""}`}
        onClick={loading ? null : handleGetStartedClick} // Disable button while loading
      >
        {loading ? "Submitting..." : "Get Started"}
      </div>
    </div>
  );
}
