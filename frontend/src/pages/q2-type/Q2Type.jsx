import React from "react";
import NavigationButtons from "../../components/NavigationButtons";

import HeaderPage from "../../components/HeaderPage";

function Q2Type() {
  return (
    <div>
      <HeaderPage page="02" totalPages="05" title="DEFINE YOUR HAIR TYPE" />
      <NavigationButtons back="/q1" next="/q3" />
    </div>
  );
}

export default Q2Type;
