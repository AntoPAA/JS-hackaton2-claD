import React from "react";
import { Link } from "react-router-dom";

import LogoP from "../../assets/logo.svg";
import LoginLogos from "../../assets/svg/login-logos.svg";

import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <img className="p-logo" src={LogoP} alt="logoP" />
      <h1 className="login-title">
        Before meeting <br /> your beauty counsellor
      </h1>
      <p className="login-text">
        Lorem ipsum dolor sit amet consectetur. Tortor auctor tellus placerat
        accumsan egestas auctor.
      </p>
      <input
        className="login-input"
        type="text"
        placeholder="Mail"
        name="mail"
      />
      <input
        className="login-input"
        type="password"
        placeholder="Password"
        name="password"
      />
      <input
        className="login-input"
        type="password"
        placeholder="Confirm your password"
        name="password"
      />
      <Link to="/disclaimer">
        <button className="login-submit" type="button">
          Sign Up
        </button>
      </Link>
      <div className="login-line" />
      <img className="login-logos" src={LoginLogos} alt="loginLogos" />
    </div>
  );
}

export default Login;
