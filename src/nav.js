import React from "react";
import logo from './images/logo-white-smll.png'
export default function Nav() {
    console.log(logo)
  return (
    <nav>
      <ul>
        <li>
          <a href="#aboutUs">About Us</a>
        </li>
        <li>
          <a href="#ourTeam">Our Team</a>
        </li>
        <li>
          <a href="#priceList">Price List</a>
        </li>
      </ul>
      <img src={logo}></img>

    </nav>
  );
}
