import React from "react";
import "./Popup.css";
import { useNavigate } from "react-router-dom";

function Popup({ profile, onClose }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/q5");
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <img
          src="https://antopaa.github.io/Publicimg/img/Vector.png"
          alt=""
          className="check"
        />
        <h2>Your Profile is complete</h2>
        <p>Hair Color: {profile.hairColor}</p>
        <p>Hair Type: {profile.hairType}</p>
        <p>Hair Cut: {profile.hairCut}</p>
        <p>Hair Condition: {profile.hairCondition.join(", ")}</p>
        <p>Washing Frequency: {profile.washingFrequency}</p>
        <button type="button" onClick={onClose} className="button-popup">
          Start my beauty journey
        </button>
        <button type="button" onClick={handleBack} className="button-popup">
          Back
        </button>
      </div>
    </div>
  );
}

export default Popup;
