import React, { useState } from "react";
import "./Q4Conditions.css";
import "../../components/Buttons.css";
import Buttons from "../../components/Buttons";
import HeaderPage from "../../components/HeaderPage";

function Q4Conditions() {
  const [conditions, setConditions] = useState([]);
  const addCondition = (condition) => {
    let newConditions = conditions;
    if (newConditions.includes(condition)) {
      newConditions = newConditions.filter((cond) => cond !== condition);
    } else {
      newConditions.push(condition);
    }
    setConditions(newConditions);
  };

  return (
    <div>
      <HeaderPage
        page="04"
        totalPages="05"
        title="DEFINE YOUR HAIR CONDITIONS"
      />
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
    </div>
  );
}

export default Q4Conditions;
