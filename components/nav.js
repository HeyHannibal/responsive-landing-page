import React from "react";
export default function Nav() {
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
        <li>
          <a href="#priceList">Contact</a>
        </li>
      </ul>
      <a className="phone" href="tel:555-555-5555">
        +7 914 412-41-94
      </a>
    </nav>
  );
}
