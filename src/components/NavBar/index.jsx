import React from "react";
import CartWidget from "../Cartwidget";
import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav_brand">
          <a className="" href="#">
            MyStyle
          </a>
        </div>
        <ul className="nav_list">
          <li>
            <a className="nav_link" href="#">
              Remeras
            </a>
          </li>
          <li>
            <a className="nav_link" href="#">
              Pantalones
            </a>
          </li>
          <li>
            <a className="nav_cart" href="#">
              <CartWidget />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
