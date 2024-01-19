import React from "react";
import NavigationButtons from "../../components/NavigationButtons";
import CenterMode from "../../components/CarrouselColor";
import HeaderPage from "../../components/HeaderPage";

import LogoB from "../../assets/logo.svg";

function Q1Color() {
  return (
    <div>
      <img src={LogoB} className="logo-top-black" alt="logo-black" />
      <HeaderPage page="01" totalPages="05" title="DEFINE YOUR HAIR COLOR" />
      <CenterMode />
      <NavigationButtons back="/cares" next="/q2" />
    </div>
  );
}

export default Q1Color;
