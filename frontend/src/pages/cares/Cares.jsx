import React from "react";
import NavigationButtons from "../../components/NavigationButtons";

import "./Cares.css";

function Cares() {
  return (
    <div>
      Cares
      <NavigationButtons back="/disclaimer" next="/q1" />
    </div>
  );
}

export default Cares;
