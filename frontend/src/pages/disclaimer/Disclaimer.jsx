import React from "react";

import LogoP from "../../assets/logo.svg";

import "./Disclaimer.css";

function Disclaimer() {
  return (
    <div className="login-page">
      <img className="p-logo" src={LogoP} alt="logoP" />
      <h1 className="login-title">
        Before meeting <br /> your beauty counsellor
      </h1>

      <div className="dis-line" />
      <p className="login-text">
        Embark on a personalized beauty journey by sharing insights about your
        hair type, skin concerns, and makeup preferences. <br />
        Because you're worth it!
        <br />
      </p>
    </div>
  );
}

export default Disclaimer;
