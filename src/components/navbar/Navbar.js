import React, { useState } from "react";
import "./navbar.css";

function Navbar(props) {

  const [term, setTerm] = useState('')

  const updateTermHandler = e => {
    const term = e.target.value.toLowerCase()
    setTerm(term)
    props.updateTermHandler(term)
  }

  const item = props.priceLook(props.items)

  return (
    <div className="navbar">
      <div className="navbar__inner">
        <a href='/' className='logo'>Food Shop</a>
        <p className="navbar__price">Jami narh: <b>{item}.000</b></p>
        <div className="navbar-right">
          <button onClick={props.cardToggle} className="navbar__btn">savat/mahsulot</button>
          <input onChange={updateTermHandler} value={term} className="navbar__search" type="text" placeholder="Taomni qidiring" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;