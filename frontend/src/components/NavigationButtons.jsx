import React from "react";
import { Link } from "react-router-dom";

import Back from "../assets/svg/back.svg";
import Next from "../assets/svg/next.svg";

import "./NavigationButtons.css";

function NavigationButtons({ back = "0", next = "0", finish = "0" }) {
  return (
    <div>
      <Link
        to={back}
        className={back === "0" ? "back-button-hidden" : "back-button"}
      >
        <img src={Back} alt="back-button" />
      </Link>
      <Link
        to={next}
        className={next === "0" ? "next-button-hidden" : "next-button"}
      >
        <img src={Next} alt="next-button" />
      </Link>
      <Link
        to={finish}
        className={finish === "0" ? "next-button-hidden" : "next-button"}
      >
        <h2 className="finish-button"> FINISH</h2>
      </Link>
    </div>
  );
}

export default NavigationButtons;
