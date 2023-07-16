import React from "react";
import Logo from "../assets/Logo.svg"
function Nav() {
  return (
    <>
    <img src={Logo} alt="Logo"></img>
    <ul>
      <li><a href="#a">a</a></li>
      <li><a href="#b">b</a></li>
      <li><a href="#c">c</a></li>
      <li><a href="#d">d</a></li>
    </ul>
    </>
  );
}

export default Nav;
