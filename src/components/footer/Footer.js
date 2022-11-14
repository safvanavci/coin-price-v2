import React from "react";
import Theme from "../header/Theme";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">

      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>

      <Social />

      <button className="btn btn-ghost btn-circle">
        <Theme />
      </button>

      <div>
        <p>Copyright © 2022 </p>
      </div>
      
    </footer>
  );
}
