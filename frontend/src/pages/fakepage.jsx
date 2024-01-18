import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useProfileContext } from "../context/profileContext";

import Popup from "../components/Popup";
import "./market/Market.css";

function Fakepage() {
  const { profile, popupDisplayed, displayPopup } = useProfileContext();
  const [showPopup, setShowPopup] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!popupDisplayed && location.pathname === "/narket") {
      setShowPopup(true);
      displayPopup();
    }
  }, [location, popupDisplayed, displayPopup]);

  const closePopup = () => {
    setShowPopup(false);
    navigate("/market");
  };

  const showPopupAgain = () => {
    setShowPopup(true);
  };

  return (
    <div className={`market-container ${showPopup ? "with-popup" : ""}`}>
      {showPopup && (
        <div className="popup-overlay">
          <Popup
            profile={profile}
            onClose={closePopup}
            onShow={showPopupAgain}
          />
        </div>
      )}
      {!showPopup && (
        <button
          type="button"
          onClick={showPopupAgain}
          className="show-popup-button"
        >
          Show Popup
        </button>
      )}
    </div>
  );
}

export default Fakepage;
