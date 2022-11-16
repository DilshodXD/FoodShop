import React, { useState } from "react";
import "./navbar.css";

function Navbar(props) {

  const [value, setValue] = useState("");
  const search = (e) => {
    setValue(e.target.value)
    props.onSubmit(value)
  }

  return (
    <div className="navbar">
      <div className="navbar__inner">
        <a href="#" className="logo">Food Shop</a>
        <div className="navbar-right">
          <button className="navbar__btn">Savat</button>
          <input onChange={search} value={value} className="navbar__search" type="text" placeholder="Taomni qidiring" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
