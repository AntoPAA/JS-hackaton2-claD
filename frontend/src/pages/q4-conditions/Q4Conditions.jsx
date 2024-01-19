import React, { useState } from "react";
import NavigationButtons from "../../components/NavigationButtons";
import Buttons from "../../components/Buttons";
import HeaderPage from "../../components/HeaderPage";
import { useProfileContext } from "../../context/profileContext";

import LogoB from "../../assets/logo.svg";
import "./Q4Conditions.css";
import "../../components/Buttons.css";

function Q4Conditions() {
  const { profile, updateCondition } = useProfileContext();
  const [conditions, setConditions] = useState(profile.hairCondition);

  const addCondition = (condition) => {
    let newConditions = conditions;
    if (newConditions.includes(condition)) {
      newConditions = newConditions.filter((cond) => cond !== condition);
    } else {
      newConditions.push(condition);
    }
    setConditions(newConditions);
    updateCondition(newConditions);
  };

  return (
    <div>
      <img src={LogoB} className="logo-top-black" alt="logo-black" />
      <HeaderPage page="04" totalPages="05" title="YOUR HAIR CONDITIONS" />
      <div className="allButtons">
        <Buttons type="Normal" addCondition={(value) => addCondition(value)} />
        <Buttons
          type="Greasy Hair"
          addCondition={(value) => addCondition(value)}
        />
        <Buttons
          type="Curly Hair"
          addCondition={(value) => addCondition(value)}
        />
        <Buttons
          type="Damaged Hair"
          addCondition={(value) => addCondition(value)}
        />
        <Buttons
          type="Colored Hair"
          addCondition={(value) => addCondition(value)}
        />
        <Buttons
          type="Thin Hair"
          addCondition={(value) => addCondition(value)}
        />
        <Buttons
          type="Long Hair"
          addCondition={(value) => addCondition(value)}
        />
        <Buttons
          type="Short Hair"
          addCondition={(value) => addCondition(value)}
        />
        <Buttons
          type="Senstive Hair"
          addCondition={(value) => addCondition(value)}
        />
      </div>
      <NavigationButtons back="/q3" next="/q5" />
    </div>
  );
}

export default Q4Conditions;
