import React from "react";
export default function Nav() {
  return (
    <nav>
      <div id="navMenu">
        <input type="checkbox" id="menuControl"></input>
        <label for="menuControl">
          <span className="material-symbols-outlined">menu</span>
        </label>
        <ul>
          <li className="navLink">
            <a href="#aboutUs">About Us</a>
          </li>
          <li className="navLink">
            <a href="#ourTeam">Our Team</a>
          </li>
          <li className="navLink">
            <a href="#priceList">Price List</a>
          </li>
          <li className="navLink">
            <a href="#priceList">Contact</a>
          </li>
        </ul>
      </div>
      <a className="phone" href="tel:555-555-5555">
        +7 914 412-41-94
      </a>
    </nav>
  );
}
