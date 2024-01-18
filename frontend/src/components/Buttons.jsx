import React, { useState } from "react";
import "./Buttons.css";

function Button({ type }) {
  const [choose, setChoose] = useState(false);
  return (
    <button
      className={`input ${choose ? "black" : ""}`}
      type="button"
      onClick={() => setChoose(!choose)}
    >
      {type}
    </button>
  );
}

export default Button;
