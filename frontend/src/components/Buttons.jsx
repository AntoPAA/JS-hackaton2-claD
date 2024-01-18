import React, { useState } from "react";
import "./Buttons.css";

function Button() {
  const [choose, setChoose] = useState(false);
  return (
    <button
      className={`input ${choose ? "black" : ""}`}
      type="button"
      onClick={() => setChoose(!choose)}
    >
      Click me{" "}
    </button>
  );
}

export default Button;
