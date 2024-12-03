import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons'; 
import "./Styles.css";

export default function HealthConcerns() {
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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

  const handleConditionToggle = (condition) => {
    setSelectedConditions((prevState) =>
      prevState.includes(condition)
        ? prevState.filter((item) => item !== condition)
        : [...prevState, condition]
    );
  };

  const handleNextClick = () => {
    setLoading(true);
    if (selectedConditions.length === 0) {
      alert("Please select at least one health condition.");
      setLoading(false);
      return;
    }
    navigate("/BuildRoutine");
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
                  selectedConditions.includes(condition)
                    ? "checkbox-wrapper--selected"
                    : ""
                }`}
                onClick={() => handleConditionToggle(condition)}
              >
                <div
                  className={`checkbox ${
                    selectedConditions.includes(condition)
                      ? "checkbox--selected"
                      : ""
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