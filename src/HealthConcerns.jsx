import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Styles.css";

export default function HealthConcerns() {
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Health conditions list
  const conditions = [
    "Arthritis",
    "Heart Condition",
    "High Blood Pressure",
    "Diabetes",
    "Back Pain or Spinal Issues",
    "Respiratory Issues",
    "Balance Problems",
    "Joint Replacement",
    "Osteoporosis",
    "Mobility",
  ];

  // Toggle condition selection
  const handleConditionToggle = (condition) => {
    setSelectedConditions((prevState) =>
      prevState.includes(condition)
        ? prevState.filter((item) => item !== condition)
        : [...prevState, condition]
    );
  };

  // Handle Next button click
  const handleNextClick = async () => {
    setLoading(true);

    if (selectedConditions.length === 0) {
      alert("Please select at least one health condition.");
      setLoading(false);
      return;
    }

    // Prepare the updated schema with the selected conditions
    const updatedSchema = {
      // Assuming you're combining the schema with the selected conditions
      ...JSON.parse(localStorage.getItem("userSchema") || "{}"), // If you want to persist user schema
      healthConditions: selectedConditions, // Add selected conditions to the schema
    };

    try {
      // Optional: Save the updated schema to localStorage for persistence across pages
      localStorage.setItem("userSchema", JSON.stringify(updatedSchema));

      // You can also make an API call here to send the updated schema
      // Example (if you have an API endpoint):
      // await axios.post('https://your-api-endpoint.com/update-schema', updatedSchema);

      // Log the updated schema (for debugging)
      console.log("Updated schema:", updatedSchema);

      // Navigate to the next page
      navigate("/BuildRoutine");
    } catch (err) {
      console.error("Error submitting data:", err);
      alert("Failed to submit data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="title-section">
        <div className="header-title">Any health considerations?</div>
        <div className="header-text">
          Select any conditions you have to tailor your exercises for your safety and comfort.
        </div>

        <div className="conditions">
          {conditions.map((condition, index) => (
            <div key={index} className="condition-item">
              <div
                className={`checkbox-wrapper ${
                  selectedConditions.includes(condition) ? "checkbox-wrapper--selected" : ""
                }`}
                onClick={() => handleConditionToggle(condition)}
              >
                <div
                  className={`checkbox ${
                    selectedConditions.includes(condition) ? "checkbox--selected" : ""
                  }`}
                >
                  {selectedConditions.includes(condition) && (
                    <FontAwesomeIcon icon={faCheck} className="checkmark" />
                  )}
                </div>
                <span className="text">{condition}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="button"
        onClick={handleNextClick}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Next"}
      </button>
    </div>
  );
}
