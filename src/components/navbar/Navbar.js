import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__inner">
        <a href="#" className="logo">Food Shop</a>
        <div className="navbar-right">
          <button className="navbar__btn">Savat</button>
          <input className="navbar__search" type="text" placeholder="Taomni qidiring"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;