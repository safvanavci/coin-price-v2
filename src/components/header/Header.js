import React from "react";
import { NavLink } from "react-router-dom";
import ListMenu from "./ListMenu";
import Menu from "./Menu";
import Theme from "./Theme";

export default function Header() {

  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <Menu />
          <ListMenu />
        </div>
      </div>

      <div className="navbar-center">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          CoinPrice
        </NavLink>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <Theme />
        </button>
      </div>
    </div>
  );
}
