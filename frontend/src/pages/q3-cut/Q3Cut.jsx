import React from "react";
import NavigationButtons from "../../components/NavigationButtons";

import HeaderPage from "../../components/HeaderPage";

function Q3Cut() {
  return (
    <div>
      <HeaderPage page="03" totalPages="05" title="TELL YOUR IDEAL CUT" />
      <NavigationButtons back="/q2" next="/q4" />
    </div>
  );
}

export default Q3Cut;
