import React from "react";

import Back from "../assets/svg/back.svg";
import Next from "../assets/svg/next.svg";

import "./NavigationButtons.css";

function NavigationButtons() {
  return (
    <div>
      <img className="back-button" src={Back} alt="back-button" />
      <img className="next-button" src={Next} alt="next-button" />
    </div>
  );
}

export default NavigationButtons;
