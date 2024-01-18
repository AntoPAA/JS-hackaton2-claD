import React from "react";
import NavigationButtons from "../../components/NavigationButtons";

import HeaderPage from "../../components/HeaderPage";

function Q4Conditions() {
  return (
    <div>
      <HeaderPage page="04" totalPages="05" title="TELL YOUR HAIR CONDITIONS" />
      <NavigationButtons back="/q3" next="/q5" />
    </div>
  );
}

export default Q4Conditions;
