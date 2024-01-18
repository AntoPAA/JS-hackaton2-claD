import React from "react";
import { useNavigate } from "react-router-dom";
import { useProfileContext } from "../../context/profileContext";

import HeaderPage from "../../components/HeaderPage";
import SliderVertical from "../../components/SliderVertical";
import NavigationButtons from "../../components/NavigationButtons";

function Q5Wash() {
  const { updateWashingFrequency } = useProfileContext();
  const navigate = useNavigate();

  const handleFinish = () => {
    updateWashingFrequency("Once a week");

    navigate("/narket");
  };

  return (
    <div>
      <HeaderPage page="05" totalPages="05" title="WASHING FREQUENCY" />
      <SliderVertical />
      <NavigationButtons
        back="/q4"
        finish="/narket"
        onClickFinish={handleFinish}
      />
    </div>
  );
}

export default Q5Wash;
