/* eslint-disable */
import React, { useState } from "react";
import NavigationButtons from "../../components/NavigationButtons";
import LogoP from "../../assets/logo.svg";

import "./Cares.css";
import "../disclaimer/Disclaimer.css";

function Cares() {
  const [selectedCare, setSelectedCare] = useState(null);

  const handleCareClick = (care, alt) => {
    setSelectedCare((prevCare) => (prevCare === care ? null : care));
    console.log("Selected Care Alt:", alt);
  };

  const cares = [
    {
      src: "https://antopaa.github.io/Publicimg/img/skin.png",
      alt: "Skin Care",
    },
    {
      src: "https://antopaa.github.io/Publicimg/img/make.png",
      alt: "Makeup",
    },
    {
      src: "https://antopaa.github.io/Publicimg/img/hair.png",
      alt: "Hair Care",
    },
  ];

  return (
    <div className="login-page">
      <img className="p-logo" src={LogoP} alt="logoP" />
      <h1 className="login-title">
        <br />
        which care do you need ?
      </h1>
      <div className="dis-line" />
      <div className="all-skiin">
        {cares.map((care, index) => (
          <img
            key={index}
            src={care.src}
            alt={care.alt}
            className={`all-skin ${selectedCare === index ? "selected" : ""}`}
            onClick={() => handleCareClick(index)}
          />
        ))}
      </div>
      <NavigationButtons back="/disclaimer" next="/q1" />
    </div>
  );
}

export default Cares;
/* eslint-enable */
