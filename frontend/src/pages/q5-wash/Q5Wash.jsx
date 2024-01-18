import React from "react";
import NavigationButtons from "../../components/NavigationButtons";

import HeaderPage from "../../components/HeaderPage";
import SliderVertical from "../../components/SliderVertical";

function Q5Wash() {
  return (
    <div>
      <HeaderPage page="05" totalPages="05" title="WASHING FREQUENCY" />
      <SliderVertical />
      <NavigationButtons back="/q4" />
    </div>
  );
}

export default Q5Wash;
