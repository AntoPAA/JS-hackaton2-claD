import React from "react";
import HeaderPage from "../components/HeaderPage";
import "../components/HeaderPage.css";
import CenterMode from "../components/CarrouselColor";

function HairColor() {
  return (
    <div>
      <HeaderPage page="01" totalPages="05" title="DEFINE YOUR HAIR COLOR" />
      <CenterMode />
    </div>
  );
}

export default HairColor;
