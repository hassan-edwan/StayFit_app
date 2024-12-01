import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Screen2.css";

export default function Screen2() {
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
    navigate("/screen3");
  };

  return (
    <div className="container">
      <div className="title-section">
        <div className="header-title">Any health considerations?</div>
        <div className="header-text">
          Select any conditions you have to tailor <br />
          your exercises for your safety and <br />
          comfort.
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
                    <div className="checkmark">✔</div>
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
        <span className="button-text">
          {loading ? "Submitting..." : "Next"}
        </span>
      </button>
    </div>
  );
}