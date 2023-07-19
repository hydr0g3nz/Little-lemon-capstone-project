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
      <li data-testid="Nav-Home"><Link to="/">Home</Link></li>
      <li data-testid="Nav-About"><Link to="/about">About</Link></li>
      <li data-testid="Nav-Menu"><Link to="/menu">Menu</Link></li>
      <li data-testid="Nav-ReserveTable"><Link to="/reserve-table">Reservations</Link></li>
      <li data-testid="Nav-OrderOnline"><Link to="/order-online">OrderOnline</Link></li>
      <li data-testid="Nav-Login"><Link to="/login">Login</Link></li>

    
    </ul>
    </div>
    </nav>
  );
}

export default Nav;
