import React, { useState } from "react";
import "./Buttons.css";

function Button({ type, addCondition }) {
  const [choose, setChoose] = useState(false);
  const handleClick = () => {
    setChoose(!choose);
    addCondition(type);
  };

  return (
    <button
      className={`input ${choose ? "black" : ""}`}
      type="button"
      onClick={() => handleClick()}
    >
      {type}
    </button>
  );
}

export default Button;
