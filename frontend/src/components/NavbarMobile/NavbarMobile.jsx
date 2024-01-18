import React from "react";

import { NavLink } from "react-router-dom";

import Search from "../../assets/svg/search.svg";
import Barcode from "../../assets/svg/barcode.svg";
import Cart from "../../assets/svg/cart.svg";

import "./NavbarMobile.css";

function NavbarMobile() {
  return (
    <div>
      <nav className="nav-menu-mobile">
        <NavLink to="/market">
          <img className="icon-search" src={Search} alt="icon-search" />
        </NavLink>
        <NavLink to="/camera">
          <img className="icon-barcode" src={Barcode} alt="icon-barcode" />
        </NavLink>
        <NavLink to="/cart">
          <img className="icon-cart" src={Cart} alt="icon-cart" />
        </NavLink>
      </nav>
    </div>
  );
}

export default NavbarMobile;
