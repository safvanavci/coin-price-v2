import React from "react";
import { NavLink } from "react-router-dom";

export default function ListMenu() {
  return (
    <ul
      tabIndex={0}
      className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <NavLink to="/">Homepage</NavLink>
      </li>
      <li>
        <NavLink to="coins">Coins</NavLink>
      </li>
    </ul>
  );
}
