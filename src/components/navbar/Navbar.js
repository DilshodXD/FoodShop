import React, { useState } from "react";
import "./navbar.css";

function Navbar(props) {

  const [term, setTerm] = useState('')

  const updateTermHandler = e => {
    const term = e.target.value.toLowerCase()
    setTerm(term)
    props.updateTermHandler(term)
  }



  return (
    <div className="navbar">
      <div className="navbar__inner">
        <p className='logo'>Food Shop</p>
        <div className="navbar-right">
          <button className="navbar__btn">Savat</button>
          <input onChange={updateTermHandler} value={term} className="navbar__search" type="text" placeholder="Taomni qidiring" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
