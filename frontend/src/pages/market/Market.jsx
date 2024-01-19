import React from "react";


import LogoB from "../../assets/logo.svg";

import HeaderPage from "../../components/HeaderPage";

import "./Market.css";
import MarketContainer from "../../components/MarketContainer";

function Market() {

   

  const profileBasedProducts = [
    {
      image: "https://antopaa.github.io/Publicimg/img/shamp1.png",
      name: "Shampoo 1",
    },
    {
      image: "https://antopaa.github.io/Publicimg/img/shamp2.png",
      name: "Shampoo 2",
    },
    {
      image: "https://antopaa.github.io/Publicimg/img/shamp3.png",
      name: "Conditioner 1",
    },
    {
      image: "https://antopaa.github.io/Publicimg/img/shamp4.png",
      name: "Conditioner 2",
    },
    {
      image: "https://antopaa.github.io/Publicimg/img/shamp5.png",
      name: "Hair mask 1",
    },
    {
      image: "https://antopaa.github.io/Publicimg/img/shamp6.png",
      name: "Hair mask 2",
    },
  ];

  const othersBasedProcucts = [
    {
      image: "https://antopaa.github.io/Publicimg/img/shamp7.png",
      name: "Shampoo 1",
    },
    {
      image: "https://antopaa.github.io/Publicimg/img/shamp8.png",
      name: "Conditioner 1",
    },
    {
      image: "https://antopaa.github.io/Publicimg/img/shamp1.png",
      name: "Hair mask 2",
    },
    {
      image: "https://antopaa.github.io/Publicimg/img/shamp2.png",
      name: "Shampoo 3",
    },
    {
      image: "https://antopaa.github.io/Publicimg/img/shamp3.png",
      name: "Shampoo 2",
    },
    {
      image: "https://antopaa.github.io/Publicimg/img/shamp4.png",
      name: "Conditioner 2",
    },
  ];

  return (
    <div className="market-page">
       <img src={LogoB} className="logo-top-black" alt="logo-black" />
      <div className="promo">5€ offered from 25€ of purchase</div>
      <HeaderPage title="Based on your results" />
      <MarketContainer products={profileBasedProducts} />
      <HeaderPage title="Based on users favorites" lineHidden />
      <MarketContainer products={othersBasedProcucts} />

    </div>
  );
}

export default Market;
