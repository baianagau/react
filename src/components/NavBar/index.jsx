import React from "react";
import CartWidget from "../Cartwidget";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav_brand">
          <NavLink className="nav_link" to="/">
            MyStyle
          </NavLink>
        </div>
        <ul className="nav_list">
          <li>
            <NavLink className="nav_link" to="/categoria/remeras">
              Remeras
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/categoria/pantalones">
              Pantalones
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_cart" to="/cart">
              <CartWidget />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
