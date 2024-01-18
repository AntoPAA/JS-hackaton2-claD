import React from "react";
import { Link } from "react-router-dom";

import LogoP2 from "../../assets/logo-white.svg";

import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-page">
      <img className="p-logo-white" src={LogoP2} alt="logoP" />
      <Link to="/login" className="welcome-text">
        <p className="welcome-text">Tap to continue</p>
      </Link>
    </div>
  );
}

export default Welcome;
