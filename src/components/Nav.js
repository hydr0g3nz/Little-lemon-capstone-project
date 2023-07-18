import React from "react";
import Logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
function Nav({className}) {
  return (
    <nav className={className} >
    <div >
    <img src={Logo} alt="Logo"></img>
    </div>
    <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/reserve-table">Reservations</Link></li>
      <li><Link to="/order-online">OrderOnline</Link></li>
      <li><Link to="/login">Login</Link></li>

    
    </ul>
    </div>
    </nav>
  );
}

export default Nav;
