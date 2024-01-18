import { Outlet } from "react-router-dom";

import "../App.css";

import NavbarMobile from "../components/NavbarMobile/NavbarMobile";

function Navigation() {
  return (
    <div className="App">
      <Outlet />
      <NavbarMobile />
    </div>
  );
}

export default Navigation;
